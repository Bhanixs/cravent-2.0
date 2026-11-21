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
import { ShoppingBag, Smartphone, Sparkles, Palette, Building2, Plug } from "lucide-react";
import imgFashion from "@/assets/showcase/industry-fashion.jpg";

const canonicalUrl = "/web-app-development-fashion";
const pageTitle = "Fashion Ecommerce Website & App Development | Cravent";
const metaDescription =
  "Custom online stores, apps and lookbooks for fashion brands, boutiques and designers. Built to your brief, no templates. Cravent, Pondicherry & worldwide.";
const primaryKeyword = "fashion ecommerce app and website development agency";
const secondaryKeywords =
  "fashion website development, custom ecommerce for clothing brands, fashion mobile app, D2C fashion store development, boutique website design, made-to-order ecommerce";

const whatWeBuildItems: WhatWeBuildItem[] = [
  {
    num: "01",
    title: "Custom ecommerce stores.",
    desc: "Image-led product pages, size and fit guidance, variants, bundles, wishlists and fast mobile checkout.",
    icon: ShoppingBag,
  },
  {
    num: "02",
    title: "Shopping apps (iOS and Android).",
    desc: "Personalised feeds, drop alerts, saved looks, in-app checkout and push notifications.",
    icon: Smartphone,
  },
  {
    num: "03",
    title: "Made-to-order and custom-fit flows.",
    desc: "Measurements, customisation options, production status and pre-orders.",
    icon: Sparkles,
  },
  {
    num: "04",
    title: "Lookbooks and brand sites.",
    desc: "Editorial layouts, campaign pages and collection launches with motion and video.",
    icon: Palette,
  },
  {
    num: "05",
    title: "Wholesale and B2B portals.",
    desc: "Line sheets, trade pricing, minimum orders and reorder flows for retailers and stockists.",
    icon: Building2,
  },
  {
    num: "06",
    title: "Integrations.",
    desc: "Payments (UPI, cards, BNPL, international), inventory and ERP, shipping and returns, multi-currency and cross-border duties.",
    icon: Plug,
  },
];

const howItWorksSteps: HowItWorksStep[] = [
  {
    step: "01",
    title: "Brief",
    body: "Tell us about your brand, your customer and your sales channels.",
  },
  {
    step: "02",
    title: "Scope and quote",
    body: "A written scope, timeline and cost before any work begins.",
  },
  {
    step: "03",
    title: "Design and build",
    body: "You review working builds, not static mockups, at each milestone.",
  },
  {
    step: "04",
    title: "Launch",
    body: "Real products, real payments and real orders tested before go-live.",
  },
  {
    step: "05",
    title: "Support",
    body: "Seasonal updates, drop-day capacity, hosting and new features.",
  },
];

const whyChooseItems: WhyChooseItem[] = [
  {
    title: "Design-led development.",
    desc: "The result looks like your brand, not like a platform.",
  },
  {
    title: "Built for drops.",
    desc: "Traffic spikes on launch day are planned for, not discovered.",
  },
  {
    title: "Fewer returns.",
    desc: "Better size guidance and product detail reduce wrong-fit orders.",
  },
  {
    title: "Domestic and global selling.",
    desc: "Multi-currency, international shipping and tax handling from day one.",
  },
  {
    title: "Your store, your data.",
    desc: "You own the code, the customer list and the analytics.",
  },
];

const faqs: FAQItem[] = [
  {
    q: "Do you use Shopify or other templates?",
    a: "No. We build custom to your specification. If you already run on a platform and want a custom front end or integration, we can scope that in the brief.",
  },
  {
    q: "Can you build a shopping app as well as the website?",
    a: "Yes. We build both, sharing one catalogue, inventory and customer account.",
  },
  {
    q: "Can you handle made-to-order or custom-fit products?",
    a: "Yes. Custom flows are what we build best, because nothing is templated.",
  },
  {
    q: "Can the store sell internationally?",
    a: "Yes. Multi-currency pricing, international payments, shipping rules and duties are supported.",
  },
  {
    q: "Will the site cope with a big launch or sale?",
    a: "Yes. We plan hosting and caching for peak traffic and test before launch.",
  },
  {
    q: "Do you work with fashion brands in Pondicherry and across India?",
    a: "Yes. Cravent is based in Pondicherry and builds for labels and boutiques locally, nationally and abroad.",
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
];

export const Route = createFileRoute("/web-app-development-fashion")({
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
  component: FashionWebDevPage,
});

function FashionWebDevPage() {
  return (
    <DomainLandingPage
      canonicalUrl={canonicalUrl}
      pageTitle={pageTitle}
      metaDescription={metaDescription}
      serviceType="Fashion ecommerce and app development"
      breadcrumbName="Fashion Web & App Development"
      sectorEyebrow="Fashion Ecommerce & App Dev"
      sectorTag="[ Sector Specialization ]"
      h1="A store and an app that feel as considered as your collection."
      heroBody="Cravent is a web and app development agency for fashion labels, boutiques, designers and D2C brands. We build custom online stores, shopping apps and brand sites from scratch to your brief, for fashion businesses in India and around the world. Based in Pondicherry, working with teams everywhere."
      supportLine="No templates. No demos. Built to order."
      heroImage={imgFashion}
      heroImageAlt="Fashion Ecommerce Website and App Development"
      heroBadgeTop="Commerce Craft"
      heroBadgeBottom="Tailored Storefronts & Apps"
      heroBadgeTag="Built to Order"
      problemHeading="Fashion shoppers notice everything"
      problemParagraphs={[
        "A slow product page, a clumsy size selector or a checkout that fails on a phone loses the sale and the shopper. Template stores make every label look like every other label. We build the storefront around your collection, your drops, your price points and the way your customers actually shop.",
      ]}
      whatWeDoHeading="What we build"
      whatWeDoEyebrow="Fashion Commerce Systems"
      whatWeDoLead="Editorial digital storefronts, high-converting mobile apps, and custom-fit flows built for luxury, D2C, and apparel brands."
      whatWeDoItems={whatWeBuildItems}
      howItWorksHeading="How a custom build works"
      howItWorksSteps={howItWorksSteps}
      whyChooseHeading="Why fashion brands choose Cravent"
      whyChooseItems={whyChooseItems}
      pairItWithText="A beautiful store needs traffic. See our marketing agency for fashion for SEO, social, influencer and performance campaigns."
      pairItWithLinkText="See our marketing agency for fashion"
      pairItWithUrl="/marketing-agency-fashion"
      pairItWithBadge="Growth Twin"
      faqs={faqs}
      closingCtaHeading="Tell us about your label. Send a short brief and get a scoped proposal."
      closingCtaButtonText="Start your brief"
      otherIndustriesHeading="Other industries we build for"
      otherIndustries={otherIndustries}
    />
  );
}
