import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal, Section, SectionHeading, XMark } from "@/components/site/kit";
import { work } from "@/content/cravent";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

const categories = ["Branding", "Marketing", "Business Development", "Technology"] as const;
type Category = (typeof categories)[number];

const categoryDescriptions: Record<Category, string> = {
  Branding: "Explore verified brand books, visual identities, and corporate design languages crafted for market distinction.",
  Marketing: "Explore performance acquisition systems, social momentum campaigns, and full-funnel growth engines.",
  "Business Development": "Explore institutional expansion roadmaps, investor pitch architectures, and commercial partnership strategies.",
  Technology: "Explore modern digital platforms, interactive web experiences, and scalable cloud architectures.",
};

export function Work({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<Category>("Branding");

  const filteredItems = work.filter((p) => p.domain === filter);
  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <Section id="work-portfolio" className="border-b border-border bg-surface/20" fullScreen>
      <div className="flex flex-wrap items-end justify-between gap-4 pb-3 md:pb-4">
        <SectionHeading
          eyebrow="Selected Projects"
          index={`[ ${String(displayedItems.length).padStart(2, "0")} ${filter} showcases ]`}
          title={<>{filter} Showcase.</>}
          lead={categoryDescriptions[filter]}
          className="max-w-xl xl:max-w-2xl shrink"
        />

        {/* Domain Filter Switcher - fixed to right like other domains */}
        <div className="flex flex-wrap items-center justify-end gap-2 shrink-0 ml-auto">
          {categories.map((cat) => {
            const isActive = filter === cat;
            const count = work.filter((w) => w.domain === cat).length;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={cn(
                  "relative flex items-center gap-2 rounded-full border px-3 sm:px-4 py-1.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] transition-all duration-300",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-[0_0_18px_var(--primary)] font-bold"
                    : "border-border bg-background/80 text-muted-foreground hover:border-border-strong hover:text-foreground",
                )}
              >
                <span>
                  {cat === "Business Development" ? (
                    <>
                      <span className="hidden sm:inline lg:hidden xl:inline">Business Development</span>
                      <span className="sm:hidden lg:inline xl:hidden">Business Dev</span>
                    </>
                  ) : (
                    cat
                  )}
                </span>
                <span
                  className={cn(
                    "rounded-full px-1.5 py-0.2 text-[9px]",
                    isActive ? "bg-primary-foreground/20 text-primary-foreground" : "bg-surface text-muted-foreground",
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Portfolio Grid with Dynamic Hover-Color Responsive Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 grid items-stretch gap-3 sm:grid-cols-2 sm:gap-4 md:mt-5 lg:grid-cols-3"
        >
          {displayedItems.map((p, i) => (
            <article
              key={p.slug}
              className={cn(
                "group relative flex h-full flex-col justify-between rounded-xl border border-border bg-background p-4 sm:p-5 text-foreground transition-all duration-500",
                "hover:-translate-y-1 hover:border-primary hover:bg-[#090d16] hover:text-[#f8fafc] hover:shadow-[0_16px_40px_-16px_rgba(37,99,235,0.38)]",
              )}
            >
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-semibold tracking-wider text-muted-foreground transition-colors duration-500 group-hover:text-primary-bright">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {/* Domain badge: text & background transition with card hover bg */}
                    <span className="rounded-full border border-border/80 bg-surface/80 px-2.5 py-0.5 font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-muted-foreground transition-all duration-500 group-hover:border-primary/50 group-hover:bg-primary/20 group-hover:text-primary-bright">
                      {p.domain}
                    </span>
                  </div>
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

              <div className="mt-4 flex items-end justify-between border-t border-border pt-2.5 transition-colors duration-500 group-hover:border-slate-800 sm:mt-5">
                <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground/70 transition-colors duration-500 group-hover:text-slate-400">
                  {p.scope}
                </span>
                {/* Action button: text & background transition with card hover bg */}
                <Link
                  to="/work/$slug"
                  params={{ slug: p.slug }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-surface/70 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-foreground/80 transition-all duration-500 group-hover:border-primary/70 group-hover:bg-primary/20 group-hover:text-primary-bright hover:!border-primary hover:!bg-primary hover:!text-white hover:!shadow-[0_0_16px_var(--primary)]"
                >
                  <span>Open {p.domain}</span>
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
