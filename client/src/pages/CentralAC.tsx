import { DivisionPageLayout } from "@/components/DivisionPageLayout";
import { Snowflake, Thermometer, Wind, Gauge, TrendingDown, Building2 } from "lucide-react";

export default function CentralAC() {
  const services = [
    {
      icon: Snowflake,
      title: "Chiller Systems",
      description: "Advanced water-cooled and air-cooled chiller installations for maximum efficiency",
    },
    {
      icon: Wind,
      title: "VRV/VRF Systems",
      description: "Variable refrigerant flow technology for precise temperature control",
    },
    {
      icon: Thermometer,
      title: "Ducting & Ventilation",
      description: "Custom-designed ductwork ensuring optimal air distribution",
    },
    {
      icon: Gauge,
      title: "Building Management Systems",
      description: "Automated climate control with real-time monitoring and adjustments",
    },
  ];

  const specs = [
    { label: "Energy Efficiency", value: "Up to 40% savings" },
    { label: "Temperature Control", value: "±0.5°C precision" },
    { label: "Air Quality", value: "HEPA filtration" },
    { label: "Noise Level", value: "<45dB operation" },
  ];

  return (
    <DivisionPageLayout
      divisionKey="CENTRAL_AC"
      divisionLabel="Central AC"
      eyebrowIcon={Snowflake}
      eyebrowText="Climate Control Excellence"
      title="Central Air Conditioning Solutions"
      description="Engineered climate control systems that combine energy efficiency, precision temperature management, and sustainable operation for commercial and industrial spaces."
      ctaPrimaryLabel="Request Consultation"
      ctaPrimaryIcon={Thermometer}
      ctaSecondaryLabel="View Projects"
      heroImage="https://images.unsplash.com/photo-1631545806609-cf50a5ef82d7?q=80&w=1200&auto=format&fit=crop"
      heroImageAlt="Central air conditioning outdoor units on a commercial rooftop"
      heroStat={{ icon: TrendingDown, label: "Energy Savings", value: "40%" }}
      specs={specs}
      servicesTitle="Comprehensive HVAC Services"
      servicesSubtitle="From design to installation and maintenance, we deliver complete climate control solutions"
      services={services}
      whyChooseUs={{
        layout: "checklist",
        heading: "Why Choose Our Central AC Solutions?",
        blocks: [
          {
            items: [
              "Energy-efficient systems reducing operational costs by up to 40%",
              "Precision temperature control within ±0.5°C tolerance",
              "Advanced air filtration for improved indoor air quality",
              "Smart BMS integration for automated climate management",
              "Comprehensive maintenance contracts with 24/7 support",
              "Eco-friendly refrigerants compliant with environmental standards",
            ],
          },
        ],
        sideCard: {
          icon: Building2,
          heading: "Ideal for:",
          items: [
            { label: "Commercial Office Buildings" },
            { label: "Shopping Malls & Retail Spaces" },
            { label: "Hotels & Hospitality" },
            { label: "Industrial Facilities" },
            { label: "Healthcare Facilities" },
          ],
        },
      }}
      projectsTitle="Featured Central AC Projects"
      viewAllLabel="View All Central AC Projects"
      caseStudiesQueryValue="Central AC"
      contactHeading="Get Expert Climate Control Consultation"
      contactDescription="Our certified HVAC engineers are ready to design the perfect cooling solution for your facility. From load calculations to system selection, we ensure optimal comfort and efficiency."
      contactHighlights={[
        { icon: Thermometer, title: "Free Energy Audit", desc: "Evaluate your current system efficiency" },
        { icon: Gauge, title: "24/7 Emergency Support", desc: "Round-the-clock technical assistance" },
      ]}
    />
  );
}
