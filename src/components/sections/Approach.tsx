import { Reveal, Section, SectionHeading } from "@/components/site/kit";
import { approach } from "@/content/cravent";

export function Approach() {
  return (
    <Section id="about-approach" className="relative overflow-hidden border-b border-border bg-surface/20" fullScreen>
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="relative">
        <div className="flex flex-wrap items-end justify-between gap-4 pb-3 md:pb-4">
          <SectionHeading
            eyebrow="The Cravent approach"
            index="[ 05 steps ]"
            title={<>Understand to Improve.</>}
            lead="A disciplined, five-step delivery pipeline engineered to turn commercial opportunities into compounding assets."
          />
          <span className="font-mono text-[10px] uppercase tracking-widest text-primary-bright">
            Delivery Framework
          </span>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 md:mt-5">
          {approach.map((a, i) => (
            <Reveal key={a.step} delay={i * 0.05} className="h-full">
              <div className="group relative flex h-full flex-col justify-between rounded-xl border border-border/80 bg-background/80 p-3.5 transition-all duration-300 hover:border-primary hover:bg-background hover:shadow-sm sm:p-4">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-primary-bright">{a.step}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-primary transition-transform duration-300 group-hover:scale-150" />
                  </div>
                  <div className="mt-3 h-px w-full bg-border">
                    <div className="animate-pulse-line h-px w-1/3 bg-primary" />
                  </div>
                  <h3 className="mt-3 font-display text-sm font-bold uppercase tracking-tight text-foreground transition-colors group-hover:text-primary-bright sm:text-base">
                    {a.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{a.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
