import { DivisionPageLayout } from "@/components/DivisionPageLayout";
import { ArrowUp, Shield, Wrench, Zap, Users, Clock } from "lucide-react";

export default function Elevators() {
  const solutions = [
    {
      icon: ArrowUp,
      title: "Passenger Elevators",
      description: "High-speed vertical transportation for residential and commercial buildings",
      details: ["Speed up to 4m/s", "Capacity: 6-24 persons", "Energy-efficient motors", "Smooth ride quality"],
    },
    {
      icon: Wrench,
      title: "Freight Elevators",
      description: "Heavy-duty cargo transport for industrial and commercial applications",
      details: ["Load capacity up to 5000kg", "Reinforced cabins", "Wide door openings", "Durable construction"],
    },
    {
      icon: Zap,
      title: "Escalators & Travelators",
      description: "Continuous flow people movers for high-traffic areas",
      details: ["Step width: 600-1000mm", "Auto-lubrication systems", "Emergency stop safety", "Low noise operation"],
    },
    {
      icon: Clock,
      title: "Modernization Services",
      description: "Upgrade existing systems with latest technology and safety features",
      details: ["Controller upgrades", "New cabin designs", "Energy optimization", "Extended lifespan"],
    },
  ];

  const specs = [
    { label: "Elevators Installed", value: "1500+" },
    { label: "Uptime Rate", value: "99.8%" },
    { label: "Support Available", value: "24/7" },
    { label: "Certified Technicians", value: "50+" },
  ];

  return (
    <DivisionPageLayout
      divisionKey="ELEVATORS"
      divisionLabel="Elevators and Travelators"
      eyebrowIcon={ArrowUp}
      eyebrowText="Vertical Transportation Experts"
      title={
        <>
          Elevators &<span className="text-[#144A92]"> Travelators</span>
        </>
      }
      description="Safe, reliable, and efficient vertical transportation solutions engineered for seamless movement in modern urban environments."
      ctaPrimaryLabel="Explore Solutions"
      ctaSecondaryLabel="Modernize Existing"
      heroImage="https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?q=80&w=1200&auto=format&fit=crop"
      heroImageAlt="Modern elevator interior in a commercial building"
      heroStat={{ icon: ArrowUp, label: "Elevators Installed", value: "1500+" }}
      specs={specs}
      servicesTitle="Comprehensive Vertical Transportation"
      servicesSubtitle="From installation to maintenance, we deliver complete elevator and escalator solutions"
      services={solutions}
      whyChooseUs={{
        layout: "grid",
        heading: "Safety is Our Priority",
        headingIcon: Shield,
        intro: "Every elevator and escalator we install meets the highest international safety standards",
        blocks: [
          { icon: Shield, description: "Overload protection sensors" },
          { icon: Zap, description: "Emergency backup power systems" },
          { icon: Users, description: "Anti-entrapment safety edges" },
          { icon: Clock, description: "Automatic rescue devices" },
        ],
        badges: ["EN 81-20/50 Certified", "ISO 9001 Quality", "CE Marked", "ASME A17.1 Compliant"],
      }}
      projectsTitle="Featured Installation Projects"
      viewAllLabel="View All Projects"
      caseStudiesQueryValue="Elevators and Travelators"
      contactHeading="Ready to Elevate Your Building?"
      contactDescription="Whether you need new installations or want to modernize existing systems, our team of certified engineers is ready to help. Get a free consultation and site assessment today."
      contactHighlights={[
        { icon: Wrench, title: "Maintenance Contracts", desc: "Preventive care for maximum uptime" },
        { icon: ArrowUp, title: "Modernization Services", desc: "Upgrade old systems to modern standards" },
      ]}
    />
  );
}
