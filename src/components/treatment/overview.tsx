import { Check, Sparkles } from "lucide-react";
import type { Treatment } from "@/lib/treatments";
import { Container, Eyebrow, SectionTitle } from "./ui";

export default function Overview({ t }: { t: Treatment }) {
  return (
    <section aria-labelledby="overview-title" className="pt-10 pb-12 sm:pt-12 sm:pb-15 lg:pt-14 lg:pb-[72px]">
      <Container className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
        {/* Left Column: Left-aligned Heading, Eyebrow and Content */}
        <div>
          <Eyebrow>Understanding the treatment</Eyebrow>
          <SectionTitle className="mt-3 sm:mt-3.5">
            <span id="overview-title">{/s$/.test(t.name) ? "What are" : "What is"} {t.name}?</span>
          </SectionTitle>
          <div className="mt-4 space-y-3.5 text-[15.5px] leading-[1.68] text-ink sm:text-[16px]">
            {t.overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        {/* Right Column: At a glance card */}
        <div className="relative">
          <span aria-hidden="true" className="absolute inset-0 translate-x-2.5 translate-y-3 rotate-[2deg] rounded-[32px] bg-gradient-to-br from-lime-soft to-[#bfe9ee]" />
          <div className="relative overflow-hidden rounded-[30px] border border-white bg-gradient-to-br from-white via-white to-[#e8f7f9] p-6 shadow-float sm:p-7">
            <span aria-hidden="true" className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-lime/20 blur-3xl" />
            <div className="relative flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-b from-[#d8f952] to-[#a9e00b] text-navy shadow-lime">
                <Sparkles className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <h3 className="font-display text-[20px] font-bold text-navy sm:text-[21px]">At a glance</h3>
            </div>
            <ul className="relative mt-5 space-y-3">
              {t.takeaways.map((x) => (
                <li key={x} className="flex items-start gap-3.5 text-[15px] leading-snug text-ink sm:text-[15.5px]">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#6aa81a] to-[#0d7f8a] text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={3.2} />
                  </span>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
