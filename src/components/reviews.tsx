"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, ChevronLeft, ChevronRight, Quote, Star, X } from "lucide-react";
import SectionHeading from "./section-heading";

interface Review {
  id: number;
  author: string;
  quote: string;
  treatment: string;
  location: string;
  rating: number;
  avatar: string;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Sweety Gharbudwe",
    quote:
      "My experience with The Dental Studio is wonderful... My root canal treatment and implants were done with a wonderful and painless experience. The doctor treated me very patiently... Tons of thanks for my treatment!",
    treatment: "Root Canal & Implants",
    location: "Wadgaon Sheri, Pune",
    rating: 5,
    avatar: "/images/reviews/reviewer-sweety.webp",
  },
  {
    id: 2,
    author: "Nagendra Kolkondi",
    quote:
      "Have done my anterior spacing closure with crowns... It improved my smile a lot... Thank you for adding this confidence on my face... Very good clinic for smile designing in Wadgaon Sheri – Kharadi area. Thank you Dental Studio and team for the wonderful treatment!",
    treatment: "Smile Designing & Crowns",
    location: "Wadgaon Sheri – Kharadi, Pune",
    rating: 5,
    avatar: "/images/reviews/reviewer-nagendra.webp",
  },
  {
    id: 3,
    author: "Sumegha Jain",
    quote:
      "Dr. Sneha has been an absolute savior for me. Following a traumatic accident, I suffered multiple dental fractures. Dr. Sneha handled it all patiently with unmatched detailed expertise and compassion.\n\nThe root canal was painless under her care. She guided me through each step, putting my fears and anxiety at ease. She didn't settle for any less and perfected my crowns, ensuring not only a comfortable fit but a stunning, natural appearance. Her calm and professional demeanor was a constant source of reassurance. She helped me regain not only my dental health but my confidence and smile.\n\nDr. Sneha is an exceptional human being and I can't thank her enough for her remarkable work and unwavering care. She is the best choice you'll ever make.\n\nPs. Thank you for making my smile shine. May God shower all his grace upon you.",
    treatment: "Trauma Care & Crowns",
    location: "Wadgaon Sheri, Pune",
    rating: 5,
    avatar: "/images/reviews/reviewer-sumegha.webp",
  },
  {
    id: 4,
    author: "Trupti Bhokare",
    quote:
      "I have done my implant here... Very good care and painless treatment done here... Best dental treatment clinic in Wadgaon Sheri, Pune 😊",
    treatment: "Dental Implant",
    location: "Wadgaon Sheri, Pune",
    rating: 5,
    avatar: "/images/reviews/reviewer-trupti.webp",
  },
  {
    id: 5,
    author: "Avadhoot Damami",
    quote:
      "Best clinic to do dental treatment... Doctor and all staff have best knowledge and behavior towards patients... Done my RCT there in less time and most effective way.",
    treatment: "Root Canal Treatment",
    location: "Wadgaon Sheri, Pune",
    rating: 5,
    avatar: "/images/reviews/reviewer-avadhoot.webp",
  },
];

