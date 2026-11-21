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
import {
  Sparkles,
  Camera,
  Users,
  TrendingUp,
  Search,
  MessageCircle,
  Calendar,
  Store,
} from "lucide-react";
import imgFashion from "@/assets/showcase/industry-fashion.jpg";

const canonicalUrl = "/marketing-agency-fashion";
const pageTitle = "Fashion Marketing Agency for Brands & Labels | Cravent";
const metaDescription =
  "Custom brand, social, influencer, SEO and performance marketing for fashion labels, boutiques and D2C brands. Planned around your collection. Cravent, Pondicherry & worldwide.";
const primaryKeyword = "fashion marketing agency";
const secondaryKeywords =
  "fashion brand marketing, D2C fashion marketing, fashion influencer marketing, fashion SEO, clothing brand social media marketing, fashion campaign agency";

const whatWeDoItems: WhatWeBuildItem[] = [
  {
    num: "01",
    title: "Brand identity and positioning.",
    desc: "Name, visual system, voice and storytelling that make your label recognisable.",
    icon: Sparkles,
  },
  {
    num: "02",
    title: "Social content and creative.",
    desc: "Shoots, reels, lookbooks and campaign direction made for Instagram, YouTube and short-form video.",
    icon: Camera,
  },
  {
    num: "03",
    title: "Influencer and creator marketing.",
    desc: "Creators and stylists matched to your customer, with briefs, usage rights and tracked sales.",
    icon: Users,
  },
  {
    num: "04",
    title: "Performance marketing.",
    desc: "Meta, Google and shopping campaigns tied to revenue, return on ad spend and customer acquisition cost.",
    icon: TrendingUp,
  },
  {
    num: "05",
    title: "SEO and content.",
    desc: 'Rank for what your customers search, from "occasion wear" to "sustainable cotton kurta", for India and international markets.',
    icon: Search,
  },
  {
    num: "06",
    title: "Email, WhatsApp and retention.",
    desc: "Drop alerts, abandoned-cart recovery, loyalty and win-back journeys.",
    icon: MessageCircle,
  },
  {
    num: "07",
    title: "Launch and drop campaigns.",
    desc: "Collection launches, pop-ups, sale events and festive and wedding season plans.",
    icon: Calendar,
  },
  {
    num: "08",
    title: "Marketplace and wholesale growth.",
    desc: "Positioning and promotion across your own store and third-party platforms.",
    icon: Store,
  },
];

const howItWorksSteps: HowItWorksStep[] = [
  {
    step: "01",
    title: "Brief",
    body: "Your label, your customer, your price points and your sales channels.",
  },
  {
    step: "02",
    title: "Audit and plan",
    body: "We review your brand, store, ads and competitors and write the plan with targets.",
  },
  {
    step: "03",
    title: "Launch",
    body: "Creative and campaigns roll out in phases, around your collection calendar.",
  },
  {
    step: "04",
    title: "Report monthly",
    body: "Revenue, return on ad spend, new versus repeat customers and cost per acquisition.",
  },
  {
    step: "05",
    title: "Refine",
    body: "We shift budget and creative toward what sells.",
  },
];

const whyChooseItems: WhyChooseItem[] = [
  {
    title: "Creative with commercial discipline.",
    desc: "Beautiful and accountable to sales.",
  },
  {
    title: "Built around your calendar.",
    desc: "Seasons, drops, festivals and sale periods set the rhythm.",
  },
  {
    title: "Domestic and international customers.",
    desc: "Channels, creators and messaging tuned for each market.",
  },
  {
    title: "Store and marketing together.",
    desc: "Our development team can fix conversion problems in your store directly.",
  },
  {
    title: "Clear reporting.",
    desc: "You see spend, revenue and what we recommend next.",
  },
];

const faqs: FAQItem[] = [
  {
    q: "Do you sell fixed marketing packages?",
    a: "No. Every plan is custom, shaped by your label, customer and budget.",
  },
  {
    q: "Do you handle content creation as well as ads?",
    a: "Yes. We direct shoots, reels and campaigns, and run the ads that distribute them.",
  },
  {
    q: "Can you work with influencers and creators?",
    a: "Yes. We handle selection, briefs, contracts and tracking.",
  },
  {
    q: "How do you measure results?",
    a: "By revenue, return on ad spend, customer acquisition cost and repeat-purchase rate.",
  },
  {
    q: "Do you work with fashion brands outside India?",
    a: "Yes. We run India-first, export and multi-market programmes.",
  },
  {
    q: "Do you work with fashion brands in Pondicherry and across India?",
    a: "Yes. Cravent is based in Pondicherry and works with labels and boutiques locally, nationally and abroad.",
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
    title: "Startups & Scaleups",
    label: "Startup Marketing Agency",
    url: "/marketing-agency-startups",
    description:
      "Launch marketing, SEO, paid growth, and product positioning for founders and venture-backed teams.",
  },
  {
    title: "Construction & Builders",
    label: "Marketing Agency for Construction & Architecture",
    url: "/marketing-agency-construction-architecture",
    description:
      "High-value project lead generation, SEO, and visual portfolio storytelling for builders and architects.",
  },
];

export const Route = createFileRoute("/marketing-agency-fashion")({
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
  component: FashionMarketingPage,
});

function FashionMarketingPage() {
  return (
    <DomainLandingPage
      canonicalUrl={canonicalUrl}
      pageTitle={pageTitle}
      metaDescription={metaDescription}
      serviceType="Fashion marketing"
      breadcrumbName="Fashion Marketing"
      sectorEyebrow="Fashion Marketing Agency"
      sectorTag="[ Sector Specialization ]"
      h1="Marketing that gives your label a point of view and a growing customer base."
      heroBody="Cravent is a marketing agency for fashion labels, boutiques, designers and D2C brands. We plan each strategy from scratch around your collection and your customer, for fashion businesses in India and across the world. Based in Pondicherry, working with teams everywhere."
      supportLine="No packages. No templates. Planned to order."
      heroImage={imgFashion}
      heroImageAlt="Fashion Marketing Agency for Brands and Labels"
      heroBadgeTop="Brand Elevation"
      heroBadgeBottom="Audience To Repeat Buyers"
      heroBadgeTag="Planned to Order"
      problemHeading="Great product isn't enough on a crowded feed"
      problemParagraphs={[
        "Fashion competes for attention every second. Brands that grow have a clear identity, content that stops the scroll and paid spend that turns attention into repeat buyers. We build all three around your label, and measure them on sales and customer value, not follower counts.",
      ]}
      whatWeDoHeading="What we do"
      whatWeDoEyebrow="Fashion Growth Scope"
      whatWeDoLead="High-aesthetic campaign direction, influencer collaborations, and performance media built for apparel and lifestyle labels."
      whatWeDoItems={whatWeDoItems}
      howItWorksHeading="How a custom plan works"
      howItWorksSteps={howItWorksSteps}
      howItWorksNote="No fixed packages. The plan is built for your label, not borrowed from another."
      whyChooseHeading="Why fashion brands choose Cravent"
      whyChooseItems={whyChooseItems}
      pairItWithText="Marketing works hardest on a store built to convert. See our web and app development for fashion."
      pairItWithLinkText="See our web and app development for fashion"
      pairItWithUrl="/web-app-development-fashion"
      pairItWithBadge="Tech Twin"
      faqs={faqs}
      closingCtaHeading="Tell us about your label. Send a short brief and get a written plan."
      closingCtaButtonText="Start your brief"
      otherIndustriesHeading="Other industries we build for"
      otherIndustries={otherIndustries}
    />
  );
}
