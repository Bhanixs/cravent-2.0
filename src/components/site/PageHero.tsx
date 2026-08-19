import { Section, Reveal } from "./kit";

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <Section className="relative overflow-hidden pt-40 md:pt-52">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="relative">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-primary" />
            <span className="eyebrow">{eyebrow}</span>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-5xl text-[clamp(2.5rem,8vw,7rem)] font-bold uppercase">
            {title}
          </h1>
        </Reveal>
        {lead && (
          <Reveal delay={0.14}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {lead}
            </p>
          </Reveal>
        )}
      </div>
    </Section>
  );
}
