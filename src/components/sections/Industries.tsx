import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Btn, Reveal, Section, SectionHeading } from "@/components/site/kit";
import { industries } from "@/content/cravent";
import { cn } from "@/lib/utils";
import tex1 from "@/assets/tex-1.jpg";
import tex2 from "@/assets/tex-2.jpg";

const sectorTags: Record<string, string[]> = {
  "Construction & Real Estate": ["Architectural Systems", "3D Visualization", "Investor Decks", "Sales Infrastructure"],
  "Fashion & Lifestyle": ["Distinctive Identity", "Digital Storefronts", "Influencer Media", "Campaign Production"],
  "Hospitality, Travel & Tourism": ["Destination Positioning", "Booking Systems", "Experience Content", "Guest Journey"],
  "Education": ["Stakeholder Clarity", "Admissions Marketing", "Digital Portals", "Institutional Trust"],
  "Sustainability & Wellness": ["Impact Transparency", "Clean Tech Storytelling", "Circular Brand Systems", "Responsible Marketing"],
};

export function Industries({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState(0);
  const current = industries[active] || industries[0];

  return (
    <Section
      id={compact ? "industries" : "sectors-navigator"}
      className="border-b border-border"
      fullScreen
    >
      <div className="flex flex-wrap items-end justify-between gap-4 pb-3 md:pb-4">
        <SectionHeading
          eyebrow={compact ? "Industries" : "Interactive Sector Studio"}
          index={compact ? "[ 05 sectors ]" : `[ 0${active + 1} / 05 ]`}
          title={compact ? <>Sectors we build in.</> : <>Market Specialization.</>}
          lead={
            compact
              ? "Deep market immersion across high-growth, capital-intensive, and purpose-driven industries."
              : "Select an industry to explore strategic challenges, tailored solutions, and sector playbooks."
          }
        />
        {compact ? (
          <Reveal>
            <Btn to="/industries" variant="outline" size="md">
              Explore All Sectors
            </Btn>
          </Reveal>
        ) : (
          <span className="font-mono text-[10px] uppercase tracking-widest text-primary-bright">
            Divided Focus View
          </span>
        )}
      </div>

      <div className="mt-4 grid items-stretch gap-4 md:mt-6 md:gap-6 lg:grid-cols-[1.1fr_1.4fr]">
        {/* Left: Sector Selector Tabs */}
        <div className="flex flex-col justify-between gap-2">
          {industries.map((ind, i) => {
            const isActive = active === i;
            return (
              <button
                key={ind.name}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={cn(
                  "group relative flex w-full items-center justify-between rounded-xl border p-3 text-left transition-all duration-300 md:p-3.5",
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
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-sm font-bold uppercase tracking-tight sm:text-base">
                    {ind.name}
                  </span>
                </div>
                <span
                  className={cn(
                    "font-mono text-xs transition-all duration-300",
                    isActive ? "translate-x-0 text-primary-bright opacity-100" : "-translate-x-2 text-muted-foreground opacity-40 group-hover:translate-x-0 group-hover:opacity-100",
                  )}
                >
                  →
                </span>
                {isActive && (
                  <motion.span
                    layoutId="active-industry-glow"
                    className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-primary"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Right: Immersive Divided Focus Card */}
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/50 p-4 backdrop-blur-md sm:p-5 md:p-6">
          <img
            src={active % 2 === 0 ? tex1 : tex2}
            alt=""
            loading="lazy"
            width={1200}
            height={900}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15"
            style={{ filter: "invert(1) hue-rotate(180deg)" }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

          <div className="relative flex h-full flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="flex h-full flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-border/80 pb-2.5">
                    <span className="eyebrow text-[9px] sm:text-[10px]">[ Sector Focus ]</span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px]">
                      0{active + 1} / 05
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-lg font-bold uppercase tracking-tight sm:text-xl md:text-2xl">
                    {current.name}
                  </h3>

                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {current.body}
                  </p>

                  <div className="mt-3">
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px]">
                      Sector Solutions:
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {(sectorTags[current.name] || []).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/85 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-foreground sm:text-[10px] transition-colors hover:border-primary hover:text-primary-bright"
                        >
                          <span className="h-1 w-1 rounded-full bg-primary" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border/80 pt-3 md:mt-5 md:pt-4">
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary-bright sm:text-[10px]">
                    Tailored Market Playbook
                  </span>
                  <Btn to="/contact" size="md">
                    Start a Conversation
                  </Btn>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Section>
  );
}
