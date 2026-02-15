import { Link } from "wouter";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { type CaseStudy } from "@shared/schema";
import { cn } from "@/lib/utils";

interface CaseStudyCardProps {
  item: CaseStudy;
  className?: string;
}

export function CaseStudyCard({ item, className }: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${item.id}`} className={cn("group block h-full", className)}>
      <div className="h-full bg-white rounded-xl overflow-hidden border border-black/[0.06] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col">
        {/* Image */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-block bg-white/90 backdrop-blur-sm text-[#424242] text-[11px] font-medium uppercase tracking-wider px-3 py-1 rounded-md">
              {item.division}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-4 text-xs text-[#424242]/60 mb-3">
            {item.location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {item.location}
              </div>
            )}
            {item.completionDate && (
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" /> {item.completionDate}
              </div>
            )}
          </div>

          <h3 className="text-lg font-bold text-black mb-2 group-hover:text-[#144A92] transition-colors duration-300">
            {item.title}
          </h3>

          <p className="text-[#424242] text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
            {item.description}
          </p>

          <div className="flex items-center text-[#144A92]/70 font-medium text-sm mt-auto group-hover:text-[#144A92] transition-all duration-300">
            View Project <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
