import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { DIVISIONS } from "@shared/schema";
import { ArrowRight, Zap, Shield, Waves, Building2, Sun, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const DIVISION_ICONS: Record<string, any> = {
  "Central AC": Waves,
  "Elevators and Travelators": Building2,
  "Fire Detection & Protection": Shield,
  "Generator": Zap,
  "Solar": Sun,
  "ELV": Cpu,
};

const DIVISION_SUMMARIES: Record<string, string> = {
  "Central AC": "Advanced climate control solutions for commercial and industrial scale.",
  "Elevators and Travelators": "Safe and efficient vertical and horizontal transportation systems.",
  "Fire Detection & Protection": "Comprehensive fire safety and suppression technologies.",
  "Generator": "Reliable power backup and energy management solutions.",
  "Solar": "Sustainable renewable energy systems for clean power.",
  "ELV": "Integrated low voltage systems for smart buildings.",
};

export default function DivisionsIntro() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <div className="bg-[#f8f8f8] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader title="Our Divisions" subtitle="Three decades of engineering excellence." />
        </div>
      </div>
      <div className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {DIVISIONS.map((div) => {
              const Icon = DIVISION_ICONS[div] || Building2;
              const summary = DIVISION_SUMMARIES[div] || "Expert solutions for metropolitan infrastructure.";
              const path = `/divisions/${div.toLowerCase().replace(/\s+/g, '-')}`;

              return (
                <Link key={div} href={path}>
                  <Card className="group cursor-pointer overflow-hidden rounded-xl border border-black/[0.06] shadow-sm hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 rounded-2xl bg-[#144A92]/[0.06] flex items-center justify-center mb-6 transition-colors">
                        <Icon className="w-8 h-8 text-[#144A92]" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-black mb-4">{div}</h3>
                      <p className="text-[#424242] mb-6 line-clamp-2">
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
