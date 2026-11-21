import { createFileRoute } from "@tanstack/react-router";
import { canonicalLink } from "@/lib/seo";
import {
  DomainLandingPage,
  type WhatWeBuildItem,
  type HowItWorksStep,
  type WhyChooseItem,
  type FAQItem,
  type OtherIndustryLink,
} from "@/components/site/DomainLandingPage";
import { Globe, CalendarCheck, Smartphone, QrCode, LayoutDashboard, Plug } from "lucide-react";
import imgHospitality from "@/assets/showcase/industry-hospitality.jpg";

const canonicalUrl = "/web-app-development-hospitality";
const pageTitle = "Hospitality Web & App Development Agency | Cravent";
const metaDescription =
  "Custom websites, booking engines and guest apps for hotels, resorts, restaurants and cafes. Built to your brief, no templates. Cravent, Pondicherry & worldwide.";
const primaryKeyword = "hospitality web and app development agency";
const secondaryKeywords =
  "hotel website development, restaurant app development, custom booking engine, hotel mobile app, resort website design, cafe ordering app";

const whatWeBuildItems: WhatWeBuildItem[] = [
  {
    num: "01",
    title: "Custom hotel and resort websites.",
    desc: "Fast, image-led sites with direct booking, rate plans, packages and multi-language and multi-currency support for international guests.",
    icon: Globe,
  },
  {
    num: "02",
    title: "Booking engines.",
    desc: "Room and table reservations, availability, deposits and add-ons, connected to the channel manager and PMS you already use.",
    icon: CalendarCheck,
  },
  {
    num: "03",
    title: "Guest mobile apps (iOS and Android).",
    desc: "Pre-arrival check-in, digital keys, in-stay requests, spa and activity booking, loyalty and offers.",
    icon: Smartphone,
  },
  {
    num: "04",
    title: "Restaurant and cafe ordering.",
    desc: "Online menus, QR table ordering, delivery and pickup, kitchen display and POS connections.",
    icon: QrCode,
  },
  {
    num: "05",
    title: "Staff and operations tools.",
    desc: "Housekeeping, front desk and F&B dashboards so your team works from one view.",
    icon: LayoutDashboard,
  },
  {
    num: "06",
    title: "Integrations.",
    desc: "Payment gateways (UPI, cards, international), PMS, channel managers, CRM, WhatsApp and email automation.",
    icon: Plug,
  },
];

const howItWorksSteps: HowItWorksStep[] = [
  {
    step: "01",
    title: "Brief",
    body: "You tell us what the property does, who the guest is and what needs to change.",
  },
  {
    step: "02",
    title: "Scope and quote",
    body: "A written scope, timeline and fixed cost before any work begins.",
  },
  {
    step: "03",
    title: "Design and build",
    body: "You review working builds at each milestone, not slides.",
  },
  {
    step: "04",
    title: "Launch",
    body: "We test with real bookings and orders, then go live.",
  },
  {
    step: "05",
    title: "Support",
    body: "Hosting, updates and improvements as your property grows.",
  },
];

const whyChooseItems: WhyChooseItem[] = [
  {
    title: "Direct bookings first.",
    desc: "Every decision is measured by how much revenue stays with you.",
  },
  {
    title: "Mobile-first by default.",
    desc: "Most guests research and book on a phone, so we build for that screen first.",
  },
  {
    title: "Built for scale.",
    desc: "One boutique stay or a chain of fifty: the architecture grows with you.",
  },
  {
    title: "One accountable team.",
    desc: "Design, development, hosting and support under one roof.",
  },
  {
    title: "Global standards.",
    desc: "Accessibility, data privacy and payment security built to international requirements.",
  },
];

