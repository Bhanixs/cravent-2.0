import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Services as ServicesSection } from "@/components/sections/Services";
import { Technology } from "@/components/sections/Technology";
import { ConstructionExperience } from "@/components/sections/ConstructionExperience";
import { Contact } from "@/components/sections/Contact";

const title = "Services — Branding, Marketing, Strategy, Technology | Cravent";
const description =
  "Four connected disciplines: branding and design, marketing and growth, business development and strategy, and technology.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="We build your digital growth infrastructure."
        lead="Design. Marketing. Strategy. Technology. Delivered as one system, not four disconnected functions."
      />
      <ServicesSection />
      <Technology />
      <ConstructionExperience />
      <Contact />
    </>
  );
}
