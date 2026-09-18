import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Contact } from "@/components/sections/Contact";

const title = "Contact Cravent | Start Your Growth Journey";
const description =
  "Tell us what you are building, where you are stuck, and what growth would look like for your business.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Ready to build what comes next?"
        lead="Tell us what you are building, where you are stuck, and what growth would look like for your business."
      />
      <Contact />
    </>
  );
}
