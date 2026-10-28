import { createFileRoute, Link } from "@tanstack/react-router";
import { canonicalLink } from "@/lib/seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Btn, Reveal, Section, SectionHeading } from "@/components/site/kit";
import {
  ArrowRight,
  Compass,
  FileText,
  Laptop,
  Rocket,
  Cpu,
  Layers,
  ShieldCheck,
} from "lucide-react";
import imgStrategy from "@/assets/showcase/service-strategy.jpg";
import logoErthaloka from "@/assets/logos/erthaloka.png";

const title = "Branding Agency for Startups: Identity to Launch | Cravent";
const description =
  "A branding agency for startups: positioning, identity, pitch material, website and launch marketing, built to your stage by senior people.";

const faqs = [
  {
    q: "What does a branding agency for startups do?",
    a: "It defines how a new company positions itself and builds the identity, website and launch material that make it credible. The better agencies also connect that work to marketing and sales.",
  },
  {
    q: "When should a startup invest in branding?",
    a: "Before the first investor meeting or public launch, because people form their first impression then. Start with the foundation and add the rest as you grow.",
  },
  {
    q: "Can we start with the identity alone?",
    a: "Yes. Many startups begin with positioning, identity and a website, then add marketing and systems later. A Growth Audit shows the right order.",
  },
  {
    q: "How does a connected practice differ from a freelancer or a design studio?",
    a: "One team covers brand, marketing, strategy and technology, so you brief once and tell your story once.",
  },
];

const deliverables = [
  {
    num: "01",
    title: "Foundation",
    desc: "Positioning, messaging and brand strategy.",
    icon: Compass,
  },
  {
    num: "02",
    title: "Identity",
    desc: "A logo system, colour, typography and guidelines your team can use without us.",
    icon: Layers,
  },
  {
    num: "03",
    title: "Pitch and investor material",
    desc: "A deck that explains the business and carries the brand.",
    icon: FileText,
  },
  {
    num: "04",
    title: "Website and product UI/UX",
    desc: "The first place customers meet you, designed to convert.",
    icon: Laptop,
  },
  {
    num: "05",
    title: "Launch marketing",
    desc: "Meta, Google and content that win your first customers.",
    icon: Rocket,
  },
  {
    num: "06",
    title: "Growth systems",
    desc: "CRM, sales process and technology that scale with you.",
    icon: Cpu,
  },
];

const stages = [
  {
    stage: "Stage 01",
    name: "Pre-launch",
    desc: "Positioning, identity and a website that make the idea credible.",
    highlight: "Seed & Angel Stage",
  },
  {
    stage: "Stage 02",
    name: "Launch",
    desc: "Campaigns, content and pitch material that bring in your first customers and conversations.",
    highlight: "Go-to-Market Traction",
  },
  {
    stage: "Stage 03",
    name: "Growth",
    desc: "Sales systems, CRM and technology that let you scale without a rebuild.",
    highlight: "Series A & Expansion",
  },
];

const checklist = [
  {
    title: "They ask about your customers and your constraint before they show logos.",
    note: "If logos come first, keep looking.",
  },
  {
    title: "Senior people do the work.",
    note: "Ask who will design and write.",
  },
  {
    title: "The scope fits your stage.",
    note: "A seed-stage startup has no use for an enterprise brand.",
  },
  {
    title: "Brand, marketing and technology connect.",
    note: "Four vendors mean four briefs and four versions of your story.",
  },
  {
    title: "They show finished systems.",
    note: "Ask for guidelines, collateral and live work.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Understand",
    body: "We study your product, customers, market and competitors, and find what holds growth back.",
  },
  {
    step: "02",
    title: "Define",
    body: "We choose the position and the smallest brand that makes it believable.",
  },
  {
    step: "03",
    title: "Build",
    body: "We produce the identity, website, pitch material and launch assets.",
  },
  {
    step: "04",
    title: "Launch",
    body: "We take the brand to customers, investors and partners.",
  },
  {
    step: "05",
    title: "Improve",
    body: "We read the results and add what the next stage needs.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Cravent",
    url: "https://cravent.in/branding-agency-for-startups",
    description,
    telephone: "+91 87783 45901",
    email: "info@cravent.in",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Puducherry",
      addressCountry: "IN",
    },
    serviceType: "Branding Agency for Startups",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  },
];

