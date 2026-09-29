import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Work as WorkSection } from "@/components/sections/Work";
import { Contact } from "@/components/sections/Contact";

const title = "Cravent Projects | Branding, Marketing, Strategy & Technology";
const description =
  "Selected projects across technology, education, travel, sustainability, wellness, and business development.";

export const Route = createFileRoute("/work")({
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
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected Portfolio"
        tag="[ 12 projects ]"
        title="Work that connects ideas to outcomes."
        lead="Brand systems, marketing engines, strategic positioning, and digital platforms built for organisations leading their markets."
        primaryCta={{
          label: "Explore Projects ↓",
          onClick: () => {
            const el = document.getElementById("work-portfolio");
            el?.scrollIntoView({ behavior: "smooth" });
          },
        }}
        secondaryCta={{
          label: "Book a Growth Audit",
          to: "/contact",
        }}
      />
      <WorkSection />
      <Contact />
    </>
  );
}