export default function Reviews() {
  const [startIndex, setStartIndex] = useState(0);
  const [modalReview, setModalReview] = useState<Review | null>(null);

  const prev = () => {
    setStartIndex((curr) => (curr === 0 ? REVIEWS.length - 1 : curr - 1));
  };

  const next = () => {
    setStartIndex((curr) => (curr === REVIEWS.length - 1 ? 0 : curr + 1));
  };

  // Display 3 cards across desktop
  const visibleReviews = [
    REVIEWS[startIndex],
    REVIEWS[(startIndex + 1) % REVIEWS.length],
    REVIEWS[(startIndex + 2) % REVIEWS.length],
  ];

  return (
    <section
      id="reviews"
      className="bg-aqua scroll-mt-4 px-5 py-10 lg:py-14"
    >
      <div className="mx-auto max-w-[1260px]">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Patient Reviews"
          title="What Our Patients Say"
          description="Real stories from real patients treated with gentle, attentive care at Dr. Sneha – The Dental Studio."
        />

        {/* Google Trust Pill */}
        <div className="mt-4 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-white/90 px-4 py-1.5 shadow-sm">
            <div className="flex gap-0.5 text-[#f5a623]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <span className="font-display text-[13.5px] font-bold text-navy">
              4.9 / 5.0 Rating
            </span>
            <span className="text-gray-300">|</span>
            <span className="text-[12.5px] font-semibold text-gray-700">
              284 Google Reviews
            </span>
          </div>
        </div>

        {/* 3-Card Balanced Grid with Fixed Uniform Card Height */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {visibleReviews.map((rev, cardIdx) => {
            const isLong = rev.quote.length > 200;
            return (
              <figure
                key={`${rev.id}-${cardIdx}`}
                className={`flex h-[288px] flex-col justify-between rounded-[22px] border border-white bg-white/95 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-float ${
                  cardIdx > 0 ? "hidden md:flex" : ""
                } ${cardIdx === 2 ? "md:hidden lg:flex" : ""}`}
              >
                <div>
                  {/* 5 Stars + Treatment Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5 text-[#f5a623]" aria-label={`${rev.rating} out of 5 stars`}>
                      {Array.from({ length: rev.rating ?? 5 }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="rounded-full bg-[#edf9fb] px-2.5 py-0.5 text-[11px] font-bold text-teal-deep">
                      {rev.treatment}
                    </span>
                  </div>

                  <Quote className="mt-3 h-5 w-5 text-teal/20" />
                  <blockquote className="mt-1 line-clamp-4 text-[13.5px] font-medium leading-[21px] text-navy">
                    “{rev.quote}”
                  </blockquote>
                  {isLong && (
                    <button
                      type="button"
                      onClick={() => setModalReview(rev)}
                      className="mt-1.5 inline-block text-[12px] font-bold text-teal-deep hover:text-teal hover:underline"
                    >
                      Read full review...
                    </button>
                  )}
                </div>

                {/* Author Info pinned at bottom */}
                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-3.5">
                  <div className="flex items-center gap-3">
                    <Image
                      src={rev.avatar}
                      alt={rev.author}
                      width={42}
                      height={42}
                      className="h-[42px] w-[42px] rounded-full object-cover ring-2 ring-lime/40"
                    />

                    <div>
                      <h4 className="font-display text-[14.5px] font-bold text-navy">
                        {rev.author}
                      </h4>
                      <p className="text-[12px] text-gray-500">{rev.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10.5px] font-bold text-emerald-700">
                    <CheckCircle2 className="h-3 w-3" />
                    <span>Verified</span>
                  </div>
                </div>
              </figure>
            );
          })}
        </div>

        {/* Carousel Slider Controls */}
        <div className="mt-7 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous reviews"
            className="grid h-10 w-10 place-items-center rounded-full border border-gray-200 bg-white text-navy shadow-sm transition hover:scale-105 hover:bg-teal hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={2.4} />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-1.5">
            {REVIEWS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setStartIndex(idx)}
                aria-label={`Show review ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === startIndex ? "w-6 bg-teal-deep" : "w-2 bg-gray-300 hover:bg-teal/40"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next reviews"
            className="grid h-10 w-10 place-items-center rounded-full border border-gray-200 bg-white text-navy shadow-sm transition hover:scale-105 hover:bg-teal hover:text-white"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={2.4} />
          </button>
        </div>
      </div>

      {/* Full Review Modal */}
      {modalReview && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Review by ${modalReview.author}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 p-4 backdrop-blur-sm"
          onClick={() => setModalReview(null)}
        >
          <div
            className="relative w-full max-w-[560px] rounded-[24px] bg-white p-6 sm:p-7 shadow-float"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModalReview(null)}
              aria-label="Close review"
              className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-navy transition"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-3">
              <Image
                src={modalReview.avatar}
                alt={modalReview.author}
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-lime/40"
              />
              <div>
                <h3 className="font-display text-[16px] font-bold text-navy">
                  {modalReview.author}
                </h3>
                <p className="text-[12.5px] text-gray-500">{modalReview.location}</p>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex gap-0.5 text-[#f5a623]">
                {Array.from({ length: modalReview.rating ?? 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="rounded-full bg-[#edf9fb] px-3 py-0.5 text-[11.5px] font-bold text-teal-deep">
                {modalReview.treatment}
              </span>
            </div>

            <div className="mt-4 max-h-[360px] overflow-y-auto space-y-2.5 text-[14px] leading-relaxed text-navy">
              {modalReview.quote.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-3">
              <span className="text-[12px] font-medium text-gray-500">
                Verified Google Review
              </span>
              <button
                type="button"
                onClick={() => setModalReview(null)}
                className="btn-lime h-[36px] px-4 text-[13px] font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
