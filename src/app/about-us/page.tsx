import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Check,
  CheckCircle2,
  Clock,
  Heart,
  HeartPulse,
  Layers,
  MapPin,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Sun,
  Zap,
} from "lucide-react";
import CtaBand from "@/components/cta-band";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Breadcrumbs, Container, Eyebrow } from "@/components/treatment/ui";
import { site } from "@/lib/site";

const title = "About Dr. Sneha Sardar & The Dental Studio | Wadgaon Sheri, Pune";
const description =
  "Learn about Dr. Sneha Sardar (BDS) and The Dental Studio in Wadgaon Sheri, Pune. Over a decade of gentle, pain-managed family and cosmetic dentistry with 284 Google reviews and 4.9 rating.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about-us" },
  openGraph: {
    type: "website",
    url: "/about-us",
    siteName: site.name,
    locale: site.locale,
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
};

const CLINIC_TECHNOLOGY = [
  {
    icon: ScanLine,
    title: "Digital X-Rays & Imaging",
    tag: "Low-Radiation",
    desc: "Instant ultra-sharp diagnostic visuals to detect hidden cavities and evaluate bone support with 80% less radiation than conventional films.",
    badge: "Instant 2D/3D Diagnostics",
  },
  {
    icon: Zap,
    title: "Single-Sitting Rotary Endo",
    tag: "Painless RCT",
    desc: "Motorised precision nickel-titanium instruments clean and seal root canals smoothly in a single comfortable visit without multiple needle pricks.",
    badge: "Precision Rotary System",
  },
  {
    icon: ShieldCheck,
    title: "5-Step Autoclave Sterilization",
    tag: "Hospital-Grade",
    desc: "Ultrasonic cleaning, enzymatic disinfectants, and Class-B autoclave heat cycles guarantee absolute patient safety and sterile instrument packets.",
    badge: "100% Sterile Protocol",
  },
  {
    icon: HeartPulse,
    title: "Computerized Anesthesia",
    tag: "Gentle Numbing",
    desc: "Advanced local anesthetic delivery ensures thorough, stress-free numbness before any procedure begins, eliminating injection pinch or dental fear.",
    badge: "Comfort Anesthesia",
  },
  {
    icon: Sun,
    title: "In-Clinic LED Teeth Whitening",
    tag: "Instant Brightness",
    desc: "Cold-light professional bleaching brightens discoloured teeth 4 to 8 shades safely without enamel sensitivity or gum irritation.",
    badge: "4-8 Shades Brighter",
  },
  {
    icon: Layers,
    title: "Digital Clear Aligner Scans",
    tag: "3D Simulation",
    desc: "Predictable orthodontic simulations allow you to preview your final aligned smile and treatment timeline before starting aligners.",
    badge: "Smile Preview Tech",
  },
];

