import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Work as WorkSection } from "@/components/sections/Work";
import { Contact } from "@/components/sections/Contact";
import { work } from "@/content/cravent";

const title = "Cravent Portfolios | Branding, Marketing, Strategy & Technology";
const description =
  "Explore verified branding identities, growth marketing engines, commercial business development strategies, and engineered technology platforms across diverse global industries.";

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
        tag={`[ ${work.length} project showcases ]`}
        title="Work that connects ideas to outcomes."
        lead="Brand systems, performance marketing engines, business development strategies, and robust digital platforms built for organisations leading their markets."
        primaryCta={{
          label: "Explore Showcases ↓",
          onClick: () => {
            const el = document.getElementById("work-portfolio");
            el?.scrollIntoView({ behavior: "smooth" });
          },
        }}
        secondaryCta={{
          label: "Ready to Build? Let's Talk",
          to: "/contact",
        }}
      />
      <WorkSection />
      <Contact />
    </>
  );
}

