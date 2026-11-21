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
import { Compass, Rocket, Search, TrendingUp, Palette, Repeat, LineChart } from "lucide-react";
import imgStrategy from "@/assets/showcase/service-strategy.jpg";

const canonicalUrl = "/marketing-agency-startups";
const pageTitle = "Startup Marketing Agency | Growth & Launch | Cravent";
const metaDescription =
  "Custom launch, SEO, performance and brand marketing for startups. Planned for your stage and budget, measured on growth. Cravent, Pondicherry & worldwide.";
const primaryKeyword = "startup marketing agency";
const secondaryKeywords =
  "startup growth marketing, product launch marketing, B2B SaaS marketing agency, startup SEO, performance marketing for startups, go-to-market strategy";

const whatWeDoItems: WhatWeBuildItem[] = [
  {
    num: "01",
    title: "Go-to-market strategy.",
    desc: "Positioning, messaging, pricing perception and channel selection before any spend.",
    icon: Compass,
  },
  {
    num: "02",
    title: "Launch campaigns.",
    desc: "Waitlists, Product Hunt and press, creator and community launches, and the first 30 days after.",
    icon: Rocket,
  },
  {
    num: "03",
    title: "SEO and content.",
    desc: "Search-led content that compounds, from comparison pages to founder-led thought leadership.",
    icon: Search,
  },
  {
    num: "04",
    title: "Performance marketing.",
    desc: "Google, Meta and LinkedIn campaigns built around cost per lead and cost per customer.",
    icon: TrendingUp,
  },
  {
    num: "05",
    title: "Brand and identity.",
    desc: "Name, logo, tone and visual system that make a young company look credible.",
    icon: Palette,
  },
  {
    num: "06",
    title: "Lifecycle and email.",
    desc: "Onboarding, activation and retention flows that turn sign-ups into active users.",
    icon: Repeat,
  },
  {
    num: "07",
    title: "Investor-facing marketing.",
    desc: "Landing pages, narrative and traction materials that support fundraising.",
    icon: LineChart,
  },
];

const howItWorksSteps: HowItWorksStep[] = [
  {
    step: "01",
    title: "Brief",
    body: "Product, audience, stage, budget and what success looks like.",
  },
  {
    step: "02",
    title: "Plan",
    body: "A written plan with priorities, test budgets and the numbers that will show if it works.",
  },
  {
    step: "03",
    title: "Test small",
    body: "Short experiments across 2 to 3 channels before scaling any of them.",
  },
  {
    step: "04",
    title: "Scale what works",
    body: "Spend moves to proven channels, and the rest stops.",
  },
  {
    step: "05",
    title: "Report",
    body: "A simple monthly view of cost per acquisition, activation and growth.",
  },
];

const whyChooseItems: WhyChooseItem[] = [
  {
    title: "Built for early budgets.",
    desc: "We start with what a lean team can afford and expand when results justify it.",
  },
  {
    title: "Focused on what's measurable.",
    desc: "Leads, sign-ups, revenue and retention, not impressions.",
  },
  {
    title: "Domestic and global.",
    desc: "We build plans for India-first and international launches, including multi-market SEO and ads.",
  },
  {
    title: "Product and marketing together.",
    desc: "Our development team can ship landing pages, onboarding flows and tracking quickly.",
  },
  {
    title: "Honest advice.",
    desc: "If a channel isn't right for you yet, we'll say so.",
  },
];

const faqs: FAQItem[] = [
  {
    q: "Do you offer fixed marketing packages?",
    a: "No. Every plan is custom, designed around your stage, product and budget.",
  },
  {
    q: "We're pre-launch. Is it too early to start?",
    a: "No. Positioning, brand and a waitlist are best done before launch.",
  },
  {
    q: "Do you work with B2B and B2C startups?",
    a: "Yes. The channels differ, so the plan is built from your customer outward.",
  },
  {
    q: "How do you measure success?",
    a: "By the growth numbers that matter for your model: sign-ups, activation, cost per customer, revenue and retention.",
  },
  {
    q: "Do you work with startups outside India?",
    a: "Yes. We run India-first, global and multi-market programmes.",
  },
  {
    q: "Do you work with startups in Pondicherry and across India?",
    a: "Yes. Cravent is based in Pondicherry and works with founders locally, nationally and abroad.",
  },
];

const otherIndustries: OtherIndustryLink[] = [
  {
    title: "Hospitality & Stays",
    label: "Hospitality Marketing Agency",
    url: "/marketing-agency-hospitality",
    description:
      "Direct booking acquisition, destination SEO, and guest retention for hotels and resorts.",
  },
  {
    title: "Construction & Builders",
    label: "Marketing Agency for Construction & Architecture",
    url: "/marketing-agency-construction-architecture",
    description:
      "High-value project lead generation, SEO, and visual portfolio storytelling for builders and architects.",
  },
  {
    title: "Fashion & Lifestyle",
    label: "Fashion Marketing Agency",
    url: "/marketing-agency-fashion",
    description:
      "Performance marketing, influencer campaigns, and editorial social growth for clothing brands.",
  },
];

export const Route = createFileRoute("/marketing-agency-startups")({
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
  component: StartupMarketingPage,
});

function StartupMarketingPage() {
  return (
    <DomainLandingPage
      canonicalUrl={canonicalUrl}
      pageTitle={pageTitle}
      metaDescription={metaDescription}
      serviceType="Startup marketing and growth"
      breadcrumbName="Startup Marketing"
      sectorEyebrow="Startup Marketing Agency"
      sectorTag="[ Sector Specialization ]"
      h1="Go-to-market built around your product, your stage and your runway."
      heroBody="Cravent is a marketing agency for startups. We plan and run launch, growth and brand marketing from scratch around your product and customer, for founders in India and around the world. Based in Pondicherry, working with teams everywhere."
      supportLine="No packages. No templates. Planned to order."
      heroImage={imgStrategy}
      heroImageAlt="Startup Marketing Agency Growth and Launch"
      heroBadgeTop="Go-To-Market Engine"
      heroBadgeBottom="Traction That Compounds"
      heroBadgeTag="Planned to Order"
      problemHeading="Great product, no users is a marketing problem"
      problemParagraphs={[
        "Startups rarely fail from lack of ideas. They fail when the right people never hear about the product, or when early budget goes into channels that can't be measured. We start with who your first 100 customers are, where they spend time and what makes them act, then spend only where it works.",
      ]}
      whatWeDoHeading="What we do"
      whatWeDoEyebrow="Startup Growth Scope"
      whatWeDoLead="Systematic launch orchestration, paid acquisition channels, and search engine dominance built to preserve runway and maximize CAC efficiency."
      whatWeDoItems={whatWeDoItems}
      howItWorksHeading="How a custom plan works"
      howItWorksSteps={howItWorksSteps}
      howItWorksNote="No retainers you can't change and no fixed bundles."
      whyChooseHeading="Why founders choose Cravent"
      whyChooseItems={whyChooseItems}
      pairItWithText="Need the product built first? See our web and app development for startups."
      pairItWithLinkText="See our web and app development for startups"
      pairItWithUrl="/web-app-development-startups"
      pairItWithBadge="Tech Twin"
      faqs={faqs}
      closingCtaHeading="Tell us what you're launching. Send a short brief and get a written go-to-market plan."
      closingCtaButtonText="Start your brief"
      otherIndustriesHeading="Other industries we build for"
      otherIndustries={otherIndustries}
    />
  );
}
