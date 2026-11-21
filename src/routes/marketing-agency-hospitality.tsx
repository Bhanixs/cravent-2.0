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
import { Search, TrendingUp, Camera, Users, MessageSquare, Star, Compass } from "lucide-react";
import imgHospitality from "@/assets/showcase/industry-hospitality.jpg";

const canonicalUrl = "/marketing-agency-hospitality";
const pageTitle = "Hospitality Marketing Agency for Hotels & Restaurants | Cravent";
const metaDescription =
  "Custom marketing for hotels, resorts, restaurants and cafes: SEO, performance ads, social and brand. Planned around your property. Cravent, Pondicherry & worldwide.";
const primaryKeyword = "hospitality marketing agency";
const secondaryKeywords =
  "hotel marketing agency, restaurant marketing services, resort digital marketing, hotel SEO, direct booking marketing, food and beverage social media marketing";

const whatWeDoItems: WhatWeBuildItem[] = [
  {
    num: "01",
    title: "Search engine optimisation.",
    desc: 'Rank for "where to stay" and "where to eat" searches in your destination, plus Google Business Profile and map visibility.',
    icon: Search,
  },
  {
    num: "02",
    title: "Performance advertising.",
    desc: "Google, Meta and travel-metasearch campaigns tied to bookings and orders, not clicks.",
    icon: TrendingUp,
  },
  {
    num: "03",
    title: "Social media and content.",
    desc: "Photography, reels and storytelling that make your property feel like a place people want to be.",
    icon: Camera,
  },
  {
    num: "04",
    title: "Influencer and creator partnerships.",
    desc: "Travel and food creators matched to your guest profile, with tracked results.",
    icon: Users,
  },
  {
    num: "05",
    title: "Email and WhatsApp marketing.",
    desc: "Pre-arrival, post-stay and repeat-guest journeys that grow loyalty.",
    icon: MessageSquare,
  },
  {
    num: "06",
    title: "Reputation management.",
    desc: "Review strategy across Google, TripAdvisor and booking platforms.",
    icon: Star,
  },
  {
    num: "07",
    title: "Brand and launch.",
    desc: "Identity, naming and opening campaigns for new properties and restaurants.",
    icon: Compass,
  },
];

const howItWorksSteps: HowItWorksStep[] = [
  {
    step: "01",
    title: "Brief",
    body: "Your property, your guests, your occupancy patterns and your goals.",
  },
  {
    step: "02",
    title: "Audit and plan",
    body: "We review your site, listings, ads and competitors and send a written plan with targets.",
  },
  {
    step: "03",
    title: "Launch campaigns",
    body: "Channels go live in phases, so spend follows what works.",
  },
  {
    step: "04",
    title: "Report monthly",
    body: "Bookings, orders, cost per booking and revenue, in plain language.",
  },
  {
    step: "05",
    title: "Refine",
    body: "We adjust for season, events and results.",
  },
];

const whyChooseItems: WhyChooseItem[] = [
  {
    title: "Direct-booking focus.",
    desc: "We report on revenue kept, not just reach.",
  },
  {
    title: "Seasonality built in.",
    desc: "Plans move with your peak, shoulder and off seasons.",
  },
  {
    title: "Domestic and international guests.",
    desc: "We market to Indian travellers and overseas visitors with the right channels and language for each.",
  },
  {
    title: "Website and marketing together.",
    desc: "Our development team can fix a weak booking flow instead of sending more traffic to it.",
  },
  {
    title: "Transparent numbers.",
    desc: "You see what was spent and what it returned.",
  },
];

const faqs: FAQItem[] = [
  {
    q: "Do you sell fixed marketing packages?",
    a: "No. Every plan is custom, based on your property, goals and budget.",
  },
  {
    q: "Can you help us reduce dependence on booking platforms?",
    a: "Yes. Growing direct bookings is the core goal of our hospitality work.",
  },
  {
    q: "Do you manage social media and ads together?",
    a: "Yes, or either one separately, depending on your brief.",
  },
  {
    q: "How do you measure results?",
    a: "By bookings, orders, cost per acquisition and revenue, tracked through your analytics and booking engine.",
  },
  {
    q: "Do you work with hospitality brands outside India?",
    a: "Yes. We run campaigns for properties and restaurant groups in India and internationally.",
  },
  {
    q: "Do you work with hotels and restaurants in Pondicherry and across India?",
    a: "Yes. Cravent is based in Pondicherry and works with hospitality businesses locally, nationally and abroad.",
  },
];

const otherIndustries: OtherIndustryLink[] = [
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
  {
    title: "Fashion & Lifestyle",
    label: "Fashion Marketing Agency",
    url: "/marketing-agency-fashion",
    description:
      "Performance marketing, influencer campaigns, and editorial social growth for clothing brands.",
  },
];

export const Route = createFileRoute("/marketing-agency-hospitality")({
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
  component: HospitalityMarketingPage,
});

function HospitalityMarketingPage() {
  return (
    <DomainLandingPage
      canonicalUrl={canonicalUrl}
      pageTitle={pageTitle}
      metaDescription={metaDescription}
      serviceType="Hospitality marketing"
      breadcrumbName="Hospitality Marketing"
      sectorEyebrow="Hospitality Marketing Agency"
      sectorTag="[ Sector Specialization ]"
      h1="More direct bookings and full tables, from marketing planned around your property."
      heroBody="Cravent is a marketing agency for hotels, resorts, restaurants, cafes and stays. We build each strategy from scratch around your property, your guest and your season, for hospitality businesses in India and across the world. Based in Pondicherry, working with teams everywhere."
      supportLine="No packages. No templates. Planned to order."
      heroImage={imgHospitality}
      heroImageAlt="Hospitality Marketing Agency for Hotels and Restaurants"
      heroBadgeTop="Hospitality Growth"
      heroBadgeBottom="More Direct Bookings"
      heroBadgeTag="Planned to Order"
      problemHeading="Visibility is not the same as bookings"
      problemParagraphs={[
        "Likes don't fill rooms. Many hospitality businesses pay commissions to travel platforms for guests who searched for them by name, and run social pages that look good and sell nothing. We plan marketing around one outcome: more guests booking and ordering directly from you.",
      ]}
      whatWeDoHeading="What we do"
      whatWeDoEyebrow="Hospitality Marketing Scope"
      whatWeDoLead="Data-driven guest acquisition, search dominance, and storytelling campaigns crafted for hotels, resorts, and dining destinations."
      whatWeDoItems={whatWeDoItems}
      howItWorksHeading="How a custom plan works"
      howItWorksSteps={howItWorksSteps}
      howItWorksNote="No fixed packages. You pay for the plan your property needs."
      whyChooseHeading="Why hospitality teams choose Cravent"
      whyChooseItems={whyChooseItems}
      pairItWithText="Marketing works best on a site built to convert. See our web and app development for hospitality."
      pairItWithLinkText="See our web and app development for hospitality"
      pairItWithUrl="/web-app-development-hospitality"
      pairItWithBadge="Tech Twin"
      faqs={faqs}
      closingCtaHeading="Tell us about your property. Send a short brief and get a written plan."
      closingCtaButtonText="Start your brief"
      otherIndustriesHeading="Other industries we build for"
      otherIndustries={otherIndustries}
    />
  );
}
