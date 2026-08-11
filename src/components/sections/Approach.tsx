import { Reveal, Section, SectionHeading } from "@/components/site/kit";
import { approach } from "@/content/cravent";

export function Approach() {
  return (
    <Section className="relative overflow-hidden border-t border-border bg-surface/20">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="relative">
        <SectionHeading
          eyebrow="The Cravent approach"
          index="[ system pipeline ]"
          title={
            <>
              Understand → Define →
              <br />
              Build → Launch → Improve
            </>
          }
        />

        <div className="mt-20 grid gap-px border border-border bg-border md:grid-cols-5">
          {approach.map((a, i) => (
            <Reveal key={a.step} delay={i * 0.07} className="bg-background">
              <div className="group relative h-full px-6 py-10 transition-colors duration-500 hover:bg-surface">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-primary-bright">{a.step}</span>
                  <span className="h-2 w-2 bg-primary transition-transform duration-500 group-hover:scale-150" />
                </div>
                <div className="mt-6 h-px w-full bg-border">
                  <div className="animate-pulse-line h-px w-1/3 bg-primary" />
                </div>
                <h3 className="mt-6 text-2xl font-bold uppercase">{a.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
