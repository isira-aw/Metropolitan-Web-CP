import { Link } from "wouter";
import { ArrowRight, Zap, Users, Award, Clock, Quote, Eye, Target } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { InquiryForm } from "@/components/InquiryForm";
import { Button } from "@/components/ui/button";
import { useCaseStudies } from "@/hooks/use-case-studies";
import { Card } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
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
    description: "Premium vertical and horizontal transportation solutions for modern buildings."
  },
  {
    name: "Solar Solutions",
    slug: "solar",
    image: "https://i0.wp.com/currenttrends.com.ng/wp-content/uploads/2021/03/solar-panel.jpg?resize=1024%2C683&ssl=1",
    description: "Sustainable energy solutions harnessing the power of the sun for a greener future."
  },
  {
    name: "Generator Division",
    slug: "generator",
    image: "https://s.abcnews.com/images/Business/HT_ElectricPowerGenerator_1_16x9_992.jpg",
    description: "Reliable power generation systems ensuring uninterrupted operations for critical facilities."
  }
];

export default function Home() {
  const { data: latestProjects, isLoading: loadingProjects } = useCaseStudies();
  const { data: testimonials, isLoading: loadingTestimonials } = useTestimonials();

  const scrollReveal = (ref: React.RefObject<HTMLElement>, delay = 0) => {
    const controls = useAnimation();
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    useEffect(() => {
      if (isInView) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }
        });
      }
    }, [controls, isInView, delay]);

    return {
      opacity: 0,
      y: 20,
      animate: controls
    };
  };

  const heroRef = useRef(null);
  const heroAnimation = scrollReveal(heroRef, 0);

  const statsRef = useRef(null);
  const statsAnimation = scrollReveal(statsRef, 0.2);

  const divisionsRef = useRef(null);
  const divisionsAnimation = scrollReveal(divisionsRef, 0.3);

  const projectsRef = useRef(null);
  const projectsAnimation = scrollReveal(projectsRef, 0.4);

  const testimonialsRef = useRef(null);
  const testimonialsAnimation = scrollReveal(testimonialsRef, 0.5);

  const contactRef = useRef(null);
  const contactAnimation = scrollReveal(contactRef, 0.6);

  return (
    <div className="min-h-screen bg-color-bg text-color-text">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-color-accent-primary/50 to-color-accent-secondary/30" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroAnimation.animate}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-color-heading mb-6 leading-tight">
              Engineering the Future of <span className="text-gray-600">Sustainable Infrastructure</span>
            </h1>
            <p className="text-lg md:text-xl text-color-text mb-8 leading-relaxed">
              Metropolitan Engineering delivers innovative, high-performance solutions for modern buildings. 
              From ELV systems to renewable energy, we transform visions into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white button-hover px-8 py-6 text-base">
                Explore Our Services
              </Button>
              <Button className="bg-transparent hover:bg-color-accent-primary border border-gray-300 text-color-text button-hover px-8 py-6 text-base">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-color-accent-primary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={statsAnimation.animate}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: "25+", label: "Years Experience" },
              { number: "500+", label: "Projects Completed" },
              { number: "150+", label: "Skilled Engineers" },
              { number: "15", label: "Countries Served" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-color-heading mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-color-text/70 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={divisionsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={divisionsAnimation.animate}
          >
            <SectionHeader
              title="Our Expertise"
              subtitle="Comprehensive engineering solutions for every aspect of modern building infrastructure"
              align="center"
              className="mb-12"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {divisions.map((division, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden border-gray-200 card-hover h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={division.image}
                        alt={division.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-color-heading mb-3">
                        {division.name}
                      </h3>
                      <p className="text-color-text/70 mb-4">
                        {division.description}
                      </p>
                      <Link
                        href={`/divisions/${division.slug}`}
                        className="flex items-center gap-2 text-sm font-medium text-color-heading hover:text-color-text transition-colors"
                      >
                        Learn More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={projectsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={projectsAnimation.animate}
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <SectionHeader
                title="Featured Projects"
                subtitle="Showcasing our engineering excellence through innovative solutions"
                align="left"
              />
              <Link href="/case-studies">
                <Button variant="secondary" className="button-hover">
                  View All Projects <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestProjects?.data?.slice(0, 3).map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, delay: i * 0.2 }
                  }}
                >
                  <CaseStudyCard caseStudy={project} />
                </motion.div>
              )) || (
                Array(3).fill(0).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, delay: i * 0.2 }
                    }}
                  >
                    <div className="h-[300px] md:h-[400px] bg-gray-200 animate-pulse rounded-xl" />
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={testimonialsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsAnimation.animate}
          >
            <SectionHeader
              title="What Our Clients Say"
              subtitle="Trusted by industry leaders for our commitment to quality and innovation"
              align="center"
              className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials?.slice(0, 3).map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, delay: index * 0.2 }
                  }}
                >
                  <Card className="p-6 border-gray-200 card-hover">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-color-text/80 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces"
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-color-heading">
                          {testimonial.author}
                        </h4>
                        <p className="text-sm text-color-text/60">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-color-accent-primary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={contactRef}
            initial={{ opacity: 0, y: 20 }}
            animate={contactAnimation.animate}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeader
                  title="Let's Build Together"
                  subtitle="Ready to start your next project? Get in touch with our team of experts."
                  align="left"
                />
                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-color-accent-primary flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-color-text" />
                    </div>
                    <div>
                      <h4 className="font-medium text-color-heading mb-1">
                        Comprehensive Solutions
                      </h4>
                      <p className="text-color-text/70">
                        From consultation to completion, we provide end-to-end engineering services tailored to your needs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-color-accent-primary flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-color-text" />
                    </div>
                    <div>
                      <h4 className="font-medium text-color-heading mb-1">
                        Quality Assurance
                      </h4>
                      <p className="text-color-text/70">
                        Our commitment to excellence ensures every project meets the highest standards of quality and safety.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-color-accent-primary flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-color-text" />
                    </div>
                    <div>
                      <h4 className="font-medium text-color-heading mb-1">
                        Expert Team
                      </h4>
                      <p className="text-color-text/70">
                        Work with our experienced engineers who bring decades of collective expertise to every project.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <InquiryForm />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted Customers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-color-heading mb-8">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {customerLogos.map((logo, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img
                    src={logo.logo}
                    alt="Customer Logo"
                    className="h-12 opacity-50 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
