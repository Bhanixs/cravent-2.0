import { createFileRoute } from "@tanstack/react-router";
import { canonicalLink } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Industries } from "@/components/sections/Industries";
import { Contact } from "@/components/sections/Contact";
import { Marquee } from "@/components/site/kit";

const title = "Branding & Digital Marketing Agency in Puducherry | Cravent";
const description =
  "Branding, digital marketing and website development agency in Puducherry, India. Cravent helps startups and growing businesses build brands that grow.";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [canonicalLink("/")],
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
