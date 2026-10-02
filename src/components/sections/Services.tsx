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

export function Services({
  compact = false,
  isPage = false,
}: {
  compact?: boolean;
  isPage?: boolean;
}) {
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
    setActive(idx);
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const containerTop = window.scrollY + rect.top;
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
    const targetProgress = (idx + 0.5) / services.length;
    const targetY = containerTop + targetProgress * totalScrollable;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  const current = (services[active] ?? services[0])!;
  const currentImg = (serviceImages[active] ?? serviceImages[0])!;

  if (compact) {
    const cardCount = services.length;

    return (
      <>
        {/* Full-Page Intro Section */}
        <section
          id="services"
          className="relative min-h-[100svh] w-full border-b border-border flex flex-col justify-center px-4 py-20 sm:px-6 md:px-10 bg-background"
        >
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
          <div className="relative mx-auto w-full max-w-[1400px]">
            {/* Header row */}
            <div className="flex flex-wrap items-end justify-between gap-6 pb-6 border-b border-border/80">
              <div className="max-w-3xl">
                <Reveal>
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-primary" />
                    <span className="eyebrow">{servicesHeading.eyebrow}</span>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      [ 04 disciplines ]
                    </span>
                  </div>
                </Reveal>
                <Reveal delay={0.06}>
                  <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                    {servicesHeading.title}
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
                    Four connected capabilities, orchestrated as a single growth engine.
                  </p>
                </Reveal>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => scrollToCard(0)}
                  className="flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/40 px-4 py-2 font-mono text-[11px] text-blue-200 transition-colors hover:border-primary hover:bg-primary/10"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-bright animate-pulse" />
                  <span>Scroll to cycle cards ↓</span>
                </button>
                <Btn to={isPage ? "/contact" : "/services"} variant="primary" size="md">
                  {isPage ? "Book a Growth Audit →" : "Full Scope →"}
                </Btn>
              </div>
            </div>

            {/* Clickable Discipline Cards / Selector */}
            <Reveal delay={0.15}>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {services.map((s, i) => (
                  <button
                    key={s.num}
                    type="button"
                    onClick={() => scrollToCard(i)}
                    className="group relative flex flex-col justify-between rounded-2xl border border-border bg-surface/30 p-5 text-left transition-all duration-300 hover:border-primary hover:bg-surface/70 hover:shadow-[0_0_24px_-6px_var(--primary)]"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-primary-bright">
                          {s.num}
                        </span>
                        <span className="font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors">
                          ↓
                        </span>
                      </div>
                      <h3 className="mt-4 font-display text-base sm:text-lg font-bold uppercase tracking-tight text-foreground">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                        {s.body}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-primary-bright">
                      <span>Explore focus</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Full-Screen Scrollable Sticky Cards Showcase */}
        <section
          ref={containerRef}
          id="services-cards"
          className="relative w-full border-b border-border"
          style={{ height: `${cardCount * 100}vh` }}
        >
          <div className="sticky top-0 z-10 flex h-screen w-full flex-col justify-center overflow-hidden bg-background px-4 pt-16 pb-6 sm:px-6 lg:px-8 xl:px-12 sm:pt-16 sm:pb-8">
            <div className="mx-auto w-full max-w-[1800px]">
              {/* Header row inside sticky viewport */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 sm:pb-4 border-b border-border/70">
                <div className="flex items-center gap-3">
                  <span className="eyebrow text-xs">
                    [ 0{active + 1} / 0{services.length} ]
                  </span>
                  <span className="font-display text-base sm:text-lg font-bold uppercase tracking-tight text-foreground">
                    {current.title}
                  </span>
                </div>

                {/* Step Indicators / Clickable Pills */}
                <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5 max-w-full">
                  {services.map((s, i) => {
                    const isActive = active === i;
                    return (
                      <button
                        key={s.num}
                        type="button"
                        onClick={() => scrollToCard(i)}
                        className={cn(
                          "group relative flex items-center gap-1.5 sm:gap-2 rounded-full border px-3 sm:px-3.5 py-1.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider transition-all duration-300 shrink-0",
                          isActive
                            ? "border-primary bg-primary text-primary-foreground shadow-[0_0_20px_var(--primary)] font-bold"
                            : "border-border/80 bg-surface/40 text-muted-foreground hover:border-border hover:text-foreground",
                        )}
                      >
                        <span>{s.num}</span>
                        <span>{(s.title.split("&")[0] ?? s.title).trim()}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="hidden sm:flex items-center gap-2">
                  <Btn to={isPage ? "/contact" : "/services"} variant="outline" size="md">
                    {isPage ? "Growth Audit" : "Full Scope"}
                  </Btn>
                </div>
              </div>

              {/* Full-Width Pinned Card */}
              <div className="mt-3 sm:mt-5 w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.num}
                    initial={{ opacity: 0, y: 16, scale: 0.99 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -16, scale: 0.99 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden rounded-2xl sm:rounded-3xl border border-blue-500/35 shadow-[0_25px_60px_-15px_rgba(29,78,216,0.38)] grid lg:grid-cols-12 lg:h-[calc(100vh-170px)] max-h-[700px] w-full"
                  >
                    {/* Left/Top: Image with gradient blend */}
                    <div className="relative lg:col-span-7 h-48 sm:h-64 lg:h-full w-full overflow-hidden bg-black shrink-0">
                      <img
                        src={currentImg}
                        alt={current.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                        loading="eager"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0a1e4a]/90 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-2 rounded-full border border-blue-400/40 bg-black/75 px-3 py-1 backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary-bright animate-pulse" />
                        <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-blue-200">
                          {current.num} · Discipline
                        </span>
                      </div>
                    </div>

                    {/* Right/Bottom: Text container */}
                    <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-blue-500/30 bg-gradient-to-b from-[#0a1e4a] via-[#050f26] to-[#02050f] p-4 sm:p-6 lg:p-8 xl:p-10 text-white flex flex-col justify-between overflow-y-auto">
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-blue-300">
                          Discipline 0{active + 1}
                        </span>
                        <h3 className="mt-2 font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-white">
                          {current.title}
                        </h3>
                        <p className="mt-3 text-xs sm:text-sm md:text-base leading-relaxed text-slate-200">
                          {current.body}
                        </p>

                        <div className="mt-4 sm:mt-5 flex flex-wrap gap-2">
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

                      <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-blue-500/25 pt-4">
                        <div className="flex items-center gap-2 font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-blue-300/80">
                          <span>
                            Card 0{active + 1} of 0{services.length}
                          </span>
                          <span>•</span>
                          <span>
                            {active === services.length - 1
                              ? "Scroll down to continue to Sectors ↓"
                              : "Scroll down for next card ↓"}
                          </span>
                        </div>
                        <Link
                          to={isPage ? "/contact" : "/services"}
                          className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/50 bg-blue-600 px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
                        >
                          <span>{isPage ? "Start a Conversation" : "Explore Scope"}</span>
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
      </>
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
                    isActive
                      ? "translate-x-0 text-primary-bright opacity-100"
                      : "-translate-x-2 text-muted-foreground opacity-40 group-hover:translate-x-0 group-hover:opacity-100",
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
