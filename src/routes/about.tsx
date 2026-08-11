import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { About as AboutSection } from "@/components/sections/About";
import { Approach } from "@/components/sections/Approach";
import { Contact } from "@/components/sections/Contact";

const title = "About Cravent — The Architect of Growth Systems";
const description =
  "Cravent combines branding, marketing, business development, strategy, and technology into one connected growth practice.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built for businesses that want to move forward."
        lead="Growth should not feel disconnected. We build the creative, strategic, and technical systems required for the next stage."
      />
      <AboutSection />
      <Approach />
      <Contact />
    </>
  );
}
