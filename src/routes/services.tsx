import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Services as ServicesSection } from "@/components/sections/Services";
import { Technology } from "@/components/sections/Technology";
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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="One partner for your next stage of growth."
        lead="Branding, marketing, business development, strategy, and technology — connected as one focused growth system."
      />
      <ServicesSection />
      <Technology />
      <Contact />
    </>
  );
}
