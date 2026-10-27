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
  Compass,
  MapPin,
  CalendarCheck,
  Video,
  Users2,
  Share2,
  TrendingUp,
} from "lucide-react";
import imgHospitality from "@/assets/showcase/industry-hospitality.jpg";
import logoTravellers from "@/assets/logos/travellers triibe.png";

const title = "Hospitality Branding Agency: Hotels, Resorts, Travel | Cravent";
const description =
  "Branding for hotels, resorts, travel companies and tourism businesses: positioning, identity, content and booking journeys that win guests.";

const faqs = [
  {
    q: "What is hospitality branding?",
    a: "It covers the position, identity, tone and guest-facing material that tell people what a stay or trip with you will feel like.",
  },
  {
    q: "Do you only work with large hotels?",
    a: "No. Size changes the scope and the method stays the same. A boutique stay and a resort both need a clear promise told in one voice.",
  },
  {
    q: "Can you improve our booking journey?",
    a: "Yes. We review the steps guests take from first look to booking, then redesign the ones where they drop off.",
  },
  {
    q: "Can you brand a travel community or an experience instead of a property?",
    a: "Yes. Travellers Tribe is a community brand, and we built its identity, iconography and campaign guidelines.",
  },
];

const deliverables = [
  {
    num: "01",
    title: "Positioning and brand story",
    desc: "The single idea that sets your property, trip or experience apart.",
    icon: Compass,
  },
  {
    num: "02",
    title: "Identity and guest-facing system",
    desc: "Logo, colour, typography and the material guests meet: menus, welcome notes, signage direction and in-stay messaging.",
    icon: MapPin,
  },
  {
    num: "03",
    title: "Content and campaign direction",
    desc: "Photography and video direction, seasonal campaigns and a content plan.",
    icon: Video,
  },
  {
    num: "04",
    title: "Website and booking journey",
    desc: "A short path from first look to confirmed booking.",
    icon: CalendarCheck,
  },
  {
    num: "05",
    title: "Partnerships",
    desc: "Tie-ups with travel partners, creators and local businesses that extend your reach.",
    icon: Share2,
  },
  {
    num: "06",
    title: "Digital marketing",
    desc: "Meta, Google and SEO that bring the right guests to the brand.",
    icon: TrendingUp,
  },
  {
    num: "07",
    title: "Community brands",
    desc: "Identity and campaign guidelines for travel groups and experience brands that run on community.",
    icon: Users2,
  },
];

const audience = [
  "Resorts and hotels",
  "Boutique stays",
  "Travel companies",
  "Experience providers",
  "Tourism businesses",
];

