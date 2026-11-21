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
import { Image, Building, ShieldCheck, ClipboardCheck, Calculator, Plug } from "lucide-react";
import imgRealEstate from "@/assets/showcase/industry-realestate.jpg";

const canonicalUrl = "/web-app-development-construction-architecture";
const pageTitle = "Web & App Development for Architects & Builders | Cravent";
const metaDescription =
  "Custom portfolio websites, client portals and project apps for architecture, construction and real estate firms. Built to your brief. Cravent, Pondicherry & worldwide.";
const primaryKeyword = "web development for architects and construction companies";
const secondaryKeywords =
  "architecture website design, construction company website, project management app development, real estate development website, client portal development, BIM-ready web tools";

const whatWeBuildItems: WhatWeBuildItem[] = [
  {
    num: "01",
    title: "Portfolio and firm websites.",
    desc: "High-resolution project galleries, case studies, drawings and walkthroughs that load fast on any device.",
    icon: Image,
  },
  {
    num: "02",
    title: "Real estate and project microsites.",
    desc: "Unit listings, floor plans, availability, enquiry capture and virtual tours for developments.",
    icon: Building,
  },
  {
    num: "03",
    title: "Client portals.",
    desc: "Approvals, drawings, documents, payment milestones and progress updates in one secure place.",
    icon: ShieldCheck,
  },
  {
    num: "04",
    title: "Site and project apps.",
    desc: "Daily progress logs, photo reports, snag lists, task assignment and material tracking for site teams, usable offline.",
    icon: ClipboardCheck,
  },
  {
    num: "05",
    title: "Quotation and estimating tools.",
    desc: "Custom calculators and BOQ-style quote generators for your service lines.",
    icon: Calculator,
  },
  {
    num: "06",
    title: "Integrations.",
    desc: "CRM, accounting, e-signature, cloud storage, WhatsApp and design-file viewers.",
    icon: Plug,
  },
];

const howItWorksSteps: HowItWorksStep[] = [
  {
    step: "01",
    title: "Brief",
    body: "Tell us how your firm works, who your clients are and what's slowing you down.",
  },
  {
    step: "02",
    title: "Scope and quote",
    body: "A written scope, timeline and cost before work begins.",
  },
  {
    step: "03",
    title: "Design and build",
    body: "You review working builds at each milestone.",
  },
  {
    step: "04",
    title: "Launch",
    body: "We load your real projects and test with your team and clients.",
  },
  {
    step: "05",
    title: "Support",
    body: "Updates, hosting and new features as you take on bigger work.",
  },
];

const whyChooseItems: WhyChooseItem[] = [
  {
    title: "Built around your workflow.",
    desc: "We learn your stages, from concept through handover, and mirror them in software.",
  },
  {
    title: "Fast with heavy visuals.",
    desc: "Image and drawing optimization keeps large portfolios quick.",
  },
  {
    title: "Works on site.",
    desc: "Mobile and low-connectivity use is designed in, not added later.",
  },
  {
    title: "Secure by design.",
    desc: "Role-based access for clients, consultants, contractors and staff.",
  },
  {
    title: "One team, one point of contact.",
    desc: "From the first sketch of the screen to long-term support.",
  },
];

const faqs: FAQItem[] = [
  {
    q: "Do you use website templates?",
    a: "No. Every website and app is designed to reflect your firm and built to your specification.",
  },
  {
    q: "Can you build a client portal or site-progress app, not just a website?",
    a: "Yes. Portals and apps are a core part of what we build for this sector.",
  },
  {
    q: "Can the site handle large image and drawing files?",
    a: "Yes. We optimise delivery so high-resolution work loads quickly without losing quality.",
  },
  {
    q: "Can you connect it with our existing tools?",
    a: "Yes. We scope integrations with your CRM, accounting and storage tools during the brief.",
  },
  {
    q: "Do you work with firms outside India?",
    a: "Yes. We work with practices, builders and developers across India and internationally.",
  },
  {
    q: "Do you work with architects and builders in Pondicherry and across India?",
    a: "Yes. Cravent is based in Pondicherry and builds for firms locally, nationally and abroad.",
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
    title: "Fashion & Retail",
    label: "Fashion Ecommerce App & Website Development",
    url: "/web-app-development-fashion",
    description:
      "Custom online storefronts, shopping apps, and lookbooks tailored to your collection and drops.",
  },
];

export const Route = createFileRoute("/web-app-development-construction-architecture")({
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
  component: ConstructionWebDevPage,
});

function ConstructionWebDevPage() {
  return (
    <DomainLandingPage
      canonicalUrl={canonicalUrl}
      pageTitle={pageTitle}
      metaDescription={metaDescription}
      serviceType="Web and app development for architecture and construction"
      breadcrumbName="Construction & Architecture Web & App Development"
      sectorEyebrow="Construction & Architecture"
      sectorTag="[ Sector Specialization ]"
      h1="Websites and software as well-built as the buildings you deliver."
      heroBody="Cravent is a web and app development agency for architects, builders, contractors, interior studios and developers. We build portfolio sites, client portals and site-management apps from scratch to your brief, for firms in India and across the world. Based in Pondicherry, working with teams everywhere."
      supportLine="No templates. No demos. Built to order."
      heroImage={imgRealEstate}
      heroImageAlt="Web and App Development for Architects and Construction"
      heroBadgeTop="Architectural Systems"
      heroBadgeBottom="High-Fidelity Engineering"
      heroBadgeTag="Built to Order"
      problemHeading="Your work is visual. Your website should prove it."
      problemParagraphs={[
        "Clients judge a practice by its portfolio long before they meet you. Heavy drawings that load slowly, generic templates and a contact form that goes nowhere cost you the enquiries you've earned. Meanwhile on site, progress still lives in WhatsApp groups and spreadsheets. We build both sides: the public face that wins projects and the internal tools that run them.",
      ]}
      whatWeDoHeading="What we build"
      whatWeDoEyebrow="Practice & Field Systems"
      whatWeDoLead="High-resolution visual storefronts and rugged field tools built around construction and architecture workflows."
      whatWeDoItems={whatWeBuildItems}
      howItWorksHeading="How a custom build works"
      howItWorksSteps={howItWorksSteps}
      whyChooseHeading="Why firms in construction and architecture choose Cravent"
      whyChooseItems={whyChooseItems}
      pairItWithText="A strong site also has to be found. See our marketing agency for construction and architecture for SEO, lead generation and brand positioning."
      pairItWithLinkText="See our marketing agency for construction and architecture"
      pairItWithUrl="/marketing-agency-construction-architecture"
      pairItWithBadge="Growth Twin"
      faqs={faqs}
      closingCtaHeading="Tell us about your firm and your next build. Send a short brief and get a scoped proposal."
      closingCtaButtonText="Start your brief"
      otherIndustriesHeading="Other industries we build for"
      otherIndustries={otherIndustries}
    />
  );
}
