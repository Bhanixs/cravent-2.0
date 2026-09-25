export const servicesHeading = {
  eyebrow: "What We Do",
  title: "One partner for your next stage of growth.",
  lead: "Growth becomes difficult when branding, marketing, sales, and technology operate separately. Cravent connects these areas into one focused growth system.",
};

export const servicesPositioningStatement =
  "The integrated service approach reflects Craventʼs current positioning as a partner combining design, marketing, strategy, technology, SEO/AEO, pitch decks, web applications, branding, ecommerce, and influencer marketing.";

export const services = [
  {
    num: "01",
    title: "Branding & Design",
    body: "We create brands that are clear, memorable, consistent, and built for the market they want to lead.",
    points: [
      "Brand strategy",
      "Brand identity",
      "Logo systems",
      "Packaging and collateral",
      "UI/UX design",
      "Presentation and pitch deck design",
      "Social media design",
      "Motion graphics and video content",
    ],
  },
  {
    num: "02",
    title: "Marketing & Growth",
    body: "We help brands attract attention, generate demand, and build meaningful customer relationships.",
    points: [
      "Digital marketing",
      "Social media management",
      "SEO and AEO",
      "Paid advertising",
      "WhatsApp marketing",
      "Influencer campaigns",
      "Content strategy",
      "Lead generation",
      "Campaign planning",
      "Offline and local marketing",
    ],
  },
  {
    num: "03",
    title: "Business Development & Strategy",
    body: "We turn ideas and opportunities into practical business plans, partnerships, and growth systems.",
    points: [
      "Business development",
      "Market research",
      "Competitor analysis",
      "Go-to-market strategy",
      "Business plans",
      "Pitch decks",
      "Revenue models",
      "Partnership strategy",
      "Sales systems",
      "CRM and pipeline planning",
    ],
  },
  {
    num: "04",
    title: "Technology Solutions",
    body: "We build the digital infrastructure that helps businesses operate, sell, and scale.",
    points: [
      "Websites and landing pages",
      "E-commerce platforms",
      "Web applications",
      "Mobile applications",
      "CRM setup and integration",
      "WhatsApp automation",
      "Payment integration",
      "Internal dashboards",
      "Workflow automation",
      "Technology maintenance and support",
    ],
  },
];

export interface ServiceSection {
  id: string;
  num: string;
  discipline: string;
  heading: string;
  description: string;
  items: string[];
  cta: string;
}

