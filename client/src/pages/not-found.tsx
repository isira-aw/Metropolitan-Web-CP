import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
      <div className="text-center px-4 max-w-md">
        <p className="text-8xl font-bold text-black/10 mb-4">404</p>
        <h1 className="text-2xl font-bold text-black mb-3">Page Not Found</h1>
        <p className="text-[#424242] text-sm mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#144A92] text-white font-medium text-sm rounded-lg transition-all duration-300 hover:shadow-md hover:scale-[1.03]">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
