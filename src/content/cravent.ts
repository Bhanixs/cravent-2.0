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
    name: "Sustainability & Wellness",
    body: "We help sustainability-driven enterprises, clean technologies, circular initiatives, and modern wellness organizations communicate complex impact with clarity, trust, and responsible marketing.",
  },
];

export interface WorkItem {
  name: string;
  slug: string;
  domain: "Branding" | "Marketing" | "Business Development" | "Technology";
  industry: string;
  focus: string;
  scope: string;
  description?: string;
  pdf?: string;
  highlights?: string[];
}

export const work: WorkItem[] = [
  // ================= BRANDING PROJECTS =================
  {
    name: "Arkisan",
    slug: "arkisan-branding",
    domain: "Branding",
    industry: "Construction and Engineering",
    focus: "Brand identity, visual direction, corporate communication, and market positioning.",
    scope: "Brand Identity · Visual Direction · Marketing",
    description:
      "Arkisan is a forward-thinking home construction company built around engineering precision, transparency, and ethical practices. We crafted a professional brand identity and visual direction that reflects Arkisan's commitment to bringing structure and reliability to India's home-building process.",
    pdf: "/assets/portfolio/branding/Arkisan Portfolio2.pdf",
  },
  {
    name: "Divyam",
    slug: "divyam-branding",
    domain: "Branding",
    industry: "Architecture & Luxury Spaces",
    focus: "Architectural visual identity, brand guidelines, and spatial marketing communication.",
    scope: "Brand Identity · Visual Direction · Spatial Design",
    description:
      "Divyam represents high-end architectural living and modern craftsmanship. Cravent crafted a refined visual identity and comprehensive brand book that articulates the harmony between modern minimalism and timeless Indian architectural materials.",
    pdf: "/assets/portfolio/branding/Divyam Portfolio.pdf",
  },
  {
    name: "Erthaloka",
    slug: "erthaloka-branding",
    domain: "Branding",
    industry: "Sustainability and Planetary Technology",
    focus: "Brand communication, visual identity system, and sustainability-led storytelling.",
    scope: "Brand Identity · Visual Language · Sustainability",
    description:
      "Erthaloka operates at the intersection of sustainability and planetary technology. Cravent developed a holistic brand communication system, clean geometric identity, and sustainability-led storytelling framework to establish them as a global visionary.",
    pdf: "/assets/portfolio/branding/Erthaloka Portfolio.pdf",
  },
  {
    name: "Honey Pop",
    slug: "honey-pop-branding",
    domain: "Branding",
    industry: "Wellness and FMCG",
    focus: "Brand identity, packaging design, product positioning, and consumer communication.",
    scope: "Brand Identity · Packaging · Visual Direction",
    description:
      "Honey Pop is a modern wellness brand built around natural purity and effortless convenience. We crafted a distinctive brand identity and packaging visual direction that positions pure honey as an everyday lifestyle alternative to processed sugars.",
    pdf: "/assets/portfolio/branding/Honey Pop Portfolio.pdf",
  },
  {
    name: "KH International",
    slug: "khinternational-branding",
    domain: "Branding",
    industry: "Business Strategy & International Trade",
    focus: "Corporate identity, visual brand architecture, and international executive communication.",
    scope: "Corporate Branding · Visual Identity · Global Positioning",
    description:
      "KH International operates in international trade and business strategy across global borders. Cravent created their authoritative corporate branding guidelines, executive presentation systems, and global identity assets.",
    pdf: "/assets/portfolio/branding/kh.pdf",
  },
  {
    name: "Lycée Français International",
    slug: "lycee-francais-branding",
    domain: "Branding",
    industry: "Education & Institutional Outreach",
    focus: "Institutional visual communication, brand design, and global cultural narrative support.",
    scope: "Institutional Branding · Visual Design · Global Comms",
    description:
      "Lycée Français International is a prestigious international educational institution where Cravent provided communication design and institutional branding support, bridging rich cultural heritage with contemporary clarity.",
    pdf: "/assets/portfolio/branding/Lycee Francais Portfolio.pdf",
  },
  {
    name: "Travellers Tribe",
    slug: "travellers-tribe-branding",
    domain: "Branding",
    industry: "Travel, Adventure & Tourism",
    focus: "Community brand identity, experiential campaign assets, and nomadic storytelling.",
    scope: "Brand Identity · Community Direction · Media Design",
    description:
      "Travellers Tribe brings together explorers, wanderers, and cultural curators. We developed an energetic, adventurous visual brand identity with custom iconography and community campaign guidelines.",
    pdf: "/assets/portfolio/branding/travelers triibe.pdf",
  },
  {
    name: "Valonk",
    slug: "valonk-branding",
    domain: "Branding",
    industry: "Fashion and Lifestyle",
    focus: "Brand identity system, logo craft, product art direction, and editorial guidelines.",
    scope: "Brand Identity · Visual Direction · Art Direction",
    description:
      "Valonk is a fashion and lifestyle brand where we crafted a complete brand identity system — from visual direction and logo design to product photography guidelines and marketing communication, maintaining timeless elegance.",
    pdf: "/assets/portfolio/branding/valonk Branding & Visual Identity.pdf",
  },
  {
    name: "Vivium",
    slug: "vivium-branding",
    domain: "Branding",
    industry: "Ethical Living & Sustainability",
    focus: "Brand identity, product storytelling, craftsmanship narrative, and sustainable aesthetic.",
    scope: "Brand Identity · Product Design · Sustainability",
    description:
      "Vivium is an ethical bridge brand celebrating Indian craft artisans and natural sustainable bath and kitchen accessories. We crafted their complete brand book, sustainable packaging philosophy, and visual identity.",
    pdf: "/assets/portfolio/branding/Vivum brand book.pdf",
  },
  {
    name: "Cravent",
    slug: "cravent-branding",
    domain: "Branding",
    industry: "Creative Agency & Growth Partner",
    focus: "Brand identity, logo system, geometric visual language, and agency design system.",
    scope: "Brand Identity · Logo System · Design Language",
    description:
      "Cravent's own brand identity — a comprehensive architectural logo and visual identity system engineered around the electric blue X motif, precision geometry, and high-performance growth engineering.",
    pdf: "/assets/portfolio/branding/X - Cravent logo & visual identity...pdf",
  },

  // ================= MARKETING PROJECTS =================
  {
    name: "Valonk",
    slug: "valonk-marketing",
    domain: "Marketing",
    industry: "Fashion and Lifestyle",
    focus: "Full-funnel customer acquisition, Meta & Google performance media, and luxury creator gifting.",
    scope: "Performance Media · Creator Strategy · Retention Engine",
    description:
      "For Valonk's seasonal luxury fashion collections, Cravent engineered a high-converting full-funnel acquisition engine. We combined aspirational Meta Reels, retargeting funnels, and curated fashion influencer partnerships to achieve record return on ad spend (ROAS).",
    highlights: [
      "Targeted Meta & Google Ads performance campaigns with 3.8x ROAS",
      "Curated editorial influencer gifting across top-tier lifestyle creators",
      "Automated VIP email lifecycle sequences for higher cart checkout conversion",
    ],
  },
  {
    name: "Arkisan",
    slug: "arkisan-marketing",
    domain: "Marketing",
    industry: "Construction and Engineering",
    focus: "High-intent inbound lead generation, hyper-local search marketing, and automated WhatsApp qualification.",
    scope: "Inbound Lead Gen · Search Ads · WhatsApp Ingestion",
    description:
      "Cravent designed a high-intent commercial lead engine for Arkisan. By targeting landowners and prospective homeowners through localized Google Search and Meta video walk-throughs, we generated qualified inquiries directly routed into automated CRM workflows.",
    highlights: [
      "Over 120+ qualified luxury home-building consultations per quarter",
      "Interactive WhatsApp Business intake system qualifying client budgets",
      "Geo-targeted local SEO positioning Arkisan as top-rated builder",
    ],
  },
  {
    name: "Travellers Tribe",
    slug: "travellers-tribe-marketing",
    domain: "Marketing",
    industry: "Travel, Adventure & Tourism",
    focus: "Viral organic social engine, expedition influencer drops, and automated traveler community loops.",
    scope: "Organic Content · Expedition Drops · Community Retention",
    description:
      "Engineered an organic social momentum flywheel for Travellers Tribe, turning curated backcountry expeditions into viral short-form video stories that sold out seasonal tours within 48 hours of drop announcements.",
    highlights: [
      "Multi-platform short-form video framework generating 4.2M+ organic views",
      "Early-access WhatsApp & email drops driving instant booking sellouts",
      "User-generated content (UGC) community ambassador incentive program",
    ],
  },
  {
    name: "Honey Pop",
    slug: "honey-pop-marketing",
    domain: "Marketing",
    industry: "Wellness and FMCG",
    focus: "D2C omnichannel retail launch, wellness creator seeding, and Amazon brand store conversion.",
    scope: "D2C Growth · Creator Seeding · Omnichannel Ads",
    description:
      "Spearheaded the nationwide go-to-market rollout for Honey Pop across direct-to-consumer and retail channels. Leveraged nutrition-led TikTok and Instagram creator seeding paired with retargeting ads to establish everyday consumer pantry adoption.",
    highlights: [
      "350+ health & fitness micro-creators activated across organic social",
      "Direct-to-consumer conversion rate boosted from 1.4% to 3.6%",
      "Targeted Amazon PPC advertising dominating organic search keywords",
    ],
  },
  {
    name: "Divyam",
    slug: "divyam-marketing",
    domain: "Marketing",
    industry: "Architecture & Luxury Spaces",
    focus: "High-net-worth client outreach, architectural editorial press, and private showcase campaigns.",
    scope: "Editorial PR · High-Ticket Outreach · Video Campaigns",
    description:
      "Devised an exclusive marketing and private relationship strategy for Divyam to reach prospective ultra-luxury villa clients. Leveraged cinematic architectural walk-through films, bespoke editorial placement, and confidential private previews.",
    highlights: [
      "Cinematic spatial cinematography viewed by 150k+ luxury home enthusiasts",
      "Feature placements in leading architectural and interior design periodicals",
      "Direct private consultation bookings with premium land developers",
    ],
  },
  {
    name: "Jeevarasai",
    slug: "jeevarasai-marketing",
    domain: "Marketing",
    industry: "Organic Commerce & Wellness",
    focus: "Subscription retention funnels, Google Shopping performance, and lifecycle email marketing.",
    scope: "E-Commerce Growth · Lifecycle Email · Search Ads",
    description:
      "Engineered automated customer lifecycle retention flows and repeat purchase incentives for Jeevarasai, elevating customer lifetime value (LTV) and scaling organic wellness subscriptions across nationwide consumers.",
    highlights: [
      "42% increase in 90-day repeat replenishment purchase rates",
      "Optimized Google Performance Max campaigns for high-converting SKU lines",
      "Automated personalized email win-back and replenishment triggers",
    ],
  },

  // ================= BUSINESS DEVELOPMENT PROJECTS =================
  {
    name: "KH International",
    slug: "khinternational-business-dev",
    domain: "Business Development",
    industry: "Business Strategy & International Trade",
    focus: "Cross-border market entry, global distributor framework, and institutional trade negotiations.",
    scope: "GTM Expansion · Trade Strategy · Partnership Pipeline",
    description:
      "Structured KH International's multi-territory business development strategy, formulating international distributor frameworks, institutional negotiation decks, and verified supply chain expansion blueprints across three continents.",
    highlights: [
      "Cross-border partner acquisition pipeline spanning GCC and Southeast Asia",
      "Institutional commodity trade presentation decks for sovereign buyers",
      "Risk-adjusted pricing schedules and international contract playbooks",
    ],
  },
  {
    name: "Erthaloka",
    slug: "erthaloka-business-dev",
    domain: "Business Development",
    industry: "Sustainability and Planetary Technology",
    focus: "Institutional climate funding proposals, climate venture pitch decks, and carbon credit commercial models.",
    scope: "Venture Strategy · Investor Pitch Decks · Revenue Modeling",
    description:
      "Developed comprehensive institutional investor decks and public-private partnership models for Erthaloka, translating complex ecological telemetry tech into investable enterprise commercial frameworks.",
    highlights: [
      "Complete seed and Series A investor data room and financial pro-forma models",
      "Public-private consortium partnership templates for municipal deployments",
      "Enterprise carbon credit monetization and verifiable offset roadmap",
    ],
  },
  {
    name: "Vivium",
    slug: "vivium-business-dev",
    domain: "Business Development",
    industry: "Ethical Living & Sustainability",
    focus: "Artisan supplier network SOPs, B2B wholesale distribution strategy, and institutional hospitality procurement.",
    scope: "B2B Wholesale · Channel Strategy · Supply Chain SOPs",
    description:
      "Architected Vivium's commercial distribution roadmap, securing B2B procurement contracts with boutique luxury hotels and streamlining ethical artisan craft sourcing with scalable operational SOPs.",
    highlights: [
      "Procurement agreements established with 18+ luxury eco-resorts",
      "Standardized fair-wage artisan supplier agreements and quality audit SOPs",
      "Tiered corporate gifting catalogs and institutional pricing models",
    ],
  },
  {
    name: "SPARC",
    slug: "sparc-business-dev",
    domain: "Business Development",
    industry: "Sustainability and Community Development",
    focus: "Corporate CSR funding frameworks, municipal grant proposals, and community partnership channels.",
    scope: "CSR Partnership · Grant Strategy · Stakeholder Alignment",
    description:
      "Crafted corporate partnership roadmaps and impact audit reports for SPARC, unlocking long-term CSR endowments and municipal collaborative agreements for sustainable grass-roots initiatives.",
    highlights: [
      "Structured multi-year CSR sponsorship pitch kits for listed enterprises",
      "Municipal government alignment framework for public urban forestry",
      "Transparent social return on investment (SROI) reporting templates",
    ],
  },
  {
    name: "Vedashrama",
    slug: "vedashrama-business-dev",
    domain: "Business Development",
    industry: "Wellness, Heritage & Retreats",
    focus: "High-yield hospitality revenue models, seasonal corporate retreat packages, and wellness alliance channels.",
    scope: "Revenue Optimization · Corporate Packages · Strategic Alliances",
    description:
      "Revamped Vedashrama's commercial offerings with high-ticket executive retreat programs, tiered corporate wellness packages, and international travel curator booking partnerships.",
    highlights: [
      "Turnkey executive leadership retreat packages tailored for tech founders",
      "Direct B2B referral partnerships with European luxury wellness curators",
      "Occupancy forecasting models improving off-peak seasonal revenue by 34%",
    ],
  },
  {
    name: "XplorED",
    slug: "xplored-business-dev",
    domain: "Business Development",
    industry: "Education, Travel & EdTech",
    focus: "Institutional school board partnerships, B2B university pipelines, and scalable group sales funnels.",
    scope: "Institutional B2B · School Board Alliances · Sales Funnels",
    description:
      "Built the institutional business development pipeline for XplorED, designing institutional sales proposals and contract templates that accelerated onboarding across leading international school networks.",
    highlights: [
      "Standardized institutional tender documents and risk-mitigation briefs",
      "Onboarding agreement pipeline signed across 24+ private international schools",
      "Comprehensive parent orientation deck and student safety assurance blueprint",
    ],
  },

  // ================= TECHNOLOGY PROJECTS =================
  {
    name: "Erthaloka",
    slug: "erthaloka-tech",
    domain: "Technology",
    industry: "Sustainability and Planetary Technology",
    focus: "Digital web platform, ecological monitoring showcase, and responsive web systems.",
    scope: "Web Platform · Digital Architecture · Interactive UX",
    description:
      "For Erthaloka's planetary technology initiatives, Cravent designed and engineered the digital platform architecture, featuring responsive technical frameworks, interactive data modules, and intuitive user experiences.",
    pdf: "/assets/portfolio/tech/Erthaloka Web.pdf",
  },
  {
    name: "Jeevarasai",
    slug: "jeevarasai-tech",
    domain: "Technology",
    industry: "Organic Commerce & Wellness",
    focus: "Digital web storefront, product catalog architecture, and organic commerce ecosystem.",
    scope: "E-Commerce Platform · Web Architecture · Systems",
    description:
      "Jeevarasai is an authentic organic wellness provider. Cravent engineered their digital web experience, product catalog architecture, and high-performance e-commerce storefront for seamless customer ordering.",
    pdf: "/assets/portfolio/tech/Jeevarasai Web.pdf",
  },
  {
    name: "KH International",
    slug: "khinternational-tech",
    domain: "Technology",
    industry: "Business Strategy & International Trade",
    focus: "Corporate digital portal, cross-border business showcase, and trade platform UX.",
    scope: "Corporate Web Platform · Digital Portal · Responsive UX",
    description:
      "To power KH International's cross-border business operations, Cravent architected a modern, lightning-fast web portal that presents their global commodities and strategic trade capabilities with executive polish.",
    pdf: "/assets/portfolio/tech/KH Web.pdf",
  },
  {
    name: "SPARC",
    slug: "sparc-tech",
    domain: "Technology",
    industry: "Sustainability and Community Development",
    focus: "Community impact platform, web portal, outreach tools, and digital initiative systems.",
    scope: "Web Platform · Impact Portal · Digital Systems",
    description:
      "SPARC drives grass-roots sustainability and community upliftment. We developed a mission-critical web platform equipped with initiative portals, dynamic community impact trackers, and donor outreach touchpoints.",
    pdf: "/assets/portfolio/tech/SPARC Web.pdf",
  },
  {
    name: "Travellers Tribe",
    slug: "travellers-tribe-tech",
    domain: "Technology",
    industry: "Travel, Adventure & Tourism",
    focus: "Travel community web platform, member discovery interface, and digital booking touchpoints.",
    scope: "Community Web App · Digital Experience · UX/UI",
    description:
      "Cravent built the digital web platform for Travellers Tribe, allowing explorers to browse curated itineraries, connect with fellow community members, and interact with engaging travel content seamlessly.",
    pdf: "/assets/portfolio/tech/Travellers Triibe Web.pdf",
  },
  {
    name: "Vedashrama",
    slug: "vedashrama-tech",
    domain: "Technology",
    industry: "Wellness, Heritage & Retreats",
    focus: "Holistic retreat digital experience, booking flow, and responsive web platform.",
    scope: "Digital Experience · Booking Architecture · Web Platform",
    description:
      "Vedashrama provides sanctuary-grade Ayurvedic and wellness retreats. Cravent engineered an immersive, serene web portal with integrated retreat scheduling, program discovery, and tranquil digital interactions.",
    pdf: "/assets/portfolio/tech/Vedashrama Web.pdf",
  },
  {
    name: "Vivium",
    slug: "vivium-tech",
    domain: "Technology",
    industry: "Ethical Living & E-Commerce",
    focus: "Sustainable product e-commerce storefront, catalog management, and seamless checkout platform.",
    scope: "E-Commerce Platform · Web Design · Digital Store",
    description:
      "For Vivium's ethical product lines, Cravent architected an exquisite digital storefront that pairs sustainable artisanal product storytelling with a modern, high-conversion shopping and checkout experience.",
    pdf: "/assets/portfolio/tech/Vivium Web.pdf",
  },
  {
    name: "XplorED",
    slug: "xplored-tech",
    domain: "Technology",
    industry: "Education, Travel & EdTech",
    focus: "Experiential learning web platform, student portal, and interactive educational portal.",
    scope: "EdTech Platform · Web Portal · Interactive UX",
    description:
      "XplorED pioneers experiential learning and global student expeditions. We built their interactive digital web platform, enabling institutions and students to navigate curriculum-aligned travel programs easily.",
    pdf: "/assets/portfolio/tech/XplorED Web.pdf",
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
