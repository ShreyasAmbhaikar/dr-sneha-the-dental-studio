"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  spanClass: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "operatory",
    src: "/images/clinic.webp",
    title: "Modern Dental Operatory",
    spanClass: "lg:col-span-8",
  },
  {
    id: "dr-sneha",
    src: "/images/dr-sneha-sardar.webp",
    title: "Dr. Sneha Sardar, BDS",
    spanClass: "lg:col-span-4",
  },
  {
    id: "aligners",
    src: "/images/transformations/aligners-after.jpg",
    title: "Clear Aligner Orthodontics",
    spanClass: "lg:col-span-4",
  },
  {
    id: "makeover",
    src: "/images/transformations/makeover-after.webp",
    title: "Aesthetic Porcelain Smile Makeover",
    spanClass: "lg:col-span-8",
  },
  {
    id: "patient-smile",
    src: "/images/hero-patient-hd.webp",
    title: "Radiant Patient Smile",
    spanClass: "lg:col-span-7",
  },
  {
    id: "whitening",
    src: "/images/transformations/whitening-after.jpg",
    title: "In-Clinic LED Teeth Whitening",
    spanClass: "lg:col-span-5",
  },
  {
    id: "bonding",
    src: "/images/smile-after.webp",
    title: "Cosmetic Composite Bonding",
    spanClass: "lg:col-span-6",
  },
  {
    id: "implants",
    src: "/images/treatments/dental-implants.webp",
    title: "Advanced Dental Implants",
    spanClass: "lg:col-span-6",
  },
];

export default function BentoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const isOpen = lightboxIndex !== null;
  const currentImage = isOpen ? GALLERY_IMAGES[lightboxIndex] : null;

  const showNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((curr) => (curr! + 1) % GALLERY_IMAGES.length);
    }
  };

  const showPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((curr) => (curr! === 0 ? GALLERY_IMAGES.length - 1 : curr! - 1));
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  // Keyboard navigation (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, lightboxIndex]);

  return (
    <>
      {/* Bento Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 auto-rows-[260px] sm:auto-rows-[300px]">
        {GALLERY_IMAGES.map((img, idx) => (
          <div
            key={img.id}
            onClick={() => setLightboxIndex(idx)}
            className={`group relative overflow-hidden rounded-[24px] border border-teal-900/10 bg-white shadow-xs cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-teal-500/50 ${img.spanClass}`}
          >
            {/* Clean Image Without Static Overlays */}
            <Image
              src={img.src}
              alt={img.title}
              fill
              className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Dark Gradient Overlay with Title Caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent flex flex-col justify-between p-4.5 sm:p-5 z-10">
              <div className="self-end rounded-full bg-black/40 p-1.5 sm:p-2 text-white backdrop-blur-md transition-transform duration-200 group-hover:scale-110">
                <ZoomIn className="h-4 w-4" />
              </div>

              <div>
                <h3 className="font-display text-sm sm:text-base font-bold text-white drop-shadow-sm">
                  {img.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full-Screen Slider Modal / Lightbox */}
      {isOpen && currentImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black/95 p-4 sm:p-6 backdrop-blur-md animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Top Bar: Counter & Close Button */}
          <div
            className="flex w-full max-w-6xl items-center justify-between text-white z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-full bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wider backdrop-blur-md">
              {lightboxIndex! + 1} / {GALLERY_IMAGES.length}
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close fullscreen gallery"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Center: Image & Navigation Controls */}
          <div
            className="relative flex w-full max-w-5xl flex-1 items-center justify-center p-2 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Image Button */}
            <button
              type="button"
              onClick={showPrev}
              aria-label="Previous image"
              className="absolute left-2 sm:left-4 z-20 grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white/30 hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>

            {/* Main Lightbox Image */}
            <div className="relative h-full max-h-[72vh] w-full">
              <Image
                src={currentImage.src}
                alt={currentImage.title}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1280px) 90vw, 1200px"
              />
            </div>

            {/* Next Image Button */}
            <button
              type="button"
              onClick={showNext}
              aria-label="Next image"
              className="absolute right-2 sm:right-4 z-20 grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white/30 hover:scale-105 active:scale-95"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          </div>

          {/* Bottom Bar: Caption */}
          <div
            className="w-full max-w-3xl pb-2 text-center text-white z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="font-display text-base sm:text-xl font-bold tracking-tight text-white">
              {currentImage.title}
            </h4>
            <p className="mt-1 text-xs text-white/60">
              Use arrow keys or buttons to navigate • Press Esc to close
            </p>
          </div>
        </div>
      )}
    </>
  );
}