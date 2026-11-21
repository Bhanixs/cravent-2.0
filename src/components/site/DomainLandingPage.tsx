import { Link } from "@tanstack/react-router";
import {
  type LucideIcon,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import { SITE_URL } from "@/lib/seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Btn, Reveal, Section, SectionHeading } from "@/components/site/kit";

export interface WhatWeBuildItem {
  num: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface HowItWorksStep {
  step: string;
  title: string;
  body: string;
}

export interface WhyChooseItem {
  title: string;
  desc: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface OtherIndustryLink {
  title: string;
  label: string;
  url: string;
  description: string;
}

export interface DomainLandingPageProps {
  // Metadata & Schema
  canonicalUrl: string;
  pageTitle: string;
  metaDescription: string;
  serviceType: string;
  breadcrumbName: string;

  // Hero Section
  sectorEyebrow: string;
  sectorTag?: string;
  h1: string;
  heroBody: string;
  supportLine: string;
  heroImage: string;
  heroImageAlt: string;
  heroBadgeTop: string;
  heroBadgeBottom: string;
  heroBadgeTag: string;

  // Problem / Context Section
  problemHeading: string;
  problemParagraphs: string[];

  // What We Build / What We Do Section
  whatWeDoHeading: string;
  whatWeDoEyebrow?: string;
  whatWeDoLead?: string;
  whatWeDoItems: WhatWeBuildItem[];

  // How It Works Section
  howItWorksHeading: string;
  howItWorksSteps: HowItWorksStep[];
  howItWorksNote?: string;

  // Why Choose Cravent Section
  whyChooseHeading: string;
  whyChooseLead?: string;
  whyChooseItems: WhyChooseItem[];

  // Pair It With Section
  pairItWithText: string;
  pairItWithLinkText: string;
  pairItWithUrl: string;
  pairItWithBadge?: string;

  // FAQ Section
  faqs: FAQItem[];

  // Closing CTA Section
  closingCtaHeading: string;
  closingCtaButtonText?: string;

  // Other Industries Strip
  otherIndustriesHeading?: string;
  otherIndustries: OtherIndustryLink[];
}

interface WindowWithGtag extends Window {
  gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
}

export function DomainLandingPage({
  canonicalUrl,
  pageTitle,
  metaDescription,
  serviceType,
  breadcrumbName,
  sectorEyebrow,
  sectorTag = "[ Sector Specialization ]",
  h1,
  heroBody,
  supportLine,
  heroImage,
  heroImageAlt,
  heroBadgeTop,
  heroBadgeBottom,
  heroBadgeTag,
  problemHeading,
  problemParagraphs,
  whatWeDoHeading,
  whatWeDoEyebrow = "Deliverables & Scope",
  whatWeDoLead,
  whatWeDoItems,
  howItWorksHeading,
  howItWorksSteps,
  howItWorksNote,
  whyChooseHeading,
  whyChooseLead = "Engineered for real commercial outcomes, scalable code, and long-term partnership.",
  whyChooseItems,
  pairItWithText,
  pairItWithLinkText,
  pairItWithUrl,
  pairItWithBadge = "Connected Twin Service",
  faqs,
  closingCtaHeading,
  closingCtaButtonText = "Start your brief",
  otherIndustriesHeading = "Other industries we build for",
  otherIndustries,
}: DomainLandingPageProps) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Cravent",
      url: `${SITE_URL}${canonicalUrl}`,
      description: metaDescription,
      telephone: "+91 87783 45901",
      email: "info@cravent.in",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Puducherry",
        addressRegion: "Pondicherry",
        addressCountry: "IN",
      },
      areaServed: [
        { "@type": "City", name: "Pondicherry" },
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "Australia" },
        { "@type": "Country", name: "Singapore" },
      ],
      serviceType,
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType,
      provider: {
        "@type": "ProfessionalService",
        name: "Cravent",
        url: `${SITE_URL}/`,
        telephone: "+91 87783 45901",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Puducherry",
          addressRegion: "Pondicherry",
          addressCountry: "IN",
        },
      },
      areaServed: [
        { "@type": "City", name: "Pondicherry" },
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "Australia" },
        { "@type": "Country", name: "Singapore" },
      ],
      description: metaDescription,
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
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${SITE_URL}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: breadcrumbName,
          item: `${SITE_URL}${canonicalUrl}`,
        },
      ],
    },
  ];

  const trackStartBrief = () => {
    if (typeof window !== "undefined") {
      const win = window as unknown as WindowWithGtag;
      win.gtag?.("event", "start_brief_click", {
        event_category: "engagement",
        event_label: pageTitle,
        page_location: window.location.href,
      });
    }
  };

  const trackWhatsAppClick = () => {
    if (typeof window !== "undefined") {
      const win = window as unknown as WindowWithGtag;
      win.gtag?.("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: pageTitle,
        page_location: window.location.href,
      });
    }
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
                  <span className="eyebrow">{sectorEyebrow}</span>
                  <span className="font-mono text-[10px] text-muted-foreground">{sectorTag}</span>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <h1 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.75rem)] font-bold uppercase leading-[1.08] tracking-tight">
                  {h1}
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
                  {heroBody}
                </p>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Btn to="/contact" size="md" onClick={trackStartBrief}>
                    Start your brief
                  </Btn>
                  <a
                    href="https://wa.me/918778345901?text=Hello%20Cravent"
                    target="_blank"
                    rel="noreferrer"
                    onClick={trackWhatsAppClick}
                    className="group relative inline-flex items-center justify-center gap-2 rounded-full border border-border-strong px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary-bright"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {supportLine}
                </p>
              </Reveal>
            </div>

            <div className="relative">
              <Reveal delay={0.16}>
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-2 shadow-2xl transition-all duration-300 hover:border-primary">
                  <img
                    src={heroImage}
                    alt={heroImageAlt}
                    className="h-[340px] w-full rounded-xl object-cover sm:h-[420px]"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl border border-border/80 bg-background/90 p-4 backdrop-blur-md">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-primary-bright">
                        {heroBadgeTop}
                      </p>
                      <p className="mt-0.5 font-display text-sm font-bold uppercase tracking-tight text-foreground">
                        {heroBadgeBottom}
                      </p>
                    </div>
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase text-primary-bright">
                      {heroBadgeTag}
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Market Reality Section */}
      <Section className="border-b border-border bg-surface/20" fullScreen={false}>
        <div className="mx-auto max-w-4xl py-6">
          <SectionHeading eyebrow="Market Reality" title={<>{problemHeading}</>} className="mb-8" />
          <div className="grid gap-6 text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            {problemParagraphs.map((para, i) => (
              <Reveal key={i} delay={0.08 + i * 0.04}>
                <p>{para}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* What We Build / What We Do Section */}
      <Section className="border-b border-border" fullScreen={false}>
        <div className="flex flex-wrap items-end justify-between gap-4 pb-8 border-b border-border/80">
          <SectionHeading
            eyebrow={whatWeDoEyebrow}
            index={`[ 0${whatWeDoItems.length} disciplines ]`}
            title={<>{whatWeDoHeading}.</>}
            {...(whatWeDoLead ? { lead: whatWeDoLead } : {})}
          />
          <span className="font-mono text-[10px] uppercase tracking-widest text-primary-bright">
            Systematic Scope
          </span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whatWeDoItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.num} delay={i * 0.04} className="h-full">
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

      {/* How It Works Section */}
      <Section className="border-b border-border bg-surface/20" fullScreen={false}>
        <div className="flex flex-wrap items-end justify-between gap-4 pb-6 border-b border-border/80">
          <SectionHeading
            eyebrow="Delivery Pipeline"
            index={`[ 0${howItWorksSteps.length} steps ]`}
            title={<>{howItWorksHeading}.</>}
            lead="A disciplined, milestone-driven execution pipeline from first brief to long-term growth."
          />
          <span className="font-mono text-[10px] uppercase tracking-widest text-primary-bright">
            Methodology
          </span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {howItWorksSteps.map((step, i) => (
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

        {howItWorksNote && (
          <Reveal delay={0.2}>
            <div className="mt-8 rounded-xl border border-border bg-surface/40 p-4 text-center sm:p-5">
              <p className="font-mono text-xs sm:text-sm text-foreground/90">{howItWorksNote}</p>
            </div>
          </Reveal>
        )}
      </Section>

      {/* Why Choose Cravent Section */}
      <Section className="border-b border-border" fullScreen={false}>
        <div className="mx-auto max-w-4xl py-6">
          <SectionHeading
            eyebrow="The Cravent Advantage"
            title={<>{whyChooseHeading}.</>}
            lead={whyChooseLead}
            className="mb-8"
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {whyChooseItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.04}>
                <div className="group relative flex h-full flex-col rounded-xl border border-border bg-surface/30 p-5 transition-all duration-300 hover:border-primary hover:bg-surface/60">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary-bright group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold uppercase tracking-tight text-foreground group-hover:text-primary-bright transition-colors sm:text-base">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Pair It With Section */}
      <Section className="border-b border-border bg-surface/10" fullScreen={false}>
        <div className="mx-auto max-w-4xl py-6">
          <Reveal>
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 sm:p-8 transition-all duration-300 hover:border-primary hover:shadow-[0_0_32px_-6px_var(--primary)]">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-primary" />
                  <span className="eyebrow">Connected Discipline</span>
                </div>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase text-primary-bright">
                  {pairItWithBadge}
                </span>
              </div>

              <h2 className="mt-4 font-display text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-foreground">
                Pair it with
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {pairItWithText}
              </p>

              <div className="mt-6 pt-4 border-t border-border/60">
                <Link
                  to={pairItWithUrl}
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-primary-bright transition-colors hover:text-foreground"
                >
                  <span>{pairItWithLinkText}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="border-b border-border" fullScreen={false}>
        <div className="mx-auto max-w-3xl py-6">
          <SectionHeading
            eyebrow="Clarity & Answers"
            title={<>Frequently Asked Questions.</>}
            lead="Direct answers about timelines, scope, integrations, IP ownership, and working with Cravent."
            className="mb-8"
          />

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border">
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

      {/* Closing CTA Section */}
      <Section className="relative overflow-hidden" fullScreen={false}>
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-4xl py-12 text-center sm:py-20">
          <Reveal>
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="eyebrow">Start Your Brief</span>
              <span className="h-px w-8 bg-primary" />
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="mt-4 font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              {closingCtaHeading}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
              Share what you sell, what you need, timeline, and budget range. We will reply with a
              scoped proposal and discovery call.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <Btn
                to="/contact"
                size="lg"
                onClick={trackStartBrief}
                className="shadow-[0_0_30px_rgba(37,99,235,0.4)]"
              >
                {closingCtaButtonText}
              </Btn>
              <a
                href="https://wa.me/918778345901?text=Hello%20Cravent"
                target="_blank"
                rel="noreferrer"
                onClick={trackWhatsAppClick}
                className="group relative inline-flex items-center justify-center gap-2 rounded-full border border-border-strong px-7 py-4 font-mono text-xs uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary-bright"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10 border-t border-border/80 pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <p>Pondicherry, India · info@cravent.in · +91 87783 45901</p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Other Industries We Build For Strip */}
      <Section className="border-t border-border bg-surface/20" fullScreen={false}>
        <div className="mx-auto max-w-5xl py-6">
          <SectionHeading
            eyebrow="Sector Cross-Links"
            title={<>{otherIndustriesHeading}.</>}
            lead="Explore our dedicated engineering and growth practices across specialised industry verticals."
            className="mb-8"
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {otherIndustries.map((ind, i) => (
              <Reveal key={ind.url} delay={i * 0.05} className="h-full">
                <Link
                  to={ind.url}
                  className="group relative flex h-full flex-col justify-between rounded-xl border border-border bg-background/80 p-5 transition-all duration-300 hover:border-primary hover:bg-surface/50"
                >
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-primary-bright">
                      {ind.title}
                    </span>
                    <h3 className="mt-2 font-display text-sm font-bold uppercase tracking-tight text-foreground transition-colors group-hover:text-primary-bright sm:text-base">
                      {ind.label}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {ind.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-primary-bright">
                    <span>Explore vertical</span>
                    <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
