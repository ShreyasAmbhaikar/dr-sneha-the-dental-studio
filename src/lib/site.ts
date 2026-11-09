/**
 * Single source of truth for business details used in metadata, JSON-LD,
 * sitemap, robots, llms.txt and the UI.
 *
 * NAP (name, address, phone) and hours below match the clinic's Google Business
 * Profile EXACTLY (synced 7 Nov 2026). Any change must be made on the GBP first,
 * then here, then on every citation (docs/seo/citations-calendar.csv).
 *
 * Set NEXT_PUBLIC_SITE_URL in the deployment environment so canonical URLs, the
 * sitemap and schema all use the production domain.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thedentalstudio.in").replace(/\/$/, "");

/** Google Maps listing (stable CID form of the GBP's place ID 0xe3e99a650ec2e2e8). */
const MAPS_URL = "https://maps.google.com/?cid=16422827275013251816";

export const site = {
  url: SITE_URL,
  /** Exact GBP business name. */
  name: "Dr. Sneha-The Dental Studio",
  shortName: "The Dental Studio",
  alternateNames: ["The Dental Studio", "Dr. Sneha Sardar's Dental Studio"],
  tagline: "Healthy Smiles for a Confident You",
  description:
    "Family dental clinic in Wadgaon Sheri, Pune, led by Dr. Sneha Sardar (BDS): root canal treatment, dental implants, braces and clear aligners, teeth whitening, smile makeovers, kids dentistry and emergency care.",
  locale: "en_IN",
  language: "en-IN",
  themeColor: "#233c41",
  foundingDate: "2018-12-17",

  phone: "+91 74981 60682",
  phoneHref: "+917498160682",
  phoneSecondary: "+91 97666 55007",
  phoneSecondaryHref: "+919766655007",
  phoneDisplayList: ["+91 74981 60682", "+91 97666 55007"],
  whatsappNumber: "919766655007",
  /** TODO(content): the clinic has not supplied an email yet; null hides it everywhere. */
  email: null as string | null,

  address: {
    street: "Ground Floor, Swaraj Complex, Shop No. 2/3/4",
    line2: "Opp. Datta Mandir, Wadgaon Sheri",
    locality: "Pune",
    region: "Maharashtra",
    postalCode: "411014",
    country: "IN",
  },
  geo: { lat: 18.5456539, lng: 73.921896 },
  mapsUrl: MAPS_URL,

  /** Split hours exactly as on the GBP. Times are 24 h for schema.org. */
  hours: {
    specs: [
      { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "10:30", closes: "14:30" },
      { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "17:30", closes: "21:30" },
      { days: ["Sunday"], opens: "10:30", closes: "13:30" },
    ],
    /** Human-readable lines for the UI. */
    lines: ["Mon – Sat: 10:30 AM – 2:30 PM", "& 5:30 PM – 9:30 PM", "Sunday: 10:30 AM – 1:30 PM"],
    label: "Mon–Sat 10:30 AM–2:30 PM and 5:30 PM–9:30 PM · Sun 10:30 AM–1:30 PM",
  },

  /** Neighbourhoods the clinic serves (schema areaServed, llms.txt). */
  areaServed: ["Wadgaon Sheri", "Kharadi", "Viman Nagar", "Kalyani Nagar", "Chandan Nagar", "Yerwada", "Nagar Road"],

  /** Profiles that represent the same business (schema sameAs). Add each new citation/social URL here. */
  sameAs: [
    MAPS_URL,
    "https://bajajfinservhealth.in/doctor/pune/dentist/dr-sneha-sardar",
    "https://www.docindia.org/doctors/pune/dr-sneha-sardar-dentist",
  ],

  doctor: {
    name: "Dr. Sneha Sardar",
    jobTitle: "Dentist (BDS) – Cosmetic & General Dentistry",
    degree: "BDS",
  },
};

/** One-line postal address, e.g. for llms.txt and citations. */
export const fullAddress = `${site.address.street}, ${site.address.line2}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}`;

/** Absolute URL helper for paths like "/treatments/dental-implants". */
export const absoluteUrl = (path = "/") => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export const ids = {
  website: `${SITE_URL}/#website`,
  dentist: `${SITE_URL}/#dentist`,
  doctor: `${SITE_URL}/#dr-sneha-sardar`,
} as const;
