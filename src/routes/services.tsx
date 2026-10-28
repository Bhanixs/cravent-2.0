import { createFileRoute } from "@tanstack/react-router";
import { canonicalLink } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Services as ServicesSection } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { servicesHeading, services } from "@/content/cravent";

const title = "Branding, Digital Marketing & Web Development Services | Cravent";
const description =
  "Branding and design, digital marketing, website and app development, and business strategy from one Puducherry agency. Explore Cravent's services.";

export const Route = createFileRoute("/services")({
  head: () => ({
    links: [canonicalLink("/services")],
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
        eyebrow="Branding, Digital Marketing & Web Development Services"
        tag={`[ 0${services.length} disciplines ]`}
        title={servicesHeading.title}
        lead={`${servicesHeading.lead} Based in Puducherry, we deliver branding, digital marketing, website development and business strategy for clients across India.`}
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
