import { Link } from "wouter";
import { ArrowRight, Zap, Users, Award, Clock, Quote } from "lucide-react";

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

export default function Home() {
  const { data: latestProjects } = useCaseStudies({ limit: 3 });
  const [scrollY, setScrollY] = useState(0);

  const { data: testimonialsData } = useTestimonials({ limit: 6 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const customerLogos = [
    { logo: 'https://ik.imagekit.io/ayen/Metropolitan/BrandLogos/customers/1.png', link: 'https://www.google.com' },
    { logo: 'https://ik.imagekit.io/ayen/Metropolitan/BrandLogos/customers/2.png', link: 'https://www.microsoft.com' },
    { logo: 'https://ik.imagekit.io/ayen/Metropolitan/BrandLogos/customers/3.png', link: 'https://www.amazon.com' },
    { logo: 'https://ik.imagekit.io/ayen/Metropolitan/BrandLogos/customers/4.png', link: 'https://www.netflix.com' },
    { logo: 'https://ik.imagekit.io/ayen/Metropolitan/BrandLogos/customers/5.png', link: 'https://www.google.com' },
    { logo: 'https://ik.imagekit.io/ayen/Metropolitan/BrandLogos/customers/6.png', link: 'https://www.microsoft.com' },
    { logo: 'https://ik.imagekit.io/ayen/Metropolitan/BrandLogos/customers/7.png', link: 'https://www.amazon.com' },
    { logo: 'https://ik.imagekit.io/ayen/Metropolitan/BrandLogos/customers/8.png', link: 'https://www.netflix.com' },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden scroll-smooth">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-300"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')`,
            transform: `scale(1.1) translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 z-10 bg-secondary/80" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Animated shapes */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="opacity-0 animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight tracking-tight">
              <span className="text-primary">Metropolitan</span>
              <br />
              <span className="text-white">Technologies</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12 opacity-0 animate-fadeInUp delay-200 leading-relaxed">
            Engineering excellence across six core departments: Central AC, Elevators, Fire Protection, Generators, ELV & Solar
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-fadeInUp delay-300">
            <Link href="/case-studies">
              <Button size="lg" className="h-14 px-8 rounded-full bg-primary text-white font-bold text-lg shadow-lg shadow-primary/30 transition-transform hover:scale-105 hover:bg-primary/90">
                Explore Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-2 border-white text-white hover:bg-white hover:text-secondary backdrop-blur-sm bg-white/10 transition-transform hover:scale-105 font-bold text-lg">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Stats banner */}
          {/* <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto opacity-0 animate-fadeInUp delay-400">
            {[
              { num: "65+", label: "Years Experience" },
              { num: "500+", label: "Projects Completed" },
              { num: "24/7", label: "Support Available" }
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">{stat.num}</div>
                <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 opacity-0 animate-fadeInUp delay-500">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Our Mission & Vision" subtitle="" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="opacity-0 animate-fadeInLeft delay-100">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We offer Work Place and Personal Productivity solutions and services that exceed customer expectations and unparalleled marketing capabilities to our business partners whilst providing our Staff the opportunity for personal advancement with performance based recognition and rewards.
              </p>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Our vision is to build infrastructure that not only meets the needs of today but anticipates the challenges of tomorrow, fostering communities that are resilient, connected, and vibrant.
              </p>

              <div className="grid gap-4 mb-10">
                {[
                  { icon: "", text: "Powering Progress with Precision" },
                  { icon: "", text: "Electrical Engineering Excellence" },
                  { icon: "", text: "Powering the Future Through Expertise" }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
                  >
                    {/* Icon Container with Primary/Accent Interaction */}
                    <div className="flex h-1 w-5 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-xl group-hover:bg-primary group-hover:text-white transition-colors">
                      {item.icon}
                    </div>

                    {/* Text Content */}
                    <span className="text-lg font-medium text-secondary group-hover:text-primary transition-colors">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <Button variant="ghost" className="p-0 text-primary font-bold text-lg h-auto hover:gap-3 transition-all">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="relative opacity-0 animate-fadeInRight delay-200">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                  alt="Company site"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <p className="text-4xl font-display font-bold mb-2">65+</p>
                <p className="text-sm font-medium opacity-90">Years of delivering excellence across global markets</p>
              </div>
            </div>
          </div>

          {/* Trusted Customers */}
          <div className="mt-32 opacity-0 animate-fadeInUp delay-300">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-secondary tracking-tight mb-6">
                Our Trusted Customers
              </h3>
              <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                We proudly collaborate with industry leaders worldwide
              </p>
            </div>

            <div className="flex gap-12 items-center justify-center flex-wrap">
              {customerLogos.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
                >
                  <img
                    src={item.logo}
                    alt="Customer Logo"
                    className="h-16 w-auto object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* OUR PLATFORMS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary tracking-tight mb-6">
              Our Platforms
            </h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-16 opacity-0 animate-fadeInUp delay-100">
            {[
              { img: "/Assets/Images/metrocorp.webp", alt: "Metrocorp", href: "https://www.metrocorp.net/" },
              { img: "https://th.bing.com/th/id/OIP.ct6sNfeRE_eChwh-aFxfwQAAAA?w=148&h=150&c=7&r=0&o=7&pid=1.7&rm=3", alt: "mCentre", href: "https://mcentre.lk/" },
              { img: "/Assets/Images/metropolitan.webp", alt: "Metropolitan", href: "https://metropolitan.lk/" }
            ].map((platform, i) => (
              <Link
                key={i}
                href={platform.href}
                target="_blank"
                className="group relative p-8 transition-all duration-300 hover:-translate-y-3"
              >
                <img
                  src={platform.img}
                  alt={platform.alt}
                  className="h-20 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-secondary tracking-tight mb-6">
              Why Metropolitan
            </h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Driven by values that ensure success in every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Advanced Equipment", desc: "State-of-the-art tools and technology for superior results", bg: "bg-yellow-100" },
              { icon: Users, title: "Trained Staff", desc: "Expert professionals committed to excellence", bg: "bg-blue-100" },
              { icon: Award, title: "Quality Assurance", desc: "Uncompromising standards in every project", bg: "bg-green-100" },
              { icon: Clock, title: "24/7 Service", desc: "Round-the-clock support whenever you need us", bg: "bg-purple-100" }
            ].map((feature, idx) => (
              <div key={idx} className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 opacity-0 animate-fadeInUp delay-${idx + 1}00`}>
                <div className={`w-16 h-16 ${feature.bg} rounded-full flex items-center justify-center mb-6 text-primary`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      {testimonialsData && testimonialsData.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="What Our Clients Say" subtitle="Trusted by industry leaders across multiple sectors." />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonialsData.slice(0, 6).map((testimonial, i) => (
                <Card key={testimonial.id} className={`border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 opacity-0 animate-fadeInUp delay-${Math.min(i + 1, 5)}00`}>
                  <div className="p-8">
                    <Quote className="w-10 h-10 text-primary/20 mb-4" />
                    <p className="text-muted-foreground italic mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                        {testimonial.author[0]}
                      </div>
                      <div>
                        <p className="font-bold text-secondary">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Featured Projects" subtitle="Highlighting our recent contributions to the urban landscape" />
          <Link href="/case-studies" className="hidden lg:flex items-center text-primary font-bold text-lg hover:gap-3 transition-all mb-3">
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestProjects?.data?.map((project, i) => (
              <div key={project.id} className={`opacity-0 animate-fadeInUp delay-${Math.min(i + 1, 3)}00`}>
                <CaseStudyCard item={project} />
              </div>
            )) || (
                Array(3).fill(0).map((_, i) => (
                  <div key={i} className="h-[400px] bg-muted animate-pulse rounded-2xl" />
                ))
              )}
          </div>

          <div className="mt-12 text-center lg:hidden">
            <Link href="/case-studies">
              <Button variant="outline" className="w-full max-w-md h-14 text-lg rounded-full border-2">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>


      {/* INQUIRY SECTION */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight text-white">
                Let's Build Something Extraordinary Together
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Whether you have a complex infrastructure project or a sustainable residential development in mind, our team is ready to bring your vision to life.
              </p>
              <ul className="space-y-4 mb-10">
                {["Free consultation and project estimation", "Comprehensive feasibility studies", "End-to-end project management"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                    <span className="font-medium">{item}</span>
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


      {/* BLOG & CONTACT SECTIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Blog Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 bg-muted/30 rounded-3xl p-12 shadow-lg">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-secondary tracking-tight">
                What Have We Done?
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed pb-4">
                Showcasing our projects and engineering achievements across diverse industries
              </p>
              <Link href="/blog">
                <Button size="lg" className="h-14 px-8  rounded-full bg-primary text-white font-bold text-lg shadow-lg shadow-primary/30 transition-transform hover:scale-105 hover:bg-primary/90">
                  Our Blog
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop"
                  alt="Engineering project"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 bg-muted/30 rounded-3xl p-12 shadow-lg">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-secondary tracking-tight">
                Get in Touch
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed pb-4">
                Have questions or projects? Let's talk and build something extraordinary together
              </p>
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 rounded-full bg-primary text-white font-bold text-lg shadow-lg shadow-primary/30 transition-transform hover:scale-105 hover:bg-primary/90">
                  Talk to Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop"
                  alt="Contact us"
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