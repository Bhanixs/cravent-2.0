import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Industries as IndustriesSection } from "@/components/sections/Industries";
import { ConstructionExperience } from "@/components/sections/ConstructionExperience";
import { Contact } from "@/components/sections/Contact";

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
      <ConstructionExperience />
      <Contact />
    </>
  );
}
