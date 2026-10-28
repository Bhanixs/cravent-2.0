import { createFileRoute } from "@tanstack/react-router";
import { canonicalLink } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/kit";

const title = "Privacy Policy — Cravent";
const description = "How Cravent handles information shared through this website.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    links: [canonicalLink("/privacy")],
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
            When you submit the contact form we collect the details you enter: your name, company,
            email, phone number, industry, project focus, timeline, budget range and message. We
            use them only to respond to your enquiry and to plan our work with you.
          </p>
          <p>
            We also record the page you submitted from and, if you arrived through an advert, the
            campaign details in the link (for example utm_source or gclid), so we can see which
            marketing is working. Form submissions are stored in a private spreadsheet and
            emailed to our team. We do not sell your information.
          </p>
          <p>
            This website uses Google Analytics to understand how visitors use it. It sets cookies
            and sends anonymous usage data to Google.
          </p>
          <p>
            To ask us to see, correct or delete your information, email{" "}
            <a href="mailto:info@cravent.in" className="text-primary-bright underline">
              info@cravent.in
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
