import { Link } from "wouter";
import { ArrowLeft, Compass } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white font-sans">
      <Navbar />
      <div className="relative flex-1 flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 blueprint-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="relative text-center px-4 max-w-md">
          <span className="eyebrow text-[#144A92] mb-4 block">Error 404</span>
          <p className="text-8xl md:text-9xl font-display font-bold text-black/10 mb-4">404</p>
          <h1 className="text-2xl font-bold text-black mb-3">Page Not Found</h1>
          <p className="text-[#424242] text-sm mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#144A92] text-white font-medium text-sm rounded-lg transition-all duration-300 hover:shadow-md hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#144A92] focus-visible:ring-offset-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <Link
              href="/divisions"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#424242] border border-black/[0.1] font-medium text-sm rounded-lg transition-all duration-300 hover:bg-[#144A92]/[0.04] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#144A92] focus-visible:ring-offset-2"
            >
              <Compass className="w-4 h-4" />
              Explore Divisions
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
