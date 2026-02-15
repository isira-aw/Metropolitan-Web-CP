import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DIVISIONS, getDivisionDisplayName, type DivisionKey } from "@shared/schema";

// Map division keys to URL paths
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
        "fixed w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gray-900 flex items-center justify-center font-bold text-white text-lg">M</div>
            <span className="font-semibold text-lg tracking-tight text-color-heading">METROPOLITAN</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              if (item.label === "Divisions") {
                return (
                  <div key={item.label} className="relative group">
                    <button
                      onClick={() => setDivisionsOpen(!divisionsOpen)}
                      className={cn(
                        "flex items-center gap-1 text-sm font-medium transition-colors",
                        location === item.href ? "text-color-heading border-b-2 border-gray-900 pb-1" : "text-color-text hover:text-color-heading"
                      )}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </button>
                    {divisionsOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                        {DIVISIONS.map((div) => (
                          <Link
                            key={div}
                            href={DIVISION_PATHS[div as DivisionKey]}
                            className="block px-4 py-2 text-sm text-color-text hover:text-color-heading hover:bg-color-accent-primary transition-colors"
                          >
                            {getDivisionDisplayName(div)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative group",
                    location === item.href ? "text-color-heading" : "text-color-text hover:text-color-heading"
                  )}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all group-hover:w-full"></span>
                </Link>
              );
            })}
            <Button className="bg-gray-900 hover:bg-gray-800 text-white button-hover">
              Get in Touch
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-color-text hover:text-color-heading transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            <div className="absolute right-0 top-0 h-full w-[80%] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <div className="w-8 h-8 rounded bg-gray-900 flex items-center justify-center font-bold text-white text-lg">M</div>
                    <span className="font-semibold text-lg tracking-tight text-color-heading">METROPOLITAN</span>
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-color-text hover:text-color-heading transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex flex-col gap-6">
                  {NAV_ITEMS.map((item) => {
                    if (item.label === "Divisions") {
                      return (
                        <div key={item.label} className="space-y-3">
                          <button
                            onClick={() => setDivisionsOpen(!divisionsOpen)}
                            className="flex items-center justify-between text-sm font-medium text-color-text hover:text-color-heading transition-colors"
                          >
                            {item.label}
                            <ChevronDown className={cn("w-4 h-4 transition-transform", divisionsOpen ? "rotate-180" : "")} />
                          </button>
                          {divisionsOpen && (
                            <div className="pl-4 space-y-2">
                              {DIVISIONS.map((div) => (
                                <Link
                                  key={div}
                                  href={DIVISION_PATHS[div as DivisionKey]}
                                  className="block text-sm text-color-text hover:text-color-heading hover:bg-color-accent-primary px-3 py-2 rounded transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {getDivisionDisplayName(div)}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    }
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={cn(
                          "text-sm font-medium transition-colors",
                          location === item.href ? "text-color-heading" : "text-color-text hover:text-color-heading"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>

                <div className="mt-8">
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white button-hover">
                    Get in Touch
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
