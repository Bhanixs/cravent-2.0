import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Btn, Reveal, Section, XMark } from "@/components/site/kit";
import { industries } from "@/content/cravent";

const field =
  "w-full rounded-xl border border-border bg-surface/40 px-3.5 py-2.5 text-xs text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:bg-surface";
const label = "font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground";

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
    <Section id="contact" className="relative overflow-hidden border-t border-border" fullScreen>
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="relative grid items-center gap-6 md:gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="eyebrow">Contact</span>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-3 text-2xl font-bold uppercase tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Ready to build
              <br />
              what comes <span className="italic text-primary-bright">next?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-2.5 max-w-md text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Tell us what you are building, where you are stuck, and what growth would look like for your business.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mt-4 flex flex-wrap gap-2.5 md:mt-6">
              <Btn href="https://wa.me/?text=Hello%20Cravent" variant="outline" size="md">
                Connect on WhatsApp
              </Btn>
              <Btn href="mailto:hello@cravent.in" variant="outline" size="md">
                Email Us
              </Btn>
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-4 border-t border-border pt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground md:mt-6 md:pt-4">
              <p>Puducherry, India · www.cravent.in</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-background/80 p-4 backdrop-blur-md sm:p-5 md:p-6"
          >
            <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
              <div>
                <label className={label} htmlFor="name">
                  Name
                </label>
                <input id="name" required className={`${field} mt-1`} placeholder="Your name" />
              </div>
              <div>
                <label className={label} htmlFor="company">
                  Company / Organisation
                </label>
                <input id="company" className={`${field} mt-1`} placeholder="Organisation" />
              </div>
              <div>
                <label className={label} htmlFor="email">
                  Email
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
                <input id="phone" className={`${field} mt-1`} placeholder="+91" />
              </div>
              <div>
                <label className={label} htmlFor="industry">
                  Industry
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
                  Focus Requirement
                </label>
                <select id="need" className={`${field} mt-1`} defaultValue="">
                  <option value="" disabled>
                    Select focus
                  </option>
                  <option>Branding & Design</option>
                  <option>Marketing & Growth</option>
                  <option>Business Development & Strategy</option>
                  <option>Technology & Web Platforms</option>
                </select>
              </div>
              <div>
                <label className={label} htmlFor="timeline">
                  Timeline
                </label>
                <select id="timeline" className={`${field} mt-1`} defaultValue="">
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
                  Message
                </label>
                <textarea
                  id="message"
                  rows={2}
                  className={`${field} mt-1 resize-none`}
                  placeholder="What are you building?"
                />
              </div>
            </div>

            <div className="mt-3.5 flex items-center justify-between gap-3 md:mt-4">
              <Btn type="submit" size="md">
                Start a Conversation
              </Btn>
              {sent && (
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-primary-bright">
                  Submitted
                </span>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
