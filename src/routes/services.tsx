import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Contact } from "@/components/sections/Contact";
import { Btn, Reveal, Section, XMark } from "@/components/site/kit";
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

function ServicesPage() {
  const [activeId, setActiveId] = useState<string>(serviceSections[0]?.id ?? "branding-design");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of serviceSections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <PageHero
        eyebrow={servicesHeading.eyebrow}
        title={servicesHeading.title}
        lead={servicesHeading.lead}
      />

      {/* Sticky Section Sub-Navigation Bar */}
      <nav
        aria-label="Services Navigation"
        className="sticky top-[64px] z-30 border-y border-border bg-background/90 py-3 backdrop-blur-xl md:top-[72px]"
      >
        <div className="mx-auto flex w-full max-w-[1400px] items-center gap-2 overflow-x-auto px-6 no-scrollbar md:px-10">
          <span className="mr-2 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground lg:inline-block">
            Disciplines:
          </span>
          {serviceSections.map((sec) => {
            const isActive = activeId === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollTo(sec.id)}
                className={cn(
                  "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-all duration-300",
                  isActive
                    ? "border-primary bg-primary/15 text-primary-bright shadow-[0_0_24px_-4px_var(--primary)]"
                    : "border-border bg-surface/50 text-muted-foreground hover:border-border-strong hover:text-foreground",
                )}
              >
                <span className={cn("text-[10px]", isActive ? "text-primary" : "opacity-60")}>
                  {sec.num}
                </span>
                <span>{sec.discipline}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* 4 Dedicated Sections */}
      <div className="divide-y divide-border">
        {serviceSections.map((sec, idx) => (
          <section
            key={sec.id}
            id={sec.id}
            className="relative scroll-mt-28 px-6 py-24 md:px-10 md:py-32"
          >
            <div className="mx-auto w-full max-w-[1400px]">
              <div className="grid gap-14 lg:grid-cols-[1.1fr_1.4fr]">
                {/* Left Column: Eyebrow, Heading, Description & CTA */}
                <div>
                  <Reveal>
                    <div className="flex items-center gap-4">
                      <span className="h-px w-10 bg-primary" />
                      <span className="eyebrow">{sec.discipline}</span>
                      <span className="font-mono text-[11px] text-muted-foreground">
                        [ {sec.num} ]
                      </span>
                    </div>
                  </Reveal>

                  <Reveal delay={0.06}>
                    <h2 className="mt-6 font-display text-4xl font-bold uppercase tracking-tight md:text-5xl lg:text-6xl">
                      {sec.heading}
                    </h2>
                  </Reveal>

                  <Reveal delay={0.12}>
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                      {sec.description}
                    </p>
                  </Reveal>

                  <Reveal delay={0.18}>
                    <div className="mt-10">
                      <Btn to="/contact" size="lg">
                        {sec.cta}
                      </Btn>
                    </div>
                  </Reveal>

                  <XMark className="animate-float-slow mt-16 hidden h-20 w-20 opacity-20 lg:block" />
                </div>

                {/* Right Column: Deliverables Grid */}
                <Reveal delay={0.1}>
                  <div className="rounded-3xl border border-border bg-surface/30 p-6 backdrop-blur-sm md:p-10">
                    <div className="flex items-center justify-between border-b border-border pb-4">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-bright">
                        [ Core Services & Deliverables ]
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {sec.items.length} items
                      </span>
                    </div>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      {sec.items.map((item, itemIdx) => (
                        <div
                          key={item}
                          className="group flex items-start gap-3.5 rounded-xl border border-border/80 bg-background/80 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-background hover:shadow-md"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-150" />
                          <div>
                            <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/80">
                              {String(itemIdx + 1).padStart(2, "0")}
                            </p>
                            <h3 className="mt-0.5 text-sm font-medium text-foreground transition-colors group-hover:text-primary-bright">
                              {item}
                            </h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Integrated Positioning Statement */}
      <Section className="border-t border-border bg-surface/20 py-20">
        <Reveal>
          <div className="rounded-3xl border border-border bg-background p-8 md:p-14">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <span className="eyebrow">The Cravent Model</span>
                <h3 className="mt-4 font-display text-2xl font-bold uppercase md:text-3xl">
                  One partner for design, marketing, strategy, and technology.
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  "{servicesPositioningStatement}"
                </p>
              </div>
              <Btn to="/contact" size="lg" className="shrink-0">
                Book a Growth Audit
              </Btn>
            </div>
          </div>
        </Reveal>
      </Section>

      <Contact />
    </>
  );
}
