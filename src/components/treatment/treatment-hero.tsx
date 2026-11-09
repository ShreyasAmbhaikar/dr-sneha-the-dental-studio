import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Check,
  Clock,
  Feather,
  MapPin,
  Phone,
  Timer,
} from "lucide-react";
import { site } from "@/lib/site";
import type { Treatment } from "@/lib/treatments";
import { Breadcrumbs, Container } from "./ui";

function ClinicInfoStrip() {
  return (
    <Container className="relative z-10 -mt-[72px] lg:-mt-[78px]">
      <div className="rounded-[28px] bg-white/95 p-3 shadow-float ring-1 ring-white/80 backdrop-blur lg:p-0">
        <div className="grid grid-cols-1 divide-y divide-[#d9e0e6] md:grid-cols-3 md:divide-x md:divide-y-0">
          {/* Item 1: Clinic Location */}
          <div className="flex items-center gap-4 px-4 py-4 lg:px-8 lg:py-6">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#eefad0] to-[#d3f1f3] text-[#4f8612]">
              <MapPin className="h-6 w-6" strokeWidth={1.8} />
            </span>
            <div>
              <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-teal-deep">Clinic Location</div>
              <div className="mt-0.5 font-display text-[15.5px] sm:text-[16px] font-bold leading-snug text-navy">
                Ground Floor, Swaraj Complex
              </div>
              <div className="text-[12.5px] text-ink/75 leading-tight">
                Opp. Datta Mandir, Wadgaon Sheri, Pune
              </div>
            </div>
          </div>

          {/* Item 2: Phone Number */}
          <div className="flex items-center gap-4 px-4 py-4 lg:px-8 lg:py-6">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#eefad0] to-[#d3f1f3] text-[#4f8612]">
              <Phone className="h-6 w-6" strokeWidth={1.8} />
            </span>
            <div>
              <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-teal-deep">Phone Number</div>
              <div className="mt-0.5 font-display text-[15.5px] sm:text-[16px] font-bold leading-snug text-navy">
                <a href={`tel:${site.phoneHref}`} className="transition hover:text-teal">
                  {site.phone}
                </a>
              </div>
              <div className="text-[12.5px] text-ink/75 leading-tight">
                Doctor Appointment &amp; Inquiries
              </div>
            </div>
          </div>

          {/* Item 3: Clinic Timings */}
          <div className="flex items-center gap-4 px-4 py-4 lg:px-8 lg:py-6">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#eefad0] to-[#d3f1f3] text-[#4f8612]">
              <Clock className="h-6 w-6" strokeWidth={1.8} />
            </span>
            <div>
              <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-teal-deep">Clinic Timings</div>
              <div className="mt-0.5 font-display text-[14.5px] sm:text-[15px] font-bold leading-snug text-navy">
                Mon – Sat: 10:30 AM – 2:30 PM &amp; 5:30 – 9:30 PM
              </div>
              <div className="text-[12.5px] text-ink/75 leading-tight">
                SUN: 10:30 AM – 1:30 PM
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default function TreatmentHero({ t }: { t: Treatment }) {
  const isGeneralDentistry = t.slug === "general-dentistry";

  if (isGeneralDentistry) {
    return (
      <section className="relative overflow-hidden">
        {/* Cinematic Treatment Hero Banner - Straight bottom, compact sleek height */}
        <div className="relative flex items-center overflow-hidden text-white">
          {/* Background Image: Treatment Photo */}
          <div className="absolute inset-0 -z-20">
            <Image
              src="/images/treatments/general-hero-banner.jpg"
              alt="General Dentistry at Dr. Sneha The Dental Studio Wadgaon Sheri Pune"
              fill
              priority
              sizes="100vw"
              className="object-cover object-right sm:object-center lg:object-[82%_center]"
            />
          </div>

          {/* Cinematic Overlay: Fresh, luminous Dental Studio brand teal gradient */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(90deg, rgba(7, 56, 64, 0.85) 0%, rgba(8, 79, 89, 0.74) 35%, rgba(8, 104, 116, 0.46) 65%, rgba(8, 104, 116, 0.16) 85%, rgba(8, 104, 116, 0.03) 100%)",
            }}
          />

          {/* Theme accent highlights */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-12 -top-12 -z-10 h-[320px] w-[320px] rounded-full bg-lime/20 blur-[90px]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-[28%] -z-10 h-[280px] w-[280px] rounded-full bg-[#14b8a6]/20 blur-[90px]"
          />

          <Container className="relative z-10 w-full py-7 sm:py-8.5 lg:py-10">
            <div className="max-w-[760px]">
              {/* Breadcrumbs */}
              <Breadcrumbs
                light
                items={[
                  { name: "Home", href: "/" },
                  { name: "Treatments", href: "/treatments" },
                  { name: t.name },
                ]}
              />

              {/* Main Heading & Target Location */}
              <h1 className="mt-3.5 max-w-[760px] pt-1 pb-1 font-display text-[32px] font-extrabold leading-[1.16] tracking-tight text-white sm:text-[42px] lg:text-[48px] xl:text-[52px]">
                General Dentistry{" "}
                <span className="block mt-1 sm:mt-1.5 pb-1 bg-gradient-to-r from-[#e4ff6b] via-[#c4ee2a] to-[#a9e00b] bg-clip-text text-transparent">
                  in Wadgaon Sheri, Pune
                </span>
              </h1>

              {/* Call to Action Buttons */}
              <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3.5">
                <Link
                  href="#contact"
                  className="btn-lime h-[46px] sm:h-[48px] px-7 text-[15px] sm:text-[15.5px] font-bold shadow-md transition hover:-translate-y-0.5"
                >
                  <CalendarCheck className="h-4.5 w-4.5" strokeWidth={2} />
                  <span>Book a Consultation</span>
                  <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                </Link>

                <a
                  href={`tel:${site.phoneHref}`}
                  className="inline-flex h-[46px] sm:h-[48px] items-center gap-2 rounded-full border border-white/25 bg-white/12 px-6 font-display text-[14.5px] sm:text-[15px] font-bold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/20"
                >
                  <Phone className="h-4 w-4 text-lime" strokeWidth={2.2} />
                  <span>Call Clinic: {site.phone}</span>
                </a>
              </div>
            </div>
          </Container>
        </div>
      </section>
    );
  }

  return (
    <section>
      {/* ---------------- Banner - Normal straight bottom ---------------- */}
      <div
        className="relative isolate overflow-hidden text-white"
        style={{ background: "linear-gradient(115deg,#233c41 0%,#0b4a55 34%,#086874 68%,#10909a 100%)" }}
      >
        {/* decorative layers */}
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-lime/25 blur-[110px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 left-[20%] -z-10 h-[420px] w-[420px] rounded-full bg-[#34d3c8]/20 blur-[110px]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.22] [background-image:radial-gradient(#fff_1px,transparent_1.2px)] [background-size:26px_26px] [mask-image:linear-gradient(100deg,#000_0%,transparent_62%)]"
        />

        <Container className="grid items-center gap-10 pb-[120px] pt-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8 lg:pb-[150px] lg:pt-10">
          {/* copy */}
          <div>
            <Breadcrumbs
              light
              items={[{ name: "Home", href: "/" }, { name: "Treatments", href: "/treatments" }, { name: t.name }]}
            />

            <h1 className="mt-6 sm:mt-8 font-display text-[34px] font-extrabold leading-[1.08] tracking-[-0.02em] sm:text-[46px] lg:text-[50px]">
              {t.h1Lead}{" "}
              <span className="bg-gradient-to-r from-[#e9ff7a] via-[#c4ee2a] to-[#8fd21c] bg-clip-text text-transparent">
                {t.h1Accent}
              </span>
            </h1>

            <p className="mt-5 max-w-[560px] text-[17.5px] leading-[1.65] text-white/85">{t.tagline}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="#contact" className="btn-lime h-[52px] px-7 text-[16.5px]">
                <CalendarCheck className="h-5 w-5" strokeWidth={1.8} />
                Book a Consultation
                <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.2} />
              </Link>
              <a
                href={`tel:${site.phoneHref}`}
                className="inline-flex h-[52px] items-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-6 font-display text-[16px] font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                <Phone className="h-[18px] w-[18px] text-lime" strokeWidth={2} />
                {site.phone}
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[14.5px] text-white/85">
              {["Gentle, comfort-first care", "Clear, upfront guidance", "Sterile & safe clinic"].map((x) => (
                <li key={x} className="flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-lime/90 text-navy">
                    <Check className="h-3 w-3" strokeWidth={3.5} />
                  </span>
                  {x}
                </li>
              ))}
            </ul>
          </div>

          {/* orb */}
          <div className="relative mx-auto aspect-square w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[490px] xl:max-w-[520px]" aria-hidden="false">
            {/* Outer ambient glow ring */}
            <span aria-hidden="true" className="absolute -inset-2 sm:-inset-3 rounded-full border border-white/10" />

            {/* Orbiting dashed circle 1 (Outer) - clockwise rotation at 32s period */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-[1%] sm:-inset-[2%] rounded-full border border-dashed border-white/30 motion-safe:animate-[spin_32s_linear_infinite]"
            >
              <span className="absolute -top-[8px] left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-lime shadow-[0_0_22px_6px_rgba(169,224,11,0.75)]" />
              <span className="absolute -bottom-[6px] left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#2dd4bf] shadow-[0_0_16px_4px_rgba(45,212,191,0.65)]" />
            </span>

            {/* Orbiting dashed circle 2 (Inner) - counter-clockwise rotation at 48s period */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-[4%] sm:inset-[5%] rounded-full border border-dashed border-white/20 motion-safe:animate-[spin-reverse_48s_linear_infinite]"
            >
              <span className="absolute top-1/2 -right-[6px] h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-[#2dd4bf] shadow-[0_0_16px_4px_rgba(45,212,191,0.65)]" />
              <span className="absolute top-1/2 -left-[6px] h-3 w-3 -translate-y-1/2 rounded-full bg-lime shadow-[0_0_14px_4px_rgba(169,224,11,0.65)]" />
            </span>

            {/* Soft inner aura glow */}
            <span aria-hidden="true" className="absolute inset-[6%] sm:inset-[7%] rounded-full bg-white/10 blur-[8px]" />

            {/* Core treatment image circle - NO border around circle, pristine background & image */}
            <div className="absolute inset-[9%] sm:inset-[10%] overflow-hidden rounded-full bg-[radial-gradient(circle_at_30%_22%,#ffffff_0%,#eaf8fa_62%,#cfeef2_100%)] p-2 shadow-[0_35px_80px_-15px_rgba(0,0,0,0.5)]">
              <Image
                src={`/images/treatments/${t.imageKey}-circle.webp`}
                alt={t.imageAlt}
                width={500}
                height={500}
                priority
                sizes="(min-width: 1280px) 460px, (min-width: 1024px) 400px, 75vw"
                className="h-full w-full rounded-full object-cover drop-shadow-[0_12px_28px_rgba(0,0,0,0.22)]"
              />
            </div>

            {/* Floating glassmorphic info cards */}
            <div className="absolute -left-1 sm:-left-5 top-[5%] flex items-center gap-3 rounded-2xl border border-white/30 bg-[#07303a]/75 px-4 py-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.55)] backdrop-blur-md motion-safe:animate-[float_6s_ease-in-out_infinite]">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-lime text-navy">
                <Feather className="h-[18px] w-[18px]" strokeWidth={2.2} />
              </span>
              <span className="text-[13px] leading-tight">
                <span className="block text-white/65">Comfort</span>
                <span className="block font-display font-bold">{t.facts.comfort}</span>
              </span>
            </div>

            <div className="absolute -right-1 sm:-right-5 top-[48%] flex items-center gap-3 rounded-2xl border border-white/30 bg-[#07303a]/75 px-4 py-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.55)] backdrop-blur-md motion-safe:animate-[float_7s_ease-in-out_-2.5s_infinite]">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-teal-deep">
                <Timer className="h-[18px] w-[18px]" strokeWidth={2.2} />
              </span>
              <span className="text-[13px] leading-tight">
                <span className="block text-white/65">Typically</span>
                <span className="block font-display font-bold">{t.facts.duration}</span>
              </span>
            </div>

            <div className="absolute left-[2%] sm:left-[0%] bottom-[2%] flex items-center gap-3 rounded-2xl border border-white/30 bg-[#07303a]/75 px-4 py-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.55)] backdrop-blur-md motion-safe:animate-[float_8s_ease-in-out_-4.5s_infinite]">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#d8f952] text-navy">
                <BadgeCheck className="h-[18px] w-[18px]" strokeWidth={2.2} />
              </span>
              <span className="text-[13px] leading-tight">
                <span className="block text-white/65">Led by</span>
                <span className="block font-display font-bold">Dr. Sneha, BDS</span>
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* ---------------- Clinic Info Strip (Shifted down to the bottom) ---------------- */}
      <ClinicInfoStrip />
    </section>
  );
}
