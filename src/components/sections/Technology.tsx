import { Reveal, Section, SectionHeading } from "@/components/site/kit";
import { capabilities, techStack } from "@/content/cravent";

export function Technology() {
  return (
    <Section id="technology" className="border-t border-border">
      <SectionHeading
        eyebrow="Technology"
        index="[ digital infrastructure ]"
        title={
          <>
            From ideas to
            <br />
            digital systems.
          </>
        }
        lead="We build the digital growth infrastructure that carries a brand through marketing, sales, operations, and measurement."
      />

      <Reveal delay={0.1}>
        <div className="mt-16 flex flex-wrap items-center gap-3 border border-border bg-surface/40 p-6 md:p-10">
          {techStack.map((t, i) => (
            <div key={t} className="flex items-center gap-3">
              <span className="clip-corner border border-border-strong bg-background px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground transition-colors hover:border-primary hover:text-primary-bright">
                {t}
              </span>
              {i < techStack.length - 1 && (
                <span className="animate-pulse-line h-px w-8 bg-primary md:w-14" />
              )}
            </div>
          ))}
        </div>
      </Reveal>

      <div className="mt-px grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((c, i) => (
          <Reveal key={c} delay={(i % 4) * 0.05} className="bg-background">
            <div className="group h-full px-6 py-10 transition-colors duration-500 hover:bg-surface">
              <span className="font-mono text-[11px] text-primary-bright">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-6 font-display text-xl font-semibold uppercase leading-tight transition-transform duration-500 group-hover:translate-x-1">
                {c}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
