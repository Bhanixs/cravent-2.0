import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, Section } from "@/components/site/kit";
import { insights } from "@/content/cravent";
import { Contact } from "@/components/sections/Contact";

const title = "Insights — Strategy, Marketing & Technology | Cravent";
const description =
  "Editorial thinking on strategy, marketing, technology, branding, business growth, and industry shifts.";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Thinking in systems."
        lead="Perspectives on how brand, marketing, sales, and technology connect into compounding growth."
      />
      <Section className="border-t border-border">
        <div className="grid gap-px border border-border bg-border md:grid-cols-2">
          {insights.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.06} className="bg-background">
              <article className="group h-full p-8 transition-colors duration-500 hover:bg-surface md:p-10">
                <span className="eyebrow">{p.category}</span>
                <h2 className="mt-6 font-display text-2xl font-bold uppercase leading-tight transition-transform duration-500 group-hover:translate-x-1 md:text-3xl">
                  {p.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                <span className="mt-8 inline-block font-mono text-[10px] uppercase tracking-[0.18em] text-primary-bright">
                  Full article coming soon
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
      <Contact />
    </>
  );
}
