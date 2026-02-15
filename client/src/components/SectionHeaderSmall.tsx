import { cn } from "@/lib/utils";

interface SectionHeaderSmallProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeaderSmall({
  title,
  subtitle,
  className,
}: SectionHeaderSmallProps) {
  return (
    <div className={cn("flex flex-col gap-3 pb-6", className)}>
      <div className="flex items-start gap-4">
        {/* Red Decorative Line */}
        <div className="mt-1 h-6 w-2 bg-[#C90815] rounded-full flex-shrink-0" />

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-display font-bold leading-tight text-secondary">
            {title}
          </h2>

          {subtitle && (
            <p className="text-base text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
