import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { InquiryForm } from "@/components/InquiryForm";
import { useCaseStudies } from "@/hooks/use-case-studies";
import { useTestimonials } from "@/hooks/use-testimonials";
import { Zap, Battery, Settings, CheckCircle2, Quote, Power, Globe, Anchor, Wrench, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Generator() {
  const { data: projects, isLoading } = useCaseStudies({ division: "GENERATOR", limit: 3 });
  const { data: testimonialsData } = useTestimonials({ division: "GENERATOR" });
  const [expandedDivision, setExpandedDivision] = useState<string | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
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

  const specifications = [
    { label: "Power Range", value: "50 - 3000 kVA" },
    { label: "Fuel Type", value: "Diesel / Gas" },
    { label: "Voltage", value: "230V - 11kV" },
    { label: "Frequency", value: "50Hz / 60Hz" }
  ];

  const services = [
    {
      title: "Customized Solutions",
      description: "Design and Installation of Generator Systems",
      icon: Settings
    },
    {
      title: "Maintenance & Repair",
      description: "Routine Maintenance and Emergency Repairs",
      icon: Wrench
    },
    {
      title: "System Upgrades",
      description: "Upgrades and Retrofits for Existing Systems",
      icon: Zap
    },
    {
      title: "Performance Testing",
      description: "Load Testing and Performance Analysis",
      icon: Battery
    }
  ];

  const divisions = [
    {
      id: "controlling",
      title: "Controlling",
      icon: Power,
      color: "bg-blue-600",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-2xl border-2 border-blue-200">
            <h3 className="text-xl font-bold text-secondary mb-3 flex items-center gap-2">
              <Star className="w-5 h-5 text-blue-600" />
              Power Control & Protection Division
            </h3>
            <p className="text-muted-foreground">
              Metropolitan Technologies (Pvt) Ltd — Sri Lanka's authorized ComAp dealer — delivers state-of-the-art power control, synchronization, protection, and automation solutions engineered for modern energy systems.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-secondary mb-3">Our Intelligent Power Control Solutions</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>Single to multi-generator control using ComAp controllers</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>Hybrid microgrid & renewable integration</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>Switchgear & protection automation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>BESS, UPS & energy storage integration</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>Marine power control solutions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>Custom panels & industrial automation</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
            <h4 className="font-bold text-secondary mb-3">Why Choose Metropolitan Technologies?</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Certified ComAp Engineering Expertise</li>
              <li>• 2-Year Manufacturer Warranty</li>
              <li>• Compliance with IEC, IEEE, CEB, and PUCSL Standards</li>
              <li>• Scalable & Future-Ready Solutions</li>
            </ul>
          </div>

          {/* Contact Persons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border-2 border-border hover:border-blue-500/50 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">OW</span>
                </div>
                <div>
                  <p className="font-bold text-secondary">Mr. Osanda Weerasinghe</p>
                  <p className="text-sm text-muted-foreground">Application Engineer</p>
                </div>
              </div>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>+94 70 433 8698</p>
                <p>dm@metropolitan.lk</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border-2 border-border hover:border-blue-500/50 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">K</span>
                </div>
                <div>
                  <p className="font-bold text-secondary">Mr. Kanishka</p>
                  <p className="text-sm text-muted-foreground">Electrical Engineer</p>
                </div>
              </div>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>+94 71 992 2695</p>
                <p>dm@metropolitan.lk</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "marine",
      title: "Marine",
      icon: Anchor,
      color: "bg-blue-600",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-2xl border-2 border-blue-200">
            <h3 className="text-xl font-bold text-secondary mb-3 flex items-center gap-2">
              <Anchor className="w-5 h-5 text-blue-600" />
              Marine Power Solutions Division
            </h3>
            <p className="text-muted-foreground">
              Metropolitan Technologies delivers complete marine power, propulsion, and equipment solutions for fishing vessels, commercial boats, and ships across Sri Lanka.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-secondary mb-3">Our Marine Engineering Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>Marine equipment supply - engines, gensets, navigation systems</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>Marine machinery & engine repairs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>Inboard engine repairs and boat machinery servicing</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>OBM (Outboard Motor) diagnostics and repair</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
            <h4 className="font-bold text-secondary mb-3">Trusted Brands We Supply</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-blue-300">Sleeper Marine Gensets</Badge>
              <Badge variant="outline" className="border-blue-300">Yuchai Marine Engines</Badge>
              <Badge variant="outline" className="border-blue-300">Tohatsu OBM</Badge>
              <Badge variant="outline" className="border-blue-300">Mate Marine Controllers</Badge>
            </div>
          </div>

          {/* Contact Persons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border-2 border-border hover:border-blue-500/50 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">DM</span>
                </div>
                <div>
                  <p className="font-bold text-secondary">Mr. Dhanushka Madhujith</p>
                  <p className="text-sm text-muted-foreground">Marine Engineer • VP</p>
                </div>
              </div>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>+94 77 032 0900</p>
                <p>dm@metropolitan.lk</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border-2 border-border hover:border-blue-500/50 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">DN</span>
                </div>
                <div>
                  <p className="font-bold text-secondary">Mr. Dhanuja Nadeel</p>
                  <p className="text-sm text-muted-foreground">Marine Sales Engineer</p>
                </div>
              </div>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>+94 70 235 3128</p>
                <p>dm@metropolitan.lk</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "project",
      title: "Project",
      icon: Globe,
      color: "bg-blue-600",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-2xl border-2 border-blue-200">
            <h3 className="text-xl font-bold text-secondary mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600" />
              Generator Project Division
            </h3>
            <p className="text-muted-foreground">
              Comprehensive turnkey generator projects from design to installation and commissioning for commercial and industrial applications.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-secondary mb-3">Our Project Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>Custom project design and engineering</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>Complete installation and commissioning</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>Civil, mechanical, and electrical works</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>Load bank testing and performance validation</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "service",
      title: "Service",
      icon: Wrench,
      color: "bg-blue-600",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-2xl border-2 border-blue-200">
            <h3 className="text-xl font-bold text-secondary mb-3 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-blue-600" />
              Generator Service Division
            </h3>
            <p className="text-muted-foreground">
              Professional maintenance and service solutions to ensure your generator systems operate at peak performance.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-secondary mb-3">Service Offerings</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>Preventive maintenance contracts</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>24/7 emergency repair services</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>Annual maintenance contracts</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>Genuine spare parts supply</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "repair",
      title: "Repair",
      icon: Settings,
      color: "bg-blue-600",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-2xl border-2 border-blue-200">
            <h3 className="text-xl font-bold text-secondary mb-3 flex items-center gap-2">
              <Settings className="w-5 h-5 text-blue-600" />
              Generator Repair Division
            </h3>
            <p className="text-muted-foreground">
              Expert repair services for all types of generator systems, bringing your equipment back to optimal performance.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-secondary mb-3">Repair Capabilities</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>Engine overhauls and rebuilds</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>Alternator repairs and rewinding</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>Control system diagnostics</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>Complete generator restoration</span>
              </li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  const whyChooseUs = [
    { icon: Zap, title: "Experienced Team" },
    { icon: Settings, title: "Advanced Equipment" },
    { icon: Wrench, title: "Trained Staff" },
    { icon: Battery, title: "Genuine Spare Parts" },
    { icon: Power, title: "24/7/365 Service" },
    { icon: CheckCircle2, title: "Ex-Stock Products" },
    { icon: Star, title: "Trusted Partner" },
    { icon: Quote, title: "Quality Assurance" }
  ];

  const partners = [
    { name: "ComAp", logo: "/Assets/Images/BrandLogos/Generator/comap.png", url: "https://www.comap-control.com/" },
    { name: "Isuzu", logo: "/Assets/Images/BrandLogos/Generator/isuzu.png", url: "https://ies-isuzu.co.jp/en/" },
    { name: "Mate", logo: "/Assets/Images/BrandLogos/Generator/mate.png", url: "https://www.matend.com/" },
    { name: "Mitsubishi", logo: "/Assets/Images/BrandLogos/Generator/mitsubishi.png", url: "https://www.mhi.com/" },
    { name: "Parsun", logo: "/Assets/Images/BrandLogos/Generator/parsun.png", url: "https://www.parsunpower.com/" },
    { name: "Sleeper", logo: "/Assets/Images/BrandLogos/Generator/sleeper.png", url: "https://www.sleeper-generator.com/" },
    { name: "Suzuki", logo: "/Assets/Images/BrandLogos/Generator/suzuki.png", url: "https://suzuki.com/" },
    { name: "Tohatsu", logo: "/Assets/Images/BrandLogos/Generator/tohatsu.png", url: "https://www.tohatsu.com/" },
    { name: "Weichai", logo: "/Assets/Images/BrandLogos/Generator/weichai.png", url: "https://weichai.co.id/" },
    { name: "Yamaha", logo: "/Assets/Images/BrandLogos/Generator/yamaha.png", url: "https://global.yamaha-motor.com/" },
    { name: "Yanmar", logo: "/Assets/Images/BrandLogos/Generator/yanmar.png", url: "https://www.yanmar.com/global/" },
    { name: "Yuchai", logo: "/Assets/Images/BrandLogos/Generator/yuchai.png", url: "https://www.yuchaiinternational.com/" }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <div className="bg-secondary text-white pt-2 pb-20">
      </div>

      {/* HERO - Blue Theme */}
      <section className="relative h-[75vh] min-h-[650px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=2070&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 animate-in slide-in-from-left-10 fade-in duration-700">
              <Badge className="mb-4 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border-blue-500/30">
                <Zap className="w-3 h-3 mr-1" />
                Department of Generators
              </Badge>
              <h1 className="text-6xl md:text-7xl font-display font-bold text-white mb-6">
                Power
                <span className="text-blue-400"> Generation</span> Solutions
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-2xl">
                Specializing in comprehensive solutions for power generation systems. Our experienced
                engineers and technicians deliver reliable and efficient power for a wide range of applications.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Get a Quote
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                  Our Services
                </Button>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* SERVICES SECTION - Blue Theme */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Services"
            subtitle="A comprehensive suite of services tailored to meet the diverse needs of our clients, ensuring optimal performance and longevity for your generator systems."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="group bg-gradient-to-br from-muted/30 to-white p-8 rounded-3xl border-2 border-border hover:border-blue-500/50 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-secondary mb-2 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all ml-4">
                      <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Blue Theme */}
      {testimonialsData && testimonialsData.length > 0 && (
        <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold mb-4">Client Testimonials</h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Hear what our clients have to say about our reliable solutions and exceptional service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonialsData.map((t) => (
                <div key={t.id} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                  <Quote className="w-8 h-8 text-blue-300/50 mb-4" />
                  <p className="text-white/90 italic mb-6">"{t.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300 font-bold">
                      {t.author[0]}
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">{t.author}</p>
                      <p className="text-white/70 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* OUR DIVISIONS */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Divisions"
            subtitle="Comprehensive generator solutions across multiple specialized divisions"
          />

          <div className="space-y-4 mt-12">
            {divisions.map((division) => {
              const Icon = division.icon;
              const isExpanded = expandedDivision === division.id;
              return (
                <div key={division.id} className="bg-white rounded-2xl border-2 border-border overflow-hidden">
                  <button
                    onClick={() => toggleDivision(division.id)}
                    className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${division.color} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-secondary">{division.title}</h3>
                    </div>
                    <div className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                      <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-6 pt-0 border-t border-border">
                      {division.content}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - Blue Theme */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Choose Us?"
            subtitle="Leading generator solutions backed by years of expertise and commitment"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <Card key={i} className="border-2 border-border hover:border-blue-500/50 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <p className="font-bold text-secondary">{item.title}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ SECTION - Blue Theme */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions. Need more help? Contact us anytime."
          />

          <div className="space-y-4 mt-12">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl border-2 border-border overflow-hidden transition-all ${activeFaq === index ? 'border-blue-500/50' : ''}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <span className="font-bold text-secondary pr-4">{item.question}</span>
                  <span className={`text-2xl text-blue-600 transition-transform ${activeFaq === index ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-40' : 'max-h-0'}`}>
                  <p className="px-6 pb-6 text-muted-foreground">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Project Portfolio" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {isLoading ? (
              Array(3).fill(0).map((_, i) => <div key={i} className="h-[400px] bg-muted animate-pulse rounded-2xl" />)
            ) : projects?.data && projects.data.length > 0 ? (
              projects.data.map(p => <CaseStudyCard key={p.id} item={p} />)
            ) : (
              <div className="col-span-3 text-center py-12 text-muted-foreground">
                No projects found for this division yet.
              </div>
            )}
          </div>

          {projects?.data && projects.data.length > 0 && (
            <div className="text-center mt-12">
              <Link href="/case-studies?division=Generator">
                <Button variant="outline" size="lg">View All Generator Projects</Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* PARTNERS - Blue Theme */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Esteemed Partners"
            subtitle="Collaborating with world-leading manufacturers to deliver quality generator solutions"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-12">
            {partners.map((partner, i) => (
              <Card key={i} className="border-2 border-border hover:border-blue-500/50 transition-all cursor-pointer group">
                <CardContent className="p-6 flex items-center justify-center h-24">
                  <div className="text-center">
                    <p className="font-bold text-secondary group-hover:text-blue-600 transition-colors">{partner.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT - Blue Theme */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-secondary mb-6">
                Power Your Business with Confidence
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let our power system engineers design the perfect backup solution for your facility.
                We'll assess your load requirements and recommend the optimal generator configuration.
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-6 rounded-2xl border-2 border-blue-200">
                <h4 className="font-bold text-secondary mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-600" />
                  Free Power Assessment
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>Load calculation & sizing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>Fuel consumption analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>ROI & cost-benefit evaluation</span>
                  </li>
                </ul>
              </div>
            </div>
            <InquiryForm division="Generator" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
