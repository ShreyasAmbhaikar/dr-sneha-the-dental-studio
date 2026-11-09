import { absoluteUrl, fullAddress, site } from "./site";
import { treatmentPath, treatments } from "./treatments";

/** /llms.txt – concise, link-based index for LLM crawlers (llmstxt.org format). */
export function buildLlmsTxt(): string {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `${site.name} is a dental clinic led by ${site.doctor.name} (${site.doctor.degree}), offering cosmetic and general dentistry for the whole family.`,
    "",
    "## Clinic details",
    "",
    `- Phone: ${site.phone}, ${site.phoneSecondary}`,
    `- WhatsApp: ${site.phoneSecondary} (https://wa.me/${site.whatsappNumber})`,
    ...(site.email ? [`- Email: ${site.email}`] : []),
    `- Address: ${fullAddress}`,
    `- Hours: ${site.hours.label}`,
    `- Google Maps: ${site.mapsUrl}`,
    `- Areas served: ${site.areaServed.join(", ")}`,
    "",
    "## Main pages",
    "",
    `- [Home](${absoluteUrl("/")}): Overview of the clinic, Dr. Sneha, technology, patient reviews and FAQs.`,
    `- [All treatments](${absoluteUrl("/treatments")}): Index of every dental treatment offered.`,
    "",
    "## Treatments",
    "",
    ...treatments.map((t) => `- [${t.name}](${absoluteUrl(treatmentPath(t.slug))}): ${t.summary}`),
    "",
    "## Optional",
    "",
    `- [Sitemap](${absoluteUrl("/sitemap.xml")}): Machine-readable list of all pages.`,
    `- [Full content for LLMs](${absoluteUrl("/llms-full.txt")}): Complete treatment content in one plain-text file.`,
    "",
  ];
  return lines.join("\n");
}

/** /llms-full.txt – the full text of every treatment page. */
export function buildLlmsFullTxt(): string {
  const out: string[] = [`# ${site.name}`, "", `> ${site.description}`, ""];
  for (const t of treatments) {
    out.push(
      `## ${t.name}`,
      "",
      `URL: ${absoluteUrl(treatmentPath(t.slug))}`,
      "",
      t.summary,
      "",
      ...t.overview.flatMap((p) => [p, ""]),
      "### Quick facts",
      "",
      `- Typical duration: ${t.facts.duration}`,
      `- Visits: ${t.facts.visits}`,
      `- Comfort: ${t.facts.comfort}`,
      `- Recovery: ${t.facts.recovery}`,
      "",
      `### ${t.signsHeading}`,
      "",
      ...t.signs.map((s) => `- **${s.title}**: ${s.text}`),
      "",
      "### Procedure, step by step",
      "",
      ...t.steps.map((s, i) => `${i + 1}. **${s.title}** (${s.duration}): ${s.text}`),
      "",
      "### Benefits",
      "",
      ...t.benefits.map((b) => `- **${b.title}**: ${b.text}`),
      "",
      "### Recovery & aftercare",
      "",
      ...t.aftercare.map((a) => `- **${a.when}**: ${a.text}`),
      "",
      "### Frequently asked questions",
      "",
      ...t.faqs.flatMap((f) => [`**${f.q}**`, "", f.a, ""]),
    );
  }
  return out.join("\n");
}
