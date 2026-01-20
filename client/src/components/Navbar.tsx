import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DIVISIONS } from "@shared/schema";

// Map division names to URL paths
const DIVISION_PATHS = {
  "Central AC": "/divisions/central-ac",
  "Elevators and Travelators": "/divisions/elevators-and-travelators",
  "Fire Detection & Protection": "/divisions/fire-detection-protection",
  "Generator": "/divisions/generator",
  "Solar": "/divisions/solar",
  "ELV": "/divisions/elv"
};

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Divisions", href: "/divisions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "News", href: "/news" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [divisionsOpen, setDivisionsOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDivisionsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-500 ease-out",
        scrolled 
          ? "bg-white shadow-2xl border-b-2 border-[#C90815]/10" 
          : "bg-gradient-to-b from-black/80 via-black/60 to-transparent backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Advanced Animation */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3 group">
            <div className="relative">
              <div className={cn(
                "absolute inset-0 rounded-lg blur-md transition-all duration-500 group-hover:blur-lg",
                scrolled 
                  ? "bg-gradient-to-br from-[#C90815] to-[#144C94] opacity-50 group-hover:opacity-75" 
                  : "bg-gradient-to-br from-[#C90815] to-white opacity-60 group-hover:opacity-90"
              )} />
              <div className={cn(
                "relative w-12 h-12 rounded-lg flex items-center justify-center font-black text-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3",
                scrolled 
                  ? "bg-gradient-to-br from-[#C90815] to-[#144C94] text-white shadow-lg" 
                  : "bg-white text-[#144C94] shadow-xl"
              )}>
                M
              </div>
            </div>
            <div className="flex flex-col -space-y-1">
              <span className={cn(
                "font-black text-xl tracking-tighter transition-all duration-500 group-hover:tracking-tight",
                scrolled ? "text-black" : "text-white"
              )}>
                METROPOLITAN
              </span>
              <span className={cn(
                "text-[10px] font-semibold tracking-widest uppercase transition-all duration-500",
                scrolled ? "text-[#C90815]" : "text-[#C90815]/90"
              )}>
                Engineering Excellence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAV_ITEMS.filter(i => i.label !== "Divisions").map((item) => (
              <Link
                key={item.href}
                href={item.href}
              >
                <div className={cn(
                  "relative px-4 py-2 text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer group",
                  location === item.href
                    ? scrolled 
                      ? "text-[#C90815]" 
                      : "text-white"
                    : scrolled
                    ? "text-black/70 hover:text-[#144C94]"
                    : "text-white/80 hover:text-white"
                )}>
                  {item.label}
                  <div className={cn(
                    "absolute bottom-0 left-0 h-0.5 transition-all duration-300 ease-out",
                    location === item.href 
                      ? "w-full bg-gradient-to-r from-[#C90815] to-[#144C94]" 
                      : "w-0 group-hover:w-full bg-gradient-to-r from-[#144C94] to-[#C90815]"
                  )} />
                </div>
              </Link>
            ))}

            {/* Divisions Mega Menu */}
            <div className="relative">
              <button
                onClick={() => setDivisionsOpen(!divisionsOpen)}
                className={cn(
                  "px-4 py-2 text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer flex items-center gap-1 group",
                  location.startsWith("/divisions")
                    ? scrolled 
                      ? "text-[#C90815]" 
                      : "text-white"
                    : scrolled
                    ? "text-black/70 hover:text-[#144C94]"
                    : "text-white/80 hover:text-white"
                )}
              >
                Divisions
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-300",
                  divisionsOpen && "rotate-180"
                )} />
                <div className={cn(
                  "absolute bottom-0 left-0 h-0.5 transition-all duration-300 ease-out",
                  location.startsWith("/divisions") || divisionsOpen
                    ? "w-full bg-gradient-to-r from-[#C90815] to-[#144C94]" 
                    : "w-0 group-hover:w-full bg-gradient-to-r from-[#144C94] to-[#C90815]"
                )} />
              </button>

              {/* Divisions Dropdown */}
              <div className={cn(
                "absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border-2 border-[#144C94]/10 overflow-hidden transition-all duration-300 origin-top",
                divisionsOpen 
                  ? "opacity-100 scale-100 translate-y-0" 
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              )}>
                <div className="p-2">
                  {DIVISIONS.map((div, idx) => (
                    <Link 
                      key={div} 
                      href={DIVISION_PATHS[div] || `/divisions/${div.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                    >
                      <div className={cn(
                        "px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between group cursor-pointer",
                        "hover:bg-gradient-to-r hover:from-[#C90815]/5 hover:to-[#144C94]/5 hover:translate-x-1"
                      )}
                      style={{ transitionDelay: `${idx * 30}ms` }}>
                        <span className="font-semibold text-black/80 group-hover:text-[#144C94] transition-colors">
                          {div}
                        </span>
                        <ArrowRight className="w-4 h-4 text-[#C90815] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link href="/contact">
                              <button className="relative px-6 py-2.5 bg-[#C90815] text-white font-bold text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden group">
                  <span className="relative z-10">Get a Quote</span>
                  <div className="absolute inset-0 bg-[#144C94] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-3 rounded-xl transition-all duration-300 relative overflow-hidden group",
                scrolled 
                  ? "bg-gradient-to-br from-[#C90815]/10 to-[#144C94]/10 text-black hover:from-[#C90815]/20 hover:to-[#144C94]/20" 
                  : "bg-white/10 backdrop-blur-md text-white hover:bg-white/20"
              )}
            >
              <div className={cn(
                "transition-all duration-300",
                isOpen ? "rotate-90" : "rotate-0"
              )}>
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden absolute top-full left-0 w-full bg-white border-b-4 border-[#C90815] shadow-2xl overflow-hidden transition-all duration-500 ease-out origin-top",
        isOpen 
          ? "max-h-screen opacity-100 scale-y-100" 
          : "max-h-0 opacity-0 scale-y-0"
      )}>
        <div className="px-4 py-6 space-y-2 max-h-[calc(100vh-6rem)] overflow-y-auto">
          {/* Divisions Section */}
          <div className="mb-4">
            <button
              onClick={() => setDivisionsOpen(!divisionsOpen)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-gradient-to-r from-[#C90815]/5 to-[#144C94]/5 font-bold text-[#144C94] transition-all duration-300 hover:from-[#C90815]/10 hover:to-[#144C94]/10"
            >
              <span>Divisions</span>
              <ChevronDown className={cn(
                "w-5 h-5 transition-transform duration-300",
                divisionsOpen && "rotate-180"
              )} />
            </button>
            <div className={cn(
              "mt-2 space-y-1 overflow-hidden transition-all duration-300",
              divisionsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            )}>
              {DIVISIONS.map((div, idx) => (
                <Link 
                  key={div} 
                  href={DIVISION_PATHS[div] || `/divisions/${div.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                >
                  <div 
                    className="pl-8 pr-4 py-3 rounded-lg text-black/70 font-semibold hover:bg-gradient-to-r hover:from-[#C90815]/5 hover:to-[#144C94]/5 hover:text-[#144C94] hover:translate-x-2 transition-all duration-200 flex items-center justify-between group"
                    style={{ transitionDelay: divisionsOpen ? `${idx * 40}ms` : '0ms' }}
                  >
                    <span>{div}</span>
                    <ArrowRight className="w-4 h-4 text-[#C90815] opacity-0 group-hover:opacity-100 transition-all duration-200" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Regular Nav Items */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#144C94]/20 to-transparent my-4" />
          {NAV_ITEMS.filter(i => i.label !== "Divisions").map((item, idx) => (
            <Link
              key={item.href}
              href={item.href}
            >
              <div
                className={cn(
                  "px-4 py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-between group",
                  location === item.href 
                    ? "bg-gradient-to-r from-[#C90815] to-[#144C94] text-white shadow-lg" 
                    : "text-black/70 hover:bg-gradient-to-r hover:from-[#C90815]/5 hover:to-[#144C94]/5 hover:text-[#144C94] hover:translate-x-2"
                )}
                style={{ transitionDelay: isOpen ? `${(idx + DIVISIONS.length) * 40}ms` : '0ms' }}
              >
                <span>{item.label}</span>
                {location === item.href && (
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                )}
              </div>
            </Link>
          ))}

          {/* Mobile CTA */}
          <div className="pt-6">
            <Link href="/contact">
              <Button className="w-full bg-gradient-to-r from-[#C90815] to-[#144C94] text-white font-bold rounded-xl py-6 text-base shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group">
                Get a Quote
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}