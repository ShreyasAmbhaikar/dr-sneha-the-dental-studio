import Link from "next/link";
import { ChevronRight, House } from "lucide-react";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1280px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

/** Eyebrow with a leading rule. `light` is for use on dark backgrounds. */
export function Eyebrow({ children, light = false, center = false }: { children: ReactNode; light?: boolean; center?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 ${center ? "justify-center" : ""}`}>
      <span className={`h-[2px] w-7 rounded-full ${light ? "bg-lime" : "bg-gradient-to-r from-[#6aa81a] to-[#4f9a3d]"}`} />
      <span
        className={`eyebrow text-[12px] sm:text-[13px] ${light ? "text-lime" : "eyebrow-gradient"}`}
        style={{ letterSpacing: "0.20em" }}
      >
        {children}
      </span>
    </div>
  );
}

export function SectionTitle({
  children,
  light = false,
  center = false,
  className = "",
}: {
  children: ReactNode;
  light?: boolean;
  center?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={`font-display text-[28px] font-bold leading-tight tracking-[-0.01em] sm:text-[33px] sm:leading-[40px] lg:text-[36px] ${
        light ? "text-white" : "text-navy"
      } ${center ? "text-center" : ""} ${className}`}
    >
      {children}
    </h2>
  );
}

export type Crumb = { name: string; href?: string };

/** Accessible breadcrumb trail (schema is emitted separately as JSON-LD). */
export function Breadcrumbs({ items, light = false }: { items: Crumb[]; light?: boolean }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className={`flex flex-wrap items-center gap-1.5 text-[14px] ${light ? "text-white/70" : "text-ink/70"}`}>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.name} className="flex items-center gap-1.5">
              {i === 0 && <House className="h-3.5 w-3.5" aria-hidden="true" />}
              {item.href && !last ? (
                <Link href={item.href} className="transition hover:text-lime">
                  {item.name}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined} className={last ? (light ? "font-semibold text-white" : "font-semibold text-navy") : ""}>
                  {item.name}
                </span>
              )}
              {!last && <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
