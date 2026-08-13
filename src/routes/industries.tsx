import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Industries as IndustriesSection } from "@/components/sections/Industries";
import { Contact } from "@/components/sections/Contact";
import { Btn, Reveal, Section } from "@/components/site/kit";

const title = "Industries — Sectors Cravent Builds In";
const description =
  "Construction and real estate, fashion, hospitality, education, healthcare, technology, sustainability, and community initiatives.";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sectors we build in."
        lead="Different markets, one method: understand the business, define the opportunity, build the system."
      />
      <IndustriesSection />
      {/* Construction & Real Estate spotlight — links to dedicated Space page */}
      <Section className="border-t border-border bg-surface/20">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="eyebrow">Cravent Space</span>
              <h2 className="mt-6 text-4xl font-bold uppercase md:text-6xl">
                Construction &amp; Real Estate
                <br />
                <span className="italic text-primary-bright">goes digital.</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                Pre-construction 3D walkthroughs, interactive floor plans, and embedded booking — a
                dedicated product for construction and real-estate businesses building sales
                infrastructure before the first slab is poured.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:flex-col">
              <Btn to="/space" size="lg">
                Explore Cravent Space
              </Btn>
              <Btn to="/contact" variant="outline" size="lg">
                Start a Conversation
              </Btn>
            </div>
          </div>
        </Reveal>
      </Section>
      <Contact />
    </>
  );
}
