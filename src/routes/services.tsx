
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PageHero } from "@/components/site/PageHero";
import { Contact } from "@/components/sections/Contact";
import { Btn, Reveal, Section, SectionHeading } from "@/components/site/kit";
import { serviceSections, servicesHeading, servicesPositioningStatement } from "@/content/cravent";
import { cn } from "@/lib/utils";

const title = "Services — Branding, Marketing, Strategy, Technology | Cravent";
const description =
  "Four connected disciplines: branding and design, marketing and growth, business development and strategy, and technology.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

interface GrowthLever {
  id: string;
  name: string;
  discipline: "Branding" | "Marketing" | "Strategy" | "Technology";
  tag: string;
}

const growthLevers: GrowthLever[] = [
  { id: "brand", name: "Brand Identity & Design System", discipline: "Branding", tag: "Identity" },
  { id: "ads", name: "Performance Media & Paid Ads", discipline: "Marketing", tag: "Acquisition" },
  { id: "seo", name: "Search & AEO Organic Authority", discipline: "Marketing", tag: "Visibility" },
  { id: "gtm", name: "Go-To-Market & Revenue Modeling", discipline: "Strategy", tag: "Strategy" },
  { id: "deck", name: "Investor Pitch Decks & Proposals", discipline: "Strategy", tag: "Capital" },
  { id: "webapp", name: "Custom Web Application & Platforms", discipline: "Technology", tag: "Product" },
  { id: "ecom", name: "E-Commerce & Digital Storefront", discipline: "Technology", tag: "Commerce" },
  { id: "crm", name: "CRM & WhatsApp Sales Automation", discipline: "Technology", tag: "Systems" },
];

function ServicesPage() {
  const [activeDisciplineIndex, setActiveDisciplineIndex] = useState(0);
  const currentDiscipline = serviceSections[activeDisciplineIndex] || serviceSections[0];

  // Interactive Scope Configurator state
  const [selectedLevers, setSelectedLevers] = useState<string[]>(["brand", "seo", "gtm", "webapp"]);

  const toggleLever = (id: string) => {
    setSelectedLevers((prev) =>
      prev.includes(id) ? (prev.length > 1 ? prev.filter((item) => item !== id) : prev) : [...prev, id]
    );
  };

  const activeDisciplinesCount = new Set(
    growthLevers.filter((l) => selectedLevers.includes(l.id)).map((l) => l.discipline)
  ).size;

  const synergyScore = Math.min(100, 60 + activeDisciplinesCount * 10);

  return (
    <>
      {/* Screen 1: Full-Screen PageHero & The Connected Model */}
      <Section className="border-b border-border" fullScreen>
        <div className="flex flex-col justify-center py-4">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <span className="eyebrow">{servicesHeading.eyebrow}</span>
                <span className="font-mono text-[10px] text-muted-foreground">[ 04 disciplines ]</span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-3 max-w-3xl text-[clamp(2rem,5vw,3.8rem)] font-bold uppercase leading-[1.02]">
                {servicesHeading.title}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-3 max-w-2xl text-xs leading-relaxed text-muted-foreground sm:text-sm md:text-base">
                {servicesHeading.lead}
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Btn
                  onClick={() => {
                    const el = document.getElementById("discipline-studio");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  size="md"
                >
                  Explore Studio ↓
                </Btn>
                <Btn to="/contact" variant="outline" size="md">
                  Book a Growth Audit
                </Btn>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Screen 2: Interactive Discipline Studio (Full Screen) */}
      <Section id="discipline-studio" className="border-b border-border" fullScreen>
        <div className="flex flex-wrap items-end justify-between gap-4 pb-3 md:pb-4">
          <SectionHeading
            eyebrow="Interactive Discipline Studio"
            index={`[ 0${activeDisciplineIndex + 1} / 04 ]`}
            title={<>Dedicated Capabilities.</>}
            lead="Toggle between disciplines to inspect core scope, strategic objectives, and modular deliverables."
          />
          <span className="font-mono text-[10px] uppercase tracking-widest text-primary-bright">
            Divided Focus View
          </span>
        </div>

        {/* Tab Navigation */}
        <div className="mt-2.5 flex flex-wrap gap-1.5 md:gap-2">
          {serviceSections.map((sec, idx) => {
            const isActive = activeDisciplineIndex === idx;
            return (
              <button
                key={sec.id}
                onClick={() => setActiveDisciplineIndex(idx)}
                className={cn(
                  "relative inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] transition-all duration-300 md:text-[11px]",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-[0_0_20px_var(--primary)]"
                    : "border-border bg-surface/40 text-muted-foreground hover:border-border-strong hover:text-foreground",
                )}
              >
                <span>{sec.num}</span>
                <span>{sec.discipline}</span>
              </button>
            );
          })}
        </div>

        {/* Studio Content with Divided Focus */}
        <div className="mt-4 grid items-stretch gap-4 md:mt-5 md:gap-6 lg:grid-cols-[1fr_1.3fr]">
          {/* Left: Discipline Manifesto & Action */}
          <div className="flex flex-col justify-between rounded-2xl border border-border bg-surface/40 p-4 sm:p-5 md:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDiscipline.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="flex h-full flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="h-px w-6 bg-primary" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-primary-bright sm:text-[10px]">
                      Discipline Manifesto
                    </span>
                  </div>
                  <h2 className="mt-3 font-display text-xl font-bold uppercase tracking-tight sm:text-2xl md:text-3xl">
                    {currentDiscipline.heading}
                  </h2>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {currentDiscipline.description}
                  </p>
                </div>

                <div className="mt-4 border-t border-border/80 pt-3 md:mt-5 md:pt-4">
                  <Btn to="/contact" size="md">
                    {currentDiscipline.cta}
                  </Btn>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Interactive Deliverables Matrix */}
          <div className="flex flex-col justify-between rounded-2xl border border-border bg-surface/40 p-4 sm:p-5 md:p-6">
            <div>
              <div className="flex items-center justify-between border-b border-border/80 pb-2.5">
                <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-primary-bright sm:text-[10px]">
                  [ Capabilities & Deliverables ]
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px]">
                  Core Scope
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentDiscipline.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2"
                >
                  {currentDiscipline.items.slice(0, 6).map((item, i) => (
                    <div
                      key={item}
                      className="group flex items-center gap-2.5 rounded-xl border border-border/80 bg-background/80 p-2.5 transition-all duration-300 hover:border-primary hover:bg-background hover:shadow-sm"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary transition-transform group-hover:scale-150" />
                      <div className="flex w-full items-center justify-between">
                        <span className="text-xs font-medium text-foreground transition-colors group-hover:text-primary-bright">
                          {item}
                        </span>
                        <span className="font-mono text-[9px] text-muted-foreground/60">
                          0{i + 1}
                        </span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-border/80 pt-2.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground sm:text-[10px]">
              <span>Modular & Composable</span>
              <span>Cravent Integrated Engine</span>
            </div>
          </div>
        </div>
      </Section>
      {/* Screen 4: Contact & Growth Audit (Full Screen) */}
      <Contact />
    </>
  );
}
