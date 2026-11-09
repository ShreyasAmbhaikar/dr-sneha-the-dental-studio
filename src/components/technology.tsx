import Image from "next/image";
import type { ComponentType, SVGProps } from "react";
import { MonitorDot, Pen, ScanFace, ShieldCheck } from "lucide-react";

type Icon = ComponentType<SVGProps<SVGSVGElement> & { strokeWidth?: number | string }>;

const TECH: { icon: Icon; label: string }[] = [
  { icon: MonitorDot, label: "Digital\nX-Rays" },
  { icon: Pen, label: "Laser\nDentistry" },
  { icon: ScanFace, label: "Intraoral\nScanning" },
  { icon: ShieldCheck, label: "Sterile & Safe\nEnvironment" },
];

export default function Technology() {
  return (
    <section id="technology" className="bg-aqua px-5 py-14 sm:py-16 lg:py-[56px]">
      <div className="mx-auto grid max-w-[1260px] items-center gap-10 lg:grid-cols-[1fr_540px] xl:grid-cols-[1fr_580px] lg:gap-10 xl:gap-12">
        <div>
          <p className="eyebrow eyebrow-gradient text-[14.2px]">Modern Dental Experience</p>
          <h2 className="mt-3 font-display text-[28px] font-bold leading-tight tracking-[-0.01em] text-navy sm:text-[33px] lg:text-[36px] lg:leading-[42px]">
            Advanced Technology
            <br />
            for Better Care
          </h2>
          <p className="mt-3.5 max-w-[480px] text-[15.5px] leading-[25px] text-ink sm:mt-4 lg:text-[17.5px]">
            We use state-of-the-art equipment and the latest dental technology to ensure precise diagnosis,
            comfortable treatment and lasting results.
          </p>

          <ul className="mt-6 grid grid-cols-2 gap-y-5 -ml-2 sm:-ml-8 lg:-ml-9 sm:grid-cols-4 sm:mt-7 lg:max-w-[540px]">
            {TECH.map(({ icon: Icon, label }) => (
              <li key={label} className="flex flex-col items-center text-center">
                <Icon className="h-9 w-9 text-teal-deep" strokeWidth={1.6} />
                <span className="mt-2.5 whitespace-pre-line font-display text-[14.5px] font-bold leading-5 text-navy">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[683/260] w-full overflow-hidden rounded-[32px] sm:rounded-[36px] border-2 border-white/70 shadow-float lg:h-[260px] lg:aspect-auto">
          <Image
            src="/images/clinic.webp"
            alt="Modern dental operatory with digital imaging screen and dental chair"
            fill
            sizes="(min-width: 1024px) 580px, 92vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
