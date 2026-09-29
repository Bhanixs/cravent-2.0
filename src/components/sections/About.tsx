import { Counter, Reveal, Section, SectionHeading } from "@/components/site/kit";

export function About() {
  return (
    <Section id="about-principles" className="border-b border-border" fullScreen>
      <div className="flex flex-wrap items-end justify-between gap-4 pb-3 md:pb-4">
        <SectionHeading
          eyebrow="Operating Architecture"
          index="[ 04 principles ]"
          title={<>Compounding Systems.</>}
          lead="We operate as a high-conviction growth partner, diagnosing commercial friction before engineering the solution."
        />
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary-bright">
          Strategic Model
        </span>
      </div>

      <div className="mt-4 grid items-stretch gap-4 md:mt-6 md:gap-6 lg:grid-cols-[1.1fr_1.4fr]">
        {/* Left: Metrics & Overview */}
        <div className="flex flex-col justify-between rounded-2xl border border-border bg-surface/40 p-4 sm:p-5 md:p-6">
          <div>
            <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-primary-bright sm:text-[10px]">
              [ Scale Architecture ]
            </span>
            <h3 className="mt-3 font-display text-xl font-bold uppercase tracking-tight sm:text-2xl">
              One Unified Practice.
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              No agency silos, no fragmented teams. Brand, media, go-to-market strategy, and digital infrastructure built to compound together.
            </p>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border md:mt-6">
            {[
              { n: 4, label: "Disciplines", suffix: "" },
              { n: 5, label: "Sectors", suffix: "" },
              { n: 5, label: "Step Method", suffix: "" },
            ].map((s) => (
              <div key={s.label} className="bg-background px-3 py-4 text-center sm:px-4 sm:py-5">
                <p className="font-display text-2xl font-bold text-primary-bright sm:text-3xl">
                  <Counter to={s.n} suffix={s.suffix} />
                </p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground sm:text-[10px]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: The 4 Principles Grid */}
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
          {[
            {
              num: "01",
              title: "Connected Practice",
              body: "No silos between brand, marketing, strategy, and technology. Everything reinforces the whole.",
            },
            {
              num: "02",
              title: "Compounding Assets",
              body: "We build workflows and platforms designed to generate continuous market leverage long after launch.",
            },
            {
              num: "03",
              title: "Diagnosis First",
              body: "We pinpoint the commercial constraint holding back revenue before recommending what to build.",
            },
            {
              num: "04",
              title: "Senior Execution",
              body: "Direct accountability without junior hand-offs, operating as a true extension of leadership.",
            },
          ].map((pillar) => (
            <div
              key={pillar.num}
              className="group flex flex-col justify-between rounded-xl border border-border/80 bg-background/80 p-3.5 transition-all duration-300 hover:border-primary hover:bg-background hover:shadow-sm sm:p-4"
            >
              <div>
                <span className="font-mono text-[10px] font-bold text-primary-bright">{pillar.num}</span>
                <h4 className="mt-1.5 font-display text-sm font-bold uppercase tracking-tight text-foreground transition-colors group-hover:text-primary-bright sm:text-base">
                  {pillar.title}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {pillar.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