const CLINIC_VALUES = [
  {
    icon: Heart,
    title: "Compassionate, Gentle Approach",
    badge: "Patient Comfort First",
    description:
      "We understand dental anxiety. Every treatment is paced to your comfort, using pain-managed techniques so you feel calm, heard, and relaxed.",
    cardBg: "border-[#cde8b0] bg-gradient-to-br from-[#f2fcd9] to-[#e4f8be]",
    iconBg: "bg-white/85 text-[#4f8612] shadow-2xs",
    badgeBg: "border-[#bce866] bg-white/75 text-[#3f6a0a]",
    dotBg: "bg-gradient-to-br from-[#a9e00b] to-[#4f8612]",
    takeaways: ["Pain-managed, calm pacing", "Zero judgment for dental anxiety"],
  },
  {
    icon: ShieldCheck,
    title: "Hospital-Grade Sterilization",
    badge: "100% Sterile",
    description:
      "Your health is non-negotiable. Reusable instruments undergo strict 5-stage ultrasonic and autoclave sterilization, sealed in sterile pouches.",
    cardBg: "border-[#cfe9ed] bg-gradient-to-br from-[#e6f6f8] to-[#d5eff2]",
    iconBg: "bg-white/85 text-[#0d7f8a] shadow-2xs",
    badgeBg: "border-teal/20 bg-white/75 text-[#0d7f8a]",
    dotBg: "bg-gradient-to-br from-[#a9e00b] to-[#0d7f8a]",
    takeaways: ["5-stage Class-B heat autoclave", "Individually sealed sterile pouches"],
  },
  {
    icon: Sparkles,
    title: "Minimally Invasive Dentistry",
    badge: "Tooth Preservation",
    description:
      "Our golden rule is preserving your natural tooth structure whenever possible through preventive care, tooth-coloured fillings, and gentle root canals.",
    cardBg: "border-[#bde0fe] bg-gradient-to-br from-[#eff7ff] to-[#d9edff]",
    iconBg: "bg-white/85 text-[#0284c7] shadow-2xs",
    badgeBg: "border-[#bae6fd] bg-white/75 text-[#0369a1]",
    dotBg: "bg-gradient-to-br from-[#38bdf8] to-[#0284c7]",
    takeaways: ["Preserving natural tooth structure", "Tooth-coloured aesthetic fillings"],
  },
  {
    icon: Clock,
    title: "Convenient Evening & Sunday Hours",
    badge: "Open till 9:30 PM",
    description:
      "Working professionals and families can easily schedule dental visits with evening appointments open until 9:30 PM and dedicated Sunday morning slots.",
    cardBg: "border-[#f3dcb8] bg-gradient-to-br from-[#fff8ec] to-[#fff1da]",
    iconBg: "bg-white/85 text-[#d9871c] shadow-2xs",
    badgeBg: "border-[#f3dcb8] bg-white/75 text-[#c07412]",
    dotBg: "bg-[#e8a13a]",
    takeaways: ["Late evening slots till 9:30 PM", "Dedicated Sunday morning visits"],
  },
];

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main id="main">
        {/* Cinematic Hero Banner - Unified consistent height */}
        <section className="relative isolate overflow-hidden text-white">
          {/* Background Clinic Image with dark dental teal overlay */}
          <div className="absolute inset-0 -z-20">
            <Image
              src="/images/clinic.webp"
              alt="Dr. Sneha Dental Studio interior"
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
            <Breadcrumbs light items={[{ name: "Home", href: "/" }, { name: "About Us" }]} />
            
            <div className="mt-4 max-w-[760px]">
              <h1 className="pt-1 pb-1 font-display text-[32px] font-extrabold leading-[1.16] tracking-tight text-white sm:text-[42px] lg:text-[48px] xl:text-[52px]">
                Gentle, Modern Dental Care{" "}
                <span className="block mt-1 sm:mt-1.5 pb-1 bg-gradient-to-r from-[#e4ff6b] via-[#c4ee2a] to-[#a9e00b] bg-clip-text text-transparent">
                  You Can Truly Trust
                </span>
              </h1>
              <p className="mt-3 max-w-[640px] text-[15px] leading-relaxed text-white/90 sm:text-[16px]">
                Welcome to Dr. Sneha – The Dental Studio. We are a family and aesthetic dental clinic in Wadgaon Sheri,
                Pune, dedicated to stress-free treatments, transparent guidance, and healthy, lasting smiles.
              </p>
            </div>
          </Container>
        </section>

        {/* Doctor Story Section */}
        <section className="py-10 sm:py-14" aria-label="About Dr. Sneha Sardar">
          <Container>
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
              {/* Doctor Portrait Card */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-[380px]">
                  <div className="relative overflow-hidden rounded-[26px] border border-teal/15 bg-white p-3 shadow-float sm:rounded-[30px]">
                    <div className="relative aspect-[4/4.6] w-full overflow-hidden rounded-[20px] bg-gradient-to-b from-[#e6f6f8] to-[#d8f1f5] sm:rounded-[24px]">
                      <Image
                        src="/images/dr-sneha-sardar.webp"
                        alt="Dr. Sneha Sardar - Chief Dental Surgeon"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 380px"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Doctor Bio & Credentials */}
              <div className="lg:col-span-7">
                <Eyebrow>Meet Your Dentist</Eyebrow>
                <h2 className="mt-2.5 font-display text-[26px] font-extrabold tracking-tight text-navy sm:text-[32px] lg:text-[36px]">
                  Dr. Sneha Sardar
                </h2>
                <p className="mt-1 text-[13.5px] font-bold text-teal-deep sm:text-[14.5px]">
                  BDS | Cosmetic &amp; General Dentistry
                </p>

                <div className="mt-4 space-y-3 text-[14px] leading-relaxed text-ink/85 sm:text-[15px]">
                  <p>
                    Dr. Sneha Sardar (BDS) founded <strong>Dr. Sneha – The Dental Studio</strong> with a clear vision: to create a dental
                    haven where patients feel genuinely listened to, cared for, and treated with the gentle touch they deserve.
                  </p>
                  <p>
                    With extensive clinical experience, Dr. Sneha has treated thousands of patients, ranging
                    from children to seniors. She specializes in single-sitting root canals, aesthetic restorations, clear aligners,
                    and smile designing.
                  </p>
                  <p>
                    Dr. Sneha takes the time to explain your digital X-rays, outline all available treatment paths, and help you
                    make informed decisions without pressure.
                  </p>
                </div>

                {/* Core Credential Chips */}
                <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    { icon: Sparkles, text: "Gentle & pain-managed clinical procedures" },
                    { icon: CheckCircle2, text: "Over a decade of successful patient care" },
                    { icon: Heart, text: "Patient-Centered & Gentle Approach" },
                    { icon: Award, text: "Comprehensive family & cosmetic dentistry" },
                  ].map((c) => {
                    const Icon = c.icon;
                    return (
                      <div
                        key={c.text}
                        className="flex items-center gap-2.5 rounded-xl border border-teal/15 bg-white/80 px-3.5 py-2.5 shadow-2xs"
                      >
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-lime-soft text-navy">
                          <Icon className="h-3.5 w-3.5" strokeWidth={2.4} />
                        </span>
                        <span className="text-[12.5px] font-semibold text-navy sm:text-[13px]">{c.text}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a href={`tel:${site.phoneHref}`} className="btn-lime h-[42px] px-5 text-[14px]">
                    <span>Book Consultation</span>
                  </a>
                  <Link href="/treatments" className="btn-outline h-[42px] px-5 text-[14px]">
                    <span>View Treatments</span>
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Modern Infrastructure - Cinematic High-Tech Console Showcase */}
        <section
          id="technology"
          className="relative isolate overflow-hidden py-10 text-white sm:py-12 lg:py-14"
          style={{
            background:
              "radial-gradient(circle at 15% 20%, rgba(169, 224, 11, 0.12) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(20, 184, 166, 0.2) 0%, transparent 50%), linear-gradient(135deg, #092c35 0%, #084a56 50%, #07636f 100%)",
          }}
          aria-label="Clinic Facilities & Dental Technology"
        >
          {/* Subtle dot matrix grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12] [background-image:radial-gradient(#fff_1px,transparent_1.2px)] [background-size:28px_28px]"
          />

          <Container>
            <div className="mx-auto max-w-[700px] text-center">
              <Eyebrow light center>Modern Infrastructure</Eyebrow>
              <h2 className="mt-2.5 font-display text-[26px] font-bold tracking-tight text-white sm:text-[30px] lg:text-[34px]">
                Advanced Technology for Painless Care
              </h2>
              <p className="mx-auto mt-2 max-w-[620px] text-[14px] leading-relaxed text-white/80 sm:text-[15px]">
                Equipped with hospital-grade dental equipment engineered to eliminate discomfort, shorten recovery time,
                and give you reliable, predictable smile outcomes.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4.5 lg:grid-cols-3 lg:gap-5">
              {CLINIC_TECHNOLOGY.map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.title}
                    className="group relative flex flex-col justify-between rounded-[20px] border border-white/20 bg-[#083a45]/85 p-4.5 sm:p-5 shadow-md transform-gpu transition-all duration-300 hover:-translate-y-1 hover:bg-[#0b4754] hover:border-lime/50 hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.45)] [backface-visibility:hidden]"
                  >
                    <div>
                      {/* Header with glowing squircle & luminous stroke number */}
                      <div className="flex items-center justify-between">
                        <span className="grid h-10 w-10 sm:h-10.5 sm:w-10.5 place-items-center rounded-xl bg-white/15 text-lime border border-white/15 shadow-inner transition-transform duration-300 group-hover:scale-105 group-hover:bg-lime group-hover:text-navy">
                          <Icon className="h-5 w-5" strokeWidth={2} />
                        </span>
                        <span
                          aria-hidden="true"
                          className="select-none font-display text-[30px] sm:text-[34px] font-bold leading-none tracking-tight text-white/15 [-webkit-text-stroke:1px_rgba(255,255,255,0.85)] group-hover:text-lime/25 transition-colors"
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h3 className="mt-3.5 font-display text-[16px] font-bold leading-snug text-white sm:text-[17px]">
                        {tech.title}
                      </h3>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-white/85 sm:text-[13.5px]">
                        {tech.desc}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-2.5">
                      <span className="inline-block rounded-full border border-lime/40 bg-lime/15 px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-lime">
                        {tech.tag}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-white/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-lime shadow-[0_0_8px_rgba(169,224,11,0.9)]" />
                        {tech.badge}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Core Values Section + CTA Banner with seamless background extended till the footer */}
        <div
          className="relative overflow-hidden"
          style={{ background: "linear-gradient(180deg, #ffffff 0%, #f0fafb 35%, #e6f6f8 100%)" }}
        >
          <span aria-hidden="true" className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-lime/15 blur-3xl" />
          <span aria-hidden="true" className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-[#bfe9ee]/35 blur-3xl" />
          <span aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-lime/10 blur-3xl" />

          {/* Philosophy Section */}
          <section
            className="pt-10 pb-8 sm:pt-12 sm:pb-10 lg:pt-14 lg:pb-12"
            aria-label="Our Core Values"
          >
            <Container className="relative">
              <div className="mx-auto max-w-[720px] text-center">
                <Eyebrow center>Our Philosophy</Eyebrow>
                <h2 className="mt-2.5 font-display text-[26px] font-bold tracking-tight text-navy sm:text-[30px] lg:text-[34px]">
                  Why Wadgaon Sheri Families Choose Us
                </h2>
                <p className="mx-auto mt-2 max-w-[620px] text-[14.5px] leading-relaxed text-ink/80 sm:text-[15.5px]">
                  Our practice is built on trust, clinical integrity, patient comfort, and lasting dental health.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4.5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 lg:gap-5.5">
                {CLINIC_VALUES.map((val) => {
                  const Icon = val.icon;
                  return (
                    <div
                      key={val.title}
                      className={`group relative flex flex-col justify-between overflow-hidden rounded-[24px] border p-5 sm:p-5.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-float ${val.cardBg}`}
                    >
                      <div>
                        {/* Header with squircle & badge */}
                        <div className="flex items-center justify-between gap-2">
                          <span className={`grid h-11 w-11 place-items-center rounded-2xl ${val.iconBg}`}>
                            <Icon className="h-5 w-5" strokeWidth={2.2} />
                          </span>
                          <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${val.badgeBg}`}>
                            {val.badge}
                          </span>
                        </div>

                        <h3 className="mt-4 font-display text-[17.5px] font-bold leading-snug text-navy sm:text-[18.5px]">
                          {val.title}
                        </h3>
                        <p className="mt-2 text-[13.5px] leading-relaxed text-ink/80 sm:text-[14px]">
                          {val.description}
                        </p>

                        {/* Takeaway items */}
                        <ul className="mt-4 space-y-2 border-t border-black/5 pt-3">
                          {val.takeaways.map((point) => (
                            <li key={point} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-ink/85 font-medium">
                              <span
                                aria-hidden="true"
                                className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${val.dotBg}`}
                              />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Container>
          </section>

          {/* CTA Band with ample spacing from the philosophy cards above, allowing the 3D mascot to breathe */}
          <CtaBand
            className="!pt-12 sm:!pt-16 lg:!pt-20 !pb-14 sm:!pb-16 lg:!pb-20"
            style={{ background: "transparent" }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
