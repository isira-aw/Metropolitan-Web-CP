import { Link } from "wouter";
import { ArrowRight, Zap, Users, Award, Clock, Quote, Eye, Target } from "lucide-react";
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
import { SectionHeaderSmall } from "@/components/SectionHeaderSmall";

const customerLogos = [
  { logo: 'https://ik.imagekit.io/ayen/Metropolitan/BrandLogos/customers/1.png', link: 'https://www.google.com' },
  { logo: 'https://ik.imagekit.io/ayen/Metropolitan/BrandLogos/customers/2.png', link: 'https://www.microsoft.com' },
  { logo: 'https://ik.imagekit.io/ayen/Metropolitan/BrandLogos/customers/3.png', link: 'https://www.amazon.com' },
  { logo: 'https://ik.imagekit.io/ayen/Metropolitan/BrandLogos/customers/4.png', link: 'https://www.netflix.com' },
  { logo: 'https://ik.imagekit.io/ayen/Metropolitan/BrandLogos/customers/5.png', link: 'https://www.google.com' },
  { logo: 'https://ik.imagekit.io/ayen/Metropolitan/BrandLogos/customers/6.png', link: 'https://www.microsoft.com' },
  { logo: 'https://ik.imagekit.io/ayen/Metropolitan/BrandLogos/customers/7.png', link: 'https://www.amazon.com' },
  { logo: 'https://ik.imagekit.io/ayen/Metropolitan/BrandLogos/customers/8.png', link: 'https://www.netflix.com' },
  { logo: 'https://ik.imagekit.io/ayen/Metropolitan/BrandLogos/customers/6.png', link: 'https://www.microsoft.com' },
];

