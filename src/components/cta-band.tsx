import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { site } from "@/lib/site";

interface CtaBandProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function CtaBand({ className = "", style }: CtaBandProps = {}) {
  return (
    <section
      id="contact"
      className={`relative z-10 scroll-mt-6 px-5 pt-8 pb-10 sm:pt-10 sm:pb-12 lg:pt-12 lg:pb-14 ${className}`}
      style={style ?? { background: "linear-gradient(180deg, #ffffff 0%, #edf9fb 100%)" }}
    >
      <div
        className="relative mx-auto flex max-w-[1260px] flex-col items-center justify-between gap-6 rounded-[32px] border border-white/25 px-7 pt-16 pb-8 shadow-[0_20px_45px_-12px_rgba(8,104,116,0.35)] sm:px-12 sm:pt-16 sm:pb-9 lg:h-[136px] lg:flex-row lg:py-0 lg:pl-[198px] xl:pl-[210px] lg:pr-12"
        style={{ background: "linear-gradient(90deg, #0a6c77 0%, #086874 50%, #0c7280 100%)" }}
      >
        {/* Floating 3D Tooth Mascot popping outside of the box boundary */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 sm:-top-16 lg:-top-10 lg:left-6 xl:left-8 lg:translate-x-0 pointer-events-none drop-shadow-[0_18px_24px_rgba(0,0,0,0.32)] transition-transform duration-300 hover:scale-105">
          <Image
            src="/images/cta-tooth-3d.webp"
            alt="Dr. Sneha The Dental Studio Mascot"
            width={200}
            height={180}
            priority
            className="h-[105px] w-auto sm:h-[125px] lg:h-[155px] object-contain"
          />
        </div>

        {/* Text */}
        <div className="relative z-10 text-center lg:text-left">
          <h2 className="font-display text-[22px] font-bold tracking-tight text-white sm:text-[26px] lg:text-[28px]">
            Book Your Appointment Today
          </h2>
          <p className="mt-1 text-[14px] text-white/85 sm:text-[15px]">
            Gentle, personalized dental care with Dr. Sneha Sardar in Wadgaon Sheri, Pune.
          </p>
        </div>

        {/* Right: Clean, Simple Single-Line Button */}
        <div className="flex shrink-0 items-center">
          <Link
            href={`tel:${site.phoneHref}`}
            className="btn-lime h-[48px] whitespace-nowrap px-8 text-[15.5px] font-bold shadow-md"
          >
            <CalendarCheck className="h-[18px] w-[18px]" strokeWidth={2} />
            <span>Book Appointment</span>
            <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
