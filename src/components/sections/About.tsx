import { Counter, Reveal, Section, SectionHeading, XMark } from "@/components/site/kit";
import { approach } from "@/content/cravent";

export function About() {
  return (
    <Section id="about" className="relative overflow-hidden border-t border-border">
      <XMark className="pointer-events-none absolute -left-32 top-10 h-96 w-96 opacity-[0.06]" />
      <div className="relative grid gap-16 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <SectionHeading
            eyebrow="About Cravent"
            index="[ the architect ]"
            title={
              <>
                Built for businesses
                <br />
                that want to move forward.
              </>
            }
            lead="Cravent combines branding, marketing, business development, strategy, and technology into one connected practice. We understand where a business is today, identify what is holding it back, and build the creative, strategic, and technical systems needed for the next stage."
          />

          <div className="mt-12 grid grid-cols-3 gap-px border border-border bg-border">
            {[
              { n: 5, label: "Disciplines", suffix: "" },
              { n: 8, label: "Industries", suffix: "" },
              { n: 5, label: "Step approach", suffix: "" },
            ].map((s) => (
              <div key={s.label} className="bg-background px-5 py-8">
                <p className="font-display text-4xl font-bold text-primary-bright md:text-5xl">
                  <Counter to={s.n} suffix={s.suffix} />
                </p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={0.12}>
          <div className="relative border-l border-border pl-8">
            {approach.map((a) => (
              <div key={a.step} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[41px] top-1 h-3 w-3 border border-primary bg-background" />
                <span className="font-mono text-[11px] text-primary-bright">{a.step}</span>
                <h3 className="mt-2 text-2xl font-bold uppercase">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
