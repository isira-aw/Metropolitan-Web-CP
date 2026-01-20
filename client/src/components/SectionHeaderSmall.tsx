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
        {/* The Red Decorative Line on the Left */}
        <div className="h-8 w-1.5 bg-[#C90815] rounded-full flex-shrink-0" />
        
        <h2 className={cn(
          " text-3xl md:text-2xl font-display font-bold leading-tight ",
          light ? "text-white" : "text-secondary"
        )}>
          {title}
        </h2>
      </div>

      {subtitle && (
        <p className={cn(
          "text-base ml-5", // Shifted slightly to align with the text rather than the line
          light ? "text-white/80" : "text-muted-foreground"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}