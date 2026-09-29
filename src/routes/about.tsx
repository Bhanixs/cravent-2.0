import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { About as AboutSection } from "@/components/sections/About";
import { Approach } from "@/components/sections/Approach";
import { Contact } from "@/components/sections/Contact";

const title = "About Cravent | Business Growth Partner";
const description =
  "Cravent combines branding, marketing, business development, strategy, and technology into one connected growth practice.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Cravent"
        tag="[ the architect ]"
        title="Built for businesses that want to move forward."
        lead="Cravent combines branding, marketing, business development, strategy, and technology into one connected growth practice. We build the creative, strategic, and technical systems needed for the next stage."
        primaryCta={{
          label: "Explore Principles ↓",
          onClick: () => {
            const el = document.getElementById("about-principles");
            el?.scrollIntoView({ behavior: "smooth" });
          },
        }}
        secondaryCta={{
          label: "Book a Growth Audit",
          to: "/contact",
        }}
      />
      <AboutSection />
      <Approach />
      <Contact />
    </>
  );
}
