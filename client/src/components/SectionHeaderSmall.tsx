import React from "react";

interface SectionHeaderSmallProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeaderSmall({
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderSmallProps) {
  return (
    <div className={className} style={{ textAlign: align }}>
      <h3 className="text-xl md:text-2xl font-semibold text-color-heading mb-3">
        {title}
      </h3>
      {subtitle && (
        <p className="text-base text-color-text max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
