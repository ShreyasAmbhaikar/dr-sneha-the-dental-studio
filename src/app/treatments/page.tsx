import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CtaBand from "@/components/cta-band";
import Footer from "@/components/footer";
import Header from "@/components/header";
import JsonLd from "@/components/json-ld";
import { Breadcrumbs, Container } from "@/components/treatment/ui";
import { treatmentsIndexGraph } from "@/lib/schema";
import { site } from "@/lib/site";
import {
  TREATMENT_CATEGORIES,
  getTreatmentsByCategory,
  treatmentPath,
} from "@/lib/treatments";

const title = "Dental Treatments Directory | Dr. Sneha Sardar";
const description =
  "Explore every dental treatment at Dr. Sneha – The Dental Studio: general dentistry, implants, braces & aligners, teeth whitening, root canal, gum treatment, smile makeovers and wisdom tooth removal.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/treatments" },
  openGraph: {
    type: "website",
    url: "/treatments",
    siteName: site.name,
    locale: site.locale,
    title: `${title} | ${site.shortName}`,
    description,
  },
  twitter: { card: "summary_large_image", title: `${title} | ${site.shortName}`, description },
};

export default function TreatmentsIndex() {
  return (
    <>
      <JsonLd data={treatmentsIndexGraph()} />
      <Header />
      <main id="main">
        {/* Cinematic Hero Banner */}
        <section className="relative isolate overflow-hidden text-white">
          <div className="absolute inset-0 -z-20">
            <Image
              src="/images/clinic.webp"
              alt="Dr. Sneha Dental Studio treatments clinic"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(90deg, rgba(7, 56, 64, 0.88) 0%, rgba(8, 79, 89, 0.76) 38%, rgba(8, 104, 116, 0.48) 68%, rgba(8, 104, 116, 0.18) 88%, rgba(8, 104, 116, 0.03) 100%)",
            }}
          />
          <span aria-hidden="true" className="pointer-events-none absolute -left-12 -top-12 -z-10 h-[340px] w-[340px] rounded-full bg-lime/20 blur-[90px]" />
          <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-[28%] -z-10 h-[300px] w-[300px] rounded-full bg-[#14b8a6]/20 blur-[90px]" />

          <Container className="relative z-10 w-full py-9 sm:py-11 lg:py-14">
            <Breadcrumbs light items={[{ name: "Home", href: "/" }, { name: "Treatments" }]} />

            <div className="mt-4 max-w-[760px]">
              <h1 className="pt-1 pb-1 font-display text-[32px] font-extrabold leading-[1.16] tracking-tight text-white sm:text-[42px] lg:text-[48px] xl:text-[52px]">
                Comprehensive Dental Care{" "}
                <span className="block mt-1 sm:mt-1.5 pb-1 bg-gradient-to-r from-[#e4ff6b] via-[#c4ee2a] to-[#a9e00b] bg-clip-text text-transparent">
                  in Wadgaon Sheri, Pune
                </span>
              </h1>
              <p className="mt-3 max-w-[640px] text-[15px] leading-relaxed text-white/90 sm:text-[16px]">
                From preventive care to advanced restorative and cosmetic treatments, discover painless, transparent dental solutions designed for you and your family.
              </p>
            </div>
          </Container>
        </section>

        {/* Categorized Treatments Directory Section */}
        <section className="py-10 sm:py-14 lg:py-16" aria-label="All treatments by category">
          <Container>
            <div className="space-y-12 sm:space-y-14">
              {TREATMENT_CATEGORIES.map((cat) => {
                const catTreatments = getTreatmentsByCategory(cat.id);
                if (catTreatments.length === 0) return null;

                return (
                  <section key={cat.id} id={cat.id} className="scroll-mt-24 space-y-5">
                    {/* Category Header: Category name on left, Procedure count capsule on right, with clean one-liner description below */}
                    <div className="border-b border-teal/15 pb-3">
                      <div className="flex items-center justify-between">
                        <h2 className="font-display text-[19px] sm:text-[22px] font-extrabold tracking-tight text-navy">
                          {cat.name}
                        </h2>
                        <span className="rounded-full bg-teal/10 px-3 py-1 text-[11.5px] font-bold text-teal-deep">
                          {catTreatments.length} Procedures
                        </span>
                      </div>
                      <p className="mt-1.5 text-[13px] sm:text-[13.5px] leading-relaxed text-ink/75">
                        {cat.description}
                      </p>
                    </div>

                    {/* 4-Card Grid with Contact Us inspired round lime gradient blob & matching layout */}
                    <ul className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
                      {catTreatments.map((t) => (
                        <li key={t.slug}>
                          <Link
                            href={treatmentPath(t.slug)}
                            className="group flex h-full flex-col rounded-[22px] bg-gradient-to-br from-[#b9e84a] via-white to-[#7fd0d8] p-[1.5px] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-card"
                          >
                            <span className="relative flex h-full flex-col overflow-hidden rounded-[21px] bg-white p-4 sm:p-5">
                              {/* Top-Right Soft Ambient Lime Blob (Contact Us card style) */}
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-lime/25 via-lime/10 to-transparent transition duration-300 group-hover:scale-125"
                              />

                              <span className="relative z-10 mx-auto flex h-[85px] sm:h-[90px] w-full items-center justify-center">
                                <Image
                                  src={`/images/treatments/${t.imageKey}-lg.webp`}
                                  alt={t.imageAlt}
                                  width={180}
                                  height={180}
                                  sizes="(max-width: 640px) 120px, (max-width: 1024px) 160px, 180px"
                                  className="h-[75px] w-[75px] sm:h-[80px] sm:w-[80px] object-contain drop-shadow-[0_4px_10px_rgba(8,104,116,0.12)] transition duration-300 group-hover:scale-105"
                                />
                              </span>
                              <h3 className="relative z-10 mt-3 font-display text-[15px] sm:text-[16px] font-bold leading-snug text-navy">
                                {t.name}
                              </h3>
                              <p className="relative z-10 mt-1.5 flex-1 line-clamp-2 text-[12.5px] sm:text-[13px] leading-relaxed text-ink/75">
                                {t.summary}
                              </p>
                              <span className="relative z-10 mt-3.5 inline-flex items-center gap-1.5 font-display text-[13px] sm:text-[13.5px] font-bold text-[#4f8612] transition group-hover:text-teal-deep">
                                Learn more
                                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" strokeWidth={2.4} />
                              </span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                );
              })}
            </div>
          </Container>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
