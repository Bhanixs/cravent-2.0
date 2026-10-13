import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Btn, Reveal, Section, SectionHeading } from "@/components/site/kit";
import {
  ArrowRight,
  Sparkles,
  Camera,
  ShoppingBag,
  TrendingUp,
  Palette,
  Phone,
  MessageCircle,
  Compass,
} from "lucide-react";
import imgFashion from "@/assets/showcase/industry-fashion.jpg";
import logoValonk from "@/assets/logos/valonk.png";
import logoVivium from "@/assets/logos/vivium.png";
import logoMofra from "@/assets/logos/mofra.png";

const title = "Fashion Branding Agency | Clothing & Lifestyle | Cravent";
const description =
  "A fashion branding agency for clothing, accessories, beauty and lifestyle labels: identity, art direction, storefronts and campaigns, from Puducherry.";

const faqs = [
  {
    q: "What is the difference between a logo and fashion branding?",
    a: "A logo is one asset. Branding adds the position, identity, photography style, packaging and voice that let customers recognise a label without seeing the logo.",
  },
  {
    q: "Do you work with small or new labels?",
    a: "Yes. We scope the work to the label's stage. A new label may need identity and a storefront first, and an established one may need repositioning.",
  },
  {
    q: "Can you run our ads after the brand is built?",
    a: "Yes. Marketing and Growth is one of our four disciplines, so your campaigns use the same identity and message.",
  },
  {
    q: "Who writes the photography guidelines?",
    a: "We do. We set the art direction so any photographer you hire delivers images that fit the brand.",
  },
];

const deliverables = [
  {
    num: "01",
    title: "Positioning and brand strategy",
    desc: "Decide who the label is for and what voice it uses.",
    icon: Compass,
  },
  {
    num: "02",
    title: "Identity system",
    desc: "Logo, colour, typography, labels, tags and packaging that hold together across touchpoints.",
    icon: Palette,
  },
  {
    num: "03",
    title: "Art direction and photography guidelines",
    desc: "Written rules that make each shoot, with any photographer, look like the same brand.",
    icon: Camera,
  },
  {
    num: "04",
    title: "Digital storefront",
    desc: "An online store built around your identity and your customers' shopping habits.",
    icon: ShoppingBag,
  },
  {
    num: "05",
    title: "Campaigns and launches",
    desc: "Collection and seasonal campaigns with a clear idea behind them.",
    icon: Sparkles,
  },
  {
    num: "06",
    title: "Performance marketing",
    desc: "Meta and Google campaigns that send the right customers to a brand they recognise.",
    icon: TrendingUp,
  },
];

const audience = [
  "Apparel and clothing labels",
  "Accessories and lifestyle brands",
  "Beauty and wellness brands",
  "Premium and design-led fashion",
  "Sustainable and ethical fashion",
];

