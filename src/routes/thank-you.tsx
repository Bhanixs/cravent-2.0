import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { canonicalLink } from "@/lib/seo";
import { LEAD_SENT_KEY } from "@/lib/leads";
import { Btn, Section } from "@/components/site/kit";

const title = "Thank You | Cravent";
const description = "Thanks for contacting Cravent. We have received your enquiry.";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    links: [canonicalLink("/thank-you")],
    meta: [
      { title },
      { name: "description", content: description },
      // Conversion page: keep it out of search results.
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: ThankYouPage,
});

type Gtag = (...args: unknown[]) => void;

function ThankYouPage() {
  // Fire the conversion once per submission. Reloading or opening /thank-you directly does not count.
  useEffect(() => {
    try {
      if (sessionStorage.getItem(LEAD_SENT_KEY) !== "1") return;
      sessionStorage.removeItem(LEAD_SENT_KEY);
    } catch {
      return;
    }
    const gtag = (window as Window & { gtag?: Gtag }).gtag;
    gtag?.("event", "generate_lead", { event_category: "contact_form", event_label: "contact" });
    // Google Ads: gtag("event", "conversion", { send_to: "AW-XXXXXXXXX/LABEL" });
    // Meta Pixel: fbq("track", "Lead");
  }, []);

  return (
    <Section className="relative flex min-h-[80svh] items-center justify-center border-b border-border pt-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Enquiry received</span>
        <h1 className="mt-4 text-3xl font-bold uppercase tracking-tight sm:text-4xl md:text-5xl">
          Thank you for <span className="italic text-primary-bright">reaching out.</span>
        </h1>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
          We&apos;ve received your enquiry and appreciate you connecting with Cravent. Our team will
          review the details and get back to you shortly.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Btn to="/" size="md">
            Back to Home
          </Btn>
          <Btn to="/work" variant="outline" size="md">
            See Our Work
          </Btn>
        </div>
      </div>
    </Section>
  );
}
