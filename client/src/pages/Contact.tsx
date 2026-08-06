
import { Footer } from "@/components/Footer";
import { InquiryForm } from "@/components/InquiryForm";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SectionHeaderSmall } from "@/components/SectionHeaderSmall";
import { Navbar } from "@/components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="relative bg-[#f8f8f8] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="eyebrow text-[#144A92] mb-4 block">Get In Touch</span>
          <SectionHeader title="Contact Us" subtitle="Get in touch with our team in Sri Lanka." />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Contact Info */}
          <div>
            <SectionHeaderSmall
              title="Headquarters"
            />
            <div className="space-y-8 mt-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#144A92]/[0.06] flex items-center justify-center text-[#144A92] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-black">Address</h3>
                  <p className="text-[#424242]">
                    No 150A, Nawala Road,<br />
                    Nawala, Nugegoda, Sri Lanka
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#144A92]/[0.06] flex items-center justify-center text-[#144A92] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-black">Phone</h3>
                  <p className="text-[#424242]">
                    <a href="tel:+94114700200" className="hover:text-[#144A92] transition-colors">+94 11 470 0200</a>
                  </p>
                  <p className="text-[#424242] text-sm">Mon-Fri, 8:30am - 5:00pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#144A92]/[0.06] flex items-center justify-center text-[#144A92] shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-black">Email</h3>
                  <p className="text-[#424242]">
                    <a href="mailto:contactus@metropolitan.lk" className="hover:text-[#144A92] transition-colors">contactus@metropolitan.lk</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 h-64 bg-[#f8f8f8] rounded-xl border border-black/[0.06] shadow-sm flex items-center justify-center relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <a
                href="https://www.google.com/maps/search/?api=1&query=No+150A%2C+Nawala+Road%2C+Nawala%2C+Nugegoda%2C+Sri+Lanka"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10"
              >
                <Button className="bg-[#144A92] text-white rounded-lg hover:shadow-md hover:scale-[1.03] transition-all">View on Google Maps</Button>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-xl border border-black/[0.06] shadow-sm p-1">
            <InquiryForm />
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
