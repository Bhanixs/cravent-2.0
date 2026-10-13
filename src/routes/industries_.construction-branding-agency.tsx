import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Btn, Reveal, Section, SectionHeading } from "@/components/site/kit";
import { CheckCircle2, ArrowRight, ShieldCheck, Compass, Layers, PhoneCall } from "lucide-react";
import imgRealEstate from "@/assets/showcase/industry-realestate.jpg";
import logoArkisan from "@/assets/logos/arkisan.png";
import logoDivyam from "@/assets/logos/divyam.png";

const title = "Branding for Construction Companies & Real Estate | Cravent";
const description =
  "Branding for construction companies, developers, architects and real estate agents: identity, sales material and marketing that build buyer trust.";

const faqs = [
  {
    q: "What does branding for a construction company include?",
    a: "Strategy and positioning, a logo and identity system, a brand book, project and sales material, and a website. Marketing follows once the foundation is set.",
  },
  {
    q: "Do you work with real estate agents as well as developers?",
    a: "Yes. Agents and brokers need a personal identity, a consistent profile and listing presentation, and content that earns referrals. We scope that separately from a company brand.",
  },
  {
    q: "We're a small contractor. Do we need a full brand?",
    a: "Maybe not. We start with a Growth Audit to find what holds back your enquiries, then recommend the work that fixes it. For a small contractor that often means an identity, one strong brochure and a better website.",
  },
  {
    q: "Can you bring in leads too?",
    a: "Yes. Marketing and Growth is one of our four disciplines, so the brand and the campaigns come from the same team.",
  },
];

const deliverables = [
  {
    num: "01",
    title: "Positioning and brand strategy",
    desc: "Define who you build for and why a buyer picks you over the next developer.",
    icon: Compass,
  },
  {
    num: "02",
    title: "Brand identity and brand book",
    desc: "A logo system, colour palette, typography and rules that keep each project, hoarding and brochure recognisable.",
    icon: Layers,
  },
  {
    num: "03",
    title: "Sales and investor material",
    desc: "Project brochures, investor decks and 3D visualisation direction that explain a project in minutes.",
    icon: ShieldCheck,
  },
  {
    num: "04",
    title: "Website and enquiry journey",
    desc: "A site that moves visitors toward a site visit or a call, with project pages that show your standards.",
    icon: ArrowRight,
  },
  {
    num: "05",
    title: "Marketing",
    desc: "Search and Meta campaigns, SEO and content that bring in qualified enquiries once the brand is set.",
    icon: CheckCircle2,
  },
  {
    num: "06",
    title: "Personal branding",
    desc: "Identity, profile and content direction for agents, brokers and founders who sell on their own name.",
    icon: PhoneCall,
  },
];

const audience = [
  "Home builders and contractors",
  "Boutique and architecture-led developers",
  "Sustainability-first developers",
  "Branded-residence and hospitality-linked developers",
  "Design-led commercial and workspace owners",
  "Architects and interior firms",
  "Real estate agents and brokers",
];

