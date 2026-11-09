import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredTreatments, treatmentPath } from "@/lib/treatments";
import SectionHeading from "./section-heading";

export default function Treatments() {
  return (
    <section id="treatments" className="scroll-mt-4 px-5 pt-16 lg:pt-[80px]">
      <SectionHeading
        eyebrow="Our Treatments"
        title="Comprehensive Dental Care Under One Roof"
        description="From preventive care to advanced treatments, we offer complete dental solutions for a healthy, beautiful smile."
      />

      <ul className="mx-auto mt-10 grid max-w-[1260px] grid-cols-2 gap-4 sm:gap-6 lg:mt-[37px] lg:grid-cols-4 lg:gap-x-6 lg:gap-y-[27px]">
        {featuredTreatments.map((t) => (
          <li key={t.slug}>
            <Link
              href={treatmentPath(t.slug)}
              className="group flex h-[174px] flex-col items-center justify-between rounded-[24px] border border-white bg-gradient-to-b from-white to-[#f3f9fc] px-4 pb-4 pt-5 shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-float"
            >
              <div className="flex flex-1 items-center justify-center">
                <Image
                  src={`/images/treatments/${t.imageKey}.webp`}
                  alt={t.imageAlt}
                  width={120}
                  height={120}
                  className="h-[82px] w-[82px] object-contain transition duration-200 group-hover:scale-105 drop-shadow-[0_4px_10px_rgba(8,104,116,0.1)]"
                />
              </div>
              <span className="mt-2.5 whitespace-pre-line text-center font-display text-[16px] font-bold leading-[21px] text-navy sm:text-[17.5px]">
                {t.cardTitle}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex justify-center">
        <Link
          href="/treatments"
          className="btn-lime h-[48px] w-[270px] gap-3 text-[16px] font-bold shadow-md"
        >
          View All 25 Treatments
          <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.4} />
        </Link>
      </div>
    </section>
  );
}
