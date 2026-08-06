import { Link } from "wouter";
import { ArrowRight, Zap, Users, Award, Clock, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { InquiryForm } from "@/components/InquiryForm";
import { Button } from "@/components/ui/button";
import { useCaseStudies } from "@/hooks/use-case-studies";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { useTestimonials } from "@/hooks/use-testimonials";

const divisions = [
  {
    name: "ELV Systems",
    slug: "elv",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    description: "Advanced Extra Low Voltage systems for smart building integration and security."
  },
  {
    name: "Central AC",
    slug: "central-ac",
    image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=1200&auto=format&fit=crop",
    description: "Efficient climate control solutions designed for large-scale industrial and commercial spaces."
  },
  {
    name: "Fire Detection & Protection",
    slug: "fire-detection-and-protection",
    image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1200&auto=format&fit=crop",
    description: "State-of-the-art suppression and detection systems to safeguard lives and assets."
  },
  {
    name: "Elevators Division",
    slug: "elevators-and-travelators",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200&auto=format&fit=crop",
    description: "Modern vertical transportation systems focusing on speed, safety, and smooth operation."
  },
  {
    name: "Generator Division",
    slug: "generator",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop",
    description: "Sustainable energy solutions combining heavy-duty generators with high-efficiency solar tech."
  },
  {
    name: "Solar Division",
    slug: "solar",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
    description: "Sustainable energy solutions combining heavy-duty generators with high-efficiency solar tech."
  }
];

export default function Home() {
  const { data: latestProjects } = useCaseStudies({ limit: 3 });
  const [scrollY, setScrollY] = useState(0);

  const { data: testimonialsData } = useTestimonials({ limit: 6 });
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % divisions.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-[#424242] overflow-x-hidden scroll-smooth">
      <Navbar />

      {/* ═══ HERO SECTION ═══ */}
      <section className="relative h-screen min-h-[500px] md:min-h-[700px] flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-300"
          style={{
            backgroundImage: `url('/metroteam.jpg')`,
            transform: `scale(1.1) translateY(${scrollY * 0.5}px)`
          }}
        />


        {/* Blue Overlay */}
        <div className="absolute inset-0 z-10 bg-[#0a264a]/70" />

        {/* Gradient Depth */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-blue-800/40 via-transparent to-blue-900/60" />

        {/* Blueprint Grid Signature Motif */}
        <div className="absolute inset-0 z-10 blueprint-grid opacity-30" />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 pb-16 md:pb-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="eyebrow inline-block text-[var(--metro-light-blue)] mb-4 md:mb-6"
          >
            Engineering Excellence Since Day One
          </motion.span>
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
                  Metropolitan
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
                  Technologies
                </motion.span>
              </div>
            </motion.h1>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 md:mb-12 animate-scroll-reveal delay-200 leading-relaxed px-2">
            Engineering excellence across six core departments: Central AC, Elevators, Fire Protection, Generators, ELV & Solar
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-scroll-reveal delay-300">
            <Link href="/case-studies">
              <button className="btn-metro border border-white/80 hover:border-white/40">
                Explore Projects
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="btn-metro border border-white/80 hover:border-white/40">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden sm:block absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 animate-fade-in delay-500">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg
            viewBox="0 0 1440 150"
            className="w-full h-[100px]"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,64L80,80C160,96,320,128,480,122.7C640,117,800,75,960,69.3C1120,64,1280,96,1360,112L1440,128L1440,160L1360,160C1280,160,1120,160,960,160C800,160,640,160,480,160C320,160,160,160,80,160L0,160Z"
            />
          </svg>
        </div>

      </section>


      {/* ═══ MISSION & VISION ═══ */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="eyebrow block text-[var(--metro-blue)] mb-3">
              Who We Are
            </span>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-none tracking-tighter uppercase text-black">
              Mission & Vision
            </h2>

            <div className="mt-6 md:mt-8 flex justify-center">
              <div className="h-[2px] w-24 bg-[#144A92]/20 rounded-full" />
            </div>
          </div>

          <div className="mt-8 md:mt-16 text-center max-w-4xl mx-auto">
            <div className="animate-scroll-reveal delay-100">
              <p className="text-base md:text-lg text-[#424242] mb-4 md:mb-6 leading-relaxed">
                We offer Work Place and Personal Productivity solutions and services that exceed customer expectations and unparalleled marketing capabilities to our business partners whilst providing our Staff the opportunity for personal advancement with performance based recognition and rewards.
              </p>
              <p className="text-base md:text-lg text-[#424242] mb-8 md:mb-10 leading-relaxed">
                Our vision is to build infrastructure that not only meets the needs of today but anticipates the challenges of tomorrow, fostering communities that are resilient, connected, and vibrant.
              </p>

              <div className="grid gap-3 md:gap-4 mb-8 md:mb-10 grid-cols-1 sm:grid-cols-3 max-w-4xl mx-auto">
                {[
                  { icon: "", text: "Powering Progress with Precision" },
                  { icon: "", text: "Electrical Engineering Excellence" },
                  { icon: "", text: "Powering the Future Through Expertise" }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="card-hover flex items-center gap-3 p-3 md:p-4 rounded-xl bg-white border border-gray-100 shadow-sm"
                  >
                    <div className="flex h-1 w-5 shrink-0 items-center justify-center rounded-lg bg-[#144A92]/50 hover:bg-[#D0122B] text-xl">
                      {item.icon}
                    </div>
                    <span className="text-sm md:text-lg font-medium text-[#424242]">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <Button variant="ghost" className="p-0 text-[#144A92] font-bold text-base md:text-lg h-auto hover:gap-3 transition-all">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OUR DIVISIONS ═══ */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-16">
          <div className="text-center">
            <span className="eyebrow block text-[var(--metro-blue)] mb-3">
              What We Do
            </span>
            <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight text-black">
              Our Divisions
            </h2>
            <div className="section-divider" />
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {divisions.map((div, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-widest rounded-full transition-all duration-300 border ${activeTab === idx
                  ? "bg-[#144A92] text-white border-[#144A92]"
                  : "bg-transparent text-[#424242] border-gray-200 hover:border-[#144A92]/40 hover:text-[#144A92]"
                  }`}
              >
                {div.name}
              </button>
            ))}
          </div>

          {/* Division Content */}
          <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-12 bg-gray-50 rounded-xl p-4 md:p-8 shadow-sm transition-all duration-500">
            <div className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
              <h3 className="text-2xl md:text-4xl font-display font-bold text-black tracking-tight">
                {divisions[activeTab].name}
              </h3>
              <p className="text-base md:text-lg text-[#424242] leading-relaxed pb-2 min-h-[60px] md:min-h-[80px] lg:min-h-0">
                {divisions[activeTab].description}
              </p>
              <Link href={`/divisions/${divisions[activeTab].slug}`}>
                <button className="btn-metro mt-2 md:mt-4">
                  Explore Division
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg animate-image-pop card-hover">
                <img
                  key={activeTab}
                  src={divisions[activeTab].image}
                  alt={divisions[activeTab].name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OUR PLATFORMS ═══ */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="eyebrow block text-[var(--metro-blue)] mb-3">
              Group Ecosystem
            </span>
            <h2 className="text-2xl md:text-4xl font-display font-bold text-black tracking-tight">
              Our Platforms
            </h2>
            <div className="section-divider" />
            <p className="text-[#424242] mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Our platforms are designed to empower businesses with cutting-edge technology and seamless integration.
            </p>
          </div>

          <div className="mt-8 md:mt-12">
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-12 animate-scroll-reveal delay-100">
              {[
                { img: "https://www.metrocorpgroup.com/web/image/website/6/logo?unique=e6d8511", alt: "Metrocorp", href: "https://www.metrocorp.net/" },
                { img: "https://media.licdn.com/dms/image/v2/C560BAQFCM7g-fP9IzQ/company-logo_200_200/company-logo_200_200/0/1630664045240?e=2147483647&v=beta&t=PNaC8Yed1qrnA1Il8cFyRzyLJWE3eSaAuCx0WUEsNP8", alt: "mCentre", href: "https://mcentre.lk/" },
                { img: "https://www.metropolitan.lk/img/metrologo.png", alt: "Metropolitan", href: "https://www.metropolitan.lk/" },
              ].map((platform, i) => (
                <a
                  key={i}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-full sm:w-56 md:w-64 lg:w-80 h-28 sm:h-32 md:h-40 lg:h-48 p-4 md:p-6 rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <img
                    src={platform.img}
                    alt={platform.alt}
                    className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain transition-all duration-500 group-hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4 md:gap-6">
            <div className="flex-1">
              <span className="eyebrow block text-[var(--metro-blue)] mb-3">
                Why Metropolitan
              </span>
              <SectionHeader title="Why Metropolitan?" subtitle="" />
            </div>
            <p className="text-base md:text-lg text-[#424242] max-w-md border-l-2 border-[#144A92]/30 pl-4 md:pl-6 py-2">
              We combine industrial-grade power with surgical precision to deliver results that redefine standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[240px]">
            {[
              {
                icon: Zap,
                title: "Advanced Equipment",
                desc: "Harnessing state-of-the-art tools and AI-driven tech for superior results.",
                span: "sm:col-span-1 lg:col-span-4",
                img: "https://images.unsplash.com/photo-1520869562399-e772f042f422?q=80&w=1200&auto=format&fit=crop"
              },
              {
                icon: Users,
                title: "Trained Staff",
                desc: "Expert professionals undergo 200+ hours of specialized training yearly.",
                span: "sm:col-span-1 lg:col-span-4",
                img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop"
              },
              {
                icon: Award,
                title: "Quality Assurance",
                desc: "Every project passes a 50-point inspection protocol before delivery.",
                span: "sm:col-span-2 lg:col-span-4 lg:row-span-2",
                isLarge: true,
                img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop"
              },
              {
                icon: Clock,
                title: "24/7 Priority Support",
                desc: "Round-the-clock emergency response units always on standby.",
                span: "sm:col-span-2 lg:col-span-8",
                img: "https://images.unsplash.com/photo-1553775282-20af80779df7?q=80&w=1200&auto=format&fit=crop"
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden rounded-xl border border-gray-100 p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${feature.span}`}
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/70 transition-opacity duration-300 group-hover:bg-black/40" />
                </div>
                <div className="relative z-20 h-full flex flex-col">
                  <div className={feature.isLarge ? "mt-auto" : "mt-auto sm:mt-8"}>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">{feature.title}</h3>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      {testimonialsData && testimonialsData.length > 0 && (
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="eyebrow block text-[var(--metro-blue)] mb-3">
                Client Feedback
              </span>
              <h2 className="text-2xl md:text-4xl font-display font-bold text-black tracking-tight">
                What Our Clients Say
              </h2>
              <div className="section-divider" />
              <p className="text-[#424242] mt-4 md:mt-6 leading-relaxed text-sm md:text-base">
                Trusted by industry leaders across multiple sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12">
              {testimonialsData.slice(0, 6).map((testimonial, i) => (
                <Card key={testimonial.id} className={`border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scroll-reveal delay-${Math.min(i + 1, 5)}00`}>
                  <div className="p-5 md:p-8">
                    <Quote className="w-8 h-8 md:w-10 md:h-10 text-[#144A92]/15 mb-3 md:mb-4" />
                    <p className="text-[#424242] italic mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-3 pt-3 md:pt-4 border-t border-gray-100">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#144A92]/5 flex items-center justify-center text-[#144A92] font-bold text-base md:text-lg">
                        {testimonial.author[0]}
                      </div>
                      <div>
                        <p className="font-bold text-black text-sm md:text-base">{testimonial.author}</p>
                        <p className="text-xs md:text-sm text-[#424242]">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ LATEST PROJECTS ═══ */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="eyebrow block text-[var(--metro-blue)] mb-3">
              Our Work
            </span>
            <h2 className="text-2xl md:text-4xl font-display font-bold text-black tracking-tight">
              Featured Projects
            </h2>
            <div className="section-divider" />
            <p className="text-[#424242] mt-4 md:mt-6 leading-relaxed text-sm md:text-base">
              Highlighting our recent contributions to the urban landscape
            </p>
          </div>

          <Link href="/case-studies" className="hidden lg:flex items-center text-[#144A92] font-bold text-lg hover:gap-3 transition-all mt-6 mb-3">
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-6 md:mt-0">
            {latestProjects?.data?.map((project, i) => (
              <div key={project.id} className={`animate-scroll-reveal delay-${Math.min(i + 1, 3)}00`}>
                <CaseStudyCard item={project} />
              </div>
            )) || (
                Array(3).fill(0).map((_, i) => (
                  <div key={i} className="h-[300px] md:h-[400px] bg-gray-100 animate-pulse rounded-xl" />
                ))
              )}
          </div>

          <Link href="/case-studies" className="flex lg:hidden items-center justify-center text-[#144A92] font-bold text-base hover:gap-3 transition-all mt-6">
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ═══ INQUIRY SECTION ═══ */}
      <section className="section-padding bg-[#144A92]/[0.04] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 leading-tight text-black">
                Let's Build Something Extraordinary Together
              </h2>
              <p className="text-[#424242] text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                Whether you have a complex infrastructure project or a sustainable residential development in mind, our team is ready to bring your vision to life.
              </p>
              <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 inline-block text-left">
                {["Free consultation and project estimation", "Comprehensive feasibility studies", "End-to-end project management"].map((item, i) => (
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
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LATEST NEWS ═══ */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-6 md:gap-12 bg-gray-50 rounded-xl p-4 md:p-8 lg:p-12 shadow-sm card-hover">
            <div className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
              <span className="eyebrow block text-[var(--metro-blue)] mb-1">
                From The Blog
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-black tracking-tight">
                What Are The Latest Updates?
              </h3>
              <p className="text-base md:text-lg text-[#424242] leading-relaxed pb-2 md:pb-4">
                Showcasing our projects and engineering achievements across diverse industries
              </p>
              <Link href="/news">
                <button className="btn-metro">
                  Our Blog
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop"
                  alt="Latest news"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
