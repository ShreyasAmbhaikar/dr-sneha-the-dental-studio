import Image from "next/image";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { ArrowRight, GraduationCap, Heart } from "lucide-react";
import { GroupIcon, MedalIcon } from "./icons";

type Icon = ComponentType<SVGProps<SVGSVGElement> & { strokeWidth?: number | string }>;

const CREDENTIALS: { icon: Icon; label: string }[] = [
  { icon: GraduationCap, label: "BDS - Qualified & Experienced" },
  { icon: GroupIcon, label: "Expertise in Cosmetic &\nGeneral Dentistry" },
  { icon: Heart, label: "Patient-Centered & Gentle Approach" },
  { icon: MedalIcon, label: "Committed to High-Quality Care" },
];

export default function Doctor() {
  return (
    <section id="about" className="scroll-mt-4 px-5 pb-12 pt-20 lg:pb-[77px] lg:pt-[103px]">
      <div className="mx-auto flex max-w-[1260px] flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
        {/* Portrait with lime accent - proportionally scaled to match page hierarchy */}
        <div className="relative mx-auto w-full max-w-[270px] sm:max-w-[285px] shrink-0 lg:mx-0 lg:w-[275px] xl:w-[290px]">
          <span
            aria-hidden="true"
            className="absolute -left-[10px] bottom-[10px] top-[6px] w-[36px] rounded-[20px] bg-lime-soft"
          />
          <div className="relative aspect-[4/4.5] overflow-hidden rounded-[20px] shadow-card">
            <Image
              src="/images/dr-sneha-sardar.webp"
              alt="Dr. Sneha Sardar, Chief Dentist at Dr. Sneha - The Dental Studio"
              fill
              sizes="(min-width: 1024px) 290px, 80vw"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Intro */}
        <div className="lg:ml-8 xl:ml-10 lg:flex-1 lg:max-w-[450px]">
          <p className="eyebrow eyebrow-gradient text-[14px]">Meet the Dentist</p>
          <h2 className="mt-2.5 font-display text-[32px] sm:text-[36px] font-extrabold leading-[40px] tracking-[-0.02em] text-navy lg:text-[38px]">
            Dr. Sneha Sardar
          </h2>
          <p className="mt-1.5 text-[16px] sm:text-[16.5px] leading-[22px] text-ink">
            BDS <span className="mx-2 text-ink/70">|</span> Cosmetic &amp; General Dentistry
          </p>
          <p className="mt-3 text-[15px] sm:text-[15.5px] leading-[24px] text-ink/85">
            With a patient-first approach, Dr. Sneha Sardar combines clinical expertise with a gentle touch to deliver high-quality, comfortable and long-lasting dental care.
          </p>
          <Link href="/about-us" className="btn-lime mt-5 h-[48px] px-6 gap-2 text-[15px] sm:text-[15.5px]">
            Know More About Dr. Sneha Sardar
            <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2} />
          </Link>
        </div>

        {/* Divider */}
        <div aria-hidden="true" className="hidden h-[250px] w-px shrink-0 bg-[#d6dce2] lg:mx-6 xl:mx-8 lg:block" />

        {/* Credentials */}
        <ul className="shrink-0 lg:w-[310px] xl:w-[330px]">
          {CREDENTIALS.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-6 border-b border-[#dfe5ea] py-3.5 last:border-b-0 lg:min-h-[64px]">
              <Icon className="h-9 w-9 shrink-0 text-[#6a9a1f]" strokeWidth={1.8} />
              <span className="whitespace-pre-line text-[15px] leading-[21px] text-ink">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