export const serviceSections: ServiceSection[] = [
  {
    id: "branding-design",
    num: "01",
    discipline: "Branding & Design",
    heading: "Build a brand people remember.",
    description:
      "Your brand is more than a logo. It is the experience people associate with your business, from the first impression to the final interaction. Cravent develops brand systems that help businesses communicate with clarity and build stronger market recognition.",
    items: [
      "Brand discovery and audit",
      "Brand positioning",
      "Naming direction",
      "Logo and identity design",
      "Colour and typography systems",
      "Brand guidelines",
      "Packaging and product design",
      "Marketing collateral",
      "Pitch deck visuals",
      "Social media design",
      "UI/UX and design systems",
      "Video, motion, and visual content",
    ],
    cta: "Build your brand with purpose",
  },
  {
    id: "marketing-growth",
    num: "02",
    discipline: "Marketing & Growth",
    heading: "Turn attention into action.",
    description:
      "Marketing should do more than generate visibility. It should create awareness, enquiries, conversations, customers, and repeat business. Cravent builds channel-specific marketing systems based on the business model, audience, market, and growth stage.",
    items: [
      "Marketing strategy",
      "Social media management",
      "SEO and AEO",
      "Paid media",
      "Google Ads",
      "Meta Ads",
      "WhatsApp marketing",
      "Influencer campaigns",
      "Content strategy",
      "Email marketing",
      "Lead generation",
      "Local and offline marketing",
      "Campaign tracking and reporting",
    ],
    cta: "Create a marketing system that moves your business forward",
  },
  {
    id: "business-strategy",
    num: "03",
    discipline: "Business Development & Strategy",
    heading: "Give your growth a direction.",
    description:
      "Strong businesses need more than ambition. They need market understanding, clear priorities, a workable revenue model, and consistent execution. Cravent helps founders and organisations convert ideas into actionable business and growth plans.",
    items: [
      "Business development strategy",
      "Market and competitor research",
      "Customer and audience analysis",
      "Go-to-market planning",
      "Revenue model development",
      "Partnership and channel strategy",
      "Sales pipeline design",
      "Business proposals",
      "Investor pitch decks",
      "Financial planning support",
      "KPI and reporting systems",
      "SOP and workflow development",
      "CRM planning and implementation",
    ],
    cta: "Turn your next opportunity into a growth plan",
  },
  {
    id: "technology-solutions",
    num: "04",
    discipline: "Technology Solutions",
    heading: "Build the systems behind growth.",
    description:
      "Technology should make your business easier to operate, easier to access, and easier to scale. Cravent works with businesses to plan and build practical digital solutions — from a highconverting landing page to a complete web, CRM, or app ecosystem.",
    items: [
      "Website design and development",
      "Landing pages",
      "E-commerce websites",
      "Web applications",
      "Mobile applications",
      "CRM setup",
      "CRM integrations",
      "WhatsApp Business systems",
      "Payment gateways",
      "Customer dashboards",
      "Internal tools",
      "Workflow automation",
      "Analytics and reporting",
      "Maintenance and improvements",
    ],
    cta: "Build the digital foundation for your next stage",
  },
];

export const approach = [
  {
    step: "01",
    title: "Understand",
    body: "Study the business, audience, market, competition, current systems, and growth priorities.",
  },
  {
    step: "02",
    title: "Define",
    body: "Identify the core opportunity, clarify positioning, and define the scope of work.",
  },
  {
    step: "03",
    title: "Build",
    body: "Create the brand, campaign, strategy, platform, CRM, or digital system required.",
  },
  {
    step: "04",
    title: "Launch",
    body: "Put the work into the market through campaigns, content, partnerships, technology, and sales systems.",
  },
  {
    step: "05",
    title: "Improve",
    body: "Review performance, learn from the market, and improve the system over time.",
  },
];

export const industries = [
  {
    name: "Construction & Real Estate",
    body: "For construction companies, developers, architects, interior firms, and property businesses, we create brand systems and marketing platforms that improve trust, visibility, enquiries, and project communication.",
  },
  {
    name: "Fashion & Lifestyle",
    body: "We help fashion, apparel, accessories, wellness, beauty, and lifestyle brands develop distinctive identities, digital storefronts, campaigns, and customer experiences.",
  },
  {
    name: "Hospitality, Travel & Tourism",
    body: "We support resorts, hotels, travel companies, experience providers, and tourism businesses with positioning, content, digital marketing, booking journeys, partnerships, and guestexperience communication.",
  },
  {
    name: "Education",
    body: "We work with schools, educational institutions, training centres, and learning platforms to strengthen their communication, admissions marketing, digital presence, and stakeholder engagement.",
  },
  {
    name: "Healthcare & Wellness",
    body: "We help healthcare, wellness, and socially relevant organisations communicate complex services with clarity, trust, sensitivity, and responsible marketing.",
  },
];

export interface WorkItem {
  name: string;
  slug: string;
  industry: string;
  focus: string;
  scope: string;
  description?: string;
  pdf?: string;
}

