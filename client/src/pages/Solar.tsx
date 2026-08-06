import { DivisionPageLayout } from "@/components/DivisionPageLayout";
import { Sun, Leaf, DollarSign, TrendingDown, Lightbulb, Users } from "lucide-react";

export default function Solar() {
  const solutions = [
    {
      icon: Sun,
      title: "Rooftop Solar PV Systems",
      description: "Maximize your roof space with high-efficiency photovoltaic panels",
      details: [
        "Monocrystalline & polycrystalline options",
        "Efficiency up to 22%",
        "25+ year performance warranty",
        "Net metering compatible",
      ],
    },
    {
      icon: Lightbulb,
      title: "Solar Street Lighting",
      description: "Self-sufficient outdoor lighting solutions powered by the sun",
      details: [
        "Zero electricity bills",
        "Automatic dusk-to-dawn operation",
        "Maintenance-free LED fixtures",
        "Battery backup for 3-5 days",
      ],
    },
    {
      icon: DollarSign,
      title: "On-Grid & Off-Grid Systems",
      description: "Flexible solar solutions tailored to your energy independence goals",
      details: [
        "Grid-tied with feed-in tariff",
        "Hybrid systems with battery storage",
        "Standalone off-grid installations",
        "Smart inverters with monitoring",
      ],
    },
    {
      icon: TrendingDown,
      title: "Solar Water Heating",
      description: "Eco-friendly water heating reducing conventional energy consumption",
      details: ["Evacuated tube collectors", "Flat plate collectors", "60-80% energy savings", "Integrated backup heating"],
    },
  ];

  const specs = [
    { icon: Leaf, label: "CO₂ Offset Annually", value: "2.5M kg" },
    { icon: Sun, label: "Solar Installations", value: "500+" },
    { icon: TrendingDown, label: "Average Bill Reduction", value: "40-60%" },
    { icon: Users, label: "Happy Customers", value: "1000+" },
  ];

  const processSteps = [
    { step: "1", title: "Site Assessment", desc: "Evaluate roof orientation, shading, and structural capacity" },
    { step: "2", title: "System Design", desc: "Custom design optimized for maximum energy yield" },
    { step: "3", title: "Installation", desc: "Professional mounting, wiring, and commissioning" },
    { step: "4", title: "Grid Connection", desc: "Net metering setup and utility approval coordination" },
    { step: "5", title: "Monitoring", desc: "Real-time performance tracking and maintenance support" },
  ];

  return (
    <DivisionPageLayout
      divisionKey="SOLAR"
      divisionLabel="Solar"
      eyebrowIcon={Leaf}
      eyebrowText="Sustainable Energy Solutions"
      eyebrowClassName="bg-green-100"
      title={
        <>
          Harness the Power of the
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500"> Sun</span>
        </>
      }
      description="Join the renewable energy revolution with our comprehensive solar solutions. Reduce your carbon footprint while slashing electricity costs."
      ctaPrimaryLabel="Get Solar Quote"
      ctaPrimaryIcon={Sun}
      ctaPrimaryClassName="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
      ctaSecondaryLabel="Calculate Savings"
      heroImage="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop"
      heroImageAlt="Solar panels installed on a commercial rooftop"
      heroStat={{ icon: Sun, label: "Solar Installations", value: "500+" }}
      heroBackgroundClassName="bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50"
      specs={specs}
      servicesTitle="Comprehensive Solar Solutions"
      servicesSubtitle="From residential rooftops to large-scale commercial installations"
      services={solutions}
      processSteps={{
        heading: "Simple Installation Process",
        subtitle: "From assessment to activation in 5 easy steps",
        steps: processSteps,
        position: "afterWhyChooseUs",
      }}
      whyChooseUs={{
        layout: "grid",
        heading: "Why Invest in Solar Energy?",
        intro: "Solar power is more than just an energy source—it's an investment in your future",
        blocks: [
          {
            icon: DollarSign,
            title: "Significant Cost Savings",
            items: [
              "Reduce electricity bills by 40-60%",
              "Protection against rising energy costs",
              "Attractive ROI within 4-6 years",
              "Government incentives & tax benefits",
            ],
          },
          {
            icon: Leaf,
            title: "Environmental Benefits",
            items: [
              "Zero greenhouse gas emissions",
              "Reduce carbon footprint significantly",
              "Clean, renewable energy source",
              "Combat climate change",
            ],
          },
          {
            icon: TrendingDown,
            title: "Energy Independence",
            items: [
              "Less reliance on grid power",
              "Protection from power outages",
              "Sell excess power back to grid",
              "Increase property value",
            ],
          },
        ],
      }}
      projectsTitle="Featured Solar Projects"
      viewAllLabel="View All Solar Projects"
      caseStudiesQueryValue="Solar"
      contactHeading="Ready to Go Solar?"
      contactDescription="Our solar experts will design a customized system for your property, calculate your potential savings, and guide you through available incentives and financing options."
      contactCallout={{
        icon: Sun,
        heading: "Free Solar Assessment Includes:",
        items: [
          "Roof analysis & shading study",
          "Energy consumption review",
          "Custom system design & 3D modeling",
          "Financial analysis with ROI calculation",
          "Available incentives & rebates overview",
        ],
        className: "bg-gradient-to-br from-green-50 to-yellow-50 border-green-200",
      }}
    />
  );
}
