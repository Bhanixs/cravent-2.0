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
import { Rocket, LayoutDashboard, Smartphone, Store, Laptop, Cpu } from "lucide-react";
import imgTech from "@/assets/showcase/service-technology.jpg";

const canonicalUrl = "/web-app-development-startups";
const pageTitle = "Startup Web & App Development Agency | Cravent";
const metaDescription =
  "Custom MVPs, web platforms and mobile apps for founders. Built to your brief, scoped to your stage, ready to scale. Cravent, Pondicherry & worldwide.";
const primaryKeyword = "startup web and app development agency";
const secondaryKeywords =
  "MVP development company, custom SaaS development, mobile app development for startups, startup website development, product engineering agency, build an app for my startup";

const whatWeBuildItems: WhatWeBuildItem[] = [
  {
    num: "01",
    title: "MVPs and v1 products.",
    desc: "Scoped to the one problem you must prove first, then expanded in phases.",
    icon: Rocket,
  },
  {
    num: "02",
    title: "Web platforms and SaaS.",
    desc: "Dashboards, subscriptions, roles and permissions, billing and admin panels.",
    icon: LayoutDashboard,
  },
  {
    num: "03",
    title: "Mobile apps (iOS, Android, cross-platform).",
    desc: "Native or cross-platform, chosen for your use case and budget.",
    icon: Smartphone,
  },
  {
    num: "04",
    title: "Marketplaces and two-sided products.",
    desc: "Listings, matching, payments and payouts, reviews and trust features.",
    icon: Store,
  },
  {
    num: "05",
    title: "Startup websites.",
    desc: "Fast, conversion-focused sites for launch, fundraising and hiring.",
    icon: Laptop,
  },
  {
    num: "06",
    title: "APIs, integrations and AI features.",
    desc: "Payments (UPI and international), CRM, analytics, messaging and AI-assisted workflows where they genuinely help.",
    icon: Cpu,
  },
];

const howItWorksSteps: HowItWorksStep[] = [
  {
    step: "01",
    title: "Brief",
    body: "Tell us the problem, the user and your timeline. A rough idea is enough.",
  },
  {
    step: "02",
    title: "Scope and quote",
    body: "We define the minimum version, what comes later, and a written cost and schedule.",
  },
  {
    step: "03",
    title: "Build in short cycles",
    body: "You see working software every sprint and steer as you learn.",
  },
  {
    step: "04",
    title: "Launch",
    body: "Deployment, monitoring and analytics set up from day one.",
  },
  {
    step: "05",
    title: "Grow",
    body: "Continue with us, or take the code to your own team. Either is fine.",
  },
];

const whyChooseItems: WhyChooseItem[] = [
  {
    title: "Scoped to your stage.",
    desc: "Pre-seed budgets and Series A needs are different; we build for yours.",
  },
  {
    title: "You own everything.",
    desc: "Code, designs, accounts and infrastructure belong to your company from day one.",
  },
  {
    title: "Clean, documented code.",
    desc: "Your next engineer can pick it up without a rewrite.",
  },
  {
    title: "Security and compliance basics included.",
    desc: "Authentication, data protection and privacy practices built in.",
  },
  {
    title: "Straight answers.",
    desc: "If a feature isn't worth building yet, we'll say so.",
  },
];

const faqs: FAQItem[] = [
  {
    q: "Do you build from templates or no-code tools?",
    a: "No. Everything is custom-built to your specification, which means no platform limits as you scale.",
  },
  {
    q: "I only have an idea. Can you still help?",
    a: "Yes. We help shape the idea into a scoped MVP before any build starts.",
  },
  {
    q: "Can we start small and add features later?",
    a: "Yes. Phased builds are the default for startups, so you can ship, learn and expand.",
  },
  {
    q: "Who owns the intellectual property?",
    a: "You do. IP and source code transfer to your company, covered in the agreement.",
  },
  {
    q: "Do you work with founders outside India?",
    a: "Yes. We work with founders in India and internationally, across time zones and currencies.",
  },
  {
    q: "Do you work with startups in Pondicherry and across India?",
    a: "Yes. Cravent is based in Pondicherry and works with early-stage teams here, across India and abroad.",
  },
];

const otherIndustries: OtherIndustryLink[] = [
  {
    title: "Hospitality & Stays",
    label: "Hospitality Web & App Development",
    url: "/web-app-development-hospitality",
    description:
      "Custom websites, direct booking engines, and guest experience apps for boutique stays and hotel groups.",
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

export const Route = createFileRoute("/web-app-development-startups")({
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
  component: StartupWebDevPage,
});

function StartupWebDevPage() {
  return (
    <DomainLandingPage
      canonicalUrl={canonicalUrl}
      pageTitle={pageTitle}
      metaDescription={metaDescription}
      serviceType="Startup web and app development"
      breadcrumbName="Startup Web & App Development"
      sectorEyebrow="Startup Web & App Development"
      sectorTag="[ Sector Specialization ]"
      h1="Your product, built from scratch and built to grow."
      heroBody="Cravent is a web and app development agency for founders. We take an idea or an early product and build the MVP, the platform or the app your first customers and investors will actually use. Custom to your brief, for startups in India and across the world. Based in Pondicherry, working with teams everywhere."
      supportLine="No templates. No demos. Built to order."
      heroImage={imgTech}
      heroImageAlt="Startup Web and App Development"
      heroBadgeTop="Product Engineering"
      heroBadgeBottom="From Scratch To Scale"
      heroBadgeTag="Built to Order"
      problemHeading="Speed matters, but so does what you ship"
      problemParagraphs={[
        "Most startups lose months to one of two mistakes: a no-code patchwork that breaks at the first real load, or an over-built product nobody asked for. We scope the smallest version that proves your idea, build it on a foundation that won't need rewriting, and keep room to grow.",
      ]}
      whatWeDoHeading="What we build"
      whatWeDoEyebrow="Product Engineering Scope"
      whatWeDoLead="From lean proof-of-concept MVPs to multi-tenant SaaS platforms with enterprise-grade architectures."
      whatWeDoItems={whatWeBuildItems}
      howItWorksHeading="How a custom build works"
      howItWorksSteps={howItWorksSteps}
      whyChooseHeading="Why founders choose Cravent"
      whyChooseItems={whyChooseItems}
      pairItWithText="Once the product is live you need users. See our marketing agency for startups for launch, SEO, paid growth and content."
      pairItWithLinkText="See our marketing agency for startups"
      pairItWithUrl="/marketing-agency-startups"
      pairItWithBadge="Growth Twin"
      faqs={faqs}
      closingCtaHeading="Got an idea or a product to build? Send a short brief and get a scoped proposal."
      closingCtaButtonText="Start your brief"
      otherIndustriesHeading="Other industries we build for"
      otherIndustries={otherIndustries}
    />
  );
}
