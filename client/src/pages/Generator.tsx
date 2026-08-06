import { DivisionPageLayout } from "@/components/DivisionPageLayout";
import { Zap, Battery, Settings, CheckCircle2, Power, Globe, Anchor, Wrench, Star, Award, Clock, ExternalLink, Ship, Cpu, Phone, Mail } from "lucide-react";

export default function Generator() {
  const services = [
    {
      icon: Settings,
      title: "Customized Solutions",
      description: "Design and Installation of Generator Systems",
    },
    {
      icon: Wrench,
      title: "Maintenance & Repair",
      description: "Routine Maintenance and Emergency Repairs",
    },
    {
      icon: Zap,
      title: "System Upgrades",
      description: "Upgrades and Retrofits for Existing Systems",
    },
    {
      icon: Battery,
      title: "Performance Testing",
      description: "Load Testing and Performance Analysis",
    },
  ];

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
            { name: "Mr. Osanda Weerasinghe", role: "Application Engineer", initials: "OW", phone: "+94 70 433 8698", email: "dm@metropolitan.lk", tel: "+94704338698", wa: "94704338698" },
            { name: "Mr. Kanishka", role: "Electrical Engineer", initials: "K", phone: "+94 71 992 2695", email: "dm@metropolitan.lk", tel: "+94719922695", wa: "94719922695" },
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
            { name: "Mr. Dhanushka Madhujith", role: "Marine Engineer • Vice President-Metropolitan Technologies", initials: "DM", phone: "+94 77 032 0900", email: "dm@metropolitan.lk", tel: "+94770320900", wa: "94770320900" },
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

  const divisionItems = [
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

  const whyChooseUsBlocks = [
    { icon: Zap, title: "Experienced Team", description: "Decades of expertise in power generation systems" },
    { icon: Settings, title: "Advanced Equipment", description: "State-of-the-art tools and diagnostic technology" },
    { icon: Award, title: "Quality Assurance", description: "Every project passes rigorous quality standards" },
    { icon: Clock, title: "24/7/365 Service", description: "Round-the-clock emergency response always on standby" },
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
    <DivisionPageLayout
      divisionKey="GENERATOR"
      divisionLabel="Generator"
      eyebrowIcon={Zap}
      eyebrowText="Power Generation Excellence"
      title="Department of Generators"
      description="Specializing in comprehensive solutions for power generation systems. Our experienced engineers and technicians deliver reliable and efficient power for a wide range of applications."
      ctaPrimaryLabel="Request Consultation"
      ctaSecondaryLabel="View Projects"
      heroImage="/workshop_Department_of_gen.jpg"
      heroImageAlt="Metropolitan Technologies generator workshop"
      heroBackgroundClassName="bg-[#f8f8f8]"
      heroTextTheme="dark"
      servicesTitle="Our Services"
      servicesSubtitle="A comprehensive suite of services tailored to meet the diverse needs of our clients, ensuring optimal performance and longevity for your generator systems."
      services={services}
      accordionDivisions={{
        heading: "Our Divisions",
        subtitle: "Comprehensive generator solutions across multiple specialized divisions",
        items: divisionItems,
      }}
      whyChooseUs={{
        layout: "grid",
        heading: "Why Choose Us",
        intro: "What sets our generator division apart from the rest",
        blocks: whyChooseUsBlocks,
        badges: ["Trained Staff", "Genuine Spare Parts", "Trusted Partner", "Ex-Stock Products"],
      }}
      faq={{
        heading: "Frequently Asked Questions",
        subtitle: "Quick answers to common questions. Need more help? Contact us anytime.",
        items: faqData,
      }}
      projectsTitle="Project Portfolio"
      viewAllLabel="View All Projects"
      caseStudiesQueryValue="Generator"
      partners={{
        heading: "Our Esteemed Partners",
        subtitle: "Collaborating with world-leading manufacturers to deliver quality generator solutions",
        items: partners,
      }}
      contactHeading="Power Your Business with Confidence"
      contactDescription="Let our power system engineers design the perfect backup solution for your facility. We'll assess your load requirements and recommend the optimal generator configuration."
      contactCallout={{
        icon: CheckCircle2,
        heading: "What You'll Get",
        items: ["Load calculation & sizing", "Fuel consumption analysis", "ROI & cost-benefit evaluation", "Free power assessment consultation"],
      }}
    />
  );
}
