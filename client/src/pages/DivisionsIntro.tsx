import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { DIVISIONS, getDivisionDisplayName, type DivisionKey } from "@shared/schema";
import { ArrowRight, Zap, Shield, Waves, Building2, Sun, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const DIVISION_ICONS: Record<DivisionKey, any> = {
  CENTRAL_AC: Waves,
  ELEVATORS: Building2,
  FIRE_PROTECTION: Shield,
  GENERATOR: Zap,
  SOLAR: Sun,
  ELV: Cpu,
};

const DIVISION_SUMMARIES: Record<DivisionKey, string> = {
  CENTRAL_AC: "Advanced climate control solutions for commercial and industrial scale.",
  ELEVATORS: "Safe and efficient vertical and horizontal transportation systems.",
  FIRE_PROTECTION: "Comprehensive fire safety and suppression technologies.",
  GENERATOR: "Reliable power backup and energy management solutions.",
  SOLAR: "Sustainable renewable energy systems for clean power.",
  ELV: "Integrated low voltage systems for smart buildings.",
};

const DIVISION_PATHS: Record<DivisionKey, string> = {
  CENTRAL_AC: "/divisions/central-ac",
  ELEVATORS: "/divisions/elevators-and-travelators",
  FIRE_PROTECTION: "/divisions/fire-detection-protection",
  GENERATOR: "/divisions/generator",
  SOLAR: "/divisions/solar",
  ELV: "/divisions/elv",
};

export default function DivisionsIntro() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <div className="relative bg-[#f8f8f8] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="eyebrow text-[#144A92] mb-4 block">What We Do</span>
          <SectionHeader title="Our Divisions" subtitle="Six specialized divisions, one commitment to engineering excellence." />
        </div>
      </div>
      <div className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {DIVISIONS.map((div) => {
              const Icon = DIVISION_ICONS[div] || Building2;
              const summary = DIVISION_SUMMARIES[div] || "Expert solutions for metropolitan infrastructure.";
              const path = DIVISION_PATHS[div];

              return (
                <Link key={div} href={path}>
                  <Card className="group h-full cursor-pointer overflow-hidden rounded-xl border border-black/[0.06] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="w-16 h-16 rounded-2xl bg-[#144A92]/[0.06] flex items-center justify-center mb-6 group-hover:bg-[#144A92]/10 transition-colors">
                        <Icon className="w-8 h-8 text-[#144A92]" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-black mb-4">{getDivisionDisplayName(div)}</h3>
                      <p className="text-[#424242] mb-6 line-clamp-2 flex-grow">
                        {summary}
                      </p>
                      <div className="flex items-center text-[#144A92] font-bold group-hover:translate-x-2 transition-transform">
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
