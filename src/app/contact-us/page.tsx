import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Car,
  Clock,
  MessageSquare,
  Navigation,
  Phone,
} from "lucide-react";
import CtaBand from "@/components/cta-band";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Breadcrumbs, Container } from "@/components/treatment/ui";
import { site } from "@/lib/site";

/** Custom Map Pin with hollow inner cutout matching client reference */
function DropperPin({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C7.58172 2 4 5.58172 4 10C4 15.25 12 22 12 22C12 22 20 15.25 20 10C20 5.58172 16.4183 2 12 2ZM12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
      />
    </svg>
  );
}

const title = "Contact Us & Clinic Location | Dr. Sneha – The Dental Studio | Wadgaon Sheri, Pune";
const description =
  "Find Dr. Sneha – The Dental Studio in Wadgaon Sheri, Pune. Clinic location map, directions from Kharadi & Viman Nagar, late evening hours till 9:30 PM, and emergency appointments.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact-us" },
  openGraph: {
    type: "website",
    url: "/contact-us",
    siteName: site.name,
    locale: site.locale,
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
};

const COMMUTE_HUBS = [
  {
    hub: "From Kharadi (EON Free Zone / WTC)",
    time: "8 – 12 mins",
    desc: "Via Kharadi-Mundhwa Bypass road. Direct 3.5 km drive with easy approach.",
  },
  {
    hub: "From Viman Nagar (Phoenix Marketcity)",
    time: "10 mins",
    desc: "Straight via Pune-Ahmednagar Highway / Somnath Nagar road.",
  },
  {
    hub: "From Kalyani Nagar",
    time: "10 – 12 mins",
    desc: "Via Wadgaon Sheri main road, passing Bishop's Co-Ed School.",
  },
  {
    hub: "From Chandan Nagar",
    time: "4 – 6 mins",
    desc: "Immediate 1.5 km neighbourhood connectivity via Datta Mandir road.",
  },
];

