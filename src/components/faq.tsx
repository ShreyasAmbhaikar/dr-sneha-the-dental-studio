"use client";

import { useState } from "react";
import { Minus, PhoneCall, Plus } from "lucide-react";
import { site } from "@/lib/site";

const FAQS = [
  {
    q: "Is dental treatment at The Dental Studio really painless?",
    a: "Yes! Patient comfort is our highest priority. We use modern local anesthetics, advanced computerized delivery systems, and gentle clinical techniques. Whether you are coming for a root canal, cavity filling, or extraction, we ensure your procedure is smooth, comfortable, and virtually pain-free.",
  },
  {
    q: "How often should I visit the dentist for a check-up & cleaning?",
    a: "We recommend visiting every 6 months for a routine dental examination and professional scaling (cleaning). Regular visits allow Dr. Sneha to detect minor issues—like micro-cavities or early gum inflammation—before they require extensive treatment.",
  },
  {
    q: "Are dental implants a permanent solution for missing teeth?",
    a: "Yes. Dental implants are made of biocompatible titanium that fuses directly with your jawbone (osseointegration). With proper oral hygiene and regular dental check-ups, implants can last a lifetime, functioning and looking just like natural teeth.",
  },
  {
    q: "How long does professional teeth whitening take and how long do results last?",
    a: "Our in-clinic LED/laser teeth whitening takes about 45 to 60 minutes in a single visit and brightens teeth by up to 4 to 8 shades safely. With good oral hygiene and mindful consumption of stain-causing foods like tea and coffee, results typically last 1 to 2 years.",
  },
  {
    q: "Do you accommodate dental emergencies and same-day appointments?",
    a: "Yes, we treat dental emergencies with high priority. If you are experiencing severe toothache, broken crowns, dental trauma, or bleeding gums, call our clinic at +91 74981 60682 or +91 97666 55007 immediately. We reserve emergency slots daily for patients in Wadgaon Sheri and nearby areas.",
  },
  {
    q: "What sterilization and hygiene protocols do you follow?",
    a: "We adhere strictly to international infection control guidelines. All reusable instruments undergo a 5-step hospital-grade ultrasonic and autoclave sterilization process, sealed in pouches until opened in front of you. Disposable barriers, gloves, and masks are used for every patient.",
  },
];

export default function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First one open by default

  const toggle = (idx: number) => {
    setOpenFaq((curr) => (curr === idx ? null : idx));
  };

  return (
    <section id="faq" className="scroll-mt-4 bg-white px-5 pt-10 pb-5 lg:pt-14 lg:pb-7">
      <div className="mx-auto max-w-[1260px]">
        {/* Balanced Left & Right Layout Structure */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[340px_1fr] xl:grid-cols-[360px_minmax(0,660px)] lg:gap-10 xl:gap-12 justify-between">
          {/* Left Column: Heading, Narrative & Compact Contact Card */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-[2px] w-[28px] bg-gradient-to-r from-[#6aa81a] to-[#4f9a3d]" />
              <span className="eyebrow eyebrow-gradient text-[12px] sm:text-[13px]">
                Frequently Asked Questions
              </span>
            </div>

            <h2 className="mt-2 font-display text-[24px] font-bold leading-tight tracking-[-0.01em] text-navy sm:text-[28px] lg:text-[30px]">
              Everything You
              <br />
              Need to Know
            </h2>

            <p className="mt-2 text-[14px] leading-relaxed text-ink/80">
              Have questions about treatments, safety, or appointments? We believe in transparent, stress-free dental care so you feel completely prepared.
            </p>

            {/* Compact Quick Consultation Card on Left */}
            <div className="mt-5 rounded-2xl border border-[#ccebee] bg-[#edf9fb] p-5 shadow-xs">
              <h3 className="font-display text-[15.5px] font-bold text-navy">
                Have a specific question?
              </h3>
              <p className="mt-1 text-[13px] leading-relaxed text-ink/75">
                Dr. Sneha is available for personalized consultations and second opinions.
              </p>

              <a
                href={`tel:${site.phoneHref}`}
                className="btn-lime mt-4 h-[40px] w-full gap-2 text-[13.5px] font-bold shadow-xs"
              >
                <PhoneCall className="h-3.5 w-3.5" />
                <span>Call Clinic: {site.phone}</span>
              </a>

              <p className="mt-2 text-center text-[11px] text-gray-500">
                Mon–Sat 10:30 AM – 9:30 PM • Sunday morning slots
              </p>
            </div>
          </div>

          {/* Right Column: Compact, Elegantly Sized Accordion */}
          <div className="w-full space-y-2.5 max-w-[660px]">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={faq.q}
                  className={`overflow-hidden rounded-xl border transition-all duration-200 ${
                    isOpen
                      ? "border-teal/30 bg-[#f4fbfc] shadow-xs"
                      : "border-gray-200/80 bg-white hover:border-gray-300"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${i}`}
                      onClick={() => toggle(i)}
                      className="flex w-full items-center justify-between gap-3.5 px-4.5 py-3 text-left transition-colors sm:px-5 sm:py-3.5"
                    >
                      <span className="font-display text-[14px] font-semibold text-navy sm:text-[15px] leading-snug">
                        {faq.q}
                      </span>
                      <span
                        className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition-colors ${
                          isOpen
                            ? "bg-teal text-white"
                            : "bg-gray-100 text-navy group-hover:bg-gray-200"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="h-3.5 w-3.5" strokeWidth={2.5} />
                        ) : (
                          <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
                        )}
                      </span>
                    </button>
                  </h3>

                  {isOpen && (
                    <div
                      id={`faq-answer-${i}`}
                      className="px-4.5 pb-4 pt-0 text-[13.5px] sm:text-[14px] leading-relaxed text-ink/85 sm:px-5"
                    >
                      <div className="border-t border-teal/10 pt-2.5">
                        {faq.a}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
