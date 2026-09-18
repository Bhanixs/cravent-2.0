import { Reveal, Section, SectionHeading, XMark } from "@/components/site/kit";
import { work } from "@/content/cravent";
import { cn } from "@/lib/utils";

export function Work({ limit }: { limit?: number }) {
  const displayedItems = limit ? work.slice(0, limit) : work;

  return (
    <Section id="work" className="border-t border-border bg-surface/20">
      <SectionHeading
        eyebrow="Selected Portfolio"
        index={`[ ${String(work.length).padStart(2, "0")} projects ]`}
        title={
          <>
            Work that connects
            <br />
            <span className="italic text-primary-bright">ideas to outcomes.</span>
          </>
        }
        lead="Brand systems, marketing engines, strategic positioning, and digital platforms built for organizations leading their markets."
      />

      {/* Portfolio Grid with Luxury Hover-Dark Cards */}
      <div className="mt-16 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {displayedItems.map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 0.05}>
            <article
              className={cn(
                "group relative flex h-full flex-col justify-between rounded-2xl border border-border bg-background p-8 text-foreground transition-all duration-500",
                // Luxury dark mode on hover
                "hover:-translate-y-2 hover:border-primary hover:bg-[#090d16] hover:text-[#f8fafc] hover:shadow-[0_24px_70px_-16px_rgba(37,99,235,0.38)]",
              )}
            >
              <div>
                {/* Header: Index & Icon */}
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs font-semibold tracking-wider text-muted-foreground transition-colors duration-500 group-hover:text-primary-bright">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <XMark className="h-4 w-4 opacity-30 transition-all duration-500 group-hover:rotate-90 group-hover:text-primary group-hover:opacity-100" />
                </div>

                {/* Project Title */}
                <h3 className="mt-12 font-display text-2xl font-bold uppercase tracking-tight transition-all duration-500 group-hover:translate-x-1 group-hover:text-white md:text-3xl">
                  {p.name}
                </h3>

                {/* Industry Tag */}
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-bright">
                  {p.industry}
                </p>

                {/* Focus Description */}
                <div className="mt-6 border-t border-border pt-4 transition-colors duration-500 group-hover:border-slate-800">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-500 group-hover:text-primary-bright/90">
                    Focus
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-slate-300">
                    {p.focus}
                  </p>
                </div>
              </div>

              {/* Scope Tag Footer */}
              <div className="mt-8 border-t border-border pt-4 text-xs transition-colors duration-500 group-hover:border-slate-800">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70 transition-colors duration-500 group-hover:text-slate-400">
                  {p.scope}
                </span>
              </div>

              {/* Glowing accent border on left on hover */}
              <span className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-primary opacity-0 transition-all duration-500 group-hover:opacity-100" />
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