const processSteps = [
  {
    step: "01",
    title: "Understand",
    body: "We study your projects, buyers and competitors, and trace how enquiries reach you today.",
  },
  {
    step: "02",
    title: "Define",
    body: "We choose the position you can own and set the scope that proves it.",
  },
  {
    step: "03",
    title: "Build",
    body: "We produce the identity, brand book, sales material and website.",
  },
  {
    step: "04",
    title: "Launch",
    body: "We take the brand to buyers through campaigns, channel partners and your sales team.",
  },
  {
    step: "05",
    title: "Improve",
    body: "We review your enquiries, find what buyers respond to and refine the work.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Cravent",
    url: "https://cravent.in/industries/construction-branding-agency",
    description,
    telephone: "+91 87783 45901",
    email: "info@cravent.in",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Puducherry",
      addressCountry: "IN",
    },
    serviceType: "Branding for Construction Companies & Real Estate",
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

export const Route = createFileRoute("/industries_/construction-branding-agency")({
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
  component: ConstructionBrandingPage,
});

function ConstructionBrandingPage() {
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
                  <span className="eyebrow">Construction & Real Estate</span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    [ Sector Specialization ]
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <h1 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.75rem)] font-bold uppercase leading-[1.08] tracking-tight">
                  Branding for construction companies that earns buyer trust before the site visit.
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
                  Cravent creates brand identities and marketing for construction companies,
                  developers, architects, interior firms and real estate agents. Your brand should
                  look as dependable as your work.
                </p>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Btn to="/contact" size="md">
                    Book a Growth Audit
                  </Btn>
                  <Btn onClick={scrollToProof} variant="outline" size="md">
                    See Arkisan and Divyam
                  </Btn>
                </div>
              </Reveal>
            </div>

            <div className="relative">
              <Reveal delay={0.16}>
                <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-2 shadow-2xl">
                  <img
                    src={imgRealEstate}
                    alt="Construction & Real Estate Branding Showcase"
                    className="h-[340px] w-full rounded-xl object-cover sm:h-[420px]"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl border border-border/80 bg-background/90 p-4 backdrop-blur-md">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-primary-bright">
                        Architectural Verification
                      </p>
                      <p className="mt-0.5 font-display text-sm font-bold uppercase tracking-tight text-foreground">
                        Built For High-Ticket Trust
                      </p>
                    </div>
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase text-primary-bright">
                      Tier 1 Quality
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
            title={<>Buyers can&apos;t inspect your standards.</>}
            className="mb-8"
          />
          <div className="grid gap-6 text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            <Reveal delay={0.08}>
              <p>
                A person choosing a builder or a home commits a large sum from a distance. They
                can&apos;t test your standards, so they study what you show them: how clearly you
                describe your work, whether your brochure matches your website, whether your name
                looks like it will outlast the project.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p>
                Many construction and property brands give buyers little to go on. An old logo, a
                brochure that differs from the website and site photos with no story leave buyers
                guessing about work that may be excellent.
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
            lead="Comprehensive brand architecture built specifically for property developers, builders, and real estate professionals."
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

      {/* Target Audience Section */}
      <Section className="border-b border-border bg-surface/10" fullScreen={false}>
        <div className="mx-auto max-w-4xl py-6">
          <SectionHeading
            eyebrow="Client Alignment"
            title={<>Who this is for.</>}
            lead="Tailored brand systems built for companies where project credibility drives high-value commitments."
            className="mb-8"
          />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {audience.map((item, i) => (
              <Reveal key={item} delay={i * 0.04}>
                <div className="flex items-center gap-3 rounded-lg border border-border/80 bg-background/80 p-4 transition-all duration-300 hover:border-primary">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="font-sans text-sm font-medium text-foreground">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Proof From Our Work */}
      <Section id="proof" className="border-b border-border" fullScreen={false}>
        <div className="flex flex-wrap items-end justify-between gap-4 pb-8 border-b border-border/80">
          <SectionHeading
            eyebrow="Verified Evidence"
            title={<>Proof from our work.</>}
            lead="Real brand systems engineered for architecture, luxury spaces, and precision home construction."
          />
          <Btn to="/work" variant="outline" size="md">
            All Case Studies
          </Btn>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Arkisan */}
          <Reveal delay={0.05}>
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 sm:p-8 transition-all duration-300 hover:border-primary hover:shadow-[0_0_32px_-6px_var(--primary)]">
              <div>
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                  <div className="flex items-center gap-3">
                    <img
                      src={logoArkisan}
                      alt="Arkisan Logo"
                      className="h-10 w-auto object-contain brightness-95"
                    />
                    <div>
                      <h3 className="font-display text-xl font-bold uppercase tracking-tight text-foreground">
                        Arkisan
                      </h3>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        Home Construction & Engineering
                      </p>
                    </div>
                  </div>

                  <span className="self-start rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase text-primary-bright md:ml-auto md:self-center">
                    Branding
                  </span>
                </div>

                <div className="mt-6 h-px w-full bg-border" />

                <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Arkisan builds homes around engineering precision, transparency and ethical
                  practice. We created its brand identity and visual direction to bring structure
                  and reliability to home building in India.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-border/60">
                <Link
                  to="/work/$slug"
                  params={{ slug: "arkisan-branding" }}
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-primary-bright transition-colors hover:text-foreground"
                >
                  Open the Arkisan case study <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Divyam */}
          <Reveal delay={0.1}>
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 sm:p-8 transition-all duration-300 hover:border-primary hover:shadow-[0_0_32px_-6px_var(--primary)]">
              <div>
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                  <div className="flex items-center gap-3">
                    <img
                      src={logoDivyam}
                      alt="Divyam Logo"
                      className="h-10 w-auto object-contain brightness-95"
                    />
                    <div>
                      <h3 className="font-display text-xl font-bold uppercase tracking-tight text-foreground">
                        Divyam
                      </h3>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        Architecture & Luxury Spaces
                      </p>
                    </div>
                  </div>
                  <span className="self-start rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase text-primary-bright md:ml-auto md:self-center">
                    Branding & PR
                  </span>
                </div>

                <div className="mt-6 h-px w-full bg-border" />

                <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Divyam represents high-end architectural living and modern craftsmanship. Cravent
                  crafted a refined visual identity and comprehensive brand book that articulates
                  the harmony between modern minimalism and timeless Indian architectural materials.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-border/60">
                <Link
                  to="/work/$slug"
                  params={{ slug: "divyam-branding" }}
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-primary-bright transition-colors hover:text-foreground"
                >
                  Open the Divyam case study <ArrowRight className="h-3.5 w-3.5" />
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
            lead="Straightforward answers about our construction and real estate branding practice."
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
              <span className="eyebrow">Ready to Build</span>
              <span className="h-px w-8 bg-primary" />
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Build a brand as solid as your work.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
              Tell us about your projects and where enquiries stall. We start with a Growth Audit.
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
