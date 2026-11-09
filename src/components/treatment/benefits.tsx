import Image from "next/image";
import { Gem, Leaf, ShieldCheck, Smile, Sparkles, ThumbsUp } from "lucide-react";
import type { Treatment } from "@/lib/treatments";
import { Container, Eyebrow, SectionTitle } from "./ui";

const SMALL_ICONS = [ShieldCheck, Smile, Leaf, ThumbsUp];
const TONES = [
  "from-[#eefad0] to-[#dff4a6] text-[#4f8612]",
  "from-[#d9f2f5] to-[#bfe9ee] text-[#0b6b78]",
  "from-[#e6f6f8] to-[#d3f1f3] text-[#0b6b78]",
  "from-[#f3fbd9] to-[#e2f5a8] text-[#4f8612]",
];

export default function Benefits({ t }: { t: Treatment }) {
  const [lead, ...rest] = t.benefits;
  return (
    <section aria-labelledby="benefits-title" className="pt-12 pb-7 sm:pt-15 sm:pb-9 lg:pt-[72px] lg:pb-10">
      <Container>
        <div className="max-w-[720px]">
          <Eyebrow>Why patients choose it</Eyebrow>
          <SectionTitle className="mt-3 sm:mt-3.5">
            <span id="benefits-title">Benefits of {t.name}</span>
          </SectionTitle>
        </div>

        <ul className="mt-8 grid gap-5 sm:gap-6 lg:mt-10 lg:grid-cols-4 lg:grid-rows-2">
          {/* Lead benefit */}
          <li
            className="relative isolate flex min-h-[290px] flex-col justify-between overflow-hidden rounded-[30px] p-6 text-white shadow-float sm:p-7 lg:col-span-2 lg:row-span-2 lg:p-8"
            style={{ background: "linear-gradient(145deg,#086874 0%,#0e8f93 55%,#6fb91a 138%)" }}
          >
            <span aria-hidden="true" className="absolute -left-10 -top-10 -z-10 h-48 w-48 rounded-full bg-lime/25 blur-3xl" />

            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-lime" strokeWidth={2.4} />
                Top benefit
              </span>
              <h3 className="mt-4 max-w-[420px] font-display text-[24px] font-bold leading-tight sm:text-[27px] lg:text-[29px]">
                {lead.title}
              </h3>
              <p className="mt-2.5 max-w-[430px] text-[14.5px] leading-relaxed text-white/85 sm:text-[15.5px]">{lead.text}</p>
            </div>

            {/* Tooth image circle with two concentric, static surrounding circles */}
            <div className="relative mt-6 flex justify-end">
              <div className="relative">
                {/* Two static concentric rings centered directly on the tooth image circle */}
                <span aria-hidden="true" className="pointer-events-none absolute -inset-7 sm:-inset-8 rounded-full border border-white/25" />
                <span aria-hidden="true" className="pointer-events-none absolute -inset-14 sm:-inset-16 rounded-full border border-white/15" />

                {/* Core Tooth image circle */}
                <span className="relative grid h-[125px] w-[125px] place-items-center overflow-hidden rounded-full bg-white shadow-[0_20px_40px_-10px_rgb(0_0_0/0.45)] sm:h-[135px] sm:w-[135px]">
                  <Image
                    src={`/images/treatments/${t.imageKey}-circle.webp`}
                    alt=""
                    width={220}
                    height={220}
                    sizes="135px"
                    className="h-full w-full rounded-full object-cover"
                  />
                </span>
              </div>
            </div>
          </li>

          {rest.map((b, i) => {
            const Icon = SMALL_ICONS[i % SMALL_ICONS.length] ?? Gem;
            return (
              <li
                key={b.title}
                className="group relative overflow-hidden rounded-[24px] border border-[#dcebee] bg-white p-5.5 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-float lg:col-span-1"
              >
                <span aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-[#e2f5a8]/50 to-transparent transition group-hover:scale-125" />
                <span className={`relative grid h-10.5 w-10.5 place-items-center rounded-2xl bg-gradient-to-br ${TONES[i % TONES.length]}`}>
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <h3 className="relative mt-3.5 font-display text-[17px] font-bold leading-snug text-navy sm:text-[17.5px]">{b.title}</h3>
                <p className="relative mt-1.5 text-[13.5px] leading-relaxed text-ink/85 sm:text-[14px]">{b.text}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
