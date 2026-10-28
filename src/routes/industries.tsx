import { createFileRoute } from "@tanstack/react-router";
import { canonicalLink } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Industries as IndustriesSection } from "@/components/sections/Industries";
import { Contact } from "@/components/sections/Contact";

const title = "Industries We Serve | Branding & Marketing Agency | Cravent";
const description =
  "Branding and marketing for construction and real estate, fashion, hospitality, education, sustainability and wellness businesses, from Puducherry, India.";

export const Route = createFileRoute("/industries")({
  head: () => ({
    links: [canonicalLink("/industries")],
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        tag="[ 05 sectors ]"
        title="Sectors we build in."
        lead="Deep market immersion across high-growth, capital-intensive, and purpose-driven industries. Different markets, one method: understand the business, define the opportunity, build the system."
        primaryCta={{
          label: "Explore Sectors ↓",
          onClick: () => {
            const el =
              document.getElementById("industries-cards") ||
              document.getElementById("sectors-navigator") ||
              document.getElementById("industries");
            el?.scrollIntoView({ behavior: "smooth" });
          },
        }}
        secondaryCta={{
          label: "Start a Conversation",
          to: "/contact",
        }}
      />
      <IndustriesSection compact isPage />
      <Contact />
    </>
  );
}

