import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Contact } from "@/components/sections/Contact";

const title = "Contact Cravent — Book a Growth Audit";
const description =
  "Tell us what you are building, where you are stuck, and what growth would look like for your business.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation."
        lead="Puducherry, India. Working with ambitious organisations building what comes next."
      />
      <Contact />
    </>
  );
}
