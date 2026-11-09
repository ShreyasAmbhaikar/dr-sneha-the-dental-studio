import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { treatments } from "@/lib/treatments";

const KNOWN = new Set(treatments.map((t) => t.slug));

/**
 * Returns a real HTTP 404 for unknown /treatments/:slug URLs.
 *
 * Under Cache Components a page's response starts streaming before `notFound()`
 * can run, which would produce a "soft 404" (status 200 + noindex). Checking the
 * slug here, before rendering, preserves the 404 status for crawlers.
 */
export function proxy(request: NextRequest) {
  const slug = request.nextUrl.pathname.split("/")[2];
  if (slug && !KNOWN.has(slug)) {
    // Rewriting to a route that does not exist renders app/not-found.tsx with a 404 status.
    return NextResponse.rewrite(new URL("/__not-found__", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/treatments/:slug",
};
