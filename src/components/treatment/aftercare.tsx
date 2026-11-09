import { CircleCheck, Clock, TriangleAlert } from "lucide-react";
import type { Treatment } from "@/lib/treatments";
import { Container, Eyebrow, SectionTitle } from "./ui";

export default function Aftercare({ t }: { t: Treatment }) {
  return (
    <section
      aria-labelledby="aftercare-title"
      className="pt-7 pb-12 sm:pt-9 sm:pb-15 lg:pt-10 lg:pb-[72px]"
      style={{ background: "linear-gradient(180deg,#ffffff 0%,#f0fafb 100%)" }}
    >
      <Container>
        <div className="max-w-[720px]">
          <Eyebrow>After your visit</Eyebrow>
          <SectionTitle className="mt-3 sm:mt-3.5">
            <span id="aftercare-title">Recovery &amp; aftercare</span>
          </SectionTitle>
          <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink/80 sm:text-[15.5px]">
            Good aftercare protects your result. We&apos;ll give you personalised instructions after treatment; this is a
            general guide to what most patients can expect.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:gap-6 lg:mt-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Timeline - Styled with soft lime brand palette from About Us */}
          <div className="rounded-[28px] border border-[#cde8b0] bg-gradient-to-br from-[#f2fcd9] to-[#e4f8be] p-5.5 shadow-card sm:p-7">
            <h3 className="flex items-center gap-2.5 font-display text-[18.5px] font-bold text-navy sm:text-[19.5px]">
              <Clock className="h-5 w-5 text-[#4f8612]" strokeWidth={2} />
              Recovery timeline
            </h3>
            <ol className="relative mt-5 space-y-4.5 pl-9">
              <span aria-hidden="true" className="absolute bottom-2 left-[12px] top-2 w-[2.5px] rounded-full bg-gradient-to-b from-[#84cc16] via-[#2f9e8f] to-[#0d7f8a]" />
              {t.aftercare.map((a) => (
                <li key={a.when} className="relative">
                  <span aria-hidden="true" className="absolute -left-9 top-0.5 grid h-[26px] w-[26px] place-items-center rounded-full border-2 border-[#84cc16] bg-white shadow-2xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0d7f8a]" />
                  </span>
                  <span className="inline-block rounded-full border border-[#bce866] bg-white/85 px-3 py-0.5 text-[12px] font-bold uppercase tracking-wider text-[#3f6a0a] shadow-2xs">
                    {a.when}
                  </span>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-ink/90 sm:text-[14.5px]">{a.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-5">
            <div className="rounded-[28px] border border-[#cfe9ed] bg-gradient-to-br from-[#e6f6f8] to-[#d5eff2] p-5 sm:p-6">
              <h3 className="flex items-center gap-2.5 font-display text-[18px] font-bold text-navy sm:text-[19px]">
                <CircleCheck className="h-5 w-5 text-[#0d7f8a]" strokeWidth={2} />
                Aftercare tips
              </h3>
              <ul className="mt-3.5 space-y-2.5">
                {t.tips.map((x) => (
                  <li key={x} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-ink/85 sm:text-[14.5px]">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-[#a9e00b] to-[#0d7f8a]" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] border border-[#f3dcb8] bg-gradient-to-br from-[#fff8ec] to-[#fff1da] p-5 sm:p-6">
              <h3 className="flex items-center gap-2.5 font-display text-[18px] font-bold text-navy sm:text-[19px]">
                <TriangleAlert className="h-5 w-5 text-[#d9871c]" strokeWidth={2} />
                Call us if you notice
              </h3>
              <ul className="mt-3.5 space-y-2.5">
                {t.warnings.map((x) => (
                  <li key={x} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-ink/85 sm:text-[14.5px]">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e8a13a]" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
