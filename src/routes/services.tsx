import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Services as ServicesSection } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { servicesHeading, services } from "@/content/cravent";

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
        tag={`[ 0${services.length} disciplines ]`}
        title={servicesHeading.title}
        lead={servicesHeading.lead}
        primaryCta={{
          label: "Explore Disciplines ↓",
          onClick: () => {
            const el =
              document.getElementById("services-cards") ||
              document.getElementById("disciplines-navigator") ||
              document.getElementById("services");
            el?.scrollIntoView({ behavior: "smooth" });
          },
        }}
        secondaryCta={{
          label: "Book a Growth Audit",
          to: "/contact",
        }}
      />
      <ServicesSection compact isPage />
      <Contact />
    </>
  );
}
