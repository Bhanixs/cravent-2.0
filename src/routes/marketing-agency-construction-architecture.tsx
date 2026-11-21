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
import { Compass, Search, Target, Camera, Building, Share2, Briefcase } from "lucide-react";
import imgRealEstate from "@/assets/showcase/industry-realestate.jpg";

const canonicalUrl = "/marketing-agency-construction-architecture";
const pageTitle = "Marketing Agency for Architects & Construction | Cravent";
const metaDescription =
  "Custom lead generation, SEO, branding and content for architecture firms, builders and real estate developers. Planned around your projects. Cravent, Pondicherry & worldwide.";
const primaryKeyword = "marketing agency for architects and builders";
const secondaryKeywords =
  "architecture firm marketing, construction company marketing, real estate developer marketing, interior design marketing, lead generation for builders, architectural photography and branding";

const whatWeDoItems: WhatWeBuildItem[] = [
  {
    num: "01",
    title: "Brand and positioning.",
    desc: "Define what you are known for, then express it in identity, tone and portfolio structure.",
    icon: Compass,
  },
  {
    num: "02",
    title: "SEO and local visibility.",
    desc: 'Be found for the searches that precede a project, from "architect for a villa" to "commercial contractor", in the markets you serve.',
    icon: Search,
  },
  {
    num: "03",
    title: "Lead generation.",
    desc: "Google and LinkedIn campaigns aimed at homeowners, developers and corporate buyers, with qualified enquiry forms.",
    icon: Target,
  },
  {
    num: "04",
    title: "Project storytelling.",
    desc: "Case studies, photography direction, walkthrough films and award submissions that turn completed work into new business.",
    icon: Camera,
  },
  {
    num: "05",
    title: "Real estate launch marketing.",
    desc: "Pre-launch, launch and sustained sales campaigns for developments and residential projects.",
    icon: Building,
  },
  {
    num: "06",
    title: "Social and content.",
    desc: "Instagram, LinkedIn and Pinterest content that shows process, craft and results.",
    icon: Share2,
  },
  {
    num: "07",
    title: "B2B and trade outreach.",
    desc: "Reaching developers, consultants, procurement teams and suppliers.",
    icon: Briefcase,
  },
];

const howItWorksSteps: HowItWorksStep[] = [
  {
    step: "01",
    title: "Brief",
    body: "Your firm, your project types, the clients you want and the ones you don't.",
  },
  {
    step: "02",
    title: "Audit and plan",
    body: "We review your portfolio, site, search presence and competitors, then write the plan.",
  },
  {
    step: "03",
    title: "Launch",
    body: "Brand, content and campaigns go live in phases.",
  },
  {
    step: "04",
    title: "Report monthly",
    body: "Enquiries, qualified leads, cost per lead and projects won.",
  },
  {
    step: "05",
    title: "Refine",
    body: "We shift effort toward the sources that bring the right clients.",
  },
];

const whyChooseItems: WhyChooseItem[] = [
  {
    title: "Quality over volume.",
    desc: "We aim for the right enquiry, not the most enquiries.",
  },
  {
    title: "We understand long sales cycles.",
    desc: "Projects take months to close, so we track leads through to the signed contract.",
  },
  {
    title: "Visual standards.",
    desc: "Your marketing looks as considered as your work.",
  },
  {
    title: "Local and international reach.",
    desc: "We market to clients in your city and to overseas ones.",
  },
  {
    title: "Website and marketing together.",
    desc: "Our development team can build the portfolio site and client tools too.",
  },
];

const faqs: FAQItem[] = [
  {
    q: "Do you offer ready-made marketing packages?",
    a: "No. Every plan is designed for your firm, services and target clients.",
  },
  {
    q: "Can marketing really generate leads for a construction or architecture firm?",
    a: "Yes. Search and targeted advertising reach people while they are researching a project, which is when they shortlist firms.",
  },
  {
    q: "Do you handle photography and project films?",
    a: "We plan and direct them, and coordinate production with the right specialists for your projects.",
  },
  {
    q: "Can you market a real estate development?",
    a: "Yes. We run pre-launch and launch campaigns, and sustained lead generation for sales teams.",
  },
  {
    q: "Do you work with firms outside India?",
    a: "Yes. We work with practices, builders and developers in India and internationally.",
  },
  {
    q: "Do you work with architects and builders in Pondicherry and across India?",
    a: "Yes. Cravent is based in Pondicherry and works with firms locally, nationally and abroad.",
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
    title: "Fashion & Lifestyle",
    label: "Fashion Marketing Agency",
    url: "/marketing-agency-fashion",
    description:
      "Performance marketing, influencer campaigns, and editorial social growth for clothing brands.",
  },
];

export const Route = createFileRoute("/marketing-agency-construction-architecture")({
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
  component: ConstructionMarketingPage,
});

function ConstructionMarketingPage() {
  return (
    <DomainLandingPage
      canonicalUrl={canonicalUrl}
      pageTitle={pageTitle}
      metaDescription={metaDescription}
      serviceType="Marketing for architecture and construction"
      breadcrumbName="Construction & Architecture Marketing"
      sectorEyebrow="Architecture & Construction Marketing"
      sectorTag="[ Sector Specialization ]"
      h1="Win better projects by making your best work impossible to miss."
      heroBody="Cravent is a marketing agency for architects, builders, contractors, interior studios and real estate developers. We plan each strategy from scratch around your projects and your ideal client, for firms in India and across the world. Based in Pondicherry, working with teams everywhere."
      supportLine="No packages. No templates. Planned to order."
      heroImage={imgRealEstate}
      heroImageAlt="Marketing Agency for Architects and Builders"
      heroBadgeTop="High-Value Enquiries"
      heroBadgeBottom="Win Better Projects"
      heroBadgeTag="Planned to Order"
      problemHeading="Referrals built your firm. They shouldn't be the only thing growing it."
      problemParagraphs={[
        "Most practices and construction firms grow by word of mouth, which is powerful but unpredictable. Meanwhile prospective clients research online, compare portfolios and shortlist before anyone picks up the phone. We make sure your firm is found, understood and trusted at that moment.",
      ]}
      whatWeDoHeading="What we do"
      whatWeDoEyebrow="Practice Marketing Scope"
      whatWeDoLead="Qualified commercial and residential lead generation, project storytelling, and search visibility tailored to architecture practices and developers."
      whatWeDoItems={whatWeDoItems}
      howItWorksHeading="How a custom plan works"
      howItWorksSteps={howItWorksSteps}
      whyChooseHeading="Why firms choose Cravent"
      whyChooseItems={whyChooseItems}
      pairItWithText="Strong marketing needs a portfolio site that converts. See our web and app development for construction and architecture."
      pairItWithLinkText="See our web and app development for construction and architecture"
      pairItWithUrl="/web-app-development-construction-architecture"
      pairItWithBadge="Tech Twin"
      faqs={faqs}
      closingCtaHeading="Tell us about your firm and the clients you want. Send a short brief and get a written plan."
      closingCtaButtonText="Start your brief"
      otherIndustriesHeading="Other industries we build for"
      otherIndustries={otherIndustries}
    />
  );
}
