"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MoveHorizontal } from "lucide-react";

const TRANSFORMATIONS = [
  {
    id: "root-canal",
    service: "Root Canal",
    badge: "Endodontics",
    tagline: "Painless single-sitting relief saving your natural infected tooth",
    description:
      "Eliminates deep bacterial infection, cures toothache, and seals root canals with durable biocompatible material capped with a custom ceramic crown.",
    beforeImg: "/images/transformations/root-canal-before.webp",
    afterImg: "/images/transformations/root-canal-after.webp",
    features: [
      "100% painless procedure under gentle local anesthesia",
      "Saves natural tooth root and bite function",
      "Reinforced with lifelike, natural-looking crown",
    ],
    slug: "root-canal-treatment",
  },
  {
    id: "aligners",
    service: "Clear Aligners",
    badge: "Orthodontics",
    tagline: "Straighten teeth discreetly without uncomfortable metal brackets",
    description:
      "Corrects crowding, rotated teeth, and bite alignment with custom transparent trays designed for gentle, predictable movement.",
    beforeImg: "/images/transformations/aligners-before.jpg",
    afterImg: "/images/transformations/aligners-after.jpg",
    features: [
      "Virtually invisible transparent trays",
      "Removable for easy eating & brushing",
      "Predictable digital 3D treatment planning",
    ],
    slug: "braces-and-aligners",
  },
  {
    id: "implants",
    service: "Dental Implant",
    badge: "Implantology",
    tagline: "Permanent, lifelike replacement for missing teeth",
    description:
      "Precision-placed titanium implant root fused with the jawbone, restored with a custom porcelain crown to deliver 100% natural bite strength and aesthetics.",
    beforeImg: "/images/transformations/implant-before.webp",
    afterImg: "/images/transformations/implant-after.webp",
    features: [
      "Looks, feels, and bites just like a natural tooth",
      "Prevents jawbone loss and facial structure changes",
      "Lifetime permanent solution with 98%+ success rate",
    ],
    slug: "dental-implants",
  },
];

export default function Transformations() {
  const [activeTab, setActiveTab] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const active = TRANSFORMATIONS[activeTab];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  return (
    <section id="gallery" className="scroll-mt-4 px-5 py-10 lg:py-14 bg-white">
      <div className="mx-auto max-w-[1260px]">
        {/* Compact Balanced Left & Right Layout */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_520px] xl:grid-cols-[1fr_540px] lg:gap-12">
          {/* Left Column: Heading, Capsule Tabs, Highlights & Button */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-[2px] w-[32px] bg-gradient-to-r from-[#6aa81a] to-[#4f9a3d]" />
              <span className="eyebrow eyebrow-gradient text-[13px] sm:text-[14px]">
                Smile Transformations
              </span>
            </div>

            <h2 className="mt-2.5 font-display text-[28px] font-bold leading-tight tracking-[-0.01em] text-navy sm:text-[33px] lg:text-[36px]">
              Real Results, Real Smiles
            </h2>

            <p className="mt-2 text-[15px] leading-relaxed text-ink/85 sm:text-[16px]">
              See how customized cosmetic and restorative dentistry transforms smiles and confidence. Every treatment is designed with digital precision and gentle care by Dr. Sneha.
            </p>

            {/* Compact Capsule Tabs */}
            <div className="mt-4 inline-flex items-center rounded-full border border-[#d2e8ed] bg-[#edf7f9] p-1 shadow-sm">
              {TRANSFORMATIONS.map((item, idx) => {
                const isSelected = activeTab === idx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setActiveTab(idx);
                      setSliderPos(50);
                    }}
                    className={`rounded-full px-3.5 py-1.5 text-[13px] font-bold transition-all sm:px-4 sm:text-[13.5px] ${
                      isSelected
                        ? "bg-teal-deep text-white shadow-sm"
                        : "text-navy hover:text-teal"
                    }`}
                  >
                    {item.service}
                  </button>
                );
              })}
            </div>

            {/* Compact Details Box */}
            <div className="mt-4 rounded-xl border border-gray-100 bg-[#f8fcfd] p-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal">
                {active.badge}
              </span>
              <h3 className="mt-0.5 font-display text-[17px] font-bold text-navy">
                {active.tagline}
              </h3>
              <p className="mt-1 text-[13.5px] leading-relaxed text-ink/80">
                {active.description}
              </p>

              <ul className="mt-2.5 space-y-1.5">
                {active.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-[13px] font-medium text-navy">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-lime" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="mt-5 flex items-center gap-3.5">
              <Link
                href="#contact"
                className="btn-lime h-[44px] whitespace-nowrap px-6 text-[14.5px] font-bold shadow-md"
              >
                <span>Book Smile Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href={`/treatments/${active.slug}`}
                className="text-[13.5px] font-bold text-teal-deep hover:text-teal hover:underline"
              >
                Learn more →
              </Link>
            </div>
          </div>

          {/* Right Column: Compact & Proportionate Comparison Slider */}
          <div className="flex flex-col items-center">
            <div
              ref={containerRef}
              onClick={(e) => handleMove(e.clientX)}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
              className="relative aspect-[16/10] w-full max-w-[540px] cursor-ew-resize select-none overflow-hidden rounded-[24px] border-2 border-white shadow-card ring-1 ring-black/5"
            >
              {/* After Image (Base layer) */}
              <div className="absolute inset-0">
                <Image
                  src={active.afterImg}
                  alt={`After ${active.service}`}
                  fill
                  sizes="(min-width: 1024px) 540px, 90vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Before Image (Clipped layer) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <Image
                  src={active.beforeImg}
                  alt={`Before ${active.service}`}
                  fill
                  sizes="(min-width: 1024px) 540px, 90vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Badges Overlay — placed outside clipped container so neither badge is clipped or disappears */}
              <div className="pointer-events-none absolute inset-0 z-20">
                <span className="absolute bottom-3.5 left-3.5 rounded-full bg-navy/85 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white backdrop-blur-md shadow-md ring-1 ring-white/20">
                  Before
                </span>
                <span className="absolute bottom-3.5 right-3.5 rounded-full bg-[#5da012] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-md ring-1 ring-white/20">
                  After
                </span>
              </div>

              {/* Vertical Slider Divider Line */}
              <div
                className="absolute inset-y-0 z-20 w-[2.5px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)]"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-teal-deep text-white shadow-md ring-2 ring-white/40">
                  <MoveHorizontal className="h-4 w-4 text-lime" strokeWidth={2.4} />
                </div>
              </div>
            </div>

            <p className="mt-2 text-center text-[12px] text-gray-400">
              *Untouched clinical photographs of patients treated at Dr. Sneha – The Dental Studio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
