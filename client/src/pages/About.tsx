import { SectionHeader } from "@/components/SectionHeader";
import { SectionHeaderSmall } from "@/components/SectionHeaderSmall";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "wouter";
import { useRef, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Zap, Users, Award, Clock, Eye, Target } from "lucide-react";

export default function AboutPage() {
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

  const valuesRef = useRef(null);
  const valuesAnimation = scrollReveal(valuesRef, 0.2);

  const teamRef = useRef(null);
  const teamAnimation = scrollReveal(teamRef, 0.3);

  const historyRef = useRef(null);
  const historyAnimation = scrollReveal(historyRef, 0.4);

  const contactRef = useRef(null);
  const contactAnimation = scrollReveal(contactRef, 0.5);

  return (
    <div className="min-h-screen bg-color-bg text-color-text">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-color-accent-primary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroAnimation.animate}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-semibold text-color-heading mb-6">
              About Metropolitan Engineering
            </h1>
            <p className="text-lg text-color-text mb-8 leading-relaxed">
              We are a leading engineering solutions provider dedicated to building the future of sustainable infrastructure. 
              With over 25 years of experience, we deliver innovative, high-performance systems for modern buildings worldwide.
            </p>
            <Link href="/contact">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white button-hover">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={valuesRef}
              initial={{ opacity: 0, y: 20 }}
              animate={valuesAnimation.animate}
            >
              <SectionHeader
                title="Our Mission & Vision"
                subtitle="Driving innovation and excellence in every project we undertake"
              />
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-color-accent-primary flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-color-text" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-color-heading mb-2">Our Mission</h3>
                    <p className="text-color-text/70">
                      To deliver innovative engineering solutions that enhance efficiency, safety, and sustainability while exceeding client expectations through our commitment to quality and excellence.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-color-accent-primary flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-color-text" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-color-heading mb-2">Our Vision</h3>
                    <p className="text-color-text/70">
                      To be the leading global engineering partner, recognized for transforming visions into reality through cutting-edge technology, sustainable practices, and unwavering dedication.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              ref={teamRef}
              initial={{ opacity: 0, y: 20 }}
              animate={teamAnimation.animate}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Engineering Team"
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={historyRef}
            initial={{ opacity: 0, y: 20 }}
            animate={historyAnimation.animate}
          >
            <SectionHeader
              title="Our Core Values"
              subtitle="The principles that guide our work and shape our culture"
              align="center"
              className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Innovation",
                  description: "Constantly seeking new ways to improve and deliver cutting-edge solutions"
                },
                {
                  icon: Users,
                  title: "Integrity",
                  description: "Upholding the highest ethical standards in all our dealings"
                },
                {
                  icon: Award,
                  title: "Excellence",
                  description: "Striving for perfection in every project we undertake"
                },
                {
                  icon: Target,
                  title: "Client Focus",
                  description: "Understanding and exceeding our clients' expectations"
                },
                {
                  icon: Clock,
                  title: "Reliability",
                  description: "Delivering on our promises with consistency and dependability"
                },
                {
                  icon: Eye,
                  title: "Safety First",
                  description: "Prioritizing the safety of our employees, clients, and communities"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-6 rounded-xl border border-gray-200 card-hover"
                >
                  <div className="w-12 h-12 rounded-full bg-color-accent-primary flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-color-text" />
                  </div>
                  <h3 className="text-lg font-medium text-color-heading mb-2">
                    {value.title}
                  </h3>
                  <p className="text-color-text/70">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* History */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              ref={historyRef}
              initial={{ opacity: 0, y: 20 }}
              animate={historyAnimation.animate}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1541870538888-f11b09991e13?w=800&q=80"
                alt="Company History"
                className="rounded-xl shadow-lg"
              />
            </motion.div>
            <motion.div
              ref={historyRef}
              initial={{ opacity: 0, y: 20 }}
              animate={historyAnimation.animate}
              className="flex flex-col justify-center"
            >
              <SectionHeader
                title="Our Journey"
                subtitle="From humble beginnings to global engineering excellence"
              />
              <div className="mt-6 space-y-4 text-color-text/80">
                <p>
                  Founded in 1999, Metropolitan Engineering began as a small team of passionate engineers with a vision to transform the engineering landscape. Over the years, we have grown into a global leader in sustainable infrastructure solutions.
                </p>
                <p>
                  Our commitment to innovation, quality, and client satisfaction has driven our success, allowing us to deliver over 500 projects across 15 countries. Today, we continue to push the boundaries of what's possible in engineering.
                </p>
                <p>
                  Looking ahead, we remain dedicated to building a sustainable future through smart engineering practices and cutting-edge technology, ensuring our clients benefit from the most advanced solutions available.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-color-accent-primary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={teamRef}
            initial={{ opacity: 0, y: 20 }}
            animate={teamAnimation.animate}
          >
            <SectionHeader
              title="Meet Our Leadership"
              subtitle="Experienced professionals driving our vision forward"
              align="center"
              className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "John Smith",
                  role: "CEO & Founder",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces",
                  bio: "With over 30 years of experience in engineering, John founded Metropolitan Engineering with a vision to transform the industry."
                },
                {
                  name: "Sarah Johnson",
                  role: "COO",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
                  bio: "Sarah oversees our operations and ensures that every project meets our rigorous quality standards."
                },
                {
                  name: "Michael Chen",
                  role: "CTO",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
                  bio: "Michael leads our innovation efforts and ensures we stay at the forefront of engineering technology."
                },
                {
                  name: "Emily Rodriguez",
                  role: "CFO",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces",
                  bio: "Emily manages our financial strategy and ensures the long-term sustainability of our organization."
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl overflow-hidden border border-gray-200 card-hover"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-color-heading mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-color-text/60 mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-color-text/70">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={contactRef}
            initial={{ opacity: 0, y: 20 }}
            animate={contactAnimation.animate}
            className="text-center"
          >
            <SectionHeader
              title="Ready to Work With Us?"
              subtitle="Let's discuss your next engineering project"
              align="center"
              className="mb-8"
            />
            <Link href="/contact">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white button-hover px-8 py-6 text-base">
                Contact Our Team
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
