import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DIVISIONS, getDivisionDisplayName, type DivisionKey } from "@shared/schema";

const DIVISION_PATHS: Record<DivisionKey, string> = {
  CENTRAL_AC: "/divisions/central-ac",
  ELEVATORS: "/divisions/elevators-and-travelators",
  FIRE_PROTECTION: "/divisions/fire-detection-protection",
  GENERATOR: "/divisions/generator",
  SOLAR: "/divisions/solar",
  ELV: "/divisions/elv"
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDivisionsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-black/[0.06]"
            : "bg-gradient-to-b from-black/80 to-black/30 px-2 rounded-t-none rounded-b-md"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-3 group">
              <img
                src="/metrologo.png"
                alt="Metro Logo"
                className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-105"
              />

              <span className={cn(
                "font-bold text-lg tracking-tight transition-colors duration-300",
                scrolled ? "text-black" : "text-white"
              )}>
                METROPOLITAN
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.filter(i => i.label !== "Divisions").map((item) => (
                <Link key={item.href} href={item.href}>
                  <div className={cn(
                    "relative px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 cursor-pointer group",
                    location === item.href
                      ? scrolled ? "text-black" : "text-white"
                      : scrolled ? "text-[#424242] hover:text-black" : "text-white/80 hover:text-white"
                  )}>
                    {item.label}
                    <div className={cn(
                      "absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300",
                      location === item.href
                        ? "w-5 bg-[#CB0816]/60"
                        : "w-0 group-hover:w-5 bg-[#144A92]/30"
                    )} />
                  </div>
                </Link>
              ))}

              {/* Divisions Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setDivisionsOpen(!divisionsOpen)}
                  className={cn(
                    "relative px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 cursor-pointer flex items-center gap-1 group",
                    location.startsWith("/divisions")
                      ? scrolled ? "text-black" : "text-white"
                      : scrolled ? "text-[#424242] hover:text-black" : "text-white/80 hover:text-white"
                  )}
                >
                  Divisions
                  <ChevronDown className={cn(
                    "w-3.5 h-3.5 transition-transform duration-300",
                    divisionsOpen && "rotate-180"
                  )} />
                  <div className={cn(
                    "absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300",
                    location.startsWith("/divisions") || divisionsOpen
                      ? "w-5 bg-[#CB0816]/60"
                      : "w-0 group-hover:w-5 bg-[#144A92]/30"
                  )} />
                </button>

                <div className={cn(
                  "absolute top-full left-0 mt-3 w-60 bg-white rounded-xl shadow-lg border border-black/[0.06] overflow-hidden transition-all duration-300 origin-top",
                  divisionsOpen
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                )}>
                  <div className="py-2">
                    {DIVISIONS.map((div) => (
                      <Link
                        key={div}
                        href={DIVISION_PATHS[div] || `/divisions/${div.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                      >
                        <div className="px-4 py-2.5 transition-all duration-200 flex items-center justify-between group cursor-pointer hover:bg-[#144A92]/[0.04]">
                          <span className="text-sm text-[#424242] group-hover:text-black transition-colors">
                            {getDivisionDisplayName(div)}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#424242]/30 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/contact">
                <button className="ml-4 px-6 py-2.5 bg-[#144A92] text-white font-medium text-[13px] rounded-lg transition-all duration-300 hover:shadow-md hover:scale-[1.03] active:scale-[0.98]">
                  Get a Quote
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "p-2.5 rounded-lg transition-colors duration-300",
                  scrolled
                    ? "text-black hover:bg-black/5"
                    : "text-white hover:bg-white/10"
                )}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/30 backdrop-blur-[2px] z-40 transition-opacity duration-300 lg:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Slide-in Panel */}
      <div className={cn(
        "fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-2xl transition-transform duration-300 ease-out lg:hidden overflow-y-auto",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="p-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-black/5 transition-colors"
            >
              <X className="w-5 h-5 text-[#424242]" />
            </button>
          </div>

          {/* Divisions Accordion */}
          <div className="mb-4">
            <button
              onClick={() => setDivisionsOpen(!divisionsOpen)}
              className="w-full flex items-center justify-between py-3 text-[15px] font-medium text-black"
            >
              <span>Divisions</span>
              <ChevronDown className={cn(
                "w-4 h-4 text-[#424242] transition-transform duration-300",
                divisionsOpen && "rotate-180"
              )} />
            </button>
            <div className={cn(
              "overflow-hidden transition-all duration-300",
              divisionsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            )}>
              <div className="pl-4 space-y-1 pb-2">
                {DIVISIONS.map((div) => (
                  <Link
                    key={div}
                    href={DIVISION_PATHS[div] || `/divisions/${div.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                  >
                    <div className="py-2.5 text-sm text-[#424242] hover:text-black transition-colors cursor-pointer">
                      {getDivisionDisplayName(div)}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="h-px bg-black/5 mb-4" />

          {/* Nav Items */}
          <div className="space-y-1">
            {NAV_ITEMS.filter(i => i.label !== "Divisions").map((item) => (
              <Link key={item.href} href={item.href}>
                <div className={cn(
                  "py-3 text-[15px] font-medium transition-colors cursor-pointer flex items-center justify-between",
                  location === item.href ? "text-black" : "text-[#424242] hover:text-black"
                )}>
                  <span>{item.label}</span>
                  {location === item.href && (
                    <div className="w-1.5 h-1.5 rounded-full bg-[#CB0816]/50" />
                  )}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/contact">
              <Button className="w-full bg-[#144A92] text-white font-medium rounded-lg py-6 text-sm transition-all duration-300 hover:shadow-md">
                Get a Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
