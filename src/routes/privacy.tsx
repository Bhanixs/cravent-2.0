import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/kit";

const title = "Privacy Policy — Cravent";
const description = "How Cravent handles information shared through this website.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy policy." />
      <Section className="border-t border-border">
        <div className="max-w-2xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            This prototype collects no personal data. Information submitted through the contact form
            is not stored or transmitted.
          </p>
          <p>Full policy content will be published before launch.</p>
        </div>
      </Section>
    </>
  );
}
