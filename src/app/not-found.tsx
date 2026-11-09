import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/footer";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="grid min-h-[60vh] place-items-center px-5 py-24 text-center">
        <div>
          <p className="eyebrow eyebrow-gradient text-[14px]">Error 404</p>
          <h1 className="mt-4 font-display text-[36px] font-extrabold tracking-[-0.02em] text-navy sm:text-[48px]">
            This page couldn&apos;t be found
          </h1>
          <p className="mx-auto mt-4 max-w-[480px] text-[17px] leading-[1.7] text-ink">
            The page you&apos;re looking for may have moved. Let&apos;s get you back to healthy smiles.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-lime h-[50px] px-7 text-[16px]">
              Back to home
              <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.2} />
            </Link>
            <Link href="/treatments" className="btn-outline h-[50px] border-[#6a9a1f] px-7 text-[16px]">
              Browse treatments
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
