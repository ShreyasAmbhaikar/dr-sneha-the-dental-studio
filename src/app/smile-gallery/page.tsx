import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/cta-band";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Breadcrumbs, Container, Eyebrow } from "@/components/treatment/ui";
import { site } from "@/lib/site";
import BentoGallery from "./bento-grid";

const title = "Smile Gallery & Clinic Showcase | Dr. Sneha – The Dental Studio";
const description =
  "Explore clinic photos, modern dental operatory, and patient smiles at Dr. Sneha – The Dental Studio in Wadgaon Sheri, Pune.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/smile-gallery" },
  openGraph: {
    type: "website",
    url: "/smile-gallery",
    siteName: site.name,
    locale: site.locale,
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function SmileGalleryPage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        {/* Cinematic Hero Banner - Straight bottom, compact sleek height matching General Dentistry */}
        <section className="relative isolate overflow-hidden text-white">
          {/* Background Clinic Image with brand teal overlay */}
          <div className="absolute inset-0 -z-20">
            <Image
              src="/images/clinic.webp"
              alt="Dr. Sneha Dental Studio gallery"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(90deg, rgba(7, 56, 64, 0.88) 0%, rgba(8, 79, 89, 0.76) 38%, rgba(8, 104, 116, 0.48) 68%, rgba(8, 104, 116, 0.18) 88%, rgba(8, 104, 116, 0.03) 100%)",
            }}
          />
          <span aria-hidden="true" className="pointer-events-none absolute -left-12 -top-12 -z-10 h-[340px] w-[340px] rounded-full bg-lime/20 blur-[90px]" />
          <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-[28%] -z-10 h-[300px] w-[300px] rounded-full bg-[#14b8a6]/20 blur-[90px]" />

          <Container className="relative z-10 w-full py-9 sm:py-11 lg:py-14">
            <Breadcrumbs light items={[{ name: "Home", href: "/" }, { name: "Smile Gallery" }]} />

            <div className="mt-4 max-w-[760px]">
              <h1 className="pt-1 pb-1 font-display text-[32px] font-extrabold leading-[1.16] tracking-tight text-white sm:text-[42px] lg:text-[48px] xl:text-[52px]">
                Real Patient Smiles{" "}
                <span className="block mt-1 sm:mt-1.5 pb-1 bg-gradient-to-r from-[#e4ff6b] via-[#c4ee2a] to-[#a9e00b] bg-clip-text text-transparent">
                  &amp; Modern Clinic Gallery
                </span>
              </h1>
              <p className="mt-3 max-w-[640px] text-[15px] leading-relaxed text-white/90 sm:text-[16px]">
                Explore our state-of-the-art dental studio operatory, patient smile transformations, and gentle clinical technology in Wadgaon Sheri, Pune.
              </p>
            </div>
          </Container>
        </section>

        {/* BentoGrid Gallery Section */}
        <section className="bg-white py-8 sm:py-12">
          <Container>
            <BentoGallery />
          </Container>
        </section>

        {/* CTA Band */}
        <CtaBand />
      </main>

      <Footer />
    </>
  );
}