import type { Metadata } from "next";
import CtaBand from "@/components/cta-band";
import Doctor from "@/components/doctor";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import JsonLd from "@/components/json-ld";
import Reviews from "@/components/reviews";
import Technology from "@/components/technology";
import Transformations from "@/components/transformations";
import Treatments from "@/components/treatments";
import { homeGraph } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  // Absolute title so the template isn't appended to the home page title.
  title: { absolute: `${site.name} | ${site.tagline}` },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    locale: site.locale,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={homeGraph()} />
      <Header />
      <main id="main">
        <Hero />
        <Treatments />
        <Doctor />
        <Technology />
        <Transformations />
        <Reviews />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
