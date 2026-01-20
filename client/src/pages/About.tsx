import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";
import { ArrowRight, BriefcaseBusiness, CheckCircle, CheckCircle2, Clock, Handshake, Lightbulb, PhoneCall, Rocket, Settings, ShieldCheck, Sparkles, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import { SectionHeaderSmall } from "@/components/SectionHeaderSmall";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};
const leaders = [
  {
    name: "Dinesh Ambani",
    role: "Chairman",
    img: "https://ik.imagekit.io/ayen/Metropolitan/People/board_of_directors/bg_rem/dinesh_ambani.jpg?updatedAt=1766599165369",
  },
  {
    name: "Lalithkumar Ambani",
    role: "Co-Chairman",
    img: "https://ik.imagekit.io/ayen/Metropolitan/People/board_of_directors/bg_rem/lalithkumar_ambani.jpg",
  },
  {
    name: "Ivor Maharoof",
    role: "Deputy Chairman",
    img: "https://ik.imagekit.io/ayen/Metropolitan/People/board_of_directors/bg_rem/ivor_maharoof.jpg",
  },
  {
    name: "Michael Haglind",
    role: "Director",
    img: "https://ik.imagekit.io/ayen/Metropolitan/People/board_of_directors/bg_rem/michael_haglind.jpg",
  },
  {
    name: "Dushanthi Roberts",
    role: "Group Director Finance",
    img: "https://ik.imagekit.io/ayen/Metropolitan/People/board_of_directors/bg_rem/dushanthi_roberts.jpg",
  },
  {
    name: "Sanjiv Wijayasinghe",
    role: "Group Director Human Resources",
    img: "https://ik.imagekit.io/ayen/Metropolitan/People/board_of_directors/bg_rem/sanjiv_wijayasinghe.jpg",
  },
  {
    name: "Charith Molligoda",
    role: "Director/CEO - Engineering Cluster",
    img: "https://ik.imagekit.io/ayen/Metropolitan/People/board_of_directors/bg_rem/charith_molligoda.jpg",
  },
  {
    name: "Ali Asgar Roshanali",
    role: "Director/CEO - Business Automation Cluster",
    img: "https://ik.imagekit.io/ayen/Metropolitan/People/board_of_directors/bg_rem/ali_asgar_roshanali.jpg",
  },
  {
    name: "Roshan Tissera",
    role: "Director",
    img: "https://ik.imagekit.io/ayen/Metropolitan/People/board_of_directors/bg_rem/roshan_tissera.jpg",
  },
  {
    name: "Anil Gunawardana",
    role: "Director/Chief Technology Officer",
    img: "https://ik.imagekit.io/ayen/Metropolitan/People/board_of_directors/bg_rem/anil_gunawardana.jpg",
  },
  {
    name: "Jagath Ravindra",
    role: "Director",
    img: "https://ik.imagekit.io/ayen/Metropolitan/People/board_of_directors/bg_rem/jagath_ravindra.jpg",
  },
  {
    name: "Taslim Rahaman",
    role: "Director",
    img: "https://ik.imagekit.io/ayen/Metropolitan/People/board_of_directors/bg_rem/taslim_rahaman.jpg",
  }
];

