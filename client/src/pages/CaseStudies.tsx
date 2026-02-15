import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { useCaseStudies } from "@/hooks/use-case-studies";
import { DIVISIONS, getDivisionDisplayName, type DivisionKey } from "@shared/schema";
import { cn } from "@/lib/utils";

export default function CaseStudies() {
  const [selectedDivision, setSelectedDivision] = useState<DivisionKey | undefined>();
  const { data, isLoading } = useCaseStudies({ division: selectedDivision });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="bg-[#f8f8f8] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader title="Our Projects" subtitle="Explore our portfolio of landmark projects that have transformed communities." />
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          <Button
            variant="outline"
            onClick={() => setSelectedDivision(undefined)}
            className={cn(
              "rounded-lg border border-black/[0.06] transition-all",
              !selectedDivision
                ? "bg-[#144A92]/10 text-black font-semibold border-[#144A92]/20"
                : "text-[#424242] hover:bg-[#f8f8f8]"
            )}
          >
            All Projects
          </Button>
          {DIVISIONS.map(div => (
            <Button
              key={div}
              variant="outline"
              onClick={() => setSelectedDivision(div)}
              className={cn(
                "rounded-lg border border-black/[0.06] transition-all",
                selectedDivision === div
                  ? "bg-[#144A92]/10 text-black font-semibold border-[#144A92]/20"
                  : "text-[#424242] hover:bg-[#f8f8f8]"
              )}
            >
              {getDivisionDisplayName(div)}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array(6).fill(0).map((_, i) => (
              <div key={i} className="h-[400px] bg-[#f8f8f8] animate-pulse rounded-xl" />
            ))
          ) : data?.data && data.data.length > 0 ? (
            data.data.map(item => (
              <CaseStudyCard key={item.id} item={item} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-xl text-[#424242]">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
