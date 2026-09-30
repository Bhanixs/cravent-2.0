import { useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { Btn, Reveal, Section, SectionHeading } from "@/components/site/kit";
import { services, servicesHeading, servicesPositioningStatement } from "@/content/cravent";
import { cn } from "@/lib/utils";
import imgBranding from "@/assets/showcase/service-branding.jpg";
import imgMarketing from "@/assets/showcase/service-marketing.jpg";
import imgStrategy from "@/assets/showcase/service-strategy.jpg";
import imgTech from "@/assets/showcase/service-technology.jpg";

const serviceImages = [imgBranding, imgMarketing, imgStrategy, imgTech];

export function Services({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!compact) return;
    const raw = Math.floor(latest * services.length);
    const idx = Math.min(services.length - 1, Math.max(0, raw));
    setActive(idx);
  });

  const scrollToCard = (idx: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const containerTop = window.scrollY + rect.top;
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
    const targetProgress = (idx + 0.5) / services.length;
    const targetY = containerTop + targetProgress * totalScrollable;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  const current = services[active] || services[0];
  const currentImg = serviceImages[active] || serviceImages[0];

  if (compact) {
    // Outer scroll-container: reserves cardCount×100svh of document-flow space.
    // Inner sticky-viewport: pins at top:0, fills one viewport, slides away naturally at the end.
    const cardCount = services.length;

    return (
      <section
        ref={containerRef}
        id="services"
        className="relative w-full border-b border-border"
        style={{ height: `${cardCount * 100}vh` }}
      >
        <div className="sticky top-0 z-10 flex h-screen w-full flex-col justify-center overflow-hidden bg-background px-4 pt-20 pb-6 sm:px-6 sm:pt-20 sm:pb-8 md:px-10">
          <div className="mx-auto w-full max-w-[1400px]">
            {/* Header row */}
            <div className="flex flex-wrap items-end justify-between gap-4 pb-3 sm:pb-4">
              <SectionHeading
                eyebrow={servicesHeading.eyebrow}
                index={`[ 0${active + 1} / 04 ]`}
                title={<>{servicesHeading.title}</>}
                lead="Four connected capabilities, orchestrated as a single growth engine."
              />
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-950/40 px-3 py-1 font-mono text-[10px] text-blue-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-bright animate-pulse" />
                  <span>Scroll to cycle cards</span>
                </div>
                <Btn to="/services" variant="outline" size="md">
                  Full Scope
                </Btn>
              </div>
            </div>

            {/* Step Indicators / Clickable Pills */}
            <div className="mt-2 flex flex-wrap items-center gap-1.5 sm:gap-2">
              {services.map((s, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={s.num}
                    onClick={() => scrollToCard(i)}
                    className={cn(
                      "group relative flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider transition-all duration-300",
                      isActive
                        ? "border-primary bg-primary text-primary-foreground shadow-[0_0_20px_var(--primary)] font-bold"
                        : "border-border/80 bg-surface/40 text-muted-foreground hover:border-border hover:text-foreground",
                    )}
                  >
                    <span>{s.num}</span>
                    <span>{s.title.split("&")[0].trim()}</span>
                  </button>
                );
              })}
            </div>

            {/* Pinned Card: Exact styling and animations preserved */}
            <div className="mt-3 sm:mt-4 mx-auto w-full max-w-4xl lg:max-w-5xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.num}
                  initial={{ opacity: 0, y: 16, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -16, scale: 0.98 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden rounded-2xl sm:rounded-3xl border border-blue-500/35 shadow-[0_25px_60px_-15px_rgba(29,78,216,0.38)]"
                >
                  {/* Top: Image with bottom gradient blend */}
                  <div className="relative aspect-[16/7] sm:aspect-[16/6] md:aspect-[16/5.5] w-full overflow-hidden bg-black">
                    <img
                      src={currentImg}
                      alt={current.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                      loading="eager"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a1e4a] via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-2 rounded-full border border-blue-400/40 bg-black/75 px-3 py-1 backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-bright animate-pulse" />
                      <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-blue-200">
                        {current.num} · Discipline
                      </span>
                    </div>
                  </div>

                  {/* Bottom: Text container with rich Blue + Black gradient background and white text */}
                  <div className="border-t border-blue-500/30 bg-gradient-to-b from-[#0a1e4a] via-[#050f26] to-[#02050f] p-5 sm:p-6 md:p-7 text-white flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
                        {current.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm md:text-base leading-relaxed text-slate-200 line-clamp-2 sm:line-clamp-3">
                        {current.body}
                      </p>

                      <div className="mt-3.5 sm:mt-4 flex flex-wrap gap-2">
                        {current.points.slice(0, 5).map((pt) => (
                          <span
                            key={pt}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-blue-400/30 bg-blue-900/35 px-2.5 py-1 font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-blue-100 backdrop-blur-sm"
                          >
                            <span className="h-1 w-1 rounded-full bg-blue-400" />
                            {pt}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 sm:mt-5 flex items-center justify-between border-t border-blue-500/25 pt-3 sm:pt-4">
                      <div className="flex items-center gap-2 font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-blue-300/80">
                        <span>Card 0{active + 1} of 0{services.length}</span>
                        <span>•</span>
                        <span>{active === services.length - 1 ? "Scroll down to continue to Sectors ↓" : "Scroll down for next card ↓"}</span>
                      </div>
                      <Link
                        to="/services"
                        className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/50 bg-blue-600 px-4 py-1.5 font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
                      >
                        <span>Explore Scope</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Non-compact fallback (if used outside /services)
  return (
    <Section id="services" className="border-t border-border" fullScreen>
      <div className="flex flex-wrap items-end justify-between gap-4 pb-4 md:pb-5">
        <SectionHeading
          eyebrow={servicesHeading.eyebrow}
          index="[ 04 disciplines ]"
          title={<>{servicesHeading.title}</>}
          lead="Four connected capabilities, orchestrated as a single growth engine."
        />
        <Reveal>
          <Btn to="/services" variant="outline" size="md">
            Full Services & Scope
          </Btn>
        </Reveal>
      </div>

      <div className="mt-4 grid items-stretch gap-4 md:mt-6 md:gap-6 lg:grid-cols-[1.1fr_1.4fr]">
        <div className="flex flex-col justify-between gap-2">
          {services.map((s, i) => {
            const isActive = active === i;
            return (
              <button
                key={s.num}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={cn(
                  "group relative flex w-full items-center justify-between rounded-xl border p-3.5 text-left transition-all duration-300 md:p-4",
                  isActive
                    ? "border-primary bg-primary/10 shadow-[0_0_24px_-6px_var(--primary)] text-foreground"
                    : "border-border bg-surface/30 text-muted-foreground hover:border-border-strong hover:bg-surface/70 hover:text-foreground",
                )}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "font-mono text-xs font-bold tracking-widest transition-colors",
                      isActive ? "text-primary-bright" : "text-muted-foreground",
                    )}
                  >
                    {s.num}
                  </span>
                  <span className="font-display text-sm font-bold uppercase tracking-tight sm:text-base md:text-lg">
                    {s.title}
                  </span>
                </div>
                <span
                  className={cn(
                    "font-mono text-sm transition-all duration-300",
                    isActive ? "translate-x-0 text-primary-bright opacity-100" : "-translate-x-2 text-muted-foreground opacity-40 group-hover:translate-x-0 group-hover:opacity-100",
                  )}
                >
                  →
                </span>
                {isActive && (
                  <motion.span
                    layoutId="active-service-glow"
                    className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-primary"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="relative flex flex-col justify-between rounded-2xl border border-border bg-surface/50 p-4 backdrop-blur-md sm:p-5 md:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.num}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex h-full flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-border/80 pb-2.5">
                  <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-primary-bright sm:text-[10px]">
                    [ Active Discipline Focus ]
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px]">
                    0{active + 1} / 04
                  </span>
                </div>

                <h3 className="mt-3 font-display text-lg font-bold uppercase tracking-tight text-foreground sm:text-xl md:text-2xl">
                  {current.title}
                </h3>

                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {current.body}
                </p>

                <div className="mt-3.5">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px]">
                    Core Deliverables:
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5 sm:gap-2">
                    {current.points.slice(0, 5).map((pt) => (
                      <span
                        key={pt}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/80 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-foreground sm:text-[10px] transition-colors hover:border-primary hover:text-primary-bright"
                      >
                        <span className="h-1 w-1 rounded-full bg-primary" />
                        {pt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border/80 pt-3 md:mt-5 md:pt-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Cravent Growth Model
                </span>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-primary-foreground transition-all duration-300 hover:bg-primary-bright hover:shadow-[0_0_20px_var(--primary)]"
                >
                  <span>Explore Discipline</span>
                  <span>→</span>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}

