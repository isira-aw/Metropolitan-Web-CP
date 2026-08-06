import { DivisionPageLayout } from "@/components/DivisionPageLayout";
import { Camera, Lock, Wifi, Radio, Shield, Network, MonitorPlay, Users } from "lucide-react";

export default function ELV() {
  const systems = [
    {
      icon: Camera,
      title: "CCTV & Video Surveillance",
      description: "Advanced IP and analog camera systems with AI-powered analytics",
      details: [
        "4K Ultra HD IP cameras",
        "AI object detection & tracking",
        "Cloud & local storage options",
        "Mobile app remote viewing",
        "24/7 recording with motion detection",
        "Facial recognition capabilities",
      ],
    },
    {
      icon: Lock,
      title: "Access Control Systems",
      description: "Intelligent entry management for enhanced security and monitoring",
      details: [
        "Biometric fingerprint & face scanners",
        "RFID & proximity card readers",
        "Time & attendance integration",
        "Multi-level access permissions",
        "Real-time monitoring dashboard",
        "Audit trail & reporting",
      ],
    },
    {
      icon: Network,
      title: "Structured Cabling",
      description: "Enterprise-grade network infrastructure for seamless connectivity",
      details: [
        "Cat 6/6A/7 copper cabling",
        "Fiber optic backbone",
        "Certified installations",
        "Cable management systems",
        "Testing & documentation",
        "Future-proof design",
      ],
    },
    {
      icon: Radio,
      title: "Public Address Systems",
      description: "Crystal-clear audio distribution for communication and emergency alerts",
      details: [
        "Zone-based audio control",
        "Emergency broadcast integration",
        "IP-based networked speakers",
        "Background music systems",
        "Paging & intercom",
        "Integrated with fire alarms",
      ],
    },
  ];

  const integrations = [
    { icon: MonitorPlay, label: "Building Management Systems (BMS)" },
    { icon: Shield, label: "Fire Alarm Integration" },
    { icon: Wifi, label: "Smart Lighting Control" },
    { icon: Network, label: "HVAC Automation" },
  ];

  const industries = [
    "Corporate Offices",
    "Shopping Malls",
    "Hotels & Resorts",
    "Educational Institutions",
    "Hospitals & Healthcare",
    "Residential Complexes",
    "Industrial Facilities",
    "Government Buildings",
  ];

  return (
    <DivisionPageLayout
      divisionKey="ELV"
      divisionLabel="ELV"
      eyebrowIcon={Network}
      eyebrowText="Intelligent Building Technology"
      eyebrowClassName="bg-blue-500/10"
      title="ELV Systems"
      description="Extra Low Voltage Systems — cutting-edge security, communication, and connectivity solutions that transform buildings into smart, secure, and efficient environments."
      ctaPrimaryLabel="Explore Solutions"
      ctaPrimaryClassName="bg-blue-600 hover:bg-blue-700"
      ctaSecondaryLabel="System Integration"
      heroImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop"
      heroImageAlt="Network and security server cabinet with structured cabling"
      heroStat={{ icon: Shield, label: "Systems Integrated", value: "1000+" }}
      heroBackgroundClassName="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
      heroTextTheme="light"
      afterHeroBanner={{
        heading: "Seamless System Integration",
        icon: Network,
        items: integrations,
        className: "bg-blue-600",
      }}
      servicesTitle="Comprehensive ELV Solutions"
      servicesSubtitle="Integrated low-voltage systems for modern buildings"
      services={systems}
      whyChooseUs={{
        layout: "grid",
        heading: "Building the Future of Smart Infrastructure",
        headingIcon: Wifi,
        intro:
          "ELV systems are the nervous system of modern buildings, enabling communication, security, and automation that make spaces smarter and more efficient.",
        blocks: [
          {
            icon: Shield,
            title: "Enhanced Security",
            description: "24/7 monitoring, access control, and intrusion detection keep your property and people safe",
          },
          {
            icon: Network,
            title: "Seamless Connectivity",
            description: "High-speed network infrastructure supporting IoT devices, communication, and data transfer",
          },
          {
            icon: Users,
            title: "Operational Efficiency",
            description: "Centralized control and monitoring reduce costs and improve facility management",
          },
        ],
      }}
      extraGrid={{
        heading: "Industries We Serve",
        subtitle: "Trusted ELV solutions across diverse sectors",
        items: industries,
      }}
      projectsTitle="Featured ELV Projects"
      viewAllLabel="View All ELV Projects"
      caseStudiesQueryValue="ELV"
      contactHeading="Transform Your Building with Smart ELV Solutions"
      contactDescription="Our certified ELV engineers will assess your facility and design an integrated system that meets your security, communication, and connectivity requirements."
      contactHighlights={[
        { icon: Camera, title: "Security Assessment", desc: "Identify vulnerabilities and design comprehensive protection" },
        { icon: Network, title: "Network Infrastructure", desc: "Plan scalable cabling and connectivity solutions" },
        { icon: Wifi, title: "System Integration", desc: "Seamlessly connect all building systems" },
      ]}
    />
  );
}
