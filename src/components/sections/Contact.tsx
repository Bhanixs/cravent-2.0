import { useState, type FormEvent } from "react";
import { Btn, Reveal, Section } from "@/components/site/kit";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { industries } from "@/content/cravent";

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
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
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
                Submit Inquiry →
              </Btn>
            </div>
          </form>
        </Reveal>
      </div>

      <Dialog open={sent} onOpenChange={setSent}>
        <DialogContent className="z-[70] w-[calc(100%-2rem)] max-w-md rounded-2xl border-border bg-background/95 p-6 text-center shadow-2xl backdrop-blur-md sm:p-8">
          <DialogHeader className="space-y-3 text-center">
            <DialogTitle className="text-center font-display text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
              Thank you for reaching out
            </DialogTitle>
            <DialogDescription className="text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
              We&apos;ve received your enquiry and appreciate you connecting with Cravent. Our team
              will review the details and get back to you shortly.
            </DialogDescription>
          </DialogHeader>
          <DialogClose className="mx-auto mt-2 inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 font-mono text-xs uppercase tracking-[0.18em] text-primary-foreground transition-all duration-300 hover:bg-primary-bright hover:shadow-[0_0_36px_-6px_var(--primary)]">
            Close
          </DialogClose>
        </DialogContent>
      </Dialog>
    </Section>
  );
}
