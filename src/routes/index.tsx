import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Industries } from "@/components/sections/Industries";
import { Work } from "@/components/sections/Work";
import { ConstructionExperience } from "@/components/sections/ConstructionExperience";
import { Insights } from "@/components/sections/Insights";
import { Contact } from "@/components/sections/Contact";
import { Marquee, Reveal, Section, Btn } from "@/components/site/kit";

const title = "Cravent — Build What Comes Next";
const description =
  "Cravent is a growth partner combining branding, marketing, business strategy, business development, and technology for ambitious organisations.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Marquee
        items={["Branding", "Marketing", "Strategy", "Business Development", "Technology"]}
      />
      {/* Compact — titles + body only; full detail on /services */}
      <Services compact />
      {/* Compact tag-cloud grid; full interactive panel on /industries */}
      <Industries compact />
      {/* Teaser — 3 cards; full grid on /work */}
      <Work limit={3} />
      {/* Work CTA */}
      <Section className="border-t border-border bg-surface/20 py-0">
        <Reveal>
          <div className="flex items-center justify-between gap-6 py-10">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              [ selected projects ]
            </span>
            <Btn to="/work" variant="outline">
              View all work →
            </Btn>
          </div>
        </Reveal>
      </Section>
      <ConstructionExperience />
      <Insights />
      <Contact />
    </>
  );
}
