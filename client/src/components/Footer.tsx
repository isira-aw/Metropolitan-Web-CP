import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { DIVISIONS } from "@shared/schema";

export function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-gray-900 flex items-center justify-center font-bold text-white text-lg">M</div>
              <span className="font-semibold text-lg tracking-tight text-color-heading">METROPOLITAN</span>
            </div>
            <p className="text-color-text/70 text-sm leading-relaxed">
              Building the future through sustainable innovation and engineering excellence. We are committed to shaping skylines and communities.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-color-accent-primary transition-colors border border-gray-200">
                  <Icon className="w-5 h-5 text-color-text" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-color-heading">Quick Links</h3>
            <ul className="space-y-4">
              {["Home", "About Us", "News", "Careers", "Contact"].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase().replace(" ", "-")}`} className="text-color-text/70 hover:text-color-heading transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-color-heading">Our Divisions</h3>
            <ul className="space-y-4">
              {DIVISIONS.slice(0, 5).map((div) => (
                <li key={div}>
                  <Link href={`/divisions/${div.toLowerCase()}`} className="text-color-text/70 hover:text-color-heading transition-colors text-sm">
                    {div}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-color-heading">Contact Us</h3>
            <ul className="space-y-4 text-sm text-color-text/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-color-text" />
                <span>123 Corporate Avenue, Business District Colombo 03, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-color-text" />
                <span>+94 11 234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-color-text" />
                <span>info@metropolitan.lk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-color-text/50">
            © 2024 Metropolitan Engineering. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-color-text/50">
            <Link href="/privacy" className="hover:text-color-heading transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-color-heading transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
