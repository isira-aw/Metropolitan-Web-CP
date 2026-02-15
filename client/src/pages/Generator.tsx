import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { InquiryForm } from "@/components/InquiryForm";
import { useCaseStudies } from "@/hooks/use-case-studies";
import { useTestimonials } from "@/hooks/use-testimonials";
import { Zap, Battery, Settings, CheckCircle2, Quote, Power, Globe, Anchor, Wrench, Star, ArrowRight, Phone, Mail, Users, Award, Clock, ExternalLink, Ship, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Generator() {
  const { data: projects, isLoading } = useCaseStudies({ division: "GENERATOR", limit: 3 });
  const { data: testimonialsData } = useTestimonials({ division: "GENERATOR" });
  const [expandedDivision, setExpandedDivision] = useState<string | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDivision = (division: string) => {
    setExpandedDivision(expandedDivision === division ? null : division);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "How can I contact your Service Team?",
      answer: "You can contact us using the form on this page, via email, or by phone. We usually respond within 24 hours."
    },
    {
      question: "How long does it take to get a response?",
      answer: "Most inquiries are answered within one business day. Complex requests may take slightly longer."
    },
    {
      question: "Do you offer custom solutions?",
      answer: "Yes. Every solution is tailored to your specific requirements and business goals."
    },
    {
      question: "Where are you located?",
      answer: "We work remotely and collaborate with clients worldwide, ensuring flexible and efficient communication."
    },
    {
      question: "Can I request a project quote?",
      answer: "Absolutely. Share your project details through the contact form and we'll provide a detailed quote."
    }
  ];

  const services = [
    {
      title: "Customized Solutions",
      description: "Design and Installation of Generator Systems",
      icon: Settings,
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Maintenance & Repair",
      description: "Routine Maintenance and Emergency Repairs",
      icon: Wrench,
      img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "System Upgrades",
      description: "Upgrades and Retrofits for Existing Systems",
      icon: Zap,
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Performance Testing",
      description: "Load Testing and Performance Analysis",
      icon: Battery,
      img: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  // ═══════════════════════════════════════════════════
  // DIVISION CONTENT (Rich content from old codebase)
  // ═══════════════════════════════════════════════════

  const controllingContent = (
    <div className="space-y-8">
      {/* Division Header */}
      <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-[#144A92]/10 rounded-lg flex items-center justify-center">
            <Star className="w-5 h-5 text-[#144A92]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-black">Power Control & Protection Division</h3>
            <p className="text-sm text-[#424242]">Intelligent Generator Controllers, Hybrid Power Management & Automation Solutions in Sri Lanka</p>
          </div>
        </div>
        <p className="text-[#424242] leading-relaxed">
          Metropolitan Technologies (Pvt) Ltd — Sri Lanka's authorized ComAp dealer — delivers state-of-the-art power control, synchronization, protection, and automation solutions engineered for modern energy systems. Our European-designed ComAp controllers ensure precise performance for diesel generators, hybrid microgrids, solar PV systems, and Battery Energy Storage Systems (BESS), enabling smarter, safer, and more efficient power generation across the nation.
        </p>
        <p className="text-[#424242] leading-relaxed mt-2">
          We specialize in designing, integrating, and servicing advanced control systems that improve energy reliability, reduce operational costs, and support future-ready renewable energy growth.
        </p>
      </div>

      {/* Solutions */}
      <div>
        <h4 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
          <Wrench className="w-5 h-5 text-[#144A92]" />
          Our Intelligent Power Control Solutions
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Comprehensive Controller & Automation Systems", desc: "We provide advanced generator control and automation systems designed for precise and reliable power management. Our solutions support single to multi-generator control using ComAp controllers, enabling accurate generator start/stop, load sharing, synchronization, and grid-parallel operations. For distributed operations, we offer multi-site and remote power management through WebSupervisor IIoT. Additionally, our intelligent systems facilitate hybrid microgrid and renewable energy integration, balancing diesel, solar, wind, and battery power." },
            { title: "Switchgear & Protection Automation", desc: "We deliver advanced switchgear and protection automation solutions designed to optimize power distribution and ensure reliable operation. Our systems provide intelligent automation for ATS/AMF panels, MCC panels, and complex power networks. Our solutions incorporate robust fault protection including overcurrent, earth fault, reverse power, and differential protection, safeguarding equipment and maintaining stable power supply." },
            { title: "BESS, UPS & Energy Storage Integration", desc: "We provide advanced energy storage and continuity solutions for commercial, industrial, and critical infrastructure. Our BESS management solutions feature intelligent charge/discharge control, peak shaving, and grid backup capabilities. Our UPS interface and power continuity systems ensure seamless transitions between power sources, protecting sensitive equipment." },
            { title: "Marine Power Control", desc: "We deliver advanced marine power management solutions to optimize onboard energy distribution and ensure compliance with international marine emissions standards. Our ComAp marine-approved systems provide precise control for load sharing, shaft generators, and propulsion engine integration." },
            { title: "Custom Panels & Industrial Automation", desc: "We design and deliver tailor-made control panels engineered to international standards, supporting generators, hybrid systems, microgrids, and complex industrial equipment. Our solutions integrate advanced SCADA and industrial automation systems, featuring real-time monitoring dashboards, custom logic programming, and industry-grade automation controls." },
          ].map((item, i) => (
            <div key={i} className="card-hover bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-start gap-3 mb-2">
                <CheckCircle2 className="w-5 h-5 text-[#144A92] shrink-0 mt-0.5" />
                <h5 className="font-bold text-black text-sm">{item.title}</h5>
              </div>
              <p className="text-[#424242] text-sm leading-relaxed ml-8">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What Makes Us Unique */}
      <div className="bg-[#144A92]/[0.04] rounded-xl p-6 md:p-8 border border-[#144A92]/10">
        <h4 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
          <Globe className="w-5 h-5 text-[#144A92]" />
          What Makes Our Controlling Division Unique in Sri Lanka
        </h4>
        <div className="space-y-4 text-sm text-[#424242]">
          <div>
            <p><span className="font-semibold text-black">European-Engineered ComAp Solutions</span> — Globally recognized for reliability, scalability, and intelligent energy management.</p>
          </div>
          <div>
            <p className="font-semibold text-black mb-1">Advanced Hybrid & Renewable Energy Automation:</p>
            <ul className="ml-4 space-y-1">
              {["Solar PV + DG hybrid power plants", "BESS-integrated microgrids", "Grid-parallel and off-grid operation", "Industrial and telecom hybrid energy systems"].map((item, i) => (
                <li key={i} className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#144A92] rounded-full" /> {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-black mb-1">Real-Time Monitoring & IIoT Connectivity via WebSupervisor:</p>
            <ul className="ml-4 space-y-1">
              {["Remote diagnostics", "Performance analytics", "Event logging & alerts", "Multi-site fleet management"].map((item, i) => (
                <li key={i} className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#144A92] rounded-full" /> {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p><span className="font-semibold text-black">Seamless Multi-Source Power Control</span> — From grid to genset to renewables to BESS — everything works in harmony through intelligent load management and fault protection.</p>
          </div>
        </div>
      </div>

      {/* Technical Capabilities */}
      <div>
        <h4 className="text-lg font-bold text-black mb-3 flex items-center gap-2">
          <Cpu className="w-5 h-5 text-[#144A92]" />
          Technical Capabilities
        </h4>
        <p className="text-sm text-[#424242] leading-relaxed">
          We provide industry-leading technical capabilities in generator control, hybrid power systems, and industrial automation. Our expertise covers seamless generator synchronization, load sharing, and AC/grid integration. We implement automatic mains failure (AMF) systems, intelligent transfer switching, switchgear control with protection and fault management. Solutions include BESS and UPS integration, real-time remote monitoring via WebSupervisor IIoT, and communication protocols such as Modbus/TCP, CANbus, and SNMP. We design custom-built control panels, develop SCADA dashboards, and execute full commissioning for generators, hybrid microgrids, and industrial automation systems.
        </p>
      </div>

      {/* Services We Offer */}
      <div>
        <h4 className="text-lg font-bold text-black mb-3 flex items-center gap-2">
          <Wrench className="w-5 h-5 text-[#144A92]" />
          Services We Offer
        </h4>
        <p className="text-sm text-[#424242] leading-relaxed">
          We deliver a complete suite of control, automation, and power management services. Our team provides custom-designed solutions, genuine ComAp controllers and accessories, full installation services including wiring, control panel fabrication, switchgear integration, and on-site commissioning. We specialize in programming, advanced logic development, parameter setting, and live operational testing. We offer training programs and 24/7 remote assistance, on-site troubleshooting, firmware updates, and system upgrades.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
        <h4 className="text-lg font-bold text-black mb-3 flex items-center gap-2">
          <Star className="w-5 h-5 text-[#144A92]" />
          Why Choose Metropolitan Technologies
        </h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {["Certified ComAp Engineering Expertise", "2-Year Manufacturer Warranty", "IEC, IEEE, CEB, PUCSL Compliance", "Scalable & Future-Ready"].map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-[#144A92]/[0.06] text-[#144A92] text-xs font-semibold rounded-full">{tag}</span>
          ))}
        </div>
        <p className="text-sm text-[#424242] leading-relaxed">
          At Metropolitan Technologies, we combine certified ComAp engineering excellence with industry-leading compliance to deliver Sri Lanka's most advanced generator control, automation, and power management solutions. Every system is engineered for maximum reliability and precision performance. We follow strict IEC, IEEE, CEB, and PUCSL standards. Our solutions are scalable and optimized for hybrid energy growth.
        </p>
      </div>

      {/* Trusted Partners */}
      <div>
        <h4 className="text-lg font-bold text-black mb-3 flex items-center gap-2">
          <ExternalLink className="w-5 h-5 text-[#144A92]" />
          Trusted Manufacturer Partners
        </h4>
        <div className="flex flex-wrap gap-3">
          <a href="https://www.comap-control.com/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <img src="/Assets/Images/BrandLogos/Generator/comap.png" alt="ComAp" className="h-10 w-auto object-contain" />
            <span className="text-sm font-semibold text-black group-hover:text-[#144A92] transition-colors">ComAp Control Solutions</span>
          </a>
        </div>
      </div>

      {/* Contact Persons */}
      <div>
        <h4 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
          <Phone className="w-5 h-5 text-[#144A92]" />
          Contact Persons
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: "Mr. Osanda Weerasinghe", role: "Application Engineer", initials: "OW", phone: "+94 70 433 8698", email: "dm@metropolitan.lk", img: "/Assets/Images/People/osanda_weerasinghe.png", tel: "+94704338698", wa: "94704338698" },
            { name: "Mr. Kanishka", role: "Electrical Engineer", initials: "K", phone: "+94 71 992 2695", email: "dm@metropolitan.lk", img: "/Assets/Images/People/default-male.png", tel: "+94719922695", wa: "94719922695" },
          ].map((person, i) => (
            <div key={i} className="card-hover bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-[#144A92]/[0.06] rounded-full flex items-center justify-center text-[#144A92] font-bold text-lg">
                  {person.initials}
                </div>
                <div>
                  <p className="font-bold text-black">{person.name}</p>
                  <p className="text-sm text-[#424242]">{person.role}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-[#424242] mb-4">
                <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#144A92]" /> {person.phone}</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#144A92]" /> {person.email}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <a href={`tel:${person.tel}`} className="btn-metro !px-4 !py-1.5 !text-xs">Call</a>
                <a href={`mailto:${person.email}`} className="px-4 py-1.5 bg-[#144A92]/[0.06] text-[#144A92] text-xs font-semibold rounded-lg hover:bg-[#144A92]/10 transition-colors">Email</a>
                <a href={`https://wa.me/${person.wa}`} target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 bg-green-50 text-green-700 text-xs font-semibold rounded-lg hover:bg-green-100 transition-colors">WhatsApp</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const marineContent = (
    <div className="space-y-8">
      {/* Division Header */}
      <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-[#144A92]/10 rounded-lg flex items-center justify-center">
            <Ship className="w-5 h-5 text-[#144A92]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-black">Marine Power Solutions Division</h3>
            <p className="text-sm text-[#424242]">Marine Engines, Gensets & Vessel Repair Services in Sri Lanka</p>
          </div>
        </div>
        <p className="text-[#424242] leading-relaxed">
          Metropolitan Technologies (Pvt) Ltd delivers complete marine power, propulsion, and equipment solutions for fishing vessels, commercial boats, and ships across Sri Lanka. We specialize in marine genset supply, propulsion engine repairs, OBM servicing, and marine system installation, ensuring vessels operate efficiently, safely, and reliably.
        </p>
      </div>

      {/* Marine Engineering Services */}
      <div>
        <h4 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
          <Wrench className="w-5 h-5 text-[#144A92]" />
          Our Marine Engineering Services
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Marine Equipment Supply", desc: "We deliver a complete range of high-quality marine components for ships and boats, including engines, marine gensets, navigation systems, and auxiliary equipment. We supply genuine engines, marine gensets, OBMs, and advanced marine controllers sourced exclusively from trusted international brands. We also offer fishing vessel equipment and gear, from nets and winches to sonar and specialized fishing systems." },
            { title: "Marine Machinery & Engine Repairs", desc: "We provide comprehensive ship machinery and main engine repairs for diesel and hybrid propulsion systems. Our team specializes in inboard engine repairs and boat machinery servicing. We also handle advanced OBM (Outboard Motor) diagnostics and repairs, offering professional inspection, maintenance, and restoration services for fishing boats and leisure crafts." },
          ].map((item, i) => (
            <div key={i} className="card-hover bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-start gap-3 mb-2">
                <CheckCircle2 className="w-5 h-5 text-[#144A92] shrink-0 mt-0.5" />
                <h5 className="font-bold text-black text-sm">{item.title}</h5>
              </div>
              <p className="text-[#424242] text-sm leading-relaxed ml-8">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What Makes Us Unique */}
      <div className="bg-[#144A92]/[0.04] rounded-xl p-6 md:p-8 border border-[#144A92]/10">
        <h4 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
          <Globe className="w-5 h-5 text-[#144A92]" />
          Why Our Marine Sector Is Unique in Sri Lanka
        </h4>
        <div className="space-y-4 text-sm text-[#424242]">
          {[
            { brand: "Sleeper Marine Gensets", desc: "High-performance onboard generators providing uninterrupted power, optimized for fuel efficiency and reliability in Sri Lanka's maritime environment." },
            { brand: "Yuchai Marine Propulsion Engines", desc: "Durable and efficient propulsion engines suitable for commercial shipping and fishing vessels, designed to meet the demands of long-term marine operations." },
            { brand: "Tohatsu Outboard Motors (OBM)", desc: "Renowned for reliability, low maintenance, and performance, ideal for both small fishing crafts and leisure boats." },
            { brand: "Mate Marine Controllers", desc: "Advanced marine automation systems providing precise engine monitoring, power management, and vessel control for modern marine operations." },
          ].map((item, i) => (
            <div key={i}>
              <p><span className="font-semibold text-black">{item.brand}</span> — {item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Capabilities */}
      <div>
        <h4 className="text-lg font-bold text-black mb-3 flex items-center gap-2">
          <Cpu className="w-5 h-5 text-[#144A92]" />
          Technical Capabilities
        </h4>
        <p className="text-sm text-[#424242] leading-relaxed">
          Our marine engineering team delivers comprehensive repairs for all types of marine machinery, covering mechanical systems, electrical components, and control networks. We specialize in propulsion engine overhauls, marine genset diagnostics and servicing, inboard and outboard motor (OBM) repairs, and marine electrical and control system troubleshooting, delivering precise diagnostics for onboard electrical systems, automation platforms, and marine control networks.
        </p>
      </div>

      {/* Services */}
      <div>
        <h4 className="text-lg font-bold text-black mb-3 flex items-center gap-2">
          <Wrench className="w-5 h-5 text-[#144A92]" />
          Services We Offer
        </h4>
        <p className="text-sm text-[#424242] leading-relaxed">
          We offer end-to-end marine engineering services: custom design of power and propulsion layouts, supply of genuine marine engines, gensets, OBMs, and controllers, professional installation adhering to industry standards, thorough commissioning with testing and validation, and preventive maintenance to reduce risks, minimize downtime, and extend equipment lifespan.
        </p>
      </div>

      {/* Systems We Support */}
      <div>
        <h4 className="text-lg font-bold text-black mb-3 flex items-center gap-2">
          <Anchor className="w-5 h-5 text-[#144A92]" />
          Systems & Equipment We Support
        </h4>
        <p className="text-sm text-[#424242] leading-relaxed">
          We support marine propulsion engines (diesel and hybrid), marine diesel generators (gensets), outboard and inboard engines, navigation equipment (GPS, radar, communication), fishing gear and onboard equipment, marine control systems for monitoring and automation, and a full range of electrical and mechanical components for vessel safety and performance.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
        <h4 className="text-lg font-bold text-black mb-3 flex items-center gap-2">
          <Star className="w-5 h-5 text-[#144A92]" />
          Why Choose Metropolitan Technologies for Marine Solutions
        </h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {["Reliability", "Safety", "Scalability", "Lower Operating Costs"].map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-[#144A92]/[0.06] text-[#144A92] text-xs font-semibold rounded-full">{tag}</span>
          ))}
        </div>
        <p className="text-sm text-[#424242] leading-relaxed">
          Metropolitan Technologies is a leading marine engineering partner for Sri Lanka's fishing, shipping, and maritime industries, delivering end-to-end marine power, propulsion, and vessel repair solutions designed to enhance reliability, improve safety, and maximize long-term performance.
        </p>
      </div>

      {/* Trusted Partners */}
      <div>
        <h4 className="text-lg font-bold text-black mb-3 flex items-center gap-2">
          <ExternalLink className="w-5 h-5 text-[#144A92]" />
          Trusted Manufacturer Partners
        </h4>
        <div className="flex flex-wrap gap-3">
          {[
            { name: "Sleeper Marine Gensets", logo: "/Assets/Images/BrandLogos/Generator/sleeper.png", url: "https://www.sleeper-generator.com/" },
            { name: "Tohatsu Marine OBM", logo: "/Assets/Images/BrandLogos/Generator/tohatsu.png", url: "https://www.tohatsu.com/marine/int/outboards/index.html" },
            { name: "Mate Marine Controllers", logo: "/Assets/Images/BrandLogos/Generator/mate.png", url: "https://www.matend.com/" },
          ].map((partner, i) => (
            <a key={i} href={partner.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <img src={partner.logo} alt={partner.name} className="h-10 w-auto object-contain" />
              <span className="text-sm font-semibold text-black group-hover:text-[#144A92] transition-colors">{partner.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Contact Persons */}
      <div>
        <h4 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
          <Phone className="w-5 h-5 text-[#144A92]" />
          Contact Persons
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: "Mr. Dhanushka Madhujith", role: "Marine Engineer \u2022 Vice President-Metropolitan Technologies", initials: "DM", phone: "+94 77 032 0900", email: "dm@metropolitan.lk", tel: "+94770320900", wa: "94770320900" },
            { name: "Mr. Dhanuja Nadeel", role: "Marine Sales Engineer", initials: "DN", phone: "+94 70 235 3128", email: "dm@metropolitan.lk", tel: "+94702353128", wa: "94702353128" },
          ].map((person, i) => (
            <div key={i} className="card-hover bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-[#144A92]/[0.06] rounded-full flex items-center justify-center text-[#144A92] font-bold text-lg">
                  {person.initials}
                </div>
                <div>
                  <p className="font-bold text-black">{person.name}</p>
                  <p className="text-sm text-[#424242]">{person.role}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-[#424242] mb-4">
                <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#144A92]" /> {person.phone}</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#144A92]" /> {person.email}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <a href={`tel:${person.tel}`} className="btn-metro !px-4 !py-1.5 !text-xs">Call</a>
                <a href={`mailto:${person.email}`} className="px-4 py-1.5 bg-[#144A92]/[0.06] text-[#144A92] text-xs font-semibold rounded-lg hover:bg-[#144A92]/10 transition-colors">Email</a>
                <a href={`https://wa.me/${person.wa}`} target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 bg-green-50 text-green-700 text-xs font-semibold rounded-lg hover:bg-green-100 transition-colors">WhatsApp</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const simpleDivisionContent = (icon: React.ReactNode, title: string, desc: string, items: string[]) => (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
        <div className="flex items-center gap-3 mb-3">
          {icon}
          <h3 className="text-xl font-bold text-black">{title}</h3>
        </div>
        <p className="text-[#424242] leading-relaxed">{desc}</p>
      </div>
      <div>
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[#424242]">
              <CheckCircle2 className="w-5 h-5 text-[#144A92] shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const divisions = [
    {
      id: "controlling",
      title: "Controlling",
      icon: Power,
      content: controllingContent
    },
    {
      id: "marine",
      title: "Marine",
      icon: Anchor,
      content: marineContent
    },
    {
      id: "project",
      title: "Project",
      icon: Globe,
      content: simpleDivisionContent(
        <div className="w-10 h-10 bg-[#144A92]/10 rounded-lg flex items-center justify-center"><Globe className="w-5 h-5 text-[#144A92]" /></div>,
        "Generator Project Division",
        "Comprehensive turnkey generator projects from design to installation and commissioning for commercial and industrial applications.",
        ["Custom project design and engineering", "Complete installation and commissioning", "Civil, mechanical, and electrical works", "Load bank testing and performance validation"]
      )
    },
    {
      id: "service",
      title: "Service",
      icon: Wrench,
      content: simpleDivisionContent(
        <div className="w-10 h-10 bg-[#144A92]/10 rounded-lg flex items-center justify-center"><Wrench className="w-5 h-5 text-[#144A92]" /></div>,
        "Generator Service Division",
        "Professional maintenance and service solutions to ensure your generator systems operate at peak performance.",
        ["Preventive maintenance contracts", "24/7 emergency repair services", "Annual maintenance contracts", "Genuine spare parts supply"]
      )
    },
    {
      id: "repair",
      title: "Repair",
      icon: Settings,
      content: simpleDivisionContent(
        <div className="w-10 h-10 bg-[#144A92]/10 rounded-lg flex items-center justify-center"><Settings className="w-5 h-5 text-[#144A92]" /></div>,
        "Generator Repair Division",
        "Expert repair services for all types of generator systems, bringing your equipment back to optimal performance.",
        ["Engine overhauls and rebuilds", "Alternator repairs and rewinding", "Control system diagnostics", "Complete generator restoration"]
      )
    }
  ];

  const whyChooseUs = [
    { icon: Zap, title: "Experienced Team", desc: "Decades of expertise in power generation systems", img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop" },
    { icon: Settings, title: "Advanced Equipment", desc: "State-of-the-art tools and diagnostic technology", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop" },
    { icon: Award, title: "Quality Assurance", desc: "Every project passes rigorous quality standards", img: "https://www.smallbizdaily.com/wp-content/uploads/2021/10/shutterstock_1155561991.jpg" },
    { icon: Clock, title: "24/7/365 Service", desc: "Round-the-clock emergency response always on standby", img: "https://media.istockphoto.com/id/1494073880/photo/a-man-holding-icon-virtual-24-7-support-services-for-worldwide-nonstop-and-full-time.jpg?s=170667a&w=0&k=20&c=HoMXtrk5Js-aKnhIfceYqFKvWuFZjgATmWbcVkb1fuQ=" },
  ];

  const partners = [
    { name: "ComAp", tagline: "The Heart of Smart Control", logo: "/Assets/Images/BrandLogos/Generator/comap.png", url: "https://www.comap-control.com/" },
    { name: "Isuzu", tagline: "Engineered for Performance", logo: "/Assets/Images/BrandLogos/Generator/isuzu.png", url: "https://ies-isuzu.co.jp/en/" },
    { name: "Mate", tagline: "Custom Controls. Real-World Reliability.", logo: "/Assets/Images/BrandLogos/Generator/mate.png", url: "https://www.matend.com/" },
    { name: "Mitsubishi", tagline: "Move the world forward", logo: "/Assets/Images/BrandLogos/Generator/mitsubishi.png", url: "https://www.mhi.com/" },
    { name: "Parsun", tagline: "Reliable Outboard Power", logo: "/Assets/Images/BrandLogos/Generator/parsun.png", url: "https://www.parsunpower.com/" },
    { name: "Sleeper", tagline: "Compact. Quiet. Powerful.", logo: "/Assets/Images/BrandLogos/Generator/sleeper.png", url: "https://www.sleeper-generator.com/" },
    { name: "Suzuki", tagline: "Driven by Quality", logo: "/Assets/Images/BrandLogos/Generator/suzuki.png", url: "https://suzuki.com/" },
    { name: "Tohatsu", tagline: "Feel the Wind", logo: "/Assets/Images/BrandLogos/Generator/tohatsu.png", url: "https://www.tohatsu.com/" },
    { name: "Weichai", tagline: "Powering Progress Worldwide", logo: "/Assets/Images/BrandLogos/Generator/weichai.png", url: "https://weichai.co.id/" },
    { name: "Yamaha", tagline: "Touching Your Heart.", logo: "/Assets/Images/BrandLogos/Generator/yamaha.png", url: "https://global.yamaha-motor.com/" },
    { name: "Yanmar", tagline: "Together We Build", logo: "/Assets/Images/BrandLogos/Generator/yanmar.png", url: "https://www.yanmar.com/global/" },
    { name: "Yuchai", tagline: "Innovation in Motion", logo: "/Assets/Images/BrandLogos/Generator/yuchai.png", url: "https://www.yuchaiinternational.com/" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#424242] overflow-x-hidden scroll-smooth">
      <Navbar />

      {/* ═══ HERO SECTION ═══ */}
      <section className="relative h-screen min-h-[500px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-300"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=2070&auto=format&fit=crop')`,
            transform: `scale(1.1) translateY(${scrollY * 0.3}px)`
          }}
        />
        <div className="absolute inset-0 z-10 bg-[#0a264a]/70" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-blue-800/40 via-transparent to-blue-900/60" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <div className="relative">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-4 md:mb-6 leading-[1.2] tracking-tight"
            >
              <div className="overflow-hidden">
                <motion.span
                  initial={{ y: "105%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="block leading-[1.2]"
                  style={{ display: "inline-block" }}
                >
                  Department of
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  initial={{ y: "105%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                  className="block leading-[1.2] text-white/90"
                  style={{ display: "inline-block" }}
                >
                  Generators
                </motion.span>
              </div>
            </motion.h1>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 md:mb-12 animate-scroll-reveal delay-200 leading-relaxed px-2">
            Specializing in comprehensive solutions for power generation systems. Our experienced
            engineers and technicians deliver reliable and efficient power for a wide range of applications.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-scroll-reveal delay-300">
            <a href="#our-services">
              <button className="btn-metro">
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </button>
            </a>
            <a href="#contact-section">
              <button className="btn-metro">
                Contact Us
              </button>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-30 animate-fade-in delay-500">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1440 150" className="w-full h-[100px]" preserveAspectRatio="none">
            <path fill="#ffffff" d="M0,64L80,80C160,96,320,128,480,122.7C640,117,800,75,960,69.3C1120,64,1280,96,1360,112L1440,128L1440,160L1360,160C1280,160,1120,160,960,160C800,160,640,160,480,160C320,160,160,160,80,160L0,160Z" />
          </svg>
        </div>
      </section>

      {/* ═══ SERVICES SECTION ═══ */}
      <section id="our-services" className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-black tracking-tight">
              Our Services
            </h2>
            <div className="section-divider" />
            <p className="text-[#424242] mt-4 max-w-2xl mx-auto text-sm md:text-base">
              A comprehensive suite of services tailored to meet the diverse needs of our clients, ensuring optimal performance and longevity for your generator systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className={`group relative overflow-hidden rounded-xl border border-gray-100 p-6 md:p-8 transition-all duration-300 hover:shadow-lg animate-scroll-reveal delay-${Math.min(i + 1, 4)}00`}
                >
                  <div className="absolute inset-0 z-0">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/70 transition-opacity duration-300 group-hover:bg-black/50" />
                  </div>
                  <div className="relative z-20 h-full flex flex-col min-h-[160px]">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="mt-auto">
                      <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                      <p className="text-white/80 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      {testimonialsData && testimonialsData.length > 0 && (
        <section className="py-10 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl md:text-4xl font-display font-bold text-black tracking-tight">
                Client Testimonials
              </h2>
              <div className="section-divider" />
              <p className="text-[#424242] mt-4 md:mt-6 leading-relaxed text-sm md:text-base">
                Hear what our clients have to say about our reliable solutions and exceptional service.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12">
              {testimonialsData.slice(0, 6).map((t, i) => (
                <Card key={t.id} className={`border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scroll-reveal delay-${Math.min(i + 1, 5)}00`}>
                  <div className="p-5 md:p-8">
                    <Quote className="w-8 h-8 md:w-10 md:h-10 text-[#144A92]/15 mb-3 md:mb-4" />
                    <p className="text-[#424242] italic mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                      "{t.content}"
                    </p>
                    <div className="flex items-center gap-3 pt-3 md:pt-4 border-t border-gray-100">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#144A92]/5 flex items-center justify-center text-[#144A92] font-bold text-base md:text-lg">
                        {t.author[0]}
                      </div>
                      <div>
                        <p className="font-bold text-black text-sm md:text-base">{t.author}</p>
                        <p className="text-xs md:text-sm text-[#424242]">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ OUR DIVISIONS ═══ */}
      <section className="py-10 md:py-16 bg-[#144A92]/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-black tracking-tight">
              Our Divisions
            </h2>
            <div className="section-divider" />
            <p className="text-[#424242] mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Comprehensive generator solutions across multiple specialized divisions
            </p>
          </div>

          <div className="space-y-3 md:space-y-4 mt-8 md:mt-12">
            {divisions.map((division) => {
              const Icon = division.icon;
              const isExpanded = expandedDivision === division.id;
              return (
                <div key={division.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
                  <button
                    onClick={() => toggleDivision(division.id)}
                    className="w-full p-4 md:p-6 flex items-center justify-between hover:bg-gray-50 transition-all"
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-[#144A92]/[0.06] rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#144A92]" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-black">{division.title}</h3>
                    </div>
                    <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-[#424242]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[8000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-4 md:p-6 pt-0 border-t border-gray-100">
                      {division.content}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="py-10 md:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4 md:gap-6">
            <div className="flex-1">
              <h2 className="text-2xl md:text-4xl font-display font-bold text-black tracking-tight">
                Why Choose Us?
              </h2>
              <div className="section-divider !justify-start" />
            </div>
            <p className="text-base md:text-lg text-[#424242] max-w-md border-l-2 border-[#144A92]/30 pl-4 md:pl-6 py-2">
              Leading generator solutions backed by years of expertise and commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {whyChooseUs.map((feature, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden rounded-xl border border-gray-100 p-6 md:p-8 transition-all duration-300 hover:shadow-lg min-h-[200px] md:min-h-[240px] animate-scroll-reveal delay-${Math.min(idx + 1, 4)}00`}
              >
                <div className="absolute inset-0 z-0">
                  <img src={feature.img} alt={feature.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/70 transition-opacity duration-300 group-hover:bg-black/40" />
                </div>
                <div className="relative z-20 h-full flex flex-col">
                  <div className="mt-auto">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">{feature.title}</h3>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional features row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-6">
            {[
              { icon: Wrench, title: "Trained Staff" },
              { icon: Battery, title: "Genuine Spare Parts" },
              { icon: Star, title: "Trusted Partner" },
              { icon: CheckCircle2, title: "Ex-Stock Products" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="card-hover flex items-center gap-3 p-3 md:p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 shrink-0 bg-[#144A92]/5 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#144A92]" />
                  </div>
                  <span className="text-sm md:text-base font-medium text-[#424242]">{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ FAQ SECTION ═══ */}
      <section className="py-10 md:py-16 bg-[#144A92]/[0.02]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-black tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="section-divider" />
            <p className="text-[#424242] mt-4 text-sm md:text-base">
              Quick answers to common questions. Need more help? Contact us anytime.
            </p>
          </div>

          <div className="space-y-3 md:space-y-4 mt-8 md:mt-12">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 ${activeFaq === index ? 'shadow-md border-[#144A92]/20' : ''}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 md:p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-all"
                >
                  <span className="font-bold text-black pr-4 text-sm md:text-base">{item.question}</span>
                  <span className={`text-2xl text-[#144A92] transition-transform duration-300 ${activeFaq === index ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-40' : 'max-h-0'}`}>
                  <p className="px-4 md:px-6 pb-4 md:pb-6 text-[#424242] text-sm md:text-base">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROJECTS ═══ */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-black tracking-tight">
              Project Portfolio
            </h2>
            <div className="section-divider" />
            <p className="text-[#424242] mt-4 text-sm md:text-base">
              Highlighting our recent contributions and engineering achievements
            </p>
          </div>

          <Link href="/case-studies?division=Generator" className="hidden lg:flex items-center text-[#144A92] font-bold text-lg hover:gap-3 transition-all mt-6 mb-3">
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-6 md:mt-0">
            {isLoading ? (
              Array(3).fill(0).map((_, i) => <div key={i} className="h-[300px] md:h-[400px] bg-gray-100 animate-pulse rounded-xl" />)
            ) : projects?.data && projects.data.length > 0 ? (
              projects.data.map((p, i) => (
                <div key={p.id} className={`animate-scroll-reveal delay-${Math.min(i + 1, 3)}00`}>
                  <CaseStudyCard item={p} />
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-12 text-[#424242]">
                No projects found for this division yet.
              </div>
            )}
          </div>

          <Link href="/case-studies?division=Generator" className="flex lg:hidden items-center justify-center text-[#144A92] font-bold text-base hover:gap-3 transition-all mt-6">
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ═══ PARTNERS ═══ */}
      <section className="py-10 md:py-16 bg-[#144A92]/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-black tracking-tight">
              Our Esteemed Partners
            </h2>
            <div className="section-divider" />
            <p className="text-[#424242] mt-4 text-sm md:text-base">
              Collaborating with world-leading manufacturers to deliver quality generator solutions
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 mt-8 md:mt-12">
            {partners.map((partner, i) => (
              <a
                key={i}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-4 md:p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 md:h-12 w-auto object-contain mb-2 opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                />
                <p className="font-bold text-black group-hover:text-[#144A92] transition-colors text-xs md:text-sm">{partner.name}</p>
                <p className="text-[9px] md:text-[10px] text-[#424242] mt-0.5 leading-tight">{partner.tagline}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT / INQUIRY ═══ */}
      <section id="contact-section" className="py-10 md:py-16 bg-[#144A92]/[0.04] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 leading-tight text-black">
                Power Your Business with Confidence
              </h2>
              <p className="text-[#424242] text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                Let our power system engineers design the perfect backup solution for your facility.
                We'll assess your load requirements and recommend the optimal generator configuration.
              </p>
              <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 inline-block text-left">
                {["Load calculation & sizing", "Fuel consumption analysis", "ROI & cost-benefit evaluation", "Free power assessment consultation"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#144A92]/10 flex items-center justify-center shrink-0">
                      <ArrowRight className="w-3 h-3 text-[#144A92]" />
                    </div>
                    <span className="font-medium text-sm md:text-base text-[#424242]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <InquiryForm division="Generator" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
