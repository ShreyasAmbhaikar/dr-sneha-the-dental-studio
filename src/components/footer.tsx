import Link from "next/link";
import { Clock, MapPin, Phone, Star } from "lucide-react";
import { site } from "@/lib/site";
import Logo from "./logo";
import {
  TREATMENT_CATEGORIES,
  getTreatmentsByCategory,
  treatmentPath,
} from "@/lib/treatments";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Treatments", href: "/treatments" },
  { label: "Smile Gallery", href: "/smile-gallery" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Virtual Clinic Tour", href: "/#clinic-tour" },
];

export default function Footer() {
  return (
    <footer
      className="bg-footer text-white"
      style={{ background: "linear-gradient(180deg, #1b2c32 0%, #17262b 100%)" }}
    >
      {/* Main Footer Content */}
      <div className="mx-auto max-w-[1260px] px-5 pt-14 pb-6 lg:pt-16 lg:pb-7">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          {/* Col 1: Clinic Brand & Info (4 cols) */}
          <div className="lg:col-span-4">
            <Link href="/" aria-label="Dr. Sneha – The Dental Studio home" className="inline-block">
              <Logo size="lg" priority={false} />
            </Link>
            <p className="mt-4 max-w-[360px] text-[13.5px] leading-relaxed text-white/80">
              Advanced, gentle dental care for every smile and every age. Led by Dr. Sneha Sardar (BDS), we bring pain-free treatments, modern technology, and compassionate care to Wadgaon Sheri, Pune.
            </p>

            {/* Google Rating Pill */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-[12.5px]">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <span className="font-bold text-white">4.9 / 5</span>
              <span className="text-white/60">(284+ Google Reviews)</span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-[15.5px] font-bold tracking-wide text-white">
              Quick Links
            </h3>
            <span className="mt-2 block h-[2px] w-8 rounded-full bg-lime" />
            <ul className="mt-4 space-y-2.5 text-[13.5px]">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-white/75 transition-colors hover:text-lime"
                  >
                    <span className="mr-1.5 text-lime/50 transition-transform group-hover:translate-x-0.5 group-hover:text-lime">
                      ›
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Clinic Location (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-[15.5px] font-bold tracking-wide text-white">
              Clinic Location
            </h3>
            <span className="mt-2 block h-[2px] w-8 rounded-full bg-lime" />

            <div className="mt-4 space-y-3.5 text-[13px]">
              <div>
                <div className="flex items-center gap-1.5 text-lime">
                  <MapPin className="h-4 w-4 shrink-0" strokeWidth={2.2} />
                  <p className="text-[12px] font-bold uppercase tracking-wider text-white/90">Address</p>
                </div>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block not-italic text-[12.5px] leading-relaxed text-white/75 transition-colors hover:text-lime hover:underline"
                >
                  Shop No. 2/3/4, Ground Floor, Swaraj Complex, Opp. Datta Mandir, Wadgaon Sheri, Pune 411014
                </a>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-lime">
                  <Phone className="h-4 w-4 shrink-0" strokeWidth={2.2} />
                  <p className="text-[12px] font-bold uppercase tracking-wider text-white/90">Phone Numbers</p>
                </div>
                <div className="mt-1 flex flex-col gap-0.5 text-[12.5px]">
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="text-white/75 transition-colors hover:text-lime hover:underline"
                  >
                    {site.phone}
                  </a>
                  <a
                    href={`tel:${site.phoneSecondaryHref}`}
                    className="text-white/75 transition-colors hover:text-lime hover:underline"
                  >
                    {site.phoneSecondary} <span className="text-white/45 text-[11px]">(WhatsApp)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Clinic Timings (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-[15.5px] font-bold tracking-wide text-white">
              Clinic Timings
            </h3>
            <span className="mt-2 block h-[2px] w-8 rounded-full bg-lime" />

            <div className="mt-4 space-y-3 text-[13px]">
              <div className="space-y-1.5 text-[12.5px] text-white/80">
                <div className="grid grid-cols-[74px_1fr] items-start gap-1">
                  <span className="font-semibold text-white">Mon – Sat:</span>
                  <div className="text-white/75 leading-tight">
                    <p>10:30 AM – 2:30 PM</p>
                    <p className="mt-0.5">5:30 PM – 9:30 PM</p>
                  </div>
                </div>
                <div className="grid grid-cols-[74px_1fr] items-center gap-1 pt-0.5">
                  <span className="font-semibold text-white">SUN:</span>
                  <p className="text-white/75">10:30 AM – 1:30 PM</p>
                </div>
              </div>

              <div className="pt-1">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-lime/30 bg-lime/10 px-3 py-1 text-[11.5px] font-semibold text-lime">
                  <Clock className="h-3.5 w-3.5" />
                  Evening care till 9:30 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Categorized Treatments Directory Section */}
        <div className="mt-12 sm:mt-14 border-t border-white/10 pt-10 sm:pt-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-7">
            <h3 className="font-display text-[16px] font-bold text-white tracking-wide">
              Dental Treatments &amp; Clinical Specialties
            </h3>
            <Link
              href="/treatments"
              className="inline-flex items-center gap-1.5 text-[13px] font-bold text-lime hover:underline"
            >
              Browse All 25 Treatments Directory →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-7">
            {TREATMENT_CATEGORIES.map((cat) => (
              <div key={cat.id}>
                {/* Fixed height container ensuring 100% horizontal alignment for the divider line across all columns */}
                <div className="h-[38px] flex items-start border-b border-white/15 pb-2 mb-3.5">
                  <h4 className="font-display text-[13.5px] font-bold text-lime leading-tight">
                    {cat.name}
                  </h4>
                </div>
                <ul className="space-y-2 text-[12.5px]">
                  {getTreatmentsByCategory(cat.id).map((t) => (
                    <li key={t.slug}>
                      <Link
                        href={treatmentPath(t.slug)}
                        className="group inline-flex items-start text-white/70 transition-colors hover:text-lime"
                      >
                        <span className="mr-1.5 text-lime/40 transition-transform group-hover:translate-x-0.5 group-hover:text-lime">
                          ›
                        </span>
                        <span className="leading-snug">{t.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Clean Bottom Copyright & Credits Bar */}
        <div className="mt-12 border-t border-white/10 pt-5 text-[13px] text-white/70 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 {site.name}. All Rights Reserved.</p>
          <p className="text-white/75 text-[13px] flex items-center gap-1.5">
            Developed with <span className="text-rose-400">❤️</span> by{" "}
            <a
              href="https://wa.me/919284394722"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-lime transition-colors hover:underline hover:text-white"
            >
              Quantum Reach Media
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}