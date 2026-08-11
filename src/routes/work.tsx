import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Work as WorkSection } from "@/components/sections/Work";
import { SpacePrototype } from "@/components/sections/SpacePrototype";
import { Contact } from "@/components/sections/Contact";

const title = "Work — Selected Cravent Projects";
const description =
  "Selected projects across technology, education, travel, sustainability, wellness, and business development.";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
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
      <WorkSection />
      <SpacePrototype />
      <Contact />
    </>
  );
}
