import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CtaBand from "@/components/cta-band";
import Footer from "@/components/footer";
import Header from "@/components/header";
import JsonLd from "@/components/json-ld";
import Aftercare from "@/components/treatment/aftercare";
import Benefits from "@/components/treatment/benefits";
import DoctorStrip from "@/components/treatment/doctor-strip";
import Faq from "@/components/treatment/faq";
import Overview from "@/components/treatment/overview";
import Procedure from "@/components/treatment/procedure";
import Signs from "@/components/treatment/signs";
import TreatmentHero from "@/components/treatment/treatment-hero";
import { treatmentGraph } from "@/lib/schema";
import { site } from "@/lib/site";
import { getTreatment, treatmentPath, treatments } from "@/lib/treatments";

type Props = { params: Promise<{ slug: string }> };

// Known slugs are prerendered at build time; unknown slugs fall through to notFound().
export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) return {};

  const path = treatmentPath(t.slug);
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: site.name,
      locale: site.locale,
      title: `${t.metaTitle} | ${site.shortName}`,
      description: t.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: `${t.metaTitle} | ${site.shortName}`,
      description: t.metaDescription,
    },
  };
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) notFound();

  return (
    <>
      <JsonLd data={treatmentGraph(t)} />
      <Header />
      <main id="main">
        <article>
          <TreatmentHero t={t} />
          <Overview t={t} />
          <Signs t={t} />
          <Procedure t={t} />
          <Benefits t={t} />
          <Aftercare t={t} />
          <DoctorStrip t={t} />
          <Faq t={t} />
        </article>
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
