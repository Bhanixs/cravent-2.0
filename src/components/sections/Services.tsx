import { useState } from "react";
import { Reveal, Section, SectionHeading } from "@/components/site/kit";
import { services, servicesHeading, servicesPositioningStatement } from "@/content/cravent";
import { cn } from "@/lib/utils";

export function Services({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState<number | null>(0);

  return (
    <Section id="services" className="border-t border-border">
      <SectionHeading
        eyebrow={servicesHeading.eyebrow}
        index="[ 04 disciplines ]"
        title={<>{servicesHeading.title}</>}
        lead={servicesHeading.lead}
      />

      <div className="mt-16 border-t border-border">
        {services.map((s, i) => {
          const isActive = active === i;
          return (
            <Reveal key={s.num} delay={i * 0.05}>
              <div
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                tabIndex={0}
                className={cn(
                  "group relative grid cursor-default gap-8 rounded-2xl border-b border-border p-6 transition-all duration-500 md:grid-cols-[auto_1.1fr_1.8fr] md:items-start md:gap-14 md:p-10",
                  isActive
                    ? "bg-foreground text-background shadow-[0_28px_90px_-48px_var(--foreground)]"
                    : "hover:bg-surface/40",
                )}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "font-mono text-xs font-semibold tracking-widest transition-colors duration-500 md:text-sm",
                      isActive ? "text-primary-bright" : "text-muted-foreground",
                    )}
                  >
                    {s.num}
                  </span>
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full transition-all duration-500",
                      isActive ? "bg-primary scale-125" : "bg-border group-hover:bg-primary/60",
                    )}
                  />
                </div>

                <div>
                  <h3
                    className={cn(
                      "font-display text-3xl font-bold uppercase tracking-tight transition-transform duration-500 group-hover:translate-x-1 md:text-4xl lg:text-5xl",
                      isActive ? "text-background" : "text-foreground",
                    )}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-4 text-sm leading-relaxed md:text-base",
                      isActive ? "text-background/80" : "text-muted-foreground",
                    )}
                  >
                    {s.body}
                  </p>
                </div>

                <div>
                  <p
                    className={cn(
                      "font-mono text-[10px] uppercase tracking-[0.2em]",
                      isActive ? "text-primary-bright" : "text-muted-foreground",
                    )}
                  >
                    Capabilities & Deliverables
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] transition-all duration-300",
                          isActive
                            ? "border-background/20 bg-background/10 text-background hover:border-primary-bright hover:bg-background/20"
                            : "border-border bg-background/60 text-muted-foreground group-hover:border-border-strong group-hover:text-foreground",
                        )}
                      >
                        <span
                          className={cn(
                            "h-1 w-1 rounded-full",
                            isActive ? "bg-primary-bright" : "bg-primary/70",
                          )}
                        />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <span
                  className={cn(
                    "absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-primary transition-all duration-500",
                    isActive ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0",
                  )}
                />
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Integrated Positioning Statement */}
      <Reveal delay={0.2}>
        <div className="mt-16 rounded-2xl border border-border bg-surface/30 p-8 md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <span className="eyebrow">Integrated Approach</span>
              <p className="mt-3 font-display text-xl leading-relaxed text-foreground md:text-2xl">
                "{servicesPositioningStatement}"
              </p>
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary-bright shrink-0">
              [ Cravent Ecosystem ]
            </span>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
