import { createFileRoute } from "@tanstack/react-router";
import { canonicalLink } from "@/lib/seo";
import { ContactForm } from "@/components/sections/Contact";

const title = "Contact Cravent | Branding & Marketing Agency in Puducherry";
const description =
  "Contact Cravent in Puducherry for branding, digital marketing and website development. Tell us what you are building and book a free growth audit.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    links: [canonicalLink("/contact")],
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
  return <ContactForm />;
}
