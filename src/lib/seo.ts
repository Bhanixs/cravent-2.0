export const SITE_URL = "https://www.cravent.in";

export const canonicalLink = (path: string) => ({
  rel: "canonical",
  href: `${SITE_URL}${path === "/" ? "/" : path}`,
});

/** Organization + local business data shown to search engines on every page. */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Cravent",
  description:
    "Branding, digital marketing, website development and business strategy agency in Puducherry, India.",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/cravent-logo.png`,
  image: `${SITE_URL}/cravent-logo.png`,
  telephone: "+91 87783 45901",
  email: "info@cravent.in",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Puducherry",
    addressCountry: "IN",
  },
  areaServed: { "@type": "Country", name: "India" },
  serviceType: [
    "Branding and design",
    "Digital marketing",
    "Website and app development",
    "Business strategy and development",
  ],
};
