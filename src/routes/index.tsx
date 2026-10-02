import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Industries } from "@/components/sections/Industries";
import { Insights } from "@/components/sections/Insights";
import { Contact } from "@/components/sections/Contact";
import { Marquee } from "@/components/site/kit";

const title = "Cravent | Branding, Marketing, Strategy & Technology Growth Partner";
const description =
  "Cravent is a growth partner combining branding, marketing, business strategy, business development, and technology for ambitious organisations.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Marquee
        items={["Branding", "Marketing", "Strategy", "Business Development", "Technology"]}
      />

      {/* Disciplines Showcase with Full-Page Intro + Full-Screen Cards */}
      <Services compact />

      {/* Sectors Showcase with Full-Page Intro + Full-Screen Cards */}
      <Industries compact />

      {/* Growth Audit & Conversation */}
      <Contact />
    </>
  );
}