const processSteps = [
  {
    step: "01",
    title: "Understand",
    body: "We study your guests, competitors and reviews, and trace how bookings arrive today.",
  },
  {
    step: "02",
    title: "Define",
    body: "We choose the position you can own and the guest promise behind it.",
  },
  {
    step: "03",
    title: "Build",
    body: "We produce the identity, guest-facing material, content direction and booking journey.",
  },
  {
    step: "04",
    title: "Launch",
    body: "Campaigns, partnerships and content go live.",
  },
  {
    step: "05",
    title: "Improve",
    body: "We read booking and enquiry data and refine the story and the path to booking.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Cravent",
    url: "https://cravent.in/industries/hospitality-branding-agency",
    description,
    telephone: "+91 87783 45901",
    email: "info@cravent.in",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Puducherry",
      addressCountry: "IN",
    },
    serviceType: "Hospitality, Hotels & Travel Branding Agency",
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

export const Route = createFileRoute("/industries_/hospitality-branding-agency")({
  head: () => ({
    links: [canonicalLink("/industries/hospitality-branding-agency")],
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HospitalityBrandingPage,
});

function HospitalityBrandingPage() {
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
                  <span className="eyebrow">Hospitality, Travel & Tourism</span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    [ Sector Specialization ]
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <h1 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.75rem)] font-bold uppercase leading-[1.08] tracking-tight">
                  Hospitality branding that makes guests choose you before they arrive.
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
                  Cravent supports resorts, hotels, travel companies, experience providers and
                  tourism businesses with positioning, brand identity, content and booking
                  journeys.
                </p>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Btn to="/contact" size="md">
                    Book a Growth Audit
                  </Btn>
                  <Btn onClick={scrollToProof} variant="outline" size="md">
                    See Travellers Tribe
                  </Btn>
                </div>
              </Reveal>
            </div>

            <div className="relative">
              <Reveal delay={0.16}>
                <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-2 shadow-2xl">
                  <img
                    src={imgHospitality}
                    alt="Hospitality & Travel Branding Showcase"
                    className="h-[340px] w-full rounded-xl object-cover sm:h-[420px]"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl border border-border/80 bg-background/90 p-4 backdrop-blur-md">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-primary-bright">
                        Guest Experience
                      </p>
                      <p className="mt-0.5 font-display text-sm font-bold uppercase tracking-tight text-foreground">
                        Book The Story First
                      </p>
                    </div>
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase text-primary-bright">
                      Destination Craft
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
            title={<>The stay starts on a screen.</>}
            className="mb-8"
          />
          <div className="grid gap-6 text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            <Reveal delay={0.08}>
              <p>
                Guests can&apos;t test a room or a trip in advance. They judge you from photos, a
                name, reviews and the ease of booking. Until they arrive, the brand is all they have
                to go on.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p>
                Many hospitality businesses have a property or an itinerary worth talking about and
                a tone that changes between the website, the listing and social media. Guests notice
                the mismatch.
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
            index="[ 07 disciplines ]"
            title={<>What we build.</>}
            lead="Guest-centric brand, content, and booking infrastructure built to turn curiosity into reservations."
          />
          <span className="font-mono text-[10px] uppercase tracking-widest text-primary-bright">
            Systematic Scope
          </span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, i) => {
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

      {/* Target Audience Section */}
      <Section className="border-b border-border bg-surface/10" fullScreen={false}>
        <div className="mx-auto max-w-4xl py-6">
          <SectionHeading
            eyebrow="Client Alignment"
            title={<>Who this is for.</>}
            lead="From boutique coastal retreats to global adventure communities."
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
            lead="Adventurous brand identities and digital reservation infrastructure that activate passionate traveler communities."
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
                      src={logoTravellers}
                      alt="Travellers Tribe Logo"
                      className="h-11 w-auto object-contain brightness-95"
                    />
                    <div>
                      <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground">
                        Travellers Tribe
                      </h3>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        Travel, Adventure & Tourism
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase text-primary-bright">
                      Branding
                    </span>
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase text-primary-bright">
                      Marketing
                    </span>
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase text-primary-bright">
                      Technology
                    </span>
                  </div>
                </div>

                <div className="mt-6 h-px w-full bg-border" />

                <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Travellers Tribe brings together explorers, wanderers and cultural curators. We
                  developed an energetic, adventurous identity with custom iconography and community
                  campaign guidelines, and Cravent also worked on its marketing and technology.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6 pt-4 border-t border-border/60">
                <Link
                  to="/work/$slug"
                  params={{ slug: "travellers-tribe-branding" }}
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-primary-bright transition-colors hover:text-foreground"
                >
                  Branding Case Study <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  to="/work/$slug"
                  params={{ slug: "travellers-tribe-marketing" }}
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-primary-bright transition-colors hover:text-foreground"
                >
                  Marketing Engine Case Study <ArrowRight className="h-3.5 w-3.5" />
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
            lead="Straightforward answers about our hospitality, resort, and travel branding practice."
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
              <span className="eyebrow">Ready to Welcome Guests</span>
              <span className="h-px w-8 bg-primary" />
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Give guests a reason to choose you.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
              Tell us about your property, trip or experience. We start with a Growth Audit.
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
