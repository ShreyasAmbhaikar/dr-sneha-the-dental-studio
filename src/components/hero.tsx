import Image from "next/image";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import {
  ArrowRight,
  CalendarCheck,
  CircleChevronRight,
  ShieldCheck,
  Star,
} from "lucide-react";
import { GroupIcon, ToothIcon } from "./icons";

type Icon = ComponentType<SVGProps<SVGSVGElement> & { strokeWidth?: number | string }>;

const STATS: { icon: Icon; value: string; label: string }[] = [
  { icon: ToothIcon, value: "10+", label: "Years of Experience" },
  { icon: GroupIcon, value: "1000+", label: "Happy Patients" },
  { icon: Star, value: "4.9/5", label: "Patient Rating\n(284 Google Reviews)" },
  { icon: ShieldCheck, value: "Strict", label: "Sterilization Protocols" },
];

export default function Hero() {
  return (
    <section id="home" className="relative">
      {/* ---------- Hero banner ---------- */}
      <div
        className="relative overflow-hidden lg:min-h-[460px]"
        style={{ background: "linear-gradient(90deg, #c9eef4 0%, #d4f0f5 40%, #dff4f9 100%)" }}
      >
        {/* Patient photo (desktop: right 60%, faded into the gradient) */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[60.1%] lg:block">
          <Image
            src="/images/hero-patient-hd.webp"
            alt="Smiling patient relaxing in the dental chair"
            fill
            priority
            unoptimized
            className="object-cover object-left-top [mask-image:linear-gradient(90deg,transparent_0%,#000_14%)]"
          />
        </div>

        <div className="relative mx-auto w-full max-w-[1260px] px-5 pb-12 pt-10 sm:pt-12 lg:pb-0 lg:pt-[44px]">
          <div>
            <p className="eyebrow text-[14px] text-teal sm:text-[16.5px] sm:tracking-[0.26em]">Complete Dental Care</p>

            <h1 className="mt-3.5 font-display text-[38px] font-bold leading-[1.08] tracking-[-0.015em] text-navy sm:text-[46px] lg:text-[53px] lg:leading-[55px]">
              Healthy Smiles for a
              <br />
              <span className="text-[44px] text-leaf sm:text-[54px] lg:text-[58px]">Confident You</span>
            </h1>

            <p className="mt-5 max-w-[460px] text-[17px] leading-[26px] text-ink sm:mt-6 sm:text-[18px] lg:text-[19.5px] lg:leading-[28px]">
              Advanced, compassionate and personalized dental care for you and your family under the expertise of Dr. Sneha Sardar.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-[24px] gap-y-4 sm:mt-8 lg:pb-[96px]">
              <Link href="/contact-us" className="btn-lime h-[49px] w-[267px] text-[16.5px]">
                <CalendarCheck className="h-5 w-5" strokeWidth={1.7} />
                Book Appointment
                <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2} />
              </Link>
              <Link
                href="#clinic-tour"
                className="btn-outline h-[48px] w-[218px] gap-2.5 border-teal text-[16px]"
              >
                <CircleChevronRight className="h-6 w-6 text-teal" strokeWidth={1.6} />
                Virtual Clinic Tour
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile photo */}
        <div className="relative mx-auto mt-2 h-[300px] w-full max-w-[420px] [mask-image:linear-gradient(180deg,transparent_0%,#000_18%,#000_88%,transparent_100%)] lg:hidden">
          <Image
            src="/images/hero-patient-hd.webp"
            alt="Smiling patient relaxing in the dental chair"
            fill
            unoptimized
            className="object-cover object-[35%_center]"
          />
        </div>
      </div>

      {/* ---------- Stats bar (overlaps hero) ---------- */}
      <div className="relative z-10 mx-auto -mt-10 w-full max-w-[1260px] px-5 lg:-mt-[55px]">
        <div className="grid grid-cols-2 rounded-[28px] bg-white/[0.94] py-3 shadow-float ring-1 ring-white/80 backdrop-blur lg:h-[101px] lg:grid-cols-4 lg:py-0">
          {STATS.map(({ icon: Icon, value, label }, i) => (
            <div
              key={value}
              className={`flex items-center justify-center gap-4 px-3 py-4 lg:gap-5 xl:gap-7 lg:py-0 ${
                i > 0 ? "lg:relative lg:before:absolute lg:before:left-0 lg:before:top-1/2 lg:before:h-[50px] lg:before:w-px lg:before:-translate-y-1/2 lg:before:bg-[#d3d9e0]" : ""
              }`}
            >
              <Icon className="h-[46px] w-[46px] shrink-0 text-[#6a9a1f]" strokeWidth={2.1} />
              <div>
                <div className="font-display text-[22px] font-bold leading-tight text-navy lg:text-[26px]">{value}</div>
                <div className="whitespace-pre-line text-[14px] leading-[19px] text-ink lg:whitespace-pre lg:text-[16px]">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
