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

const projectLogoMap: Record<string, { src: string; invert?: boolean }> = {
  "Arkisan": { src: "/assets/logos/arkisan.png" },
  "Cravent": { src: "/assets/logos/cravent.png" },
  "Divyam": { src: "/assets/logos/divyam.png" },
  "Erthaloka": { src: "/assets/logos/erthaloka.png", invert: true },
  "Honey Pop": { src: "/assets/logos/Honey Pop.png" },
  "Jeevarasai": { src: "/assets/logos/jeevarasi.png" },
  "KH International": { src: "/assets/logos/KH International.png" },
  "Lycée Français International": { src: "/assets/logos/lycee franchis.png" },
  "SPARC": { src: "/assets/logos/sparc.png" },
  "Travellers Tribe": { src: "/assets/logos/travellers triibe.png" },
  "Valonk": { src: "/assets/logos/valonk.png", invert: true },
  "Vivium": { src: "/assets/logos/vivium.png" },
  "XplorED": { src: "/assets/logos/xplored.png" },
};

function getProjectLogo(name: string) {
  const normalized = name.toLowerCase().trim();
  for (const [key, val] of Object.entries(projectLogoMap)) {
    if (key.toLowerCase().trim() === normalized) return val;
  }
  for (const [key, val] of Object.entries(projectLogoMap)) {
    if (normalized.includes(key.toLowerCase()) || key.toLowerCase().includes(normalized)) {
      return val;
    }
  }
  return null;
}

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

      {/* Portfolio Grid with Blue + Black Luxury Cards & Watermark Background Logos */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 grid items-stretch gap-3.5 sm:grid-cols-2 sm:gap-4 md:mt-5 lg:grid-cols-3"
        >
          {displayedItems.map((p, i) => {
            const logo = getProjectLogo(p.name);
            return (
              <article
                key={p.slug}
                className={cn(
                  "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border p-5 sm:p-6 transition-all duration-500",
                  "border-blue-950/60 bg-gradient-to-br from-[#070b16] via-[#040812] to-[#020409] text-foreground",
                  "hover:-translate-y-1.5 hover:border-blue-500/60 hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.4),0_0_0_1px_rgba(59,130,246,0.3)]",
                )}
              >
                {/* Ambient Blue + Black Luxury Background Glows & Mesh Gradients */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-600/10 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:bg-blue-500/25" />
                <div className="pointer-events-none absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-blue-900/15 blur-2xl transition-all duration-700 group-hover:bg-blue-600/20" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.12),transparent_65%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Floating Logo Watermark in Card Background */}
                {logo && (
                  <div className="pointer-events-none absolute -right-4 sm:-right-2 top-1/2 -translate-y-1/2 h-36 w-36 sm:h-44 sm:w-44 lg:h-48 lg:w-48 overflow-hidden flex items-center justify-center">
                    <img
                      src={logo.src}
                      alt=""
                      className={cn(
                        "h-full w-full object-contain select-none transition-all duration-700 ease-out",
                        "opacity-15 group-hover:opacity-40 group-hover:scale-110",
                        "group-hover:drop-shadow-[0_0_30px_rgba(59,130,246,0.6)]",
                        logo.invert && "brightness-0 invert",
                      )}
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Subtle protective vignette over logo for crystal-clear text contrast */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#040812]/90 via-[#040812]/60 to-transparent" />

                {/* Card Foreground Content */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] font-semibold tracking-wider text-slate-400 transition-colors duration-500 group-hover:text-primary-bright">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="rounded-full border border-blue-500/30 bg-blue-950/60 px-2.5 py-0.5 font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-blue-300 transition-all duration-500 group-hover:border-primary/60 group-hover:bg-primary/25 group-hover:text-white group-hover:shadow-[0_0_12px_rgba(37,99,235,0.4)]">
                          {p.domain}
                        </span>
                      </div>
                      <XMark className="h-3.5 w-3.5 opacity-30 text-blue-400 transition-all duration-500 group-hover:rotate-90 group-hover:text-primary group-hover:opacity-100" />
                    </div>

                    <h3 className="mt-4 font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-white transition-all duration-500 group-hover:translate-x-1 group-hover:text-blue-100">
                      {p.name}
                    </h3>

                    <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-blue-400 sm:text-[10px] transition-colors duration-500 group-hover:text-primary-bright">
                      {p.industry}
                    </p>

                    <div className="mt-4 border-t border-blue-900/30 pt-2.5 transition-colors duration-500 group-hover:border-blue-800/60">
                      <p className="text-[11px] leading-relaxed text-slate-300 line-clamp-2 transition-colors duration-500 group-hover:text-white sm:text-xs">
                        {p.focus}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-end justify-between border-t border-blue-900/30 pt-3 transition-colors duration-500 group-hover:border-blue-800/60">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 transition-colors duration-500 group-hover:text-slate-300">
                      {p.scope}
                    </span>
                    <Link
                      to="/work/$slug"
                      params={{ slug: p.slug }}
                      className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/40 bg-blue-950/60 px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-blue-200 backdrop-blur-sm transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] hover:!scale-105"
                    >
                      <span>Open {p.domain}</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>

                {/* Left Edge Electric Cobalt Accent Beam on Hover */}
                <span className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-blue-400 via-primary to-blue-700 opacity-0 transition-all duration-500 group-hover:opacity-100 shadow-[0_0_15px_var(--primary)]" />
              </article>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