export default function ContactUsPage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        {/* Cinematic Hero Banner - Unified consistent height */}
        <section className="relative isolate overflow-hidden text-white">
          {/* Background Clinic Image with brand teal overlay */}
          <div className="absolute inset-0 -z-20">
            <Image
              src="/images/clinic.webp"
              alt="Dr. Sneha Dental Studio contact and clinic location"
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
            <Breadcrumbs light items={[{ name: "Home", href: "/" }, { name: "Contact Us" }]} />

            <div className="mt-4 max-w-[760px]">
              <h1 className="pt-1 pb-1 font-display text-[32px] font-extrabold leading-[1.16] tracking-tight text-white sm:text-[42px] lg:text-[48px] xl:text-[52px]">
                Visit Dr. Sneha{" "}
                <span className="block mt-1 sm:mt-1.5 pb-1 bg-gradient-to-r from-[#e4ff6b] via-[#c4ee2a] to-[#a9e00b] bg-clip-text text-transparent">
                  The Dental Studio in Wadgaon Sheri
                </span>
              </h1>
              <p className="mt-3 max-w-[640px] text-[15px] leading-relaxed text-white/90 sm:text-[16px]">
                Conveniently located on the ground floor of Swaraj Complex, Opp. Datta Mandir in Wadgaon Sheri, Pune. Easy ground-floor access with dedicated parking.
              </p>
            </div>
          </Container>
        </section>

        {/* 3 Core Quick Info Cards */}
        <section className="relative overflow-hidden bg-white pt-8 pb-7 sm:pt-10 sm:pb-8 lg:pt-11 lg:pb-10">
          <Container className="relative">
            {/* 3 Core Quick Info Cards — unified vertical height, matching fonts, colors and weights */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {/* Card 1: Direct Contact */}
              <div className="group rounded-[24px] bg-gradient-to-br from-[#b9e84a] via-white to-[#7fd0d8] p-[1.5px] shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-float">
                <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[23px] bg-white p-5 sm:p-5.5">
                  {/* Top-Right Soft Ambient Blob */}
                  <span aria-hidden="true" className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-lime/20 to-transparent transition group-hover:scale-125" />

                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#eefad0] to-[#d3f1f3] text-[#4f8612]">
                        <Phone className="h-5 w-5" strokeWidth={2.2} />
                      </div>
                      <h2 className="font-display text-[16px] font-bold text-navy">Direct Contact</h2>
                    </div>

                    {/* Clean phone numbers without extra subtext */}
                    <div className="mt-4 space-y-2">
                      <div>
                        <a
                          href={`tel:${site.phoneHref}`}
                          className="font-sans text-[15px] sm:text-[15.5px] font-bold text-navy transition hover:text-teal"
                        >
                          {site.phone}
                        </a>
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href={`tel:${site.phoneSecondaryHref}`}
                          className="font-sans text-[15px] sm:text-[15.5px] font-bold text-navy transition hover:text-teal"
                        >
                          {site.phoneSecondary}
                        </a>
                        <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-[10.5px] font-bold text-emerald-800">
                          WhatsApp
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="relative mt-5 flex items-center gap-2.5 border-t border-slate-100 pt-3.5">
                    <a
                      href={`tel:${site.phoneHref}`}
                      className="btn-lime inline-flex h-9 items-center justify-center gap-1.5 rounded-full px-4 text-xs font-bold shadow-2xs transition hover:brightness-105"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      <span>Direct Call</span>
                    </a>
                    <a
                      href={`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
                        "Hello Dr. Sneha, I would like to book a dental consultation."
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 items-center justify-center gap-1.5 rounded-full border border-teal-200 bg-white px-4 text-xs font-bold text-[#0d7d79] shadow-2xs transition hover:bg-teal-50"
                    >
                      <MessageSquare className="h-3.5 w-3.5 text-[#0d7d79]" />
                      <span>WhatsApp Chat</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2: Clinic Address */}
              <div className="group rounded-[24px] bg-gradient-to-br from-[#b9e84a] via-white to-[#7fd0d8] p-[1.5px] shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-float">
                <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[23px] bg-white p-5 sm:p-5.5">
                  {/* Top-Right Soft Ambient Blob */}
                  <span aria-hidden="true" className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-lime/20 to-transparent transition group-hover:scale-125" />

                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#eefad0] to-[#d3f1f3] text-[#4f8612]">
                        <DropperPin className="h-5 w-5 text-[#4f8612]" />
                      </div>
                      <h2 className="font-display text-[16px] font-bold text-navy">Clinic Address</h2>
                    </div>

                    {/* Simple, dark format address matching footer */}
                    <div className="mt-4">
                      <p className="font-sans text-[14px] sm:text-[14.5px] font-bold leading-relaxed text-navy">
                        Shop No. 2/3/4, Ground Floor, Swaraj Complex, Opp. Datta Mandir, Wadgaon Sheri, Pune 411014
                      </p>
                    </div>
                  </div>

                  {/* Symmetrical action button */}
                  <div className="relative mt-5 flex items-center border-t border-slate-100 pt-3.5">
                    <a
                      href={site.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 items-center justify-center gap-1.5 rounded-full border border-teal-200 bg-white px-4 text-xs font-bold text-[#0d7d79] shadow-2xs transition hover:bg-teal-50"
                    >
                      <Navigation className="h-3.5 w-3.5 text-[#0d7d79] -rotate-45" />
                      <span>Open in Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3: Clinic Timings */}
              <div className="group rounded-[24px] bg-gradient-to-br from-[#b9e84a] via-white to-[#7fd0d8] p-[1.5px] shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-float">
                <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[23px] bg-white p-5 sm:p-5.5">
                  {/* Top-Right Soft Ambient Blob */}
                  <span aria-hidden="true" className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-lime/20 to-transparent transition group-hover:scale-125" />

                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#eefad0] to-[#d3f1f3] text-[#4f8612]">
                        <Clock className="h-5 w-5" strokeWidth={2.2} />
                      </div>
                      <h2 className="font-display text-[16px] font-bold text-navy">Clinic Timings</h2>
                    </div>

                    {/* Proper 3-row vertical alignment: Mon - Sat morning, Mon - Sat evening, SUN */}
                    <div className="mt-4 space-y-2">
                      <div className="grid grid-cols-[82px_1fr] items-start gap-2">
                        <span className="font-sans text-[14px] sm:text-[14.5px] font-bold text-navy">
                          Mon – Sat:
                        </span>
                        <div className="font-sans text-[13.5px] font-bold text-navy leading-snug">
                          <p>10:30 AM – 2:30 PM</p>
                          <p className="mt-0.5">5:30 PM – 9:30 PM</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-[82px_1fr] items-center gap-2">
                        <span className="font-sans text-[14px] sm:text-[14.5px] font-bold text-navy">
                          SUN:
                        </span>
                        <p className="font-sans text-[13.5px] font-bold text-navy">
                          10:30 AM – 1:30 PM
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Symmetrical action badge */}
                  <div className="relative mt-5 flex items-center border-t border-slate-100 pt-3.5">
                    <span className="inline-flex h-9 items-center justify-center gap-1.5 rounded-full border border-[#d2f3a6] bg-[#edfcdb] px-4 text-xs font-bold text-[#166534]">
                      <Clock className="h-3.5 w-3.5 text-[#166534]" />
                      <span>Evening Care Till 9:30 PM</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Big Prominent Clinic Location & Interactive Map Card with balanced spacing */}
        <section className="pt-3 sm:pt-6 pb-12 sm:pb-16">
          <Container>
            <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-md">
              {/* Card Header Strip */}
              <div className="flex flex-col justify-between gap-4 border-b border-slate-100 bg-[#f7fcfd] p-6 sm:flex-row sm:items-center sm:px-8 sm:py-6">
                <div>
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700">
                    <span className="grid h-6 w-6 place-items-center rounded-lg bg-teal/15 text-teal shadow-2xs">
                      <DropperPin className="h-3.5 w-3.5 text-teal" />
                    </span>
                    Exact Clinic Location
                  </span>
                  <h2 className="mt-1 font-display text-xl font-extrabold text-navy sm:text-2xl">
                    Ground Floor, Swaraj Complex, Wadgaon Sheri, Pune
                  </h2>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-lime inline-flex h-10 items-center gap-2 px-5 text-xs font-bold shadow-xs"
                  >
                    <Navigation className="h-3.5 w-3.5" />
                    <span>Get GPS Directions</span>
                  </a>
                </div>
              </div>

              {/* Big Map & Location Details Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left: Big Interactive Google Map Embed */}
                <div className="relative min-h-[360px] sm:min-h-[440px] lg:col-span-7 bg-slate-50">
                  <iframe
                    title="Dr. Sneha - The Dental Studio Google Map Location"
                    src="https://maps.google.com/maps?q=18.5456539,73.921896&hl=en&z=16&output=embed"
                    width="100%"
                    height="100%"
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Right: Key Landmarks, Accessibility & Route Info */}
                <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 bg-white">
                  <div>
                    <h3 className="font-display text-base font-bold text-navy">
                      Landmarks &amp; Parking Accessibility
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                      Located right opposite Datta Mandir on the ground floor of Swaraj Complex. No stairs or elevator required, making it ideal for elderly patients, children, and wheelchair visitors.
                    </p>

                    <div className="mt-4 flex items-center gap-2 rounded-xl bg-teal-50/70 p-3 text-xs text-teal-900">
                      <Car className="h-4 w-4 shrink-0 text-teal-700" />
                      <span>Dedicated two-wheeler &amp; car parking directly outside clinic entrance.</span>
                    </div>

                    <h4 className="mt-6 text-xs font-bold uppercase tracking-wider text-navy">
                      Estimated Drive Times
                    </h4>
                    <div className="mt-3 space-y-3">
                      {COMMUTE_HUBS.map((hub) => (
                        <div key={hub.hub} className="border-b border-slate-100 pb-2.5 last:border-0 last:pb-0">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-start gap-2.5">
                              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-teal-50 text-teal-700">
                                <DropperPin className="h-3.5 w-3.5 text-teal-700" />
                              </span>
                              <div>
                                <h5 className="text-xs font-semibold text-slate-900">{hub.hub}</h5>
                                <p className="mt-0.5 text-[11px] leading-relaxed text-slate-500">{hub.desc}</p>
                              </div>
                            </div>
                            <span className="shrink-0 rounded-full bg-teal-50 px-2 py-0.5 text-[11px] font-bold text-teal-700">
                              {hub.time}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Band */}
        <CtaBand />
      </main>

      <Footer />
    </>
  );
}
