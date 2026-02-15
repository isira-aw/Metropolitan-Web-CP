import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { DIVISIONS } from "@shared/schema";

export function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="/metrologo.png" alt="Metro Logo" className="w-8 h-8 object-contain" />
              <span className="font-bold text-lg tracking-tight">METROPOLITAN</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Building the future through sustainable innovation and engineering excellence. We are committed to shaping skylines and communities.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/[0.06] flex items-center justify-center hover:bg-white/10 transition-colors duration-300">
                  <Icon className="w-4 h-4 text-white/60" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "News", href: "/news" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" }
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/40 hover:text-white/70 transition-colors duration-300 text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-6">Our Divisions</h3>
            <ul className="space-y-3">
              {DIVISIONS.slice(0, 5).map((div) => (
                <li key={div}>
                  <Link href={`/divisions/${div.toLowerCase()}`} className="text-white/40 hover:text-white/70 transition-colors duration-300 text-sm">
                    {div}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/divisions" className="text-white/60 font-medium text-sm hover:text-white/80 transition-colors">
                  View All Divisions &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/40 text-sm">
                <MapPin className="w-4 h-4 text-white/30 shrink-0 mt-0.5" />
                <span>123 Innovation Blvd,<br />Metropolis City, MC 90210</span>
              </li>
              <li className="flex items-center gap-3 text-white/40 text-sm">
                <Phone className="w-4 h-4 text-white/30 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-white/40 text-sm">
                <Mail className="w-4 h-4 text-white/30 shrink-0" />
                <span>info@metropolitan.co</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Metropolitan Co. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 text-xs hover:text-white/50 transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 text-xs hover:text-white/50 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
