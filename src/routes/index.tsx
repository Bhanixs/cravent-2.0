import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Approach } from "@/components/sections/Approach";
import { Industries } from "@/components/sections/Industries";
import { Work } from "@/components/sections/Work";
import { ConstructionExperience } from "@/components/sections/ConstructionExperience";
import { SpacePrototype } from "@/components/sections/SpacePrototype";
import { Technology } from "@/components/sections/Technology";
import { Insights } from "@/components/sections/Insights";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Marquee } from "@/components/site/kit";

const title = "Cravent — Build What Comes Next";
const description =
  "Cravent is a growth partner combining branding, marketing, business strategy, business development, and technology for ambitious organisations.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Marquee
        items={["Branding", "Marketing", "Strategy", "Business Development", "Technology"]}
      />
      <Services />
      <Approach />
      <Industries />
      <Work />
      <ConstructionExperience />
      <SpacePrototype />
      <Technology />
      <Insights />
      <About />
      <Contact />
    </>
  );
}
