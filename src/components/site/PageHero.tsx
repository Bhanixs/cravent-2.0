import type { ReactNode } from "react";
import { Section, Reveal, Btn } from "./kit";

export function PageHero({
  eyebrow,
  tag,
  title,
  lead,
  primaryCta,
  secondaryCta,
}: {
  eyebrow: string;
  tag?: string;
  title: ReactNode;
  lead?: string;
  primaryCta?: { label: string; to?: string; onClick?: () => void };
  secondaryCta?: { label: string; to?: string; onClick?: () => void };
}) {
  return (
    <Section className="border-b border-border" fullScreen>
      <div className="flex flex-col justify-center py-4">
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="eyebrow">{eyebrow}</span>
              {tag && <span className="font-mono text-[10px] text-muted-foreground">{tag}</span>}
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-3 max-w-3xl text-[clamp(1.85rem,5vw,3.8rem)] font-bold uppercase leading-[1.04] break-words">
              {title}
            </h1>
          </Reveal>

          {lead && (
            <Reveal delay={0.1}>
              <p className="mt-3 max-w-2xl text-xs leading-relaxed text-muted-foreground sm:text-sm md:text-base">
                {lead}
              </p>
            </Reveal>
          )}

          {(primaryCta || secondaryCta) && (
            <Reveal delay={0.14}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {primaryCta && (
                  <Btn onClick={primaryCta.onClick} to={primaryCta.to} size="md">
                    {primaryCta.label}
                  </Btn>
                )}
                {secondaryCta && (
                  <Btn onClick={secondaryCta.onClick} to={secondaryCta.to} variant="outline" size="md">
                    {secondaryCta.label}
                  </Btn>
                )}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </Section>
  );
}