const faqs: FAQItem[] = [
  {
    q: "Do you use templates or ready-made software?",
    a: "No. Every website and app is designed and developed to your specification.",
  },
  {
    q: "Can you connect to our existing PMS, channel manager or POS?",
    a: "Yes. We scope integrations during the brief and build only what your systems support.",
  },
  {
    q: "How long does a custom hotel website or app take?",
    a: "A custom website typically takes 6 to 10 weeks; apps take longer depending on features. You get a timeline in writing before work starts.",
  },
  {
    q: "Do you work with hospitality businesses outside India?",
    a: "Yes. We work with properties and restaurant groups across India and internationally, with multi-currency and multi-language builds.",
  },
  {
    q: "Do you work with hotels and restaurants in Pondicherry and across India?",
    a: "Yes. Cravent is based in Pondicherry and builds for hospitality businesses locally, nationally and abroad.",
  },
  {
    q: "Who owns the code?",
    a: "You do. Source code and assets are handed over on final payment.",
  },
];

const otherIndustries: OtherIndustryLink[] = [
  {
    title: "Startups & SaaS",
    label: "Startup Web & App Development",
    url: "/web-app-development-startups",
    description:
      "Custom MVPs, web platforms and mobile apps for founders, scoped to your stage and ready to scale.",
  },
  {
    title: "Construction & Architecture",
    label: "Web Development for Architects & Construction",
    url: "/web-app-development-construction-architecture",
    description:
      "High-resolution portfolio websites, client portals, and site-management tools built around your firm.",
  },
  {
    title: "Fashion & Retail",
    label: "Fashion Ecommerce App & Website Development",
    url: "/web-app-development-fashion",
    description:
      "Custom online storefronts, shopping apps, and lookbooks tailored to your collection and drops.",
  },
];

export const Route = createFileRoute("/web-app-development-hospitality")({
  head: () => ({
    links: [canonicalLink(canonicalUrl)],
    meta: [
      { title: pageTitle },
      { name: "description", content: metaDescription },
      { name: "keywords", content: `${primaryKeyword}, ${secondaryKeywords}` },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HospitalityWebDevPage,
});

function HospitalityWebDevPage() {
  return (
    <DomainLandingPage
      canonicalUrl={canonicalUrl}
      pageTitle={pageTitle}
      metaDescription={metaDescription}
      serviceType="Hospitality web and app development"
      breadcrumbName="Hospitality Web & App Development"
      sectorEyebrow="Hospitality Web & App Development"
      sectorTag="[ Sector Specialization ]"
      h1="Websites and apps built around how your guests actually book, order and stay."
      heroBody="Cravent is a web and app development agency for hotels, resorts, restaurants, cafes and stays. Every project is designed and built from scratch to your brief, for properties in India and around the world. Based in Pondicherry, working with teams everywhere."
      supportLine="No templates. No demos. Built to order."
      heroImage={imgHospitality}
      heroImageAlt="Hospitality Web and App Development"
      heroBadgeTop="Guest Experience"
      heroBadgeBottom="Direct Bookings First"
      heroBadgeTag="Built to Order"
      problemHeading="Your guests decide in seconds"
      problemParagraphs={[
        "A slow site, a clumsy booking form or a menu that won't load on a phone sends guests to an aggregator, and you pay commission on a guest who was already looking at you. Off-the-shelf hotel and restaurant software forces your property into someone else's layout.",
        "We build the opposite: software shaped to your rooms, your menu, your rates and your way of running things.",
      ]}
      whatWeDoHeading="What we build"
      whatWeDoEyebrow="Engineered Capabilities"
      whatWeDoLead="Custom-built digital infrastructure that powers direct reservations, smooth guest stays, and kitchen efficiency."
      whatWeDoItems={whatWeBuildItems}
      howItWorksHeading="How a custom build works"
      howItWorksSteps={howItWorksSteps}
      howItWorksNote="Because everything is made on demand, you pay for what your property needs and nothing else."
      whyChooseHeading="Why hospitality teams choose Cravent"
      whyChooseItems={whyChooseItems}
      pairItWithText="A good site needs guests to find it. See our marketing agency for hospitality for SEO, performance ads and social that fill the booking engine."
      pairItWithLinkText="See our marketing agency for hospitality"
      pairItWithUrl="/marketing-agency-hospitality"
      pairItWithBadge="Growth Twin"
      faqs={faqs}
      closingCtaHeading="Tell us about your property. Share a short brief and we'll reply with a scoped proposal."
      closingCtaButtonText="Start your brief"
      otherIndustriesHeading="Other industries we build for"
      otherIndustries={otherIndustries}
    />
  );
}
