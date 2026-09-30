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

/** Thin ruled divider with a centred label — adds breathing room between sections. */
function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 px-4 py-14 sm:px-6 md:px-10 md:py-20">
      <span className="h-px flex-1 bg-border" />
      <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-muted-foreground/60 sm:text-[10px]">
        {label}
      </span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <Marquee
        items={["Branding", "Marketing", "Strategy", "Business Development", "Technology"]}
      />

      <SectionDivider label="Our Disciplines" />

      {/* Disciplines Showcase with Divided Focus */}
      <Services compact />

      <SectionDivider label="Our Sectors" />

      {/* Sectors Showcase with Divided Focus */}
      <Industries compact />

      <SectionDivider label="Let's Build Together" />

      {/* Growth Audit & Conversation */}
      <Contact />
    </>
  );
}
