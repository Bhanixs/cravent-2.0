import { useState } from "react";
import { Reveal, Section, SectionHeading } from "@/components/site/kit";
import { services } from "@/content/cravent";
import { cn } from "@/lib/utils";

export function Services({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState<number | null>(0);

  return (
    <Section id="services" className="border-t border-border">
      <SectionHeading
        eyebrow="What we do"
        index="[ 04 disciplines ]"
        title={
          <>
            One integrated
            <br />
            growth system.
          </>
        }
        lead="The brand should support marketing. Marketing should support sales. Sales should inform technology. Technology should make growth easier to manage."
      />

      <div className="mt-16 border-t border-border">
        {services.map((s, i) => (
          <Reveal key={s.num} delay={i * 0.05}>
            <div
              onMouseEnter={() => setActive(i)}
              className={cn(
                "group relative grid cursor-default gap-6 border-b border-border px-2 py-10 transition-colors duration-500 md:grid-cols-[auto_1fr_1fr] md:items-start md:gap-12 md:px-6",
                active === i ? "bg-surface/60" : "hover:bg-surface/30",
              )}
            >
              <span
                className={cn(
                  "font-mono text-sm transition-colors duration-500",
                  active === i ? "text-primary-bright" : "text-muted-foreground",
                )}
              >
                {s.num}
              </span>
              <h3 className="text-3xl font-bold uppercase transition-transform duration-500 group-hover:translate-x-2 md:text-5xl">
                {s.title}
              </h3>
              <div>
                <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                  {s.body}
                </p>
                {!compact && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.points.map((p) => (
                      <span
                        key={p}
                        className="border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground transition-colors group-hover:border-primary/50 group-hover:text-primary-bright"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <span
                className={cn(
                  "absolute left-0 top-0 h-full w-px bg-primary transition-transform duration-500",
                  active === i ? "scale-y-100" : "scale-y-0",
                )}
              />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
