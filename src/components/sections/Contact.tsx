import { useEffect, useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Btn, Reveal, Section } from "@/components/site/kit";
import { industries } from "@/content/cravent";
import { LEAD_SENT_KEY, captureAttribution, submitLead } from "@/lib/leads";

const field =
  "w-full rounded-xl border border-border bg-surface/40 px-3.5 py-2.5 text-sm sm:text-xs text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:bg-surface";
const label = "font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground";

/**
 * CTA Section displayed across all pages (Home, About, Services, Industries, Work, Insights, etc.)
 * Replaces the heavy form with an impactful call-to-action leading to /contact.
 */
export function Contact() {
  return (
    <Section id="contact" className="relative overflow-hidden border-t border-border" fullScreen>
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto w-full max-w-4xl text-center flex flex-col items-center justify-center py-12 md:py-16">
        <Reveal>
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="eyebrow">Contact</span>
            <span className="h-px w-8 bg-primary" />
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Ready to build
            <br />
            what comes <span className="italic text-primary-bright">next?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            Tell us what you are building, where you are stuck, and what growth would look like for
            your business.
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Btn to="/contact" size="lg" className="shadow-[0_0_30px_rgba(37,99,235,0.4)]">
              Start a Conversation
            </Btn>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-10 border-t border-border/80 pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <p>Puducherry, India · info@cravent.in · +91 87783 45901</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/**
 * Dedicated Contact Form Section used on the /contact page.
 */
export function ContactForm() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => captureAttribution(), []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    const form = e.currentTarget;
    const value = (id: string) =>
      (form.elements.namedItem(id) as HTMLInputElement | HTMLSelectElement | null)?.value ?? "";
    // Honeypot: bots fill the hidden field, people never see it. Pretend success and drop it.
    if (value("website")) {
      void navigate({ to: "/thank-you" });
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      await submitLead({
        name: value("name"),
        company: value("company"),
        email: value("email"),
        phone: value("phone"),
        industry: value("industry"),
        focus: value("need"),
        timeline: value("timeline"),
        budget: value("budget"),
        message: value("message"),
      });
      try {
        sessionStorage.setItem(LEAD_SENT_KEY, "1");
      } catch {
        /* storage unavailable: the page still loads, the conversion just is not fired */
      }
      await navigate({ to: "/thank-you" });
    } catch {
      setError("Something went wrong sending your enquiry. Please try again, or email info@cravent.in.");
      setSubmitting(false);
    }
  };

  return (
    <Section
      id="contact-form"
      className="relative overflow-hidden border-t border-border pt-24 md:pt-24 lg:pt-24"
      fullScreen
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="relative grid items-start gap-8 md:gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14 pt-4 sm:pt-8">
        {/* Left: Contact Info & Value Prop */}
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="eyebrow">Direct Access</span>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-4 text-3xl font-bold uppercase tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Start a
              <br />
              <span className="text-primary-bright">Conversation.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Tell us what you are building, where you are stuck, and what growth would look like
              for your business.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-8 space-y-4 border-t border-border/80 pt-6">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-bright">
                  Direct Inquiries
                </span>
                <p className="mt-1 font-mono text-sm text-foreground">
                  <a href="mailto:info@cravent.in" className="hover:text-primary transition-colors">
                    info@cravent.in
                  </a>
                </p>
              </div>

              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-bright">
                  Direct Phone / WhatsApp
                </span>
                <div className="mt-1 flex flex-col gap-1">
                  <a
                    href="tel:8778345901"
                    className="font-mono text-sm text-foreground hover:text-primary transition-colors"
                  >
                    +91 87783 45901
                  </a>
                  <a
                    href="https://wa.me/918778345901?text=Hello%20Cravent"
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-muted-foreground underline underline-offset-4 hover:text-primary transition-colors"
                  >
                    Connect on WhatsApp →
                  </a>
                </div>
              </div>

              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-bright">
                  Studio Location
                </span>
                <p className="mt-1 font-mono text-sm text-foreground">
                  Puducherry, India · Global Operations
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right: The Complete Interactive Form */}
        <Reveal delay={0.08}>
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-background/90 p-5 sm:p-7 md:p-8 backdrop-blur-md shadow-xl"
          >
            <div className="border-b border-border/80 pb-4 mb-5">
              <h3 className="font-display text-lg font-bold uppercase tracking-tight text-foreground sm:text-xl">
                Project & Growth Inquiry
              </h3>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                All fields help us prepare tailored insights
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              <input
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
              />
              <div>
                <label className={label} htmlFor="name">
                  Name *
                </label>
                <input
                  id="name"
                  required
                  className={`${field} mt-1`}
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className={label} htmlFor="company">
                  Company / Organisation *
                </label>
                <input
                  id="company"
                  required
                  className={`${field} mt-1`}
                  placeholder="Organisation name"
                />
              </div>
              <div>
                <label className={label} htmlFor="email">
                  Business Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className={`${field} mt-1`}
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className={label} htmlFor="phone">
                  Phone / WhatsApp
                </label>
                <input
                  id="phone"
                  type="tel"
                  className={`${field} mt-1`}
                  placeholder="e.g. +91 87783 45901"
                />
              </div>
              <div>
                <label className={label} htmlFor="industry">
                  Industry / Sector
                </label>
                <select id="industry" className={`${field} mt-1`} defaultValue="">
                  <option value="" disabled>
                    Select industry
                  </option>
                  {industries.map((i) => (
                    <option key={i.name} value={i.name}>
                      {i.name}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className={label} htmlFor="need">
                  Primary Focus
                </label>
                <select id="need" className={`${field} mt-1`} defaultValue="">
                  <option value="" disabled>
                    Select capability focus
                  </option>
                  <option>Branding & Design</option>
                  <option>Marketing & Growth</option>
                  <option>Business Development & Strategy</option>
                  <option>Technology & Web Platforms</option>
                  <option>Integrated Growth Engine (All)</option>
                </select>
              </div>
              <div>
                <label className={label} htmlFor="timeline">
                  Target Timeline
                </label>
                <select id="timeline" className={`${field} mt-1`} defaultValue="">
                  <option value="" disabled>
                    Select timeline
                  </option>
                  <option>Immediate (Under 30 days)</option>
                  <option>1–3 months</option>
                  <option>3–6 months</option>
                  <option>Exploring / Advisory</option>
                </select>
              </div>
              <div>
                <label className={label} htmlFor="budget">
                  Budget Allocation
                </label>
                <select id="budget" className={`${field} mt-1`} defaultValue="">
                  <option value="" disabled>
                    Select range
                  </option>
                  <option>Under ₹1L</option>
                  <option>₹1L – ₹5L</option>
                  <option>₹5L – ₹15L</option>
                  <option>₹15L+</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={label} htmlFor="message">
                  What are you building & where are you stuck? *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className={`${field} mt-1 resize-none`}
                  placeholder="Tell us what you are building, where you are stuck, and what growth would look like for your business."
                />
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-border/80 pt-4">
              <Btn type="submit" size="lg">
                {submitting ? "Sending…" : "Submit Inquiry →"}
              </Btn>
              {error && (
                <p role="alert" className="w-full text-xs text-red-500">
                  {error}
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
