import { useState, useCallback, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { motion, useInView } from "motion/react";
import { Maximize2, Minimize2, Download, FileText } from "lucide-react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PortfolioPdfViewerProps {
  pdfUrl: string;
  projectName: string;
}

export function PortfolioPdfViewer({ pdfUrl, projectName }: PortfolioPdfViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [loadError, setLoadError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Measure container width for responsive full-screen stretch
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateWidth = () => {
      if (containerRef.current) {
        const clientWidth = containerRef.current.clientWidth;
        if (clientWidth > 0) {
          setContainerWidth(clientWidth);
        }
      }
    };

    updateWidth();

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = Math.floor(entry.contentRect.width);
        if (width > 0) {
          setContainerWidth(width);
        }
      }
    });

    observer.observe(el);
    window.addEventListener("resize", updateWidth);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  // Listen for native fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;

    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.warn("Fullscreen request error:", err);
    }
  };

  const onDocumentLoadSuccess = useCallback(({ numPages: n }: { numPages: number }) => {
    setNumPages(n);
    setLoadError(false);
  }, []);

  const onDocumentLoadError = useCallback(() => {
    setLoadError(true);
  }, []);

  // Use full width of container (responsive on all screen sizes)
  const effectiveWidth = containerWidth > 0 ? containerWidth : 1200;

  if (loadError) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-surface/50 px-6 py-16 text-center w-full">
        <FileText className="h-10 w-10 text-muted-foreground/60 mb-3" />
        <p className="font-mono text-sm text-muted-foreground">
          Portfolio PDF could not be loaded in-browser.
        </p>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors hover:border-primary hover:text-primary-bright"
        >
          <Download className="h-3.5 w-3.5" />
          Download PDF Document
        </a>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${
        isFullscreen
          ? "bg-background text-foreground h-screen overflow-y-auto px-3 py-6 sm:px-8 md:px-12"
          : ""
      }`}
    >
      {/* Floating Control Toolbar */}
      <div className="sticky top-20 z-30 mb-8 sm:mb-12 flex items-center justify-between gap-3 rounded-full border border-border/80 bg-background/80 px-4 py-2.5 backdrop-blur-md shadow-lg transition-all">
        <div className="flex items-center gap-2 sm:gap-3">
          <FileText className="h-4 w-4 text-primary" />
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.16em] text-foreground font-medium">
            {projectName}
          </span>
          {numPages > 0 && (
            <span className="rounded-full bg-surface px-2.5 py-0.5 font-mono text-[10px] sm:text-[11px] text-muted-foreground">
              {numPages} {numPages === 1 ? "page" : "pages"}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleFullscreen}
            className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-surface/60 px-3 py-1.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary-bright cursor-pointer"
            title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          >
            {isFullscreen ? (
              <>
                <Minimize2 className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Exit Fullscreen</span>
              </>
            ) : (
              <>
                <Maximize2 className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Fullscreen</span>
              </>
            )}
          </button>

          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-surface/60 px-3 py-1.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary hover:text-primary-bright"
            title="Download PDF"
          >
            <Download className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Download</span>
          </a>
        </div>
      </div>

      {/* PDF Document Container */}
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        loading={
          <div className="flex flex-col items-center justify-center py-28 gap-4 w-full">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Loading portfolio pages...
            </p>
          </div>
        }
      >
        {/* Full-width Stacked PDF Pages */}
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-18 w-full">
          {Array.from({ length: numPages }, (_, i) => (
            <PdfPageCard
              key={`${projectName}-page-${i + 1}`}
              pageNumber={i + 1}
              totalPages={numPages}
              pageWidth={effectiveWidth}
              index={i}
            />
          ))}
        </div>
      </Document>

      {/* Page Count Footer */}
      {numPages > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-border bg-surface/40 px-5 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.24em] text-muted-foreground">
              End of Portfolio · {numPages} of {numPages} pages
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}

/* ---------- Individual full-width PDF page with scroll-reveal animation ---------- */

function PdfPageCard({
  pageNumber,
  totalPages,
  pageWidth,
  index,
}: {
  pageNumber: number;
  totalPages: number;
  pageWidth: number;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.98,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
            }
          : {}
      }
      transition={{
        duration: 0.7,
        delay: Math.min(index * 0.05, 0.3),
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group/page relative w-full"
    >
      {/* Subtle ambient lighting effect behind card */}
      <div className="absolute inset-0 translate-y-3 rounded-2xl sm:rounded-3xl bg-primary/5 blur-2xl transition-all duration-500 group-hover/page:translate-y-5 group-hover/page:blur-3xl group-hover/page:bg-primary/10 pointer-events-none" />

      {/* The full-width PDF page card */}
      <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl border border-border bg-white shadow-xl transition-all duration-500 hover:border-primary/40 hover:shadow-[0_24px_60px_-12px_rgba(37,99,235,0.18)]">
        {/* Floating page number badge */}
        <div className="absolute right-3 top-3 sm:right-6 sm:top-6 z-10 rounded-full bg-background/90 px-3 py-1 sm:px-4 sm:py-1.5 font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-foreground backdrop-blur-md shadow-md border border-border/60">
          {String(pageNumber).padStart(2, "0")}{" "}
          <span className="text-muted-foreground font-normal">/ {String(totalPages).padStart(2, "0")}</span>
        </div>

        {/* Responsive, crisp full-width PDF canvas */}
        <div className="w-full flex justify-center bg-white overflow-hidden">
          <Page
            pageNumber={pageNumber}
            width={pageWidth}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            className="w-full flex justify-center [&_.react-pdf__Page__canvas]:!w-full [&_.react-pdf__Page__canvas]:!h-auto [&_.react-pdf__Page__canvas]:block"
            loading={
              <div
                className="flex items-center justify-center bg-surface/20 w-full"
                style={{
                  height: `${Math.max(Math.round(pageWidth * 0.6), 280)}px`,
                }}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="h-7 w-7 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Page {pageNumber}
                  </span>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </motion.div>
  );
}
