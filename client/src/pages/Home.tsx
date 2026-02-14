import { Link } from "wouter";
import { ArrowRight, Zap, Users, Award, Clock, Quote, CheckCircle, Sun, Battery, Shield, Activity, Leaf, Play, Check } from "lucide-react";
import { motion } from 'framer-motion';
import { Footer } from "@/components/Footer";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { InquiryForm } from "@/components/InquiryForm";
import { Button } from "@/components/ui/button";
import { useCaseStudies } from "@/hooks/use-case-studies";
import { Card } from "@/components/ui/card";
import { useState, useEffect, ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { useTestimonials } from "@/hooks/use-testimonials";
import { SectionHeaderSmall } from "@/components/SectionHeaderSmall";

export default function Home() {
  const { data: latestProjects } = useCaseStudies({ limit: 3 });
  const [scrollY, setScrollY] = useState(0);

  const { data: testimonialsData } = useTestimonials({ limit: 6 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Colors based on user preference
  const COLORS = {
    primary: "#6EC1E4",      // Light Blue (as specified)
    secondary: "#144A92",   // Dark Blue (replacing green accent)
    dark: "#060606",
    gray: "#7A7A7A",
    text: "#424242"
  };

  const divisions = [
    {
      name: "Central AC",
      description: "Advanced climate control systems for commercial and industrial spaces",
      icon: Activity,
      color: COLORS.primary,
      link: "/divisions/central-ac"
    },
    {
      name: "Elevators",
      description: "Vertical transportation solutions with cutting-edge safety features",
      icon: Zap,
      color: COLORS.secondary,
      link: "/divisions/elevators"
    },
    {
      name: "Fire Protection",
      description: "Comprehensive fire safety and suppression systems",
      icon: Shield,
      color: "#61CE70",
      link: "/divisions/fire-protection"
    },
    {
      name: "Generators",
      description: "Reliable backup power solutions for uninterrupted operations",
      icon: Battery,
      color: COLORS.gray,
      link: "/divisions/generator"
    },
    {
      name: "ELV Systems",
      description: "Extra low voltage systems including security and automation",
      icon: Award,
      color: COLORS.secondary,
      link: "/divisions/elv"
    },
    {
      name: "Solar Energy",
      description: "Sustainable solar power solutions for a greener future",
      icon: Sun,
      color: "#61CE70",
      link: "/divisions/solar"
    }
  ];

  const features = [
    {
      title: "Sustainable Solutions",
      description: "Eco-friendly technologies that reduce environmental impact while maximizing efficiency",
      icon: Leaf,
      stat: "40%",
      statLabel: "Energy Savings"
    },
    {
      title: "Expert Team",
      description: "Certified professionals with decades of combined industry experience",
      icon: Users,
      stat: "65+",
      statLabel: "Years Experience"
    },
    {
      title: "Quality Assured",
      description: "ISO certified processes ensuring the highest standards of delivery",
      icon: Award,
      stat: "500+",
      statLabel: "Projects Completed"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical assistance for peace of mind",
      icon: Clock,
      stat: "24/7",
      statLabel: "Customer Support"
    }
  ];

  const stats = [
    { number: "65+", label: "Years of Excellence" },
    { number: "500+", label: "Projects Completed" },
    { number: "200+", label: "Expert Engineers" },
    { number: "24/7", label: "Support Available" }
  ];

  // Custom Button Template
const ButtonTemplate = ({ children, href, isArrow }: { children: ReactNode; href: string; isArrow?: boolean }) => (
  <Link href={href}>
    <button className="relative px-6 py-2.5 bg-[#144C94] mt-6 text-white font-bold text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden group">
      {/* Content Container */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {isArrow && (
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
        )}
      </span>

      {/* Hover Slide Background */}
      <div className="absolute inset-0 bg-[#C90815] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
    </button>
  </Link>
);

  return (
    <div className="min-h-screen bg-white font-body text-[#424242] overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION - Full Screen with Geometric Cut */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#060606]">

        {/* Background Image with Parallax */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />

        {/* Multi-layered Overlays for Depth */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#060606] via-[#060606]/80 to-transparent" />
        <div className="absolute inset-0 z-10 bg-[#144A92]/10 mix-blend-overlay" />

        {/* The "Cut" Shape - CSS Clip Path */}
        <div
          className="absolute bottom-0 left-0 w-full h-24 bg-white z-30"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
        />

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-4xl"> {/* Left-aligned for a more modern corporate look */}


            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-white mb-8 leading-[1.1] tracking-tight">
              <span className="relative">
                Metropolitan
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#C90815]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="2" fill="transparent" />
                </svg>
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6EC1E4] to-[#144A92]">
                Technologies
              </span>
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-6">
              <ButtonTemplate href="/case-studies">
                Explore Projects
              </ButtonTemplate>

              <Link href="/contact" className="group flex mt-6 items-center gap-3 text-white font-heading font-semibold text-lg">
                <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-all">
                  <Play className="w-4 h-4 fill-white" />
                </span>
                Watch Showreel
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Number */}
        <div className="absolute bottom-20 right-12 z-20 hidden lg:block">
          <span className="text-[12rem] font-heading text-white/5 leading-none select-none">
            01
          </span>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-40">
          <span className="text-white/80 text-xs font-accent tracking-[0.2em] uppercase">
            Engineering Excellence Since 1958
          </span>
        </div>
      </section>

      {/* DIVISIONS SHOWCASE - Icon as Background + Red Accent Line */}
      <section className="py-32 bg-[#FAFBFC] overflow-hidden">
        <div className="max-w-7xl mx-auto lg:px-8">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div className="max-w-xl">
              <span className="text-[#6EC1E4] font-accent tracking-widest uppercase text-sm font-bold mb-4 block">
                Our Expertise
              </span>
              <h2 className="text-4xl md:text-5xl font-heading text-[#060606] leading-tight">
                Engineering the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#144A92] to-[#6EC1E4]">
                  Future of Infrastructure
                </span>
              </h2>
            </div>

            <p className="text-[#7A7A7A] text-lg max-w-md font-body pb-1">
              Innovative divisions specialized in delivering high-impact, sustainable engineering solutions across global sectors.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {divisions.map((division, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={division.link} className="group block h-full">
                  <div className="relative h-full p-6 rounded-xl border border-gray-100 bg-[#F9FAFB] hover:bg-white hover:shadow-xl hover:shadow-[#6EC1E4]/10 transition-all duration-500 ease-out overflow-hidden">


                    {/* Hover Accent Line Top */}
                    <div className="absolute top-0 left-0 w-0 h-0.5 bg-[#144A92] transition-all duration-300 group-hover:w-full rounded-t-xl" />

                    {/* ICON AS BACKGROUND */}
                    <division.icon
                      className="absolute -right-16 -bottom-16 w-48 h-48 opacity-[0.2] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-500"
                      style={{ color: division.color }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      <SectionHeaderSmall
                        title={division.name}
                        subtitle={division.description}
                        className="mb-6"
                      />


                      <div className="flex items-center text-[10px] font-bold uppercase tracking-wider text-[#C90815] transform translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                        View Details <ArrowRight className="w-3 h-3 ml-1" />
                      </div>
                    </div>

                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ABOUT/FEATURES SECTION - Modern Bento Style */}
      <section className="py-24 bg-[#FFFFFF] relative overflow-hidden">
        {/* Subtle Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#144A92] blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#6EC1E4] blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left Content Side */}
            <div className="lg:w-2/5 sticky top-24">

              
              <h2 className="text-4xl md:text-5xl font-heading text-[#060606] mb-8 leading-[1.1]">
                Engineering <br /> 
                <span className="italic font-light">Excellence</span> through <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#144A92] to-[#6EC1E4]">Forward Innovation</span>
              </h2>

              <p className="text-[#7A7A7A] text-lg font-body leading-relaxed mb-10 max-w-md">
                We don't just build infrastructure; we engineer sustainable legacies. 
                Our approach merges classic precision with next-gen technology.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  "Industry-leading technical expertise",
                  "Sustainable and eco-friendly solutions",
                  "Comprehensive project management",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:border-[#6EC1E4] transition-colors">
                      <Check className="w-4 h-4 text-[#144A92]" />
                    </div>
                    <span className="text-[#424242] font-medium font-body">{item}</span>
                  </div>
                ))}
              </div>

              <ButtonTemplate href="/about" isArrow={false}>
                Discover Our Story
              </ButtonTemplate>
            </div>

            {/* Right Features Grid (Bento Style) */}
            <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className={`group relative p-8 rounded-[2rem] transition-all duration-500 hover:-translate-y-2
                    ${i === 0 ? 'md:col-span-2 bg-[#060606] text-white' : 'bg-[#F8FAFC] border border-gray-100 text-[#060606]'}
                    ${i === 1 ? 'hover:shadow-2xl hover:shadow-[#144A92]/10' : 'hover:shadow-2xl hover:shadow-[#6EC1E4]/10'}
                  `}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6
                    ${i === 0 ? 'bg-white/10 text-[#6EC1E4]' : 'bg-white shadow-sm text-[#144A92]'}
                  `}>
                    <feature.icon className="w-6 h-6" />
                  </div>

                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-heading font-bold tracking-tight">{feature.stat}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${i === 0 ? 'text-white/40' : 'text-[#7A7A7A]'}`}>
                      {feature.statLabel}
                    </span>
                  </div>

                  <h3 className={`text-xl font-heading mb-3 ${i === 0 ? 'text-white' : 'text-[#060606]'}`}>
                    {feature.title}
                  </h3>
                  
                  <p className={`text-sm leading-relaxed ${i === 0 ? 'text-white/60' : 'text-[#7A7A7A]'}`}>
                    {feature.description}
                  </p>

                  {/* Decorative element for the dark card */}
                  {i === 0 && (
                    <div className="absolute top-0 right-0 p-8 opacity-20">
                      <div className="w-24 h-24 border-r-2 border-t-2 border-[#6EC1E4] rounded-tr-3xl" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </section>


      {/* MISSION & VISION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                  alt="Company site"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content Side */}
            <div>
              <h2 className="text-3xl md:text-4xl font-heading text-[#060606] mb-6">
                Our Mission & Vision
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#6EC1E4] to-[#144A92] rounded-full mb-8" />

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-heading text-[#144A92] mb-3"></h3>
                  <p className="text-[#7A7A7A] font-body leading-relaxed">

                  </p>
                </div>
                <SectionHeaderSmall
                  title="Our Mission"
                  subtitle="We offer Workplace and Personal Productivity solutions and services that exceed
                    customer expectations, whilst providing our staff the opportunity for personal
                    advancement with performance-based recognition and rewards."
                  className="mb-6"
                />
                <SectionHeaderSmall
                  title="Our Vision"
                  subtitle="To be the leading provider of innovative and sustainable solutions that empower businesses and individuals to thrive in a rapidly evolving world."
                  className="mb-6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* TESTIMONIALS */}
      {testimonialsData && testimonialsData.length > 0 && (
        <section className="py-24 bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading text-[#060606] mb-4">
                What Our Clients Say
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#6EC1E4] to-[#144A92] mx-auto rounded-full mb-6" />
              <p className="text-[#7A7A7A] text-lg font-body max-w-2xl mx-auto">
                Trusted by industry leaders across multiple sectors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonialsData.slice(0, 6).map((testimonial, i) => (
                <Card
                  key={testimonial.id}
                  className="border-none shadow-md hover:shadow-lg transition-all duration-300 bg-white"
                >
                  <div className="p-6">
                    <Quote className="w-8 h-8 text-[#6EC1E4]/30 mb-4" />
                    <p className="text-[#7A7A7A] font-body italic mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <div className="w-12 h-12 rounded-full bg-[#6EC1E4]/10 flex items-center justify-center text-[#6EC1E4] font-heading font-bold text-lg">
                        {testimonial.author[0]}
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-[#060606]">{testimonial.author}</p>
                        <p className="text-sm text-[#7A7A7A] font-body">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* LATEST PROJECTS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading text-[#060606] mb-2">
                Featured Projects
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#6EC1E4] to-[#144A92] rounded-full" />
            </div>
            <Link href="/case-studies" className="flex items-center text-[#6EC1E4] font-heading font-semibold hover:gap-2 transition-all">
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestProjects?.data?.map((project) => (
              <CaseStudyCard key={project.id} item={project} />
            )) || (
                Array(3).fill(0).map((_, i) => (
                  <div key={i} className="h-[350px] bg-gray-100 animate-pulse rounded-xl" />
                ))
              )}
          </div>

          <div className="mt-12 text-center md:hidden">
            <ButtonTemplate href="/case-studies">
              View All Projects
            </ButtonTemplate>
          </div>
        </div>
      </section>


      {/* INQUIRY SECTION */}
      <section className="py-24 bg-[#060606] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6EC1E4]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#144A92]/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white mb-6">
                Let's Build Something <span className="text-[#6EC1E4]">Extraordinary</span> Together
              </h2>
              <p className="text-white/70 text-lg font-body mb-8 leading-relaxed">
                Whether you have a complex infrastructure project or a sustainable development in mind,
                our team is ready to bring your vision to life.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Free consultation and project estimation",
                  "Comprehensive feasibility studies",
                  "End-to-end project management"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#144A92] flex items-center justify-center shrink-0">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white/80 font-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-heading text-[#060606] mb-6">Send Us an Inquiry</h3>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>


      {/* BLOG & CONTACT SECTIONS */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
          {/* Blog Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-heading text-[#060606]">
                What Have We Done?
              </h3>
              <p className="text-[#7A7A7A] font-body leading-relaxed">
                Showcasing our projects and engineering achievements across diverse industries
              </p>
              <ButtonTemplate href="/news" isArrow={true}>
                Our Blog
              </ButtonTemplate>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop"
                  alt="Engineering project"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-heading text-[#060606]">
                Get in Touch
              </h3>
              <p className="text-[#7A7A7A] font-body leading-relaxed">
                Have questions or projects? Let's talk and build something extraordinary together
              </p>
              <ButtonTemplate href="/contact" isArrow={true}>
                Talk to Us
              </ButtonTemplate>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop"
                  alt="Contact us"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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
