"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CalendarCheck,
  ChevronDown,
  Menu,
  Sparkles,
  Stethoscope,
  Smile,
  ShieldCheck,
  CheckCircle2,
  X,
} from "lucide-react";
import Logo from "./logo";
import {
  TREATMENT_CATEGORIES,
  getTreatmentsByCategory,
  treatmentPath,
  treatments,
} from "@/lib/treatments";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Treatments", href: "/treatments", hasDropdown: true },
  { label: "Smile Gallery", href: "/smile-gallery" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/treatments") return pathname.startsWith("/treatments");
    return pathname === href;
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 180);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Close menus on route change
  useEffect(() => {
    setDropdownOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="relative z-40 bg-header">
      <div className="mx-auto flex h-[86px] w-full max-w-[1260px] items-center justify-between px-5">
        <Link href="/" aria-label="Dr. Sneha – The Dental Studio home">
          <Logo />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="ml-auto mr-6 hidden items-center gap-[28px] lg:flex xl:mr-8 xl:gap-[36px]">
          {NAV_ITEMS.map((item) => {
            if (item.hasDropdown) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href="/treatments"
                    onClick={() => setDropdownOpen(false)}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                    className={`relative flex items-center gap-1.5 py-2 text-[16px] font-medium transition ${
                      isActive(item.href) || dropdownOpen ? "text-lime" : "text-white hover:text-lime"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180 text-lime" : "opacity-80"
                      }`}
                      strokeWidth={2.2}
                    />
                    {isActive(item.href) && (
                      <span aria-hidden="true" className="absolute -bottom-[1px] left-0 h-[2.5px] w-full rounded-full bg-lime" />
                    )}
                  </Link>

                  {/* Categorized Treatments Mega-Menu */}
                  {dropdownOpen && (
                    <div
                      role="menu"
                      aria-orientation="vertical"
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
                    >
                      <div className="w-[1100px] xl:w-[1160px] max-w-[calc(100vw-36px)] rounded-2xl border border-[#cde5eb]/70 bg-white p-6 sm:p-7 shadow-[0_22px_55px_-10px_rgba(8,104,116,0.24)] ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-150">
                        {/* Header Banner - Clean title and button only */}
                        <div className="mb-5 flex items-center justify-between border-b border-gray-100 pb-3.5">
                          <span className="font-display text-[17px] font-bold text-navy">
                            Dental Treatments &amp; Specialties
                          </span>
                          <Link
                            href="/treatments"
                            onClick={() => setDropdownOpen(false)}
                            className="group flex items-center gap-1.5 rounded-lg bg-teal/10 px-3.5 py-1.5 text-[13px] font-bold text-teal-deep transition hover:bg-teal hover:text-white"
                          >
                            All 25 Treatments
                            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                          </Link>
                        </div>

                        {/* 5 Balanced Columns: Generously spaced, one dedicated column per category */}
                        <div className="grid grid-cols-5 gap-5 sm:gap-6">
                          {TREATMENT_CATEGORIES.map((cat) => (
                            <div key={cat.id}>
                              <div className="mb-2.5 border-b border-teal/15 pb-1.5">
                                <span className="font-display text-[13.5px] font-bold text-navy leading-tight block">
                                  {cat.shortName}
                                </span>
                              </div>
                              <ul className="space-y-1">
                                {getTreatmentsByCategory(cat.id).map((t) => (
                                  <li key={t.slug}>
                                    <Link
                                      href={treatmentPath(t.slug)}
                                      onClick={() => setDropdownOpen(false)}
                                      className="group block rounded-lg px-2.5 py-1.5 text-[12.5px] font-medium leading-snug text-ink/85 transition hover:bg-[#edf9fb] hover:text-teal-deep"
                                    >
                                      <span className="group-hover:translate-x-0.5 transition-transform inline-block">
                                        {t.name}
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* Bottom Consultation Strip */}
                        <div className="mt-5 flex items-center justify-between rounded-xl bg-gradient-to-r from-[#edf9fb] to-[#e4f6f8] px-5 py-3">
                          <span className="text-[13px] font-medium text-navy">
                            Unsure which treatment fits your smile? Get a clear, personalized assessment.
                          </span>
                          <Link
                            href="/contact-us"
                            onClick={() => setDropdownOpen(false)}
                            className="text-[13px] font-bold text-teal-deep hover:underline"
                          >
                            Book Consultation →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className="relative flex items-center gap-1 py-2 text-[16px] font-medium text-white transition hover:text-lime"
              >
                {item.label}
                {isActive(item.href) && (
                  <span aria-hidden="true" className="absolute -bottom-[1px] left-0 h-[2.5px] w-full rounded-full bg-lime" />
                )}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact-us"
          className="btn-lime hidden h-[44px] w-[219px] gap-2.5 text-[15px] lg:inline-flex"
        >
          <CalendarCheck className="h-[18px] w-[18px]" strokeWidth={1.8} />
          Book Appointment
          <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
        </Link>

        {/* Mobile menu trigger */}
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-lg text-white lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full max-h-[calc(100vh-86px)] overflow-y-auto border-t border-white/10 bg-header px-5 pb-6 pt-3 shadow-2xl lg:hidden"
        >
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item) => {
              if (item.hasDropdown) {
                return (
                  <li key={item.label} className="border-b border-white/10">
                    <div className="flex w-full items-center justify-between py-3.5">
                      <Link
                        href="/treatments"
                        onClick={() => setMobileOpen(false)}
                        className="text-[17px] font-medium text-white hover:text-lime"
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileTreatmentsOpen((v) => !v)}
                        aria-label="Toggle treatments submenu"
                        className="p-1.5 text-lime"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            mobileTreatmentsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                    {mobileTreatmentsOpen && (
                      <div className="mb-3 space-y-3 rounded-xl bg-white/5 p-3">
                        <Link
                          href="/treatments"
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center justify-between rounded-lg bg-lime/15 px-3 py-2 text-[14px] font-bold text-lime hover:bg-lime/20"
                        >
                          <span>All 25 Treatments Overview</span>
                          <span>→</span>
                        </Link>
                        {TREATMENT_CATEGORIES.map((cat) => (
                          <div key={cat.id} className="border-t border-white/10 pt-2.5">
                            <div className="flex items-center justify-between px-2 pb-1.5">
                              <span className="text-[12px] font-bold uppercase tracking-wider text-lime">
                                {cat.name}
                              </span>
                              <span className="rounded bg-white/10 px-1.5 py-0.5 text-[9.5px] font-medium text-white/70">
                                {cat.badge}
                              </span>
                            </div>
                            <ul className="space-y-1">
                              {getTreatmentsByCategory(cat.id).map((t) => (
                                <li key={t.slug}>
                                  <Link
                                    href={treatmentPath(t.slug)}
                                    onClick={() => setMobileOpen(false)}
                                    className="block rounded-lg px-2.5 py-1.5 text-[13.5px] text-white/90 hover:bg-white/10 hover:text-white"
                                  >
                                    {t.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block border-b border-white/10 py-3.5 text-[17px] font-medium text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/contact-us"
            onClick={() => setMobileOpen(false)}
            className="btn-lime mt-5 h-12 w-full gap-2.5 text-[15px]"
          >
            <CalendarCheck className="h-[18px] w-[18px]" strokeWidth={1.8} />
            Book Appointment
            <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
          </Link>
        </nav>
      )}
    </header>
  );
}
