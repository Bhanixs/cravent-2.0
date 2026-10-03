import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal, Section, SectionHeading, XMark } from "@/components/site/kit";
import { work } from "@/content/cravent";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

const categories = ["Branding", "Marketing", "Business Development", "Technology"] as const;
type Category = (typeof categories)[number];

const projectLogoMap: Record<string, string> = {
  arkisan: "/assets/logos/arkisan.png",
  cravent: "/assets/logos/cravent.png",
  divyam: "/assets/logos/divyam.png",
  erthaloka: "/assets/logos/erthaloka.png",
  "honey pop": "/assets/logos/Honey Pop.png",
  jeevarasai: "/assets/logos/jeevarasi.png",
  jeevarasi: "/assets/logos/jeevarasi.png",
  "kh international": "/assets/logos/KH International.png",
  "lycée français international": "/assets/logos/lycee franchis.png",
  "lycee francais international": "/assets/logos/lycee franchis.png",
  "lycee francais": "/assets/logos/lycee franchis.png",
  "travellers tribe": "/assets/logos/travellers triibe.png",
  "travellers triibe": "/assets/logos/travellers triibe.png",
  valonk: "/assets/logos/valonk.png",
  vivium: "/assets/logos/vivium.png",
  sparc: "/assets/logos/sparc.png",
  vedashrama: "/assets/logos/vedhasramam.png",
  xplored: "/assets/logos/xplored.png",
  "akshara vidyaashram": "/assets/logos/akshara_vidyaashram.png",
};

function getProjectLogo(projectName: string): string | undefined {
  const norm = projectName.toLowerCase().trim();
  if (projectLogoMap[norm]) return projectLogoMap[norm];
  for (const [key, path] of Object.entries(projectLogoMap)) {
    if (norm.includes(key) || key.includes(norm)) {
      return path;
    }
  }
  return undefined;
}

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
        <div className="flex flex-wrap items-center justify-start sm:justify-end gap-1.5 sm:gap-2 w-full sm:w-auto shrink-0 mt-2 sm:mt-0 ml-auto">
          {categories.map((cat) => {
            const isActive = filter === cat;
            const count = work.filter((w) => w.domain === cat).length;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={cn(
                  "relative flex items-center gap-1.5 sm:gap-2 rounded-full border px-2.5 sm:px-4 py-1 sm:py-1.5 font-mono text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.16em] transition-all duration-300",
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

      {/* Portfolio Grid with Logo Background Covers & Luxury Hover Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 grid items-stretch gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 md:mt-5 lg:gap-4"
        >
          {displayedItems.map((p, i) => {
            const logoUrl = getProjectLogo(p.name);

            return (
              <article
                key={p.slug}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-white shadow-xs transition-all duration-500",
                  "hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.18)]",
                )}
              >
                {/* --- TOP SECTION: Square Logo Container (As it is, no overlay, no artificial effects) --- */}
                <div className="relative aspect-square w-full overflow-hidden bg-slate-50/70 border-b border-border/60 flex items-center justify-center p-6 sm:p-7 md:p-6 lg:p-6 transition-colors duration-500 group-hover:bg-slate-100/60">
                  {logoUrl ? (
                    <img
                      src={logoUrl}
                      alt={`${p.name} logo`}
                      className="max-h-[70%] max-w-[70%] object-contain transition-transform duration-500 ease-out group-hover:scale-108"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center font-display text-xl font-bold uppercase tracking-wider text-muted-foreground/60">
                      {p.name}
                    </div>
                  )}

                  {/* Corner Domain Badge */}
                  <div className="absolute left-3 top-3 z-10">
                    <span className="rounded-full border border-border/80 bg-white/90 px-2 py-0.5 font-mono text-[7.5px] sm:text-[8px] uppercase tracking-wider text-muted-foreground backdrop-blur-xs shadow-xs font-medium">
                      {p.domain}
                    </span>
                  </div>

                  {/* Corner Numeric Index */}
                  <div className="absolute right-3 top-3 z-10">
                    <span className="font-mono text-[9px] sm:text-[10px] font-semibold tracking-wider text-muted-foreground/80">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* --- BOTTOM SECTION: Light-Themed Name Section with Electric Blue Hover Effect --- */}
                <div className="relative flex flex-1 flex-col justify-between p-4 sm:p-4.5 bg-white transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-primary">
                  {/* Subtle top indicator line on hover */}
                  <span className="absolute left-0 top-0 h-0.5 w-full bg-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Project Title & Industry */}
                  <div className="relative z-10">
                    <h3 className="font-display text-base sm:text-lg md:text-base lg:text-base xl:text-lg font-bold uppercase tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-white line-clamp-1">
                      {p.name}
                    </h3>
                    <p className="mt-0.5 font-mono text-[8px] sm:text-[8.5px] uppercase tracking-[0.14em] text-slate-500 transition-colors duration-300 group-hover:text-blue-100 truncate">
                      {p.industry}
                    </p>
                  </div>

                  {/* Footer Row: Scope & Link Indicator */}
                  <div className="relative z-10 mt-3 flex items-center justify-between border-t border-slate-100 pt-2.5 transition-colors duration-300 group-hover:border-blue-500/40">
                    <span className="font-mono text-[7.5px] sm:text-[8.5px] uppercase tracking-wider text-slate-400 transition-colors duration-300 group-hover:text-blue-100 truncate max-w-[90px] sm:max-w-[120px]">
                      {p.scope.split("·")[0]?.trim() || p.scope}
                    </span>
                    <div className="inline-flex items-center gap-1 font-mono text-[8px] sm:text-[8.5px] uppercase tracking-wider font-semibold text-primary transition-all duration-300 group-hover:text-white group-hover:translate-x-1 shrink-0">
                      <span>{p.domain === "Business Development" ? "Open BizDev" : `Open ${p.domain}`}</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>

                {/* Stretched Link: Allows clicking anywhere on the card to open showcase */}
                <Link
                  to="/work/$slug"
                  params={{ slug: p.slug }}
                  className="absolute inset-0 z-20"
                  aria-label={`Open ${p.name} ${p.domain} showcase`}
                />
              </article>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
