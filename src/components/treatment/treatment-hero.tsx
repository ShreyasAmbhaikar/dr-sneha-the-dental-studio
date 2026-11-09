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
      {/* ---------------- Banner - Normal straight bottom with optimized sleek height ---------------- */}
      <div
        className="relative isolate overflow-hidden text-white"
        style={{ background: "linear-gradient(115deg,#233c41 0%,#0b4a55 34%,#086874 68%,#10909a 100%)" }}
      >
        {/* decorative background atmospheric layers */}
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-lime/25 blur-[110px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 left-[20%] -z-10 h-[420px] w-[420px] rounded-full bg-[#34d3c8]/20 blur-[110px]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.22] [background-image:radial-gradient(#fff_1px,transparent_1.2px)] [background-size:26px_26px] [mask-image:linear-gradient(100deg,#000_0%,transparent_62%)]"
        />

        <Container className="grid items-center gap-8 pb-12 pt-6 sm:pb-14 sm:pt-7 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8 lg:pb-16 lg:pt-8">
          {/* copy */}
          <div>
            <Breadcrumbs
              light
              items={[{ name: "Home", href: "/" }, { name: "Treatments", href: "/treatments" }, { name: t.name }]}
            />

            <h1 className="mt-4 sm:mt-5 font-display text-[30px] font-extrabold leading-[1.12] tracking-[-0.02em] sm:text-[38px] lg:text-[44px]">
              {t.h1Lead}{" "}
              <span className="bg-gradient-to-r from-[#e9ff7a] via-[#c4ee2a] to-[#8fd21c] bg-clip-text text-transparent">
                {t.h1Accent}
              </span>
            </h1>

            <p className="mt-3.5 max-w-[540px] text-[15.5px] leading-[1.6] text-white/90 sm:text-[16px]">{t.tagline}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3.5">
              <Link href="#contact" className="btn-lime h-[46px] sm:h-[48px] px-6 text-[15px] sm:text-[15.5px]">
                <CalendarCheck className="h-4.5 w-4.5" strokeWidth={1.8} />
                Book a Consultation
                <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
              </Link>
              <a
                href={`tel:${site.phoneHref}`}
                className="inline-flex h-[46px] sm:h-[48px] items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 font-display text-[15px] font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                <Phone className="h-4 w-4 text-lime" strokeWidth={2} />
                {site.phone}
              </a>
            </div>

            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 text-[13.5px] text-white/85">
              {["Gentle, comfort-first care", "Clear, upfront guidance", "Sterile & safe clinic"].map((x) => (
                <li key={x} className="flex items-center gap-2">
                  <span className="grid h-4.5 w-4.5 place-items-center rounded-full bg-lime/90 text-navy">
                    <Check className="h-2.5 w-2.5" strokeWidth={3.5} />
                  </span>
                  {x}
                </li>
              ))}
            </ul>
          </div>

          {/* orb with equidistant orbiting neon circles & revolving cards */}
          <div className="relative mx-auto aspect-square w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[430px] xl:max-w-[460px]">
            {/* Concentric Orbit Ring 3 (Outer): equal distance -5% */}
            <span
              aria-hidden="true"
              className="absolute inset-[-5%] rounded-full border border-dashed border-white/20 motion-safe:animate-[spin_48s_linear_infinite_reverse]"
            >
              <span className="absolute -bottom-[7px] left-1/2 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-[#e4ff6b] shadow-[0_0_16px_4px_rgba(228,255,107,0.85)]" />
            </span>

            {/* Concentric Orbit Ring 2 (Middle): equal distance 5% (step of 10%) */}
            <span
              aria-hidden="true"
              className="absolute inset-[5%] rounded-full border border-white/20 motion-safe:animate-[spin_36s_linear_infinite]"
            >
              <span className="absolute top-1/2 -right-[7px] h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-lime shadow-[0_0_18px_5px_rgba(169,224,11,0.9)]" />
            </span>

            {/* Concentric Orbit Ring 1 (Inner): equal distance 15% (step of 10%) */}
            <span
              aria-hidden="true"
              className="absolute inset-[15%] rounded-full border border-dashed border-white/25 motion-safe:animate-[spin_24s_linear_infinite]"
            >
              <span className="absolute -top-[7px] left-1/2 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-[#2dd4bf] shadow-[0_0_16px_4px_rgba(45,212,191,0.85)]" />
            </span>

            {/* Atmospheric soft radial aura behind the transparent 3D model */}
            <span
              aria-hidden="true"
              className="absolute inset-[18%] rounded-full bg-gradient-to-tr from-lime/20 via-[#2dd4bf]/25 to-transparent blur-[45px] -z-10"
            />

            {/* Core 3D treatment graphic — NO circle boundary, showing pure 3D model at full scale */}
            <div className="absolute inset-[14%] sm:inset-[12%] flex items-center justify-center p-2 z-10 pointer-events-none">
              <Image
                src={`/images/treatments/${t.imageKey}-lg.webp`}
                alt={t.imageAlt}
                width={420}
                height={420}
                priority
                sizes="(min-width: 1280px) 420px, (min-width: 1024px) 380px, 75vw"
                className="h-full w-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)] transition duration-300 hover:scale-105"
              />
            </div>

            {/* Revolving glassmorphic info cards over the image */}
            <div className="group absolute inset-0 z-20 motion-safe:animate-spin-orbit hover:[animation-play-state:paused]">
              {/* Card 1: Comfort (Top) */}
              <div className="absolute left-1/2 -top-4 -translate-x-1/2 motion-safe:animate-counter-orbit group-hover:[animation-play-state:paused]">
                <div className="flex items-center gap-2.5 rounded-2xl border border-white/30 bg-[#07303a]/85 px-3.5 py-2.5 shadow-[0_16px_32px_-10px_rgba(0,0,0,0.55)] backdrop-blur-md transition hover:scale-105">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-lime text-navy">
                    <Feather className="h-4 w-4" strokeWidth={2.2} />
                  </span>
                  <span className="text-[12px] leading-tight whitespace-nowrap">
                    <span className="block text-white/65 text-[10.5px]">Comfort</span>
                    <span className="block font-display font-bold text-white">{t.facts.comfort}</span>
                  </span>
                </div>
              </div>

              {/* Card 2: Typically (Bottom Right ~120°) */}
              <div className="absolute -right-2 sm:-right-4 bottom-[20%] motion-safe:animate-counter-orbit group-hover:[animation-play-state:paused]">
                <div className="flex items-center gap-2.5 rounded-2xl border border-white/30 bg-[#07303a]/85 px-3.5 py-2.5 shadow-[0_16px_32px_-10px_rgba(0,0,0,0.55)] backdrop-blur-md transition hover:scale-105">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-white text-teal-deep">
                    <Timer className="h-4 w-4" strokeWidth={2.2} />
                  </span>
                  <span className="text-[12px] leading-tight whitespace-nowrap">
                    <span className="block text-white/65 text-[10.5px]">Typically</span>
                    <span className="block font-display font-bold text-white">{t.facts.duration}</span>
                  </span>
                </div>
              </div>

              {/* Card 3: Led by Dr. Sneha (Bottom Left ~240°) */}
              <div className="absolute -left-2 sm:-left-4 bottom-[20%] motion-safe:animate-counter-orbit group-hover:[animation-play-state:paused]">
                <div className="flex items-center gap-2.5 rounded-2xl border border-white/30 bg-[#07303a]/85 px-3.5 py-2.5 shadow-[0_16px_32px_-10px_rgba(0,0,0,0.55)] backdrop-blur-md transition hover:scale-105">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[#d8f952] text-navy">
                    <BadgeCheck className="h-4 w-4" strokeWidth={2.2} />
                  </span>
                  <span className="text-[12px] leading-tight whitespace-nowrap">
                    <span className="block text-white/65 text-[10.5px]">Led by</span>
                    <span className="block font-display font-bold text-white">Dr. Sneha, BDS</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ---------------- Contact Details Info Strip (centered on hero section line) ---------------- */}
      <Container className="relative z-30 -mt-7 sm:-mt-8 lg:-mt-9">
        <div className="rounded-[24px] bg-gradient-to-br from-[#b9e84a] via-white to-[#7fd0d8] p-[1.5px] shadow-[0_22px_45px_-12px_rgba(8,104,116,0.22)]">
          <div className="relative grid grid-cols-1 divide-y divide-teal/15 rounded-[23px] bg-white p-3.5 sm:p-4.5 sm:grid-cols-3 sm:divide-y-0 sm:divide-x overflow-hidden">
            {/* Top-Right Soft Ambient Lime Blob */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-lime/20 to-transparent"
            />

            {/* 1. Direct Contact */}
            <div className="flex items-center gap-3.5 px-3 py-2 sm:px-4 sm:py-1">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#eefad0] to-[#d3f1f3] text-[#4f8612]">
                <Phone className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-teal-deep">Direct Contact</span>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="block font-display text-[15px] sm:text-[15.5px] font-bold text-navy transition hover:text-teal"
                >
                  {site.phone}
                </a>
                <span className="block text-[12px] text-ink/70">Phone &amp; WhatsApp Support</span>
              </div>
            </div>

            {/* 2. Clinic Address */}
            <div className="flex items-center gap-3.5 px-3 py-2 sm:px-4 sm:py-1">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#eefad0] to-[#d3f1f3] text-[#4f8612]">
                <MapPin className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-teal-deep">Clinic Address</span>
                <span className="block font-display text-[14.5px] sm:text-[15px] font-bold text-navy leading-snug">
                  Ground Floor, Swaraj Complex
                </span>
                <span className="block text-[12px] text-ink/70 truncate">
                  Opp. Datta Mandir, Wadgaon Sheri, Pune
                </span>
              </div>
            </div>

            {/* 3. Clinic Timings */}
            <div className="flex items-center gap-3.5 px-3 py-2 sm:px-4 sm:py-1">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#eefad0] to-[#d3f1f3] text-[#4f8612]">
                <Clock className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-teal-deep">Clinic Timings</span>
                <div className="font-display text-[14px] sm:text-[14.5px] font-bold text-navy leading-snug">
                  Mon–Sat: 10:30 AM – 9:30 PM
                </div>
                <div className="text-[12px] text-ink/70">
                  SUN: 10:30 AM – 1:30 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
