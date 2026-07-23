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
      <div className="mb-3 inline-flex items-center gap-2">
        <span className="h-px w-6 bg-foreground/30" />
        <span className="text-xs font-semibold uppercase tracking-widest text-muted">
          {label}
        </span>
      </div>

      {/* Main Section Title */}
      <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {/* Supporting Description */}
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg lg:text-xl max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
