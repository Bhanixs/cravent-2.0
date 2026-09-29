import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { Btn, Reveal, Section, SectionHeading } from "@/components/site/kit";
import { services, servicesHeading, servicesPositioningStatement } from "@/content/cravent";
import { cn } from "@/lib/utils";

export function Services({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState<number>(0);
  const current = services[active] || services[0];

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

      {/* Divided Focus Interactive Studio */}
      <div className="mt-4 grid items-stretch gap-4 md:mt-6 md:gap-6 lg:grid-cols-[1.1fr_1.4fr]">
        {/* Left: Discipline Switcher */}
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

        {/* Right: Active Focus Spotlight Card */}
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
