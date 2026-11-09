import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/** Outlined molar tooth — used for stats / hero features. */
export function ToothIcon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <svg
      viewBox="3 3 42 42"
      fill="none"
      stroke="currentColor"
      strokeWidth={Number(strokeWidth) * 2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M14.5 6.5c-4.6 0-8.5 3.6-8.5 9.2 0 3.7 1.4 6.4 2.6 9.5 1.4 3.7 1.7 8.6 2.9 12.3.5 1.6 1.4 3 2.8 3 1.8 0 2.7-1.8 3.4-4.8.7-3.1 1.2-6.2 2.4-6.2s1.7 3.1 2.4 6.2c.7 3 1.6 4.8 3.4 4.8 1.4 0 2.3-1.4 2.8-3 1.2-3.7 1.5-8.6 2.9-12.3 1.2-3.1 2.6-5.8 2.6-9.5 0-5.6-3.9-9.2-8.5-9.2-3.3 0-4.9 1.4-6.9 1.4s-3.6-1.4-6.9-1.4Z" />
      <path d="M13 13c1.2-1.2 3-1.6 4.5-1.2" opacity=".7" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
    </svg>
  );
}

/** Three-person group outline (patients / community). */
export function GroupIcon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={Number(strokeWidth) * 2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="24" cy="12" r="5.5" />
      <path d="M13.5 33c0-5.5 4.2-9.5 10.5-9.5S34.5 27.500 34.500 33" />
      <circle cx="9.500" cy="19.500" r="4.300" />
      <path d="M3 34c0-4.200 2.800-7.200 6.500-7.200" />
      <circle cx="38.500" cy="19.500" r="4.300" />
      <path d="M45 34c0-4.200-2.800-7.200-6.500-7.200" />
      <path d="M6 40h36" />
    </svg>
  );
}

/** Award medal with star and ribbons. */
export function MedalIcon({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={Number(strokeWidth) * 2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="24" cy="18" r="12.500" />
      <path d="M24 11.500l2.100 4.300 4.700.7-3.400 3.300.8 4.700-4.200-2.200-4.200 2.200.8-4.700-3.400-3.300 4.700-.7z" />
      <path d="M15.500 28L11 43l7.500-3.500 3.500 5.500 1.500-9.500" />
      <path d="M32.500 28L37 43l-7.500-3.500L26 45l-1.500-9.500" />
    </svg>
  );
}
