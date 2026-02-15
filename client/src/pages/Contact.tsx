
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

      <div className="bg-[#f8f8f8] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader title="Contact Us" subtitle="Get in touch with our global team." />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

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
                    123 Innovation Blvd, Suite 500<br />
                    Metropolis City, MC 90210<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#144A92]/[0.06] flex items-center justify-center text-[#144A92] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-black">Phone</h3>
                  <p className="text-[#424242]">+1 (555) 123-4567</p>
                  <p className="text-[#424242] text-sm">Mon-Fri, 9am - 6pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#144A92]/[0.06] flex items-center justify-center text-[#144A92] shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-black">Email</h3>
                  <p className="text-[#424242]">info@metropolitan.co</p>
                  <p className="text-[#424242]">support@metropolitan.co</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 h-64 bg-[#f8f8f8] rounded-xl border border-black/[0.06] shadow-sm flex items-center justify-center relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
                className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-500"
              />
              <Button className="relative z-10 bg-[#144A92] text-white rounded-lg hover:shadow-md hover:scale-[1.03] transition-all">View on Google Maps</Button>
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
