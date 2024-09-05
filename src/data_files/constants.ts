// import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "GC",
  tagline: "Agente de Seguros",
  description: "Gonzalo Contreras. Agente de Seguros.",
  description_short: "Agente de Seguros.",
  url: "https://google.cl",
  author: "Tobal Developer",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://google.cl",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

// export const OG = {
//   locale: "en_US",
//   type: "website",
//   url: SITE.url,
//   title: `${SITE.title}: : Agente de Seguros`,
//   description: "Gonzalo Contreras, Agente de Seguros. Tu Agente de seguros, la mejor asesoría personalizada y dedicada. Contrata ahora!!",
//   image: ogImageSrc,
// };