export const Route = createFileRoute("/branding-agency-for-startups")({
  head: () => ({
    links: [canonicalLink("/branding-agency-for-startups")],
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StartupsBrandingPage,
});

function StartupsBrandingPage() {
  const scrollToProof = () => {
    const el = document.getElementById("proof");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-background pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-primary" />
                  <span className="eyebrow">Startup Growth Practice</span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    [ Identity to Launch ]
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <h1 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.75rem)] font-bold uppercase leading-[1.08] tracking-tight">
                  A branding agency for startups that need credibility from day one.
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
                  Cravent builds the brand, pitch material, website and launch plan for startups.
                  Senior people do the work, and we build what your stage requires.
                </p>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Btn to="/contact" size="md">
                    Book a Growth Audit
                  </Btn>
                  <Btn onClick={scrollToProof} variant="outline" size="md">
                    See our work
                  </Btn>
                </div>
              </Reveal>
            </div>

            <div className="relative">
              <Reveal delay={0.16}>
                <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-2 shadow-2xl">
                  <img
                    src={imgStrategy}
                    alt="Startups Brand & Strategy Showcase"
                    className="h-[340px] w-full rounded-xl object-cover sm:h-[420px]"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl border border-border/80 bg-background/90 p-4 backdrop-blur-md">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-primary-bright">
                        Venture Architecture
                      </p>
                      <p className="mt-0.5 font-display text-sm font-bold uppercase tracking-tight text-foreground">
                        Credibility For Capital & Customers
                      </p>
                    </div>
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase text-primary-bright">
                      Stage Aligned
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Insight Section */}
      <Section className="border-b border-border bg-surface/20" fullScreen={false}>
        <div className="mx-auto max-w-4xl py-6">
          <SectionHeading
            eyebrow="Market Reality"
            title={<>Your product runs ahead of your brand.</>}
            className="mb-8"
          />
          <div className="grid gap-6 text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            <Reveal delay={0.08}>
              <p>
                Early customers, investors, partners and first hires judge a startup in seconds, from
                its name, logo and website. A template logo and a half-built site make a good idea
                look unfinished.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p>
                Too much brand costs you as well: you spend budget before the market has shown you
                what works. A startup needs the amount of brand that fits its stage.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Deliverables Section */}
      <Section className="border-b border-border" fullScreen={false}>
        <div className="flex flex-wrap items-end justify-between gap-4 pb-8 border-b border-border/80">
          <SectionHeading
            eyebrow="Deliverables & Systems"
            index="[ 06 disciplines ]"
            title={<>What we build.</>}
            lead="The complete growth and brand stack designed to move you from initial pitch to market dominance."
          />
          <span className="font-mono text-[10px] uppercase tracking-widest text-primary-bright">
            Systematic Scope
          </span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.num} delay={i * 0.05} className="h-full">
                <div className="group relative flex h-full flex-col justify-between rounded-xl border border-border bg-surface/30 p-6 transition-all duration-300 hover:border-primary hover:bg-surface/70 hover:shadow-[0_0_24px_-6px_var(--primary)]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-primary-bright">
                        {item.num}
                      </span>
                      <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary-bright" />
                    </div>
                    <div className="mt-4 h-px w-full bg-border">
                      <div className="h-px w-1/4 bg-primary transition-all duration-300 group-hover:w-full" />
                    </div>
                    <h3 className="mt-4 font-display text-base font-bold uppercase tracking-tight text-foreground transition-colors group-hover:text-primary-bright sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Built to your stage Section */}
      <Section className="border-b border-border bg-surface/10" fullScreen={false}>
        <div className="flex flex-wrap items-end justify-between gap-4 pb-8 border-b border-border/80">
          <SectionHeading
            eyebrow="Lifecycle Alignment"
            index="[ 03 stages ]"
            title={<>Built to your stage.</>}
            lead="We do not sell enterprise retainers to pre-revenue founders. We engineer the exact asset stack your milestone demands."
          />
          <span className="font-mono text-[10px] uppercase tracking-widest text-primary-bright">
            Agile Scope
          </span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {stages.map((st, i) => (
            <Reveal key={st.stage} delay={i * 0.06} className="h-full">
              <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-border bg-surface/30 p-6 sm:p-7 transition-all duration-300 hover:border-primary hover:bg-surface/60">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-bright">
                      {st.stage}
                    </span>
                    <span className="rounded-full border border-border bg-background px-2.5 py-1 font-mono text-[9px] uppercase text-muted-foreground">
                      {st.highlight}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-tight text-foreground group-hover:text-primary-bright transition-colors">
                    {st.name}
                  </h3>
                  <div className="my-4 h-px w-full bg-border" />
                  <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {st.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Choosing a branding agency for your startup (Checklist) */}
      <Section className="border-b border-border" fullScreen={false}>
        <div className="mx-auto max-w-4xl py-6">
          <SectionHeading
            eyebrow="Agency Evaluation"
            title={<>Choosing a branding agency for your startup.</>}
            lead="Check five things before you hire."
            className="mb-8"
          />

          <div className="grid gap-3">
            {checklist.map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="flex items-start gap-4 rounded-xl border border-border/80 bg-surface/30 p-4 sm:p-5 transition-all duration-300 hover:border-primary">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 font-mono text-xs font-bold text-primary-bright">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-foreground sm:text-base">
                      {item.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">{item.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.25}>
            <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-6 backdrop-blur-sm sm:p-8">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-primary-bright" />
                <span className="font-mono text-xs uppercase tracking-wider text-primary-bright font-bold">
                  The Cravent Standard
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground sm:text-base">
                We work this way: <strong>diagnosis first</strong>,{" "}
                <strong>senior execution</strong>, and{" "}
                <strong>one connected practice</strong> across branding, marketing, strategy and
                technology.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Proof From Our Work (Erthaloka) */}
      <Section id="proof" className="border-b border-border bg-surface/10" fullScreen={false}>
        <div className="flex flex-wrap items-end justify-between gap-4 pb-8 border-b border-border/80">
          <SectionHeading
            eyebrow="Verified Evidence"
            title={<>Proof from our work.</>}
            lead="Deep-tech, planetary platforms, and venture systems launched to global stakeholders."
          />
          <Btn to="/work" variant="outline" size="md">
            All Case Studies
          </Btn>
        </div>

        <div className="mt-8 flex items-center mx-auto w-[90%] max-w-xl">
          <Reveal delay={0.05}>
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 sm:p-8 transition-all duration-300 hover:border-primary hover:shadow-[0_0_32px_-6px_var(--primary)]">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={logoErthaloka}
                      alt="Erthaloka Logo"
                      className="h-10 w-auto object-contain brightness-95"
                    />
                    <div>
                      <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground">
                        Erthaloka
                      </h3>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        Sustainability & Planetary Deep-Tech
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase text-primary-bright">
                      Strategy
                    </span>
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase text-primary-bright">
                      Identity
                    </span>
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase text-primary-bright">
                      UI/UX
                    </span>
                  </div>
                </div>

                <div className="mt-6 h-px w-full bg-border" />

                <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Erthaloka is a planetary performance platform that makes nature’s economic value
                  measurable and actionable. The branding blends nature, technology, and finance
                  through a modern, credible visual system—covering strategy, logo, identity,
                  digital assets, and motion storytelling. The result positions Erthaloka as a
                  forward-looking deep-tech platform for natural-capital intelligence and sustainable
                  decision-making.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-border/60">
                <Link
                  to="/work/$slug"
                  params={{ slug: "erthaloka-branding" }}
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-primary-bright transition-colors hover:text-foreground"
                >
                  Open the Erthaloka case study <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="border-b border-border bg-surface/20" fullScreen={false}>
        <div className="flex flex-wrap items-end justify-between gap-4 pb-6 border-b border-border/80">
          <SectionHeading
            eyebrow="Delivery Pipeline"
            index="[ 05 steps ]"
            title={<>Our process.</>}
            lead="A disciplined, five-step delivery pipeline engineered to turn commercial opportunities into compounding assets."
          />
          <span className="font-mono text-[10px] uppercase tracking-widest text-primary-bright">
            Methodology
          </span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.05} className="h-full">
              <div className="group relative flex h-full flex-col justify-between rounded-xl border border-border/80 bg-background/80 p-5 transition-all duration-300 hover:border-primary hover:bg-background hover:shadow-sm">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-primary-bright">
                      {step.step}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-primary transition-transform duration-300 group-hover:scale-150" />
                  </div>
                  <div className="mt-3 h-px w-full bg-border">
                    <div className="h-px w-1/3 bg-primary" />
                  </div>
                  <h3 className="mt-3 font-display text-sm font-bold uppercase tracking-tight text-foreground transition-colors group-hover:text-primary-bright sm:text-base">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="border-b border-border" fullScreen={false}>
        <div className="mx-auto max-w-3xl py-6">
          <SectionHeading
            eyebrow="Clarity & Answers"
            title={<>Frequently Asked Questions.</>}
            lead="Straightforward answers about startup branding, stage alignment, and investor readiness."
            className="mb-8"
          />

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="py-5 font-display text-base font-bold uppercase text-foreground hover:no-underline hover:text-primary-bright sm:text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section className="relative overflow-hidden" fullScreen={false}>
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-4xl py-12 text-center sm:py-20">
          <Reveal>
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="eyebrow">Scale From Day One</span>
              <span className="h-px w-8 bg-primary" />
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Build a brand your startup can grow into.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
              Tell us what you are building and where you are stuck. We start with a Growth Audit.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-8 flex justify-center">
              <Btn to="/contact" size="lg" className="shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                Book a Growth Audit
              </Btn>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
