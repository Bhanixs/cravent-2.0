import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ConstructionExperience } from "@/components/sections/ConstructionExperience";
import { SpacePrototype } from "@/components/sections/SpacePrototype";
import { Contact } from "@/components/sections/Contact";

const title = "Cravent Space — Pre-Construction 3D Experiences";
const description =
  "Pre-construction 3D walkthroughs, interactive floor plans, and digital sales infrastructure for construction and real-estate businesses.";

export const Route = createFileRoute("/space")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: SpacePage,
});

function SpacePage() {
  return (
    <>
      <PageHero
        eyebrow="Cravent Space"
        title="Your project. Experienced before built."
        lead="Pre-construction 3D walkthroughs, interactive floor plans, and digital sales infrastructure — built for construction and real-estate businesses across India."
      />
      <ConstructionExperience />
      <SpacePrototype />
      <Contact />
    </>
  );
}
