import { Reveal, Section, SectionHeading, Btn } from "@/components/site/kit";
import { insights } from "@/content/cravent";

export function Insights() {
  const [lead, ...rest] = insights;

  return (
    <Section id="insights" className="border-t border-border bg-surface/20">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHeading eyebrow="Insights" index="[ editorial ]" title={<>Thinking in systems.</>} />
        <Reveal>
          <Btn to="/insights" variant="outline">
            Read all insights
          </Btn>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-px border border-border bg-border lg:grid-cols-3">
        {lead && (
          <Reveal className="bg-background lg:col-span-2">
            <article className="group flex h-full flex-col justify-between p-8 transition-colors duration-500 hover:bg-surface md:p-12">
              <span className="eyebrow">{lead.category}</span>
              <div className="mt-16">
                <h3 className="max-w-2xl text-3xl font-bold uppercase leading-[0.95] transition-transform duration-500 group-hover:translate-x-1 md:text-5xl">
                  {lead.title}
                </h3>
                <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  {lead.body}
                </p>
              </div>
            </article>
          </Reveal>
        )}
        <div className="grid bg-border lg:gap-px">
          {rest.slice(0, 3).map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05} className="bg-background">
              <article className="group h-full border-b border-border p-8 transition-colors duration-500 last:border-b-0 hover:bg-surface">
                <span className="eyebrow">{p.category}</span>
                <h3 className="mt-5 font-display text-xl font-semibold uppercase leading-tight transition-transform duration-500 group-hover:translate-x-1">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
