import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, HeartHandshake, Stethoscope } from "lucide-react";
import type { Treatment } from "@/lib/treatments";
import { Container, Eyebrow } from "./ui";

export default function DoctorStrip({ t }: { t: Treatment }) {
  return (
    <section aria-labelledby="doctor-title" className="py-11 sm:py-13 lg:py-[60px]">
      <Container>
        <div
          className="relative isolate grid items-center gap-7 overflow-hidden rounded-[32px] border border-white p-6 shadow-float sm:p-7 lg:grid-cols-[330px_1fr] lg:gap-10 lg:p-8"
          style={{ background: "linear-gradient(120deg,#ffffff 0%,#eaf8fa 58%,#dff3a2 175%)" }}
        >
          <span aria-hidden="true" className="absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-lime/25 blur-3xl" />

          <div className="relative mx-auto w-full max-w-[380px] lg:mx-0">
            <span aria-hidden="true" className="absolute -left-3 bottom-4 top-4 w-14 rounded-[24px] bg-lime-soft" />
            <div className="relative aspect-[4/4.6] overflow-hidden rounded-[24px] shadow-card">
              <Image
                src="/images/dr-sneha-sardar.webp"
                alt="Dr. Sneha, cosmetic and general dentist"
                fill
                sizes="(min-width: 1024px) 340px, 90vw"
                className="object-cover object-top"
              />
            </div>
          </div>

          <div>
            <Eyebrow>Your dentist</Eyebrow>
            <h2 id="doctor-title" className="mt-3 font-display text-[26px] font-bold leading-tight tracking-[-0.01em] text-navy sm:text-[31px] sm:leading-[38px] lg:text-[34px]">
              {t.name} with Dr. Sneha, patient-first care
            </h2>
            <p className="mt-3 max-w-[640px] text-[15px] leading-relaxed text-ink/85 sm:text-[15.5px]">
              Dr. Sneha combines clinical expertise with a gentle touch to deliver high-quality, comfortable and
              long-lasting dental care. Every treatment starts with listening, and you&apos;ll always understand your options
              before anything begins.
            </p>

            <ul className="mt-4.5 flex flex-wrap gap-2.5">
              {[
                { icon: GraduationCap, label: "BDS qualified" },
                { icon: Stethoscope, label: "Cosmetic & general dentistry" },
                { icon: HeartHandshake, label: "Gentle, patient-centred approach" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 rounded-full border border-[#d9ebee] bg-white/80 py-1.5 pl-2 pr-3.5 text-[13px] font-semibold text-navy">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-[#eefad0] to-[#d3f1f3] text-[#4f8612]">
                    <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                  </span>
                  {label}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3.5">
              <Link href="#contact" className="btn-lime h-[46px] px-6 text-[15px]">
                Book with Dr. Sneha
                <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
              </Link>
              <Link href="/#about" className="btn-outline h-[48px] border-[#6a9a1f] px-7 text-[15.5px]">
                About Dr. Sneha
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