const divisions = [
  {
    name: "ELV Systems",
    slug: "elv",
    image: "https://vallect.com/wp-content/uploads/2024/05/elv-systems-1024x576.webp",
    description: "Advanced Extra Low Voltage systems for smart building integration and security."
  },
  {
    name: "Central AC",
    slug: "central-ac",
    image: "https://airexpert.com/wp-content/uploads/2019/05/Does-the-location-of-your-Central-AC-Unit-Matter-in-Houston.jpg",
    description: "Efficient climate control solutions designed for large-scale industrial and commercial spaces."
  },
  {
    name: "Fire Detection & Protection",
    slug: "fire-detection-and-protection",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpkJhZSArPiBB38xNktZdQJUTdm6SSfu95Fg&s",
    description: "State-of-the-art suppression and detection systems to safeguard lives and assets."
  },
  {
    name: "Elevators Division",
    slug: "elevators-and-travelators",
    image: "https://www.kyodolift.com/images/Travelator-Consultant.webp",
    description: "Modern vertical transportation systems focusing on speed, safety, and smooth operation."
  },
  {
    name: "Generator Division",
    slug: "generator",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Modern_Steam_Turbine_Generator.jpg",
    description: "Sustainable energy solutions combining heavy-duty generators with high-efficiency solar tech."
  },
  {
    name: "Solar Division",
    slug: "solar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZZk7CdkbvNxCiULOXlImwUqiiiYmL_fihFQ&s",
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
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden scroll-smooth">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fadeInLeft { animation: fadeInLeft 0.8s ease-out forwards; }
        .animate-fadeInRight { animation: fadeInRight 0.8s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.6s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        html { scroll-behavior: smooth; }
      `}</style>

      <Navbar />

      {/* ═══ HERO SECTION ═══ */}
      <section className="relative h-screen min-h-[500px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-300"
          style={{
            backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPE0nJP6lljVQqlH-etWyDBE50Yo1Z41eFA&s')`,
            transform: `scale(1.1) translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 z-10 bg-secondary/80" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute top-20 right-10 md:right-20 w-48 h-48 md:w-72 md:h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 md:left-20 w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

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
                  Metropolitan
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  initial={{ y: "105%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                  className="block leading-[1.2] text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[var(--metro-light-blue)]"
                  style={{ display: "inline-block" }}
                >
                  Technologies
                </motion.span>
              </div>
            </motion.h1>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 md:mb-12 opacity-0 animate-fadeInUp delay-200 leading-relaxed px-2">
            Engineering excellence across six core departments: Central AC, Elevators, Fire Protection, Generators, ELV & Solar
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 opacity-0 animate-fadeInUp delay-300">
            <Link href="/case-studies">
              <button className="btn-metro group">
                <span className="relative z-10">Explore Projects</span>
                <ArrowRight className="relative z-10 w-5 h-5" />
                <span className="btn-hover-fill" />
                <div className="absolute inset-0 bg-[#C90815] translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>
            </Link>
            <Link href="/contact">
              <button className="btn-metro group">
                <span className="relative z-10">Contact Us</span>
              </button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 z-20 opacity-0 animate-fadeInUp delay-500">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-30 pointer-events-none rotate-180">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-[120px]"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,42.7C840,32,960,32,1080,48C1200,64,1320,96,1380,112L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            />
          </svg>
        </div>
      </section>

      {/* ═══ MISSION & VISION ═══ */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="block text-secondary font-display text-lg md:text-2xl mb-2 font-medium">
              Our,
            </span>

            <div className="relative inline-block">
              <h2
                className="text-[14vw] sm:text-[12vw] md:text-[7vw] font-black leading-none tracking-tighter uppercase select-none"
                style={{
                  backgroundImage: `url('https://www.shutterstock.com/image-photo/black-grass-texture-background-garden-600nw-2458818987.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Mission & Vision
              </h2>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-white/10" />
            </div>

            <div className="mt-6 md:mt-8 flex justify-center">
              <div className="h-1 w-24 bg-gradient-to-r from-secondary to-[var(--metro-light-blue)] rounded-full" />
            </div>
          </div>

          <div className="mt-8 md:mt-16 text-center max-w-4xl mx-auto">
            <div className="opacity-0 animate-fadeInLeft delay-100">
              <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                We offer Work Place and Personal Productivity solutions and services that exceed customer expectations and unparalleled marketing capabilities to our business partners whilst providing our Staff the opportunity for personal advancement with performance based recognition and rewards.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-10 leading-relaxed">
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
                    className="group flex items-center gap-3 p-3 md:p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex h-1 w-5 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-xl group-hover:bg-primary group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-sm md:text-lg font-medium text-secondary group-hover:text-primary transition-colors">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <Button variant="ghost" className="p-0 text-primary font-bold text-base md:text-lg h-auto hover:gap-3 transition-all">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OUR DIVISIONS ═══ */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-16">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight">
              Our Divisions
            </h2>
            <div className="section-divider" />
          </div>

          {/* Navigation Tabs - Added for manual change */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {divisions.map((div, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full transition-all border ${activeTab === idx
                  ? "bg-[#144A92] text-white border-[#144A92]"
                  : "bg-transparent text-gray-400 border-gray-200 hover:border-[#144A92]"
                  }`}
              >
                {div.name}
              </button>
            ))}
          </div>

          {/* Division Content */}
          <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-12 bg-muted/30 rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-lg transition-all duration-500">
            <div className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
              <h3 className="text-2xl md:text-4xl font-display font-bold text-black tracking-tight">
                {divisions[activeTab].name}
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed pb-2 min-h-[60px] md:min-h-[80px] lg:min-h-0">
                {divisions[activeTab].description}
              </p>
              <Link href={`/divisions/${divisions[activeTab].slug}`}>
                <button className="btn-metro group mt-2 md:mt-4">
                  <span className="relative z-10">Explore Division</span>
                  <ArrowRight className="relative z-10 w-5 h-5" />
                  <span className="btn-hover-fill" />
                  <div className="absolute inset-0 bg-[#C90815] translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </button>
              </Link>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  key={activeTab}
                  src={divisions[activeTab].image}
                  alt={divisions[activeTab].name}
                  className="w-full h-full object-cover animate-in fade-in zoom-in duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OUR PLATFORMS ═══ */}
      <section className="py-10 md:py-16 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-secondary tracking-tight">
              Our Platforms
            </h2>
            <div className="section-divider" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Our platforms are designed to empower businesses with cutting-edge technology and seamless integration.
            </p>
          </div>

          <div className="relative overflow-hidden mt-8 md:mt-12">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none" />
            <div className="relative flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-12 opacity-0 animate-fadeInUp delay-100">
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
                  className="group relative flex items-center justify-center w-full sm:w-56 md:w-64 lg:w-80 h-28 sm:h-32 md:h-40 lg:h-48 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-gray-100 bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2 md:hover:-translate-y-4 transition-all duration-500 ease-out"
                >
                  <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={platform.img}
                    alt={platform.alt}
                    className="relative h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="py-10 md:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4 md:gap-6">
            {/* LEFT: Heading */}
            <div className="text-left">
              <h2 className="text-2xl md:text-4xl font-display font-bold text-secondary tracking-tight">
                Why Metropolitan?
              </h2>
              <div className="section-divider" />
            </div>
            <p className="text-base md:text-lg text-muted-foreground max-w-md border-l-4 border-primary pl-4 md:pl-6 py-2">
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
                gradient: "from-amber-600/20 to-orange-600/20",
                img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop"
              },
              {
                icon: Users,
                title: "Trained Staff",
                desc: "Expert professionals undergo 200+ hours of specialized training yearly.",
                span: "sm:col-span-1 lg:col-span-4",
                gradient: "from-blue-600/20 to-indigo-600/20",
                img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop"
              },
              {
                icon: Award,
                title: "Quality Assurance",
                desc: "Every project passes a 50-point inspection protocol before delivery.",
                span: "sm:col-span-2 lg:col-span-4 lg:row-span-2",
                gradient: "from-emerald-600/20 to-teal-600/20",
                isLarge: true,
                img: "https://www.smallbizdaily.com/wp-content/uploads/2021/10/shutterstock_1155561991.jpg"
              },
              {
                icon: Clock,
                title: "24/7 Priority Support",
                desc: "Round-the-clock emergency response units always on standby.",
                span: "sm:col-span-2 lg:col-span-8",
                gradient: "from-purple-600/20 to-fuchsia-600/20",
                img: "https://media.istockphoto.com/id/1494073880/photo/a-man-holding-icon-virtual-24-7-support-services-for-worldwide-nonstop-and-full-time.jpg?s=170667a&w=0&k=20&c=HoMXtrk5Js-aKnhIfceYqFKvWuFZjgATmWbcVkb1fuQ="
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden rounded-2xl md:rounded-3xl border border-slate-200 p-6 md:p-8 transition-all duration-500 hover:shadow-2xl ${feature.span}`}
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-70" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent" />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`} />
                <div className="relative z-20 h-full flex flex-col">
                  <div className={feature.isLarge ? "mt-auto" : "mt-auto sm:mt-8"}>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">{feature.title}</h3>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors duration-300">
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
        <section className="py-10 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl md:text-4xl font-display font-bold text-secondary tracking-tight">
                What Our Clients Say
              </h2>
              <div className="section-divider" />
              <p className="text-muted-foreground italic mt-4 md:mt-6 leading-relaxed text-sm md:text-base">
                "Trusted by industry leaders across multiple sectors."
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12">
              {testimonialsData.slice(0, 6).map((testimonial, i) => (
                <Card key={testimonial.id} className={`border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 opacity-0 animate-fadeInUp delay-${Math.min(i + 1, 5)}00`}>
                  <div className="p-5 md:p-8">
                    <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary/20 mb-3 md:mb-4" />
                    <p className="text-muted-foreground italic mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-3 pt-3 md:pt-4 border-t">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-base md:text-lg">
                        {testimonial.author[0]}
                      </div>
                      <div>
                        <p className="font-bold text-secondary text-sm md:text-base">{testimonial.author}</p>
                        <p className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</p>
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
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-secondary tracking-tight">
              Featured Projects
            </h2>
            <div className="section-divider" />
            <p className="text-muted-foreground italic mt-4 md:mt-6 leading-relaxed text-sm md:text-base">
              Highlighting our recent contributions to the urban landscape
            </p>
          </div>

          <Link href="/case-studies" className="hidden lg:flex items-center text-primary font-bold text-lg hover:gap-3 transition-all mt-6 mb-3">
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-6 md:mt-0">
            {latestProjects?.data?.map((project, i) => (
              <div key={project.id} className={`opacity-0 animate-fadeInUp delay-${Math.min(i + 1, 3)}00`}>
                <CaseStudyCard item={project} />
              </div>
            )) || (
                Array(3).fill(0).map((_, i) => (
                  <div key={i} className="h-[300px] md:h-[400px] bg-muted animate-pulse rounded-2xl" />
                ))
              )}
          </div>

          <Link href="/case-studies" className="flex lg:hidden items-center justify-center text-primary font-bold text-base hover:gap-3 transition-all mt-6">
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ═══ INQUIRY SECTION ═══ */}
      <section className="py-10 md:py-16 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 md:w-96 h-64 md:h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-56 md:w-80 h-56 md:h-80 bg-primary/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="text-white text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 leading-tight text-white">
                Let's Build Something Extraordinary Together
              </h2>
              <p className="text-white/80 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                Whether you have a complex infrastructure project or a sustainable residential development in mind, our team is ready to bring your vision to life.
              </p>
              <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 inline-block text-left">
                {["Free consultation and project estimation", "Comprehensive feasibility studies", "End-to-end project management"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                    <span className="font-medium text-sm md:text-base">{item}</span>
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

      {/* ═══ TRUSTED CUSTOMERS ═══ */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 animate-fadeInUp delay-300">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-secondary tracking-tight">
              Our Trusted Customers
            </h2>
            <div className="section-divider" />
            <p className="text-muted-foreground italic mt-4 md:mt-6 leading-relaxed text-sm md:text-base">
              We proudly collaborate with industry leaders worldwide
            </p>
          </div>

          <div className="relative overflow-hidden mt-8 md:mt-12">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(27,59,110,0.05)_0%,transparent_70%)] pointer-events-none" />
            <div className="relative flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
              {customerLogos.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center rounded-xl md:rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-sm shadow-[0_2px_10px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 p-2"
                >
                  <div className="absolute inset-0 rounded-xl md:rounded-2xl border-2 border-transparent group-hover:border-blue-500/10 transition-colors duration-500" />
                  <img
                    src={item.logo}
                    alt="Customer Logo"
                    className="h-10 sm:h-12 md:h-16 w-auto object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                  <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-blue-500 scale-0 group-hover:scale-100 transition-transform duration-300 delay-100" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LATEST NEWS ═══ */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-6 md:gap-12 bg-muted/30 rounded-2xl md:rounded-3xl p-4 md:p-8 lg:p-12 shadow-lg">
            <div className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
                      <SectionHeaderSmall
          title="What Are The Latest Updates?"
        />
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed pb-2 md:pb-4">
                Showcasing our projects and engineering achievements across diverse industries
              </p>
              <Link href="/news">
                <button className="btn-metro group">
                  <span className="relative z-10">Our News</span>
                  <ArrowRight className="relative z-10 w-5 h-5" />
                  <span className="btn-hover-fill" />
                  <div className="absolute inset-0 bg-[#C90815] translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </button>
              </Link>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop"
                  alt="Latest news"
                  className="w-full h-full object-cover"
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
