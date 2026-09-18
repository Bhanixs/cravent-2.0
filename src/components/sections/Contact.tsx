import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Btn, Reveal, Section, XMark } from "@/components/site/kit";
import { industries } from "@/content/cravent";

const field =
  "w-full border border-border bg-surface/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:bg-surface";
const label = "font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast.success("Message ready to send", {
      description: "This prototype does not submit data yet.",
    });
  };

  return (
    <Section id="contact" className="relative overflow-hidden border-t border-border">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="relative grid gap-16 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-primary" />
              <span className="eyebrow">Contact</span>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 text-4xl font-bold uppercase md:text-6xl lg:text-7xl">
              Ready to build
              <br />
              what comes <span className="italic text-primary-bright">next?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Tell us what you are building, where you are stuck, and what growth would look like
              for your business.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Btn href="https://wa.me/" variant="outline">
                Connect on WhatsApp
              </Btn>
              <Btn href="mailto:hello@cravent.in" variant="outline">
                Email Us
              </Btn>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-12 border-t border-border pt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              <p>Puducherry, India</p>
              <p className="mt-2">www.cravent.in</p>
            </div>
          </Reveal>
          <XMark className="animate-float-slow mt-16 hidden h-28 w-28 opacity-20 lg:block" />
        </div>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="clip-angle border border-border bg-background/70 p-6 backdrop-blur-md md:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={label} htmlFor="name">
                  Name
                </label>
                <input id="name" required className={`${field} mt-2`} placeholder="Your name" />
              </div>
              <div>
                <label className={label} htmlFor="company">
                  Company / Organisation
                </label>
                <input id="company" className={`${field} mt-2`} placeholder="Organisation" />
              </div>
              <div>
                <label className={label} htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className={`${field} mt-2`}
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className={label} htmlFor="phone">
                  Phone / WhatsApp
                </label>
                <input id="phone" className={`${field} mt-2`} placeholder="+91" />
              </div>
              <div>
                <label className={label} htmlFor="industry">
                  Industry
                </label>
                <select id="industry" className={`${field} mt-2`} defaultValue="">
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
                <label className={label} htmlFor="site">
                  Website / Social Media
                </label>
                <input id="site" className={`${field} mt-2`} placeholder="Link" />
              </div>
              <div className="sm:col-span-2">
                <label className={label} htmlFor="need">
                  What do you need help with?
                </label>
                <select id="need" className={`${field} mt-2`} defaultValue="">
                  <option value="" disabled>
                    Select focus
                  </option>
                  <option>Branding & Design</option>
                  <option>Marketing & Growth</option>
                  <option>Business Development & Strategy</option>
                  <option>Technology</option>
                  <option>Cravent Space (3D / Real estate)</option>
                </select>
              </div>
              <div>
                <label className={label} htmlFor="timeline">
                  Estimated project timeline
                </label>
                <select id="timeline" className={`${field} mt-2`} defaultValue="">
                  <option value="" disabled>
                    Select timeline
                  </option>
                  <option>Immediate</option>
                  <option>1–3 months</option>
                  <option>3–6 months</option>
                  <option>Exploring</option>
                </select>
              </div>
              <div>
                <label className={label} htmlFor="budget">
                  Budget range
                </label>
                <select id="budget" className={`${field} mt-2`} defaultValue="">
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
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={`${field} mt-2 resize-none`}
                  placeholder="What are you building?"
                />
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Btn type="submit" size="lg">
                Start a Conversation
              </Btn>
              {sent && (
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary-bright">
                  Prototype form — not connected
                </span>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
