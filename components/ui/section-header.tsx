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
      {/* Label / Eyebrow */}
      <div className="mb-4 inline-flex items-center gap-3">
        <span className="h-px w-8 bg-foreground/20" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-muted">
          {label}
        </span>
      </div>

      {/* Main Section Title */}
      <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
        {title}
      </h2>

      {/* Supporting Description */}
      {description && (
        <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg lg:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}
