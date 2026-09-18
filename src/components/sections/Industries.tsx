import { useState } from "react";
import { Btn, Reveal, Section, SectionHeading } from "@/components/site/kit";
import { industries } from "@/content/cravent";
import { cn } from "@/lib/utils";
import tex1 from "@/assets/tex-1.jpg";
import tex2 from "@/assets/tex-2.jpg";

export function Industries({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState(0);

  if (compact) {
    return (
      <Section id="industries" className="border-t border-border">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Industries"
            index="[ 05 sectors ]"
            title={<>Sectors we build in.</>}
            lead="Deep focus across high-growth, capital-intensive, and experience-led industries."
          />
          <Reveal>
            <Btn to="/industries" variant="outline">
              View all sectors
            </Btn>
          </Reveal>
        </div>
        <Reveal delay={0.08}>
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
            {industries.map((ind, i) => (
              <div
                key={ind.name}
                className="group flex flex-col justify-between bg-background p-6 transition-all duration-400 hover:bg-surface hover:shadow-lg"
              >
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-primary-bright">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-4 block font-display text-base font-semibold uppercase leading-tight text-foreground transition-colors duration-400 group-hover:text-primary-bright">
                    {ind.name}
                  </span>
                </div>
                <span className="mt-6 font-mono text-xs text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary">
                  Explore →
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>
    );
  }

  return (
    <Section id="industries" className="border-t border-border">
      <SectionHeading
        eyebrow="Industries"
        index="[ 05 sectors ]"
        title={<>Sectors we build in.</>}
        lead="Tailored brand systems, digital infrastructure, and growth engines built for specific market dynamics."
      />

      <div className="mt-16 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div className="border-t border-border">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 0.03}>
              <button
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={cn(
                  "group flex w-full items-center justify-between gap-6 rounded-xl border-b border-border px-4 py-6 text-left transition-colors duration-400",
                  active === i && "bg-surface/50",
                )}
              >
                <span className="flex items-baseline gap-5">
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "font-display text-2xl font-bold uppercase tracking-wide transition-all duration-400 md:text-4xl",
                      active === i ? "translate-x-2 text-primary-bright" : "text-foreground",
                    )}
                  >
                    {ind.name}
                  </span>
                </span>
                <span
                  className={cn(
                    "font-mono text-lg transition-all duration-400",
                    active === i ? "translate-x-0 text-primary" : "-translate-x-3 opacity-0",
                  )}
                >
                  →
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <div className="clip-angle relative min-h-[420px] overflow-hidden border border-border bg-surface/40">
          <img
            src={active % 2 === 0 ? tex1 : tex2}
            alt=""
            loading="lazy"
            width={1200}
            height={900}
            className="absolute inset-0 h-full w-full object-cover opacity-30 transition-opacity duration-700"
            style={{ filter: "invert(1) hue-rotate(180deg)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          <div className="relative flex h-full flex-col justify-end p-8">
            <p className="eyebrow">Focus area</p>
            <h3 className="mt-4 text-3xl font-bold uppercase">{industries[active]?.name}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {industries[active]?.body}
            </p>
            <div className="mt-8">
              <Btn to="/contact" variant="outline">
                Start a Conversation
              </Btn>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