const processSteps = [
  {
    step: "01",
    title: "Understand",
    body: "We study your customers, competitors, current product and sales sources.",
  },
  {
    step: "02",
    title: "Define",
    body: "We choose the position the label can own and set the scope of work.",
  },
  {
    step: "03",
    title: "Build",
    body: "We produce the identity, art direction, storefront and campaign assets.",
  },
  {
    step: "04",
    title: "Launch",
    body: "The collection and campaign go live across your store and channels.",
  },
  {
    step: "05",
    title: "Improve",
    body: "We read the sales and engagement data and refine the work.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Cravent",
    url: "https://cravent.in/industries/fashion-branding-agency",
    description,
    telephone: "+91 87783 45901",
    email: "info@cravent.in",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Puducherry",
      addressCountry: "IN",
    },
    serviceType: "Fashion Branding Agency",
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

export const Route = createFileRoute("/industries_/fashion-branding-agency")({
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
  component: FashionBrandingPage,
});

function FashionBrandingPage() {
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
                  <span className="eyebrow">Fashion & Lifestyle</span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    [ Sector Specialization ]
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <h1 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.75rem)] font-bold uppercase leading-[1.08] tracking-tight">
                  A fashion branding agency for labels that want customers to remember them.
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
                  Cravent develops brand identities, digital storefronts and campaigns for fashion,
                  apparel, accessories, beauty, wellness and lifestyle brands.
                </p>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Btn to="/contact" size="md">
                    Book a Growth Audit
                  </Btn>
                  <Btn onClick={scrollToProof} variant="outline" size="md">
                    See Valonk
                  </Btn>
                </div>
              </Reveal>
            </div>

            <div className="relative">
              <Reveal delay={0.16}>
                <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-2 shadow-2xl">
                  <img
                    src={imgFashion}
                    alt="Fashion & Lifestyle Branding Showcase"
                    className="h-[340px] w-full rounded-xl object-cover sm:h-[420px]"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl border border-border/80 bg-background/90 p-4 backdrop-blur-md">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-primary-bright">
                        Editorial Craft
                      </p>
                      <p className="mt-0.5 font-display text-sm font-bold uppercase tracking-tight text-foreground">
                        Built For Brand Equity
                      </p>
                    </div>
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase text-primary-bright">
                      Timeless Aesthetics
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
            title={<>Good product, forgettable brand.</>}
            className="mb-8"
          />
          <div className="grid gap-6 text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            <Reveal delay={0.08}>
              <p>
                Fashion buyers decide in seconds from a photo, a name and a feed. Many labels with a
                strong product look like a template: a stock logo, product shots in three different
                styles, and a store that bears no resemblance to the Instagram page.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p>
                Customers who can&apos;t tell what a label stands for compare it on price. A clear
                brand gives them a reason to pay yours.
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
            lead="Complete creative and commerce infrastructure engineered to elevate apparel and lifestyle labels."
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
            lead="From independent luxury ateliers to fast-growing direct-to-consumer labels."
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
            lead="Timeless identity systems built for lifestyle, luxury apparel, and wellness labels."
          />
          <Btn to="/work" variant="outline" size="md">
            All Case Studies
          </Btn>
        </div>

        <div className="mt-8 flex items-center mx-auto w-[50%] max-w-3xl">
          {/* Valonk Card */}
          <Reveal delay={0.05}>
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 sm:p-8 transition-all duration-300 hover:border-primary hover:shadow-[0_0_32px_-6px_var(--primary)]">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={logoValonk}
                      alt="Valonk Logo"
                      className="h-10 w-auto object-contain brightness-95"
                    />
                    <div>
                      <h3 className="font-display text-xl font-bold uppercase tracking-tight text-foreground">
                        Valonk
                      </h3>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        Fashion & Lifestyle
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase text-primary-bright">
                    Branding & Media
                  </span>
                </div>

                <div className="mt-6 h-px w-full bg-border" />

                <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Valonk is a fashion and lifestyle brand. We built its full identity system, from
                  visual direction and logo design to product photography guidelines and marketing
                  communication, and kept the look timeless and elegant.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-border/60">
                <Link
                  to="/work/$slug"
                  params={{ slug: "valonk-branding" }}
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-primary-bright transition-colors hover:text-foreground"
                >
                  Open the Valonk case study <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Puducherry Local Spotlight Section */}
      <Section className="border-b border-border bg-surface/30" fullScreen={false}>
        <div className="mx-auto max-w-4xl rounded-2xl border border-border/80 bg-background/90 p-6 sm:p-10 shadow-lg">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-xl">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary-bright">
                [ Studio Location ]
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl">
                Looking for a clothing branding company near you?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Cravent works from Puducherry. Start a conversation by call or WhatsApp. Senior
                people handle the work from first brief to launch.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/918778345901?text=Hello%20Cravent%20team,%20I'm%20interested%20in%20fashion%20branding"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-primary-bright transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
              <a
                href="tel:8778345901"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground transition-colors hover:border-primary hover:text-primary-bright"
              >
                <Phone className="h-4 w-4" /> Call Studio
              </a>
            </div>
          </div>
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
            lead="Straightforward answers about fashion, apparel, and lifestyle branding."
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
              <span className="eyebrow">Ready to Launch</span>
              <span className="h-px w-8 bg-primary" />
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Make your label unmistakable.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
              Tell us about the label and where you want to take it. We start with a Growth Audit.
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
