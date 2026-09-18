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
        eyebrow="Work"
        title="Work that connects ideas to outcomes."
        lead="Brand systems, marketing engines, and digital platforms built for organisations at different stages of growth."
      />
      {/* All 12 projects with interactive dark theme and spotlight view */}
      <WorkSection />
      <Contact />
    </>
  );
}