export const work: WorkItem[] = [
  {
    name: "Valonk",
    slug: "valonk",
    industry: "Fashion and Lifestyle",
    focus: "Brand identity, visual direction, product and marketing communication.",
    scope: "Brand Identity · Visual Direction · Marketing",
    description:
      "Valonk is a fashion and lifestyle brand where we crafted a complete brand identity system — from visual direction and logo design to product photography guidelines and marketing communication. The project focused on building a cohesive brand language that resonates with modern consumers while maintaining timeless elegance.",
    pdf: "/assets/portfolio/valonk Branding & Visual Identity.pdf",
  },
  {
    name: "Vivium",
    slug: "vivium",
    industry: "Ethical Living & Sustainability",
    focus: "Brand identity, product design communication, sustainable brand storytelling.",
    scope: "Brand Identity · Product Design · Sustainability",
    description:
      "Vivum is an Indian based Ethical bridge brand working with the product category of bath accessories and kitchen accessories. Vivium closely works with craft artisans and natural material providers to create natural and sustainable products with a touch of enriched handicraft skills of India, by adding an essence of modern design and aesthetical feel. We also work on personalized products to provide our consumers with utmost satisfaction and uniqueness, with our specialized design team.",
    pdf: "/assets/portfolio/Vivum brand book.pdf",
  },
  {
    name: "Akshara Vidyaashram",
    slug: "akshara-vidyaashram",
    industry: "Education",
    focus: "Institutional communication, brand support, digital content, and outreach.",
    scope: "Institutional Branding · Digital Outreach · Content",
    description:
      "Akshara Vidyaashram is an educational institution where Cravent provided comprehensive brand support — from institutional communication design to digital content creation and community outreach strategies, helping the school strengthen its identity and engagement.",
  },
  {
    name: "Travellers Tribe",
    slug: "travellers-tribe",
    industry: "Travel and Tourism",
    focus: "Travel community building, content, campaigns, and digital engagement.",
    scope: "Community Building · Campaigns · Digital Engagement",
    description:
      "Travellers Tribe is a travel community where we built the digital engagement ecosystem — content strategies, social media campaigns, and community-building initiatives designed to inspire and connect passionate travellers.",
  },
  {
    name: "Erthaloka",
    slug: "erthaloka",
    industry: "Sustainability and Planetary Technology",
    focus: "Brand communication, digital presence, strategy, and sustainability-led storytelling.",
    scope: "Brand Strategy · Planetary Tech · Digital Platform",
    description:
      "Erthaloka operates at the intersection of sustainability and planetary technology. Cravent developed the brand communication system, digital platform, and sustainability-led storytelling to position Erthaloka as a thought leader in the responsible technology space.",
    pdf: "/assets/portfolio/Erthaloka Portfolio.pdf",
  },
  {
    name: "SPARC",
    slug: "sparc",
    industry: "Sustainability and Community Development",
    focus: "Communication, project support, outreach, and impact-oriented initiatives.",
    scope: "Communication Design · Outreach · Impact Strategy",
    description:
      "SPARC focuses on sustainability and community development. We provided communication design, project support, outreach strategies, and impact-oriented initiative planning to amplify their mission and reach.",
  },
  {
    name: "Jeevarasai",
    slug: "jeevarasai",
    industry: "Organic and Wellness",
    focus: "Brand communication, marketing, product storytelling, and customer engagement.",
    scope: "Brand Storytelling · Organic Commerce · Marketing",
    description:
      "Jeevarasai is an organic and wellness brand where we built the brand communication framework, product storytelling approach, and customer engagement systems to connect health-conscious consumers with authentic organic products.",
  },
  {
    name: "Lycée Français International",
    slug: "lycee-francais",
    industry: "Education",
    focus: "Communication and institutional project support.",
    scope: "Institutional Project Support · Global Communication",
    description:
      "Lycée Français International is a prestigious educational institution where Cravent provided communication design and institutional project support, helping bridge cultural narratives through thoughtful design and global communication strategies.",
    pdf: "/assets/portfolio/Lycee Francais Portfolio.pdf",
  },
  {
    name: "French Councillor Election Campaign",
    slug: "french-councillor-campaign",
    industry: "Political and Community Communication",
    focus: "Campaign communication, creative assets, outreach, and public engagement.",
    scope: "Campaign Strategy · Creative Assets · Public Outreach",
    description:
      "For the French Councillor Election Campaign, Cravent designed and executed a full campaign communication system — creative assets, public outreach strategies, and engagement materials that connected the candidate with their constituency.",
  },
  {
    name: "KH International",
    slug: "kh-international",
    industry: "Business Strategy & International Trade",
    focus: "Corporate positioning, market strategy, and executive communication.",
    scope: "Strategy · International Positioning · Marketing",
    description:
      "KH International operates in international trade and business strategy. We provided corporate positioning, market strategy development, and executive communication design to establish their presence across global markets.",
  },
  {
    name: "Xplored",
    slug: "xplored",
    industry: "Travel and Lifestyle",
    focus: "Brand growth, digital media production, and experiential community storytelling.",
    scope: "Brand · Growth · Media Production",
    description:
      "Xplored is a travel and lifestyle brand where we drove brand growth through digital media production and experiential community storytelling — building a visual identity that captures the spirit of exploration.",
  },
  {
    name: "Cravent",
    slug: "cravent",
    industry: "Creative Agency & Growth Partner",
    focus: "Brand identity, logo system, visual identity, and internal brand language.",
    scope: "Brand Identity · Logo System · Visual Language",
    description:
      "Cravent's own brand identity — a comprehensive logo and visual identity system built to communicate precision, growth, and partnership across every touchpoint of the agency's presence.",
    pdf: "/assets/portfolio/X - Cravent logo & visual identity...pdf",
  },
  {
    name: "Bhanix",
    slug: "bhanix",
    industry: "Business Development & Fintech",
    focus: "Market positioning, go-to-market systems, and digital sales infrastructure.",
    scope: "Positioning · Systems · Go-To-Market",
    description:
      "Bhanix operates in the fintech and business development space. Cravent built the market positioning strategy, go-to-market systems, and digital sales infrastructure to accelerate their entry and growth in a competitive landscape.",
  },
  {
    name: "Other Ventures & Initiatives",
    slug: "other-ventures",
    industry: "Startups, Education, Sustainability & Community",
    focus: "Strategic advisory, digital platforms, and brand development for emerging initiatives.",
    scope: "Ecosystem Advisory · Digital Platforms · Ventures",
    description:
      "A collection of emerging ventures and initiatives across startups, education, sustainability, and community development — where Cravent provides strategic advisory, digital platform development, and brand building for early-stage projects.",
  },
];

