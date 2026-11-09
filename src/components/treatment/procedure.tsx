import { BadgeCheck, ClipboardList, Sparkles, Stethoscope, Wrench } from "lucide-react";
import type { CSSProperties } from "react";
import type { Treatment } from "@/lib/treatments";
import { Container, Eyebrow, SectionTitle } from "./ui";

const ICONS = [Stethoscope, ClipboardList, Sparkles, Wrench, BadgeCheck];

export default function Procedure({ t }: { t: Treatment }) {
  const n = t.steps.length;
  return (
    <section
      aria-labelledby="procedure-title"
      className="relative isolate overflow-hidden py-12 text-white sm:py-15 lg:py-[72px]"
      style={{ background: "linear-gradient(135deg,#0a2f38 0%,#0b4a55 45%,#086874 100%)" }}
    >
      <span aria-hidden="true" className="pointer-events-none absolute -left-32 top-0 -z-10 h-[420px] w-[420px] rounded-full bg-lime/15 blur-[110px]" />
      <span aria-hidden="true" className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-[#34d3c8]/20 blur-[110px]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.14] [background-image:radial-gradient(#fff_1px,transparent_1.2px)] [background-size:28px_28px]"
      />

      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <Eyebrow light center>
            The procedure
          </Eyebrow>
          <SectionTitle light center className="mt-3 sm:mt-3.5">
            <span id="procedure-title">Your {t.name.toLowerCase()} journey, step by step</span>
          </SectionTitle>
          <p className="mx-auto mt-2.5 max-w-[680px] text-[15px] leading-relaxed text-white/80 sm:text-[15.5px]">
            Here is what to expect from your first visit to the final result. Timings are typical and are confirmed for
            your case at your consultation.
          </p>
        </div>

        <ol
          className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:[grid-template-columns:repeat(var(--n),minmax(0,1fr))] lg:gap-5.5"
          style={{ "--n": n } as CSSProperties}
        >
          {t.steps.map((s, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <li key={s.title} className="relative flex flex-col">
                {/* Centered Stepper Circle with seamless connecting dashed line */}
                <div className="relative mb-4 flex w-full items-center justify-center">
                  {i < n - 1 && (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute left-1/2 top-1/2 -z-10 hidden -translate-y-1/2 border-t-2 border-dashed border-white/30 lg:block"
                      style={{ width: "calc(100% + 22px)" }}
                    />
                  )}
                  <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#d8f952] to-[#a9e00b] shadow-[0_0_0_5px_rgb(169_224_11/0.20),0_10px_20px_-6px_rgb(169_224_11/0.6)] select-none sm:h-12 sm:w-12">
                    <span className="font-display text-[17px] font-black leading-none text-navy tabular-nums translate-y-[1px] sm:text-[18px]">
                      {i + 1}
                    </span>
                  </span>
                </div>

                <div className="relative flex flex-1 flex-col overflow-hidden rounded-[24px] border border-white/20 bg-white/[0.14] p-5.5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/[0.20] hover:border-white/30 shadow-lg shadow-teal-950/20 sm:p-6">
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/15 text-lime border border-white/10 shadow-inner sm:h-11 sm:w-11">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <span
                      aria-hidden="true"
                      className="select-none font-display text-[38px] sm:text-[42px] font-bold leading-none tracking-tight text-white/15 [-webkit-text-stroke:1px_rgba(255,255,255,0.85)]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-3.5 font-display text-[17.5px] font-bold leading-snug text-white sm:text-[18px]">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-white/85 sm:text-[14px]">
                    {s.text}
                  </p>
                  <div className="mt-3.5 pt-0.5">
                    <span className="inline-block rounded-full border border-lime/30 bg-lime/15 px-3 py-0.5 text-[11.5px] font-bold uppercase tracking-wider text-lime">
                      {s.duration}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
