import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeader({ title, subtitle, align = "center", light = false }: SectionHeaderProps) {
  return (
    <div className={cn(
      "mb-12 max-w-3xl",
      align === "center" ? "mx-auto text-center" : "text-left"
    )}>
      <h2 className={cn(
        "text-3xl md:text-4xl font-bold mb-4",
        light ? "text-white" : "text-black"
      )}>
        {title}
      </h2>
      <div className={cn(
        "h-[2px] w-12 rounded-full mb-6",
        light ? "bg-white/30" : "bg-[#144A92]/20",
        align === "center" ? "mx-auto" : ""
      )} />
      {subtitle && (
        <p className={cn(
          "text-base md:text-lg leading-relaxed",
          light ? "text-white/70" : "text-[#424242]"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