export const spaceFeatures = [
  "Pre-construction 3D walkthroughs",
  "Interactive floor plans",
  "Unit pricing and availability",
  "Embedded site-visit booking",
  "WhatsApp integration",
  "Configurable finishes",
  "Analytics",
  "CRM integration",
  "Digital marketing integration",
];

export const techStack = ["Brand", "Marketing", "Sales", "CRM", "Technology", "Analytics"];

export const capabilities = [
  "Websites",
  "Customer dashboards",
  "Internal tools",
  "Workflow automation",
  "Analytics & reporting",
  "CRM",
  "Digital platforms",
  "Maintenance & improvements",
];

export const insights = [
  {
    category: "Strategy",
    title: "Positioning is a system, not a sentence.",
    body: "Why the strongest positioning decisions show up in operations, pricing, and product — not only in copy.",
  },
  {
    category: "Marketing",
    title: "Campaigns end. Growth engines compound.",
    body: "Building acquisition systems that keep working after the launch budget stops.",
  },
  {
    category: "Technology",
    title: "The CRM is the brand's memory.",
    body: "How sales infrastructure decides whether marketing spend turns into revenue.",
  },
  {
    category: "Branding",
    title: "Distinctive beats decorative.",
    body: "Designing identity systems built for recognition across every surface a business owns.",
  },
  {
    category: "Business Growth",
    title: "Where growth actually gets stuck.",
    body: "The five disconnections we find most often between brand, marketing, sales, and technology.",
  },
  {
    category: "Industry Insights",
    title: "Real estate is going pre-construction digital.",
    body: "Buyers now expect to experience a project long before the first slab is poured.",
  },
];
