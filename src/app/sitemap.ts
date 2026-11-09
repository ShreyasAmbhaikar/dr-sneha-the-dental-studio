import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { treatmentPath, treatments } from "@/lib/treatments";

// Content dates are fixed (not "now") so lastmod only changes when content does.
const SITE_UPDATED = new Date("2026-11-07");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), lastModified: SITE_UPDATED, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/about-us"), lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/treatments"), lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/smile-gallery"), lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.85 },
    { url: absoluteUrl("/contact-us"), lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.9 },
    ...treatments.map((t) => ({
      url: absoluteUrl(treatmentPath(t.slug)),
      lastModified: new Date(t.updated),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
