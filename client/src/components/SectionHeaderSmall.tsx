import { cn } from "@/lib/utils";

interface SectionHeaderSmallProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

export function SectionHeaderSmall({
  title,
  subtitle,
  light = false,
  className
}: SectionHeaderSmallProps) {
  return (
    <div className={cn("flex flex-col gap-3 pb-6", className)}>
      <div className="flex items-center gap-4">
        <div className="h-7 w-[3px] bg-[#CB0816] rounded-full flex-shrink-0" />
        <h2 className={cn(
          "text-2xl md:text-2xl font-bold leading-tight",
          light ? "text-white" : "text-black"
        )}>
          {title}
        </h2>
      </div>

      {subtitle && (
        <p className={cn(
          "text-sm ml-[19px]",
          light ? "text-white/70" : "text-[#424242]"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
