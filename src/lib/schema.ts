import { absoluteUrl, ids, site } from "./site";
import { treatmentPath, treatments, type Treatment } from "./treatments";

type Json = Record<string, unknown>;

export const breadcrumbList = (items: { name: string; path: string }[]): Json => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

/** Business + doctor + website entities (rendered on the home page). */
export const homeGraph = (): Json => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": ids.website,
      url: absoluteUrl("/"),
      name: site.name,
      description: site.description,
      inLanguage: site.language,
      publisher: { "@id": ids.dentist },
    },
    {
      "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
      "@id": ids.dentist,
      name: site.name,
      alternateName: site.alternateNames,
      url: absoluteUrl("/"),
      description: site.description,
      image: absoluteUrl("/images/hero-patient-hd.webp"),
      logo: absoluteUrl("/icon.svg"),
      telephone: [site.phone, site.phoneSecondary],
      ...(site.email ? { email: site.email } : {}),
      foundingDate: site.foundingDate,
      medicalSpecialty: "Dentistry",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "284",
        bestRating: "5",
        worstRating: "1",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: `${site.address.street}, ${site.address.line2}`,
        addressLocality: site.address.locality,
        addressRegion: site.address.region,
        postalCode: site.address.postalCode,
        addressCountry: site.address.country,
      },
      geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
      hasMap: site.mapsUrl,
      areaServed: site.areaServed.map((name) => ({ "@type": "Place", name: `${name}, Pune` })),
      openingHoursSpecification: site.hours.specs.map((s) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: s.days,
        opens: s.opens,
        closes: s.closes,
      })),
      employee: { "@id": ids.doctor },
      founder: { "@id": ids.doctor },
      makesOffer: treatments.map((t) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: t.name,
          url: absoluteUrl(treatmentPath(t.slug)),
        },
      })),
      sameAs: site.sameAs,
    },
    {
      "@type": ["Person", "Physician"],
      "@id": ids.doctor,
      name: site.doctor.name,
      jobTitle: site.doctor.jobTitle,
      medicalSpecialty: "Dentistry",
      worksFor: { "@id": ids.dentist },
      url: absoluteUrl("/#about"),
    },
  ],
});

/** Graph for an individual treatment page. */
export const treatmentGraph = (t: Treatment): Json => {
  const url = absoluteUrl(treatmentPath(t.slug));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["WebPage", "MedicalWebPage"],
        "@id": `${url}#webpage`,
        url,
        name: t.metaTitle,
        description: t.metaDescription,
        inLanguage: site.language,
        isPartOf: { "@id": ids.website },
        about: { "@id": `${url}#procedure` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        primaryImageOfPage: absoluteUrl(`/images/treatments/${t.imageKey}-lg.webp`),
        dateModified: t.updated,
        publisher: { "@id": ids.dentist },
        mainEntity: { "@id": `${url}#faq` },
      },
      {
        "@type": "MedicalProcedure",
        "@id": `${url}#procedure`,
        name: t.name,
        description: t.summary,
        procedureType: `https://schema.org/${t.procedureType}`,
        bodyLocation: t.bodyLocation,
        howPerformed: t.steps.map((s, i) => `${i + 1}. ${s.title}: ${s.text}`).join(" "),
        preparation: t.steps[0]?.text,
        followup: t.aftercare.map((a) => `${a.when}: ${a.text}`).join(" "),
        url,
        image: absoluteUrl(`/images/treatments/${t.imageKey}-lg.webp`),
        provider: { "@type": "Dentist", "@id": ids.dentist, name: site.name, url: absoluteUrl("/") },
      },
      {
        ...breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Treatments", path: "/treatments" },
          { name: t.name, path: treatmentPath(t.slug) },
        ]),
        "@id": `${url}#breadcrumb`,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: t.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
};

/** Graph for the /treatments index page. */
export const treatmentsIndexGraph = (): Json => {
  const url = absoluteUrl("/treatments");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: "Dental Treatments",
        description: "All dental treatments offered at Dr. Sneha – The Dental Studio.",
        inLanguage: site.language,
        isPartOf: { "@id": ids.website },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: treatments.map((t, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: absoluteUrl(treatmentPath(t.slug)),
            name: t.name,
          })),
        },
      },
      {
        ...breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Treatments", path: "/treatments" },
        ]),
        "@id": `${url}#breadcrumb`,
      },
    ],
  };
};
