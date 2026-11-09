import Image from "next/image";

type LogoProps = {
  /** "md" is the header size, "sm" or "lg" the footer size */
  size?: "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
};

/** Official Brand Logo for Dr. Sneha – The Dental Studio */
export default function Logo({ size = "md", className = "", priority = true }: LogoProps) {
  const isSm = size === "sm";
  const isLg = size === "lg";

  return (
    <div
      className={`relative inline-flex items-center select-none ${className}`}
      aria-label="The Dental Studio - Dr. Sneha"
    >
      <Image
        src="/images/logo.png"
        alt="The Dental Studio - Dr. Sneha"
        width={857}
        height={345}
        priority={priority}
        className={`w-auto object-contain transition-transform duration-200 hover:scale-[1.02] drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)] ${
          isSm
            ? "h-[38px] sm:h-[42px]"
            : isLg
            ? "h-[54px] sm:h-[60px]"
            : "h-[46px] sm:h-[50px]"
        }`}
      />
    </div>
  );
}
