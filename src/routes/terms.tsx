import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/kit";

const title = "Terms of Service — Cravent";
const description = "Terms governing the use of the Cravent website.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of service." />
      <Section className="border-t border-border">
        <div className="max-w-2xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            This site is a presentation prototype. Content, project references, and interface
            simulations are shown for demonstration purposes.
          </p>
          <p>Full terms will be published before launch.</p>
        </div>
      </Section>
    </>
  );
}
