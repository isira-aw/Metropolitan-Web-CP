import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  align = "left",
  className,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={className} style={{ textAlign: align }}>
      <h2 className={`text-3xl md:text-4xl font-semibold ${subtitle ? 'mb-4' : ''} ${light ? 'text-white' : 'text-color-heading'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-3xl mx-auto ${light ? 'text-white/90' : 'text-color-text'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
