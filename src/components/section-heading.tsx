type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  /** Draw rules on both sides (true) or only on the left (false) */
  rules?: "both" | "left";
};

/** Centered eyebrow + title (+ description) used by the Treatments and Transformations sections. */
export default function SectionHeading({ eyebrow, title, description, rules = "both" }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <div className={`flex items-center justify-center ${rules === "left" ? "gap-[10px] lg:-translate-x-[20px]" : "gap-4"}`}>
        <span className={`h-[2px] bg-gradient-to-r from-[#6aa81a] to-[#4f9a3d] ${rules === "left" ? "w-[35px]" : "w-[42px]"}`} />
        <span className="eyebrow eyebrow-gradient text-[13px] sm:text-[14.6px]">{eyebrow}</span>
        {rules === "both" && <span className="h-[2px] w-[42px] bg-gradient-to-r from-[#1d8a83] to-[#0d7f8a]" />}
      </div>
      <h2 className="mt-[12px] font-display text-[28px] font-bold leading-tight tracking-[-0.01em] text-navy sm:text-[33px] sm:leading-[40px] lg:text-[36px]">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-[14px] max-w-[900px] text-[15px] leading-6 text-ink sm:text-[17px]">{description}</p>
      )}
    </div>
  );
}
