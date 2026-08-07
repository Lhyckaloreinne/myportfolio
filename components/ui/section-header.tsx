import React from "react";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  label,
  title,
  description,
  className = "",
  align = "left",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col ${
        isCenter ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {/* Eyebrow / Vogue Category Label */}
      <div className="mb-4 inline-flex items-center gap-3">
        <span className="h-px w-10 bg-gold" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.45em] text-gold">
          {label}
        </span>
      </div>

      {/* Main Section Title */}
      <h2 className="font-serif text-4xl font-normal tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.08]">
        {title}
      </h2>

      {/* Supporting Description */}
      {description && (
        <p className="mt-5 max-w-none text-base leading-relaxed text-muted sm:text-lg lg:text-xl font-light">
          {description}
        </p>
      )}
    </div>
  );
}