export default function About() {

  const [activeTab, setActiveTab] = useState('policy');

  const tabs = [
    { id: 'policy', label: 'Quality Policy', icon: ShieldCheck },
    { id: 'services', label: 'Our Services', icon: Settings },
    { id: 'promise', label: 'Our Promise', icon: Handshake },
  ];
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <div className="bg-secondary text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader title="About Metropolitan" subtitle="Three decades of engineering excellence." light />
        </div>
      </div>

      <section className="bg-white py-24 overflow-hidden">

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">

            <div>
              <SectionHeaderSmall
                title="Our Legacy"
              />
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Metropolitan Technologies (Pvt) Ltd, we are a leading electrical engineering company in Sri Lanka, delivering innovative and reliable solutions across six specialized divisions: Central AC, Elevators & Travelators, Fire Detection & Protection, Generators, Solar, and ELV systems. With a commitment to engineering excellence, safety, and sustainability, we provide end-to-end services that cater to both commercial and industrial projects.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our team of skilled professionals leverages the latest technologies to ensure high-performance electrical solutions, energy efficiency, and seamless system integration, making us a trusted partner for businesses seeking cutting-edge electrical engineering services.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl shadow-lg w-full h-64 object-cover" alt="Construction" />
                <img src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2009&auto=format&fit=crop" className="rounded-2xl shadow-lg w-full h-40 object-cover" alt="Planning" />
              </div>
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl shadow-lg w-full h-40 object-cover" alt="Meeting" />
                <img src="https://th.bing.com/th/id/OIP.PAlXM_ZSdC2mpGjCojqBPwHaE8?w=296&h=197&c=7&r=0&o=7&pid=1.7&rm=3" className="rounded-2xl shadow-lg w-full h-64 object-cover" alt="Workers" />
              </div>
            </div>
          </div>

          <SectionHeader title="Our Journey of Excellence" subtitle="One of the most respected engineering firms in Sri Lanka." />

          {/* Timeline Content */}
          <div className="relative">
            {/* Vertical line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>

            <div className="space-y-12 md:space-y-0">

              {/* Item 1 - 63+ Years */}
              <div className="relative flex flex-col md:flex-row items-center justify-between group">
                <div className="md:w-[45%] text-right hidden md:block">
                  <span className="text-6xl font-black text-slate-400 group-hover:text-blue-500 transition-colors">1961</span>
                </div>

                <div className="z-10 bg-blue-600 p-4 rounded-2xl text-white shadow-xl shadow-blue-200">
                  <BriefcaseBusiness size={28} />
                </div>

                <div className="md:w-[45%] mt-6 md:mt-0 bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">63+ Years of Expertise</h3>
                  <p className="text-slate-600 leading-relaxed">
                    A legacy built on innovation, quality, and unwavering reliability in electrical engineering. We've powered Sri Lanka's growth for over six decades.
                  </p>
                </div>
              </div>

              {/* Item 2 - Pioneering Solutions (Reversed) */}
              <div className="relative flex flex-col md:flex-row-reverse items-center justify-between group md:mt-[-20px]">
                <div className="md:w-[45%] text-left hidden md:block">
                  <span className="text-6xl font-black text-slate-400 group-hover:text-red-700 transition-colors">SOLUTIONS</span>
                </div>

                <div className="z-10 bg-blue-600 p-4 rounded-2xl text-white shadow-xl shadow-blue-200">
                  <Lightbulb size={28} />
                </div>

                <div className="md:w-[45%] mt-6 md:mt-0 bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Pioneering Solutions</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Delivering cutting-edge solutions in Central AC, Elevators, Fire Protection, Generators, ELV, and Solar.
                  </p>
                </div>
              </div>

              {/* Item 3 - Sustainable Future */}
              <div className="relative flex flex-col md:flex-row items-center justify-between group md:mt-[-20px]">
                <div className="md:w-[45%] text-right hidden md:block">
                  <span className="text-6xl font-black text-slate-400 group-hover:text-blue-500 transition-colors">FUTURE</span>
                </div>

                <div className="z-10 bg-blue-600 p-4 rounded-2xl text-white shadow-xl shadow-blue-200">
                  <Sparkles size={28} />
                </div>

                <div className="md:w-[45%] mt-6 md:mt-0 bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Sustainable Future</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Focused on creating safe, sustainable, and future-ready infrastructure for Sri Lanka.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10 text-center">
            <a href="/divisions" className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-5 rounded-full font-bold hover:bg-blue-600 transition-all transform hover:-translate-y-1 shadow-lg">
              Explore Our Services
              <Rocket size={20} />
              <ArrowRight size={18} className="opacity-50" />
            </a>
          </div>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader title="Leadership Team" subtitle=" Meet the visionary leaders driving Innovatech Solutions forward.
                Our executive team brings a wealth of experience and a shared
                commitment to innovation and excellence.
              " />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
              className="relative group bg-white rounded-3xl p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-12px_rgba(20,76,148,0.2)] transition-all duration-500 overflow-hidden"
            >
              <div className="flex flex-col items-center relative z-10">
                {/* Large Image Container */}
                <div className="relative w-48 h-48 mb-6">
                  {/* Subtle Red Rotating Ring on Hover */}
                  <div className="absolute -inset-2 border-2 border-dashed border-[#C90815] rounded-full scale-0 group-hover:scale-100 group-hover:rotate-180 transition-all duration-700 opacity-40" />

                  <div className="w-full h-full rounded-full overflow-hidden border-8 border-white shadow-md">
                    <img
                      className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
                      src={leader.img || "/Assets/Images/People/default-person.png"}
                      alt={leader.name}
                    />
                  </div>
                </div>

                {/* Identity Section */}
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-display font-bold text-black group-hover:text-[#144C94] transition-colors duration-300">
                    {leader.name}
                  </h3>

                  {/* Red Growing Accent Line */}
                  <div className="flex justify-center">
                    <div className="h-1 w-8 bg-[#C90815] rounded-full group-hover:w-24 transition-all duration-500" />
                  </div>

                  <p className="text-[#144C94] font-semibold text-sm uppercase tracking-widest pt-2">
                    {leader.role}
                  </p>
                </div>
              </div>

              {/* Blue bottom bar has been removed from here */}
            </motion.div>
          ))}
        </div>

        <div className="bg-[#144C94] text-white rounded-3xl py-10 p-12 text-center">
          <h2 className="text-3xl font-bold font-display mb-10 text-white">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white ">
            {["Safety First", "Sustainability", "Integrity"].map((v, i) => (
              <div key={i} className="flex flex-col items-center">
                {/* Icon Container with White Background and Red Icon */}
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-lg">
                  <CheckCircle className="w-8 h-8 text-[#C90815]" />
                </div>
                <h3 className="text-xl font-bold text-white">{v}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-slate-50 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Sidebar Tabs */}
            <div className="lg:w-1/4">
              <div className="sticky top-24 space-y-2">
                <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 px-4">Navigation</h2>
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 translate-x-2'
                      : 'bg-white text-slate-500 hover:bg-slate-100'
                      }`}
                  >
                    <tab.icon size={20} />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:w-3/4 bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100">

              {/* QUALITY POLICY */}
              {activeTab === 'policy' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <SectionHeaderSmall
                    title="Quality Policy"
                  />
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      "Exceeding client expectations at affordable prices.",
                      "Promoting creativity and innovation in engineering.",
                      "Rigorous Quality Management Systems (QMS).",
                      "Building lasting stakeholder relationships.",
                      "Commitment to 100% continual improvement."
                    ].map((text, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <CheckCircle2 className="text-red-600 shrink-0" />
                        <p className="text-slate-700 font-medium text-sm leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* OUR SERVICES */}
              {activeTab === 'services' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex justify-between items-end mb-8">
                    <SectionHeaderSmall
                      title="Our Services"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { title: "Expert Support", desc: "Engineers trained by global principals." },
                      { title: "Speedy Response", desc: "Rapid mobile units for Colombo & suburbs." },
                      { title: "24/7 Call Center", desc: "Technical assistance around the clock." },
                      { title: "E-Maintenance", desc: "Automated alerts and proactive support." }
                    ].map((service, i) => (
                      <div key={i} className="group p-6 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all">
                        <h4 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600">{service.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* THE PROMISE */}
              {activeTab === 'promise' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <SectionHeaderSmall
                    title="The Metropolitan Promise"
                  />
                  <p className="text-slate-500 mb-10 leading-relaxed">
                    Reputation must be earned every day. We commit to measurable service levels across four key pillars.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Pillar 1 */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-blue-600">
                        <PhoneCall size={20} className="text-red-600 shrink-0" />
                        <h3 className="font-bold text-slate-900">Accessibility</h3>
                      </div>
                      <ul className="text-sm text-slate-600 space-y-3 pl-8 list-disc">
                        <li>24-hour phone & email response time.</li>
                        <li>Direct access to senior management.</li>
                        <li>Named contact person for every project.</li>
                      </ul>
                    </div>

                    {/* Pillar 2 */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-blue-600">
                        <Clock size={20} className="text-red-600 shrink-0" />
                        <h3 className="font-bold text-slate-900">Transparency</h3>
                      </div>
                      <ul className="text-sm text-slate-600 space-y-3 pl-8 list-disc">
                        <li>Fact-based solutions over product sales.</li>
                        <li>Advance notification of deadline changes.</li>
                        <li>Regular updates on market trends.</li>
                      </ul>
                    </div>

                    {/* Pillar 3 */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-blue-600">
                        <TrendingUp size={20} className="text-red-600 shrink-0" />
                        <h3 className="font-bold text-slate-900">Efficiency</h3>
                      </div>
                      <ul className="text-sm text-slate-600 space-y-3 pl-8 list-disc">
                        <li>Corporate payment structures.</li>
                        <li>Genuine consumables & original spares.</li>
                        <li>Principal-trained expert engineers.</li>
                      </ul>
                    </div>

                    {/* Pillar 4 */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-blue-600">
                        <Users size={20} className="text-red-600 shrink-0" />
                        <h3 className="font-bold text-slate-900">Partnership</h3>
                      </div>
                      <ul className="text-sm text-slate-600 space-y-3 pl-8 list-disc">
                        <li>Investing time to learn your business.</li>
                        <li>Anticipating needs before they arise.</li>
                        <li>Immediate resolution of service issues.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Using our New Small Header with Red Line */}
          <SectionHeaderSmall
            title="Story of Our Company"
            subtitle="A legacy of quality and entrepreneurship since 1958"
            className="mb-6"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: The Founder's Origin */}
            <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-lg">
              <p >
                <span className="text-5xl font-bold text-[#C90815] mr-3 float-left">
                  Mr
                </span>. J S Ambani, a young accountant by profession working for a large conglomerate,
                was irked by the very hard touch of the typewriters in use. This prompted a search
                for quality that would eventually change the landscape of Sri Lankan business.
              </p>
              <p>
                He looked to the USA and discovered the <span className="text-[#144C94] font-bold">"Royal" typewriter</span>—the
                Rolls Royce of its time. When local vendors refused to import them, he saw an
                opportunity for those with the courage to choose quality. He quit his job and
                founded Metropolitan on the 25th of August, 1958.
              </p>
            </div>

            {/* Right Column: Featured Historical Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden  border border-gray-100">
                <img
                  src="https://ik.imagekit.io/ayen/Metropolitan/company-history-founder.jpg"
                  alt="Mr. J.S Ambani at the Launch of Royal Typewriters"
                  className="w-full h-auto"
                />
                <div className="bg-[#144C94] p-4 text-white text-sm italic">
                  Mr. J.S Ambani with the American Ambassador at the Launch of Royal Typewriters in Sri Lanka, 1958
                </div>
              </div>
            </div>

            {/* Full Width Bottom Section: The Evolution */}
            <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-600 border-t border-gray-100 ">
              <div className="bg-[#F8F9FA] p-8 rounded-2xl border-l-4 border-[#144C94]">
                <p className="italic font-medium text-[#144C94]">
                  <span className="text-5xl font-bold text-[#C90815] mr-3 float-left">
                    "
                  </span>Today, six decades later, the legacy of quality and support is engrained in our DNA,
                  providing state-of-the-art technology solutions across IT, Communications, and Imaging
                  to empower the success of our customers.  <span className="text-5xl font-bold text-[#C90815] mr-3 float-right">
                    "
                  </span>
                </p>
              </div>
              <div className="space-y-4">
                <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-[#C90815] first-letter:mr-3 first-letter:float-left">
                  Metropolitan soon represented world-renowned brands such as <span className="font-semibold">Facit Calculators</span> and
                  <span className="font-semibold"> Ericsson switchboards</span>. His quest for quality didn’t stop at products;
                  it was backed by superlative after-sales service that remains the bedrock of our trust today.
                </p>
                <p>
                  With the support of his five sons—experts in Finance, Marketing, Engineering, and IT—the company
                  pioneered electronic office products, becoming to the office what Unilever or Nestle is to the home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
