import { Reveal, Section, SectionHeading, XMark } from "@/components/site/kit";
import { work } from "@/content/cravent";

export function Work({ limit }: { limit?: number }) {
  const items = limit ? work.slice(0, limit) : work;
  return (
    <Section id="work" className="border-t border-border bg-surface/20">
      <SectionHeading
        eyebrow="Featured work"
        index="[ selected projects ]"
        title={
          <>
            Work that connects
            <br />
            ideas to outcomes.
          </>
        }
      />

      <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 0.06} className="bg-background">
            {/* href intentionally empty — fill in case study URLs when ready */}
            <a href="" className="block h-full">
              <article className="group relative h-full overflow-hidden p-8 transition-colors duration-500 hover:bg-surface">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <XMark className="h-4 w-4 opacity-30 transition-all duration-500 group-hover:rotate-90 group-hover:opacity-100" />
                </div>
                <h3 className="mt-14 text-3xl font-bold uppercase transition-transform duration-500 group-hover:translate-x-1">
                  {p.name}
                </h3>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-bright">
                  {p.industry}
                </p>
                <div className="mt-8 space-y-2 border-t border-border pt-6 text-sm text-muted-foreground">
                  <p>
                    <span className="text-foreground/70">Scope · </span>
                    {p.scope}
                  </p>
                </div>
              </article>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
