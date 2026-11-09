import { Activity, HeartPulse, ShieldCheck, Smile } from "lucide-react";
import type { Treatment } from "@/lib/treatments";
import { Container, Eyebrow, SectionTitle } from "./ui";

const ICONS = [Activity, HeartPulse, ShieldCheck, Smile];

export default function Signs({ t }: { t: Treatment }) {
  return (
    <section
      aria-labelledby="signs-title"
      className="relative overflow-hidden py-12 sm:py-15 lg:py-[72px]"
      style={{ background: "linear-gradient(180deg,#f2fbfc 0%,#ffffff 100%)" }}
    >
      <span aria-hidden="true" className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#bfe9ee]/40 blur-3xl" />
      <span aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-lime/15 blur-3xl" />

      <Container className="relative">
        <div className="mx-auto max-w-[720px] text-center">
          <Eyebrow center>Is it right for you?</Eyebrow>
          <SectionTitle center className="mt-3 sm:mt-3.5">
            <span id="signs-title">{t.signsHeading}</span>
          </SectionTitle>
        </div>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-10 lg:grid-cols-4">
          {t.signs.map((s, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <li key={s.title} className="group rounded-[26px] bg-gradient-to-br from-[#b9e84a] via-white to-[#7fd0d8] p-[1.5px] shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-float">
                <div className="relative h-full overflow-hidden rounded-[25px] bg-white p-5.5 sm:p-6">
                  <span aria-hidden="true" className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-lime/20 to-transparent transition group-hover:scale-125" />
                  <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#eefad0] to-[#d3f1f3] text-[#4f8612]">
                    <Icon className="h-5.5 w-5.5" strokeWidth={1.8} />
                  </span>
                  <h3 className="relative mt-4 font-display text-[17.5px] font-bold leading-snug text-navy sm:text-[18px]">{s.title}</h3>
                  <p className="relative mt-2 text-[14.5px] leading-relaxed text-ink/85 sm:text-[15px]">{s.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
