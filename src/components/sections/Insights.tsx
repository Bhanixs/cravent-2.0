import { Reveal, Section, SectionHeading, Btn } from "@/components/site/kit";
import { insights } from "@/content/cravent";

export function Insights() {
  const [lead, ...rest] = insights;

  return (
    <Section id="insights" className="border-t border-border bg-surface/20" fullScreen>
      <div className="flex flex-wrap items-end justify-between gap-6 pb-6">
        <SectionHeading
          eyebrow="Insights"
          index="[ editorial ]"
          title={<>Thinking in systems.</>}
          lead="Perspectives on unifying branding, acquisition, strategy, and technology."
        />
        <Reveal>
          <Btn to="/insights" variant="outline">
            Read all insights
          </Btn>
        </Reveal>
      </div>

      <div className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-3">
        {lead && (
          <Reveal className="bg-background lg:col-span-2">
            <article className="group flex h-full flex-col justify-between p-6 transition-colors duration-500 hover:bg-surface md:p-10">
              <span className="eyebrow">{lead.category}</span>
              <div className="mt-8">
                <h3 className="max-w-2xl text-2xl font-bold uppercase leading-tight transition-transform duration-500 group-hover:translate-x-1 md:text-4xl">
                  {lead.title}
                </h3>
                <p className="mt-4 max-w-xl text-xs leading-relaxed text-muted-foreground md:text-sm">
                  {lead.body}
                </p>
              </div>
              <span className="mt-8 font-mono text-[10px] uppercase tracking-widest text-primary-bright">
                Read Perspective →
              </span>
            </article>
          </Reveal>
        )}
        <div className="grid bg-border lg:gap-px">
          {rest.slice(0, 2).map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05} className="bg-background">
              <article className="group h-full border-b border-border p-6 transition-colors duration-500 last:border-b-0 hover:bg-surface">
                <span className="eyebrow">{p.category}</span>
                <h3 className="mt-3 font-display text-base font-semibold uppercase leading-snug transition-transform duration-500 group-hover:translate-x-1 md:text-lg">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
