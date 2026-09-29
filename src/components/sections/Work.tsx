import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal, Section, SectionHeading, XMark } from "@/components/site/kit";
import { work } from "@/content/cravent";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

const categories = ["All", "Technology", "Sustainability", "Branding", "Lifestyle"];

export function Work({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState("All");

  const filteredItems = work.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Technology") return p.industry.toLowerCase().includes("tech") || p.industry.toLowerCase().includes("fintech");
    if (filter === "Sustainability") return p.industry.toLowerCase().includes("sustain") || p.focus.toLowerCase().includes("sustain");
    if (filter === "Branding") return p.scope.toLowerCase().includes("brand") || p.focus.toLowerCase().includes("brand");
    if (filter === "Lifestyle") return p.industry.toLowerCase().includes("fashion") || p.industry.toLowerCase().includes("hospitality");
    return true;
  });

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <Section id="work-portfolio" className="border-b border-border bg-surface/20" fullScreen>
      <div className="flex flex-wrap items-end justify-between gap-4 pb-3 md:pb-4">
        <SectionHeading
          eyebrow="Selected Projects"
          index={`[ ${String(displayedItems.length).padStart(2, "0")} projects ]`}
          title={<>Curated Case Studies.</>}
          lead="Filter by discipline to examine identity systems, market launches, and digital platforms."
        />

        {/* Dynamic Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5 md:gap-2">
          {categories.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "rounded-full border px-3 py-1 font-mono text-[9px] uppercase tracking-[0.16em] transition-all duration-300 sm:px-3.5 sm:py-1.5 sm:text-[10px]",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-[0_0_16px_var(--primary)]"
                    : "border-border bg-background/80 text-muted-foreground hover:border-border-strong hover:text-foreground",
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Portfolio Grid with Luxury Hover-Dark Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 grid items-stretch gap-3 sm:grid-cols-2 sm:gap-4 md:mt-5 lg:grid-cols-3"
        >
          {displayedItems.map((p, i) => (
            <article
              key={p.name}
              className={cn(
                "group relative flex h-full flex-col justify-between rounded-xl border border-border bg-background p-4 sm:p-5 text-foreground transition-all duration-500",
                "hover:-translate-y-1 hover:border-primary hover:bg-[#090d16] hover:text-[#f8fafc] hover:shadow-[0_16px_40px_-16px_rgba(37,99,235,0.38)]",
              )}
            >
              <div>
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] font-semibold tracking-wider text-muted-foreground transition-colors duration-500 group-hover:text-primary-bright">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <XMark className="h-3.5 w-3.5 opacity-30 transition-all duration-500 group-hover:rotate-90 group-hover:text-primary group-hover:opacity-100" />
                </div>

                <h3 className="mt-3 font-display text-base font-bold uppercase tracking-tight transition-all duration-500 group-hover:translate-x-1 group-hover:text-white sm:text-lg md:text-xl">
                  {p.name}
                </h3>

                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-primary-bright sm:text-[10px]">
                  {p.industry}
                </p>

                <div className="mt-3 border-t border-border pt-2 transition-colors duration-500 group-hover:border-slate-800">
                  <p className="text-[11px] leading-relaxed text-muted-foreground line-clamp-2 transition-colors duration-500 group-hover:text-slate-300 sm:text-xs">
                    {p.focus}
                  </p>
                </div>
              </div>

              <div className="mt-3 flex items-end justify-between border-t border-border pt-2 transition-colors duration-500 group-hover:border-slate-800 sm:mt-4">
                <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground/70 transition-colors duration-500 group-hover:text-slate-400">
                  {p.scope}
                </span>
                <Link
                  to="/work/$slug"
                  params={{ slug: p.slug }}
                  className="inline-flex items-center gap-1 rounded-full border border-transparent px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary-bright group-hover:text-slate-300 group-hover:hover:text-primary-bright"
                >
                  <span>Explore</span>
                  <span>→</span>
                </Link>
              </div>

              <span className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-primary opacity-0 transition-all duration-500 group-hover:opacity-100" />
            </article>
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}

