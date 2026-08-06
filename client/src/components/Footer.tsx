import { Link } from "wouter";
import { Facebook, Linkedin, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { DIVISIONS, getDivisionDisplayName, type DivisionKey } from "@shared/schema";

const DIVISION_PATHS: Record<DivisionKey, string> = {
  CENTRAL_AC: "/divisions/central-ac",
  ELEVATORS: "/divisions/elevators-and-travelators",
  FIRE_PROTECTION: "/divisions/fire-detection-protection",
  GENERATOR: "/divisions/generator",
  SOLAR: "/divisions/solar",
  ELV: "/divisions/elv",
};

export function Footer() {
  return (
    <footer className="relative bg-[#0a0e14] text-white pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="/metrologo.png" alt="Metropolitan logo" className="w-8 h-8 object-contain" />
              <span className="font-display font-bold text-lg tracking-tight">METROPOLITAN</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Engineering the mechanical and electrical systems that keep Sri Lanka's buildings running &mdash;
              climate control, vertical transport, fire safety, power and low-voltage systems.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Metropolitan on Facebook"
                className="w-9 h-9 rounded-lg bg-white/[0.06] flex items-center justify-center hover:bg-[var(--metro-light-blue)]/20 transition-colors duration-300"
              >
                <Facebook className="w-4 h-4 text-white/60" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Metropolitan on LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/[0.06] flex items-center justify-center hover:bg-[var(--metro-light-blue)]/20 transition-colors duration-300"
              >
                <Linkedin className="w-4 h-4 text-white/60" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="eyebrow text-white/40 mb-6">Company</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "News", href: "/news" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/50 hover:text-white transition-colors duration-300 text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h3 className="eyebrow text-white/40 mb-6">Divisions</h3>
            <ul className="space-y-3">
              {DIVISIONS.map((div) => (
                <li key={div}>
                  <Link href={DIVISION_PATHS[div]} className="text-white/50 hover:text-white transition-colors duration-300 text-sm">
                    {getDivisionDisplayName(div)}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/divisions"
                  className="inline-flex items-center gap-1 text-[var(--metro-light-blue)] font-medium text-sm hover:gap-2 transition-all"
                >
                  View all divisions
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="eyebrow text-white/40 mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin className="w-4 h-4 text-white/30 shrink-0 mt-0.5" />
                <span>No 150A, Nawala Road,<br />Nawala, Nugegoda, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Phone className="w-4 h-4 text-white/30 shrink-0" />
                <a href="tel:+94114700200" className="hover:text-white transition-colors">+94 11 470 0200</a>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Mail className="w-4 h-4 text-white/30 shrink-0" />
                <a href="mailto:contactus@metropolitan.lk" className="hover:text-white transition-colors">contactus@metropolitan.lk</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.08] mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Metropolitan Group of Companies. All rights reserved.
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
