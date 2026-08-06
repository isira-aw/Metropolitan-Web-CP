import { useRoute, Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useNewsItem } from "@/hooks/use-news";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { format } from "date-fns";

export default function NewsDetail() {
  const [, params] = useRoute("/news/:id");
  const id = parseInt(params?.id || "0");
  const { data: news, isLoading, error } = useNewsItem(id);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="flex items-center justify-center py-32">
          <div className="w-10 h-10 border-4 border-[#144A92] border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  if (error || !news) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-32">
          <p className="text-lg font-semibold text-black mb-2">Article not found</p>
          <p className="text-[#424242] text-sm mb-6">This article may have been moved or no longer exists.</p>
          <Link href="/news">
            <Button variant="outline" className="rounded-lg">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to News
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      <div className="relative bg-[#f8f8f8] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-black text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">{news.title}</h1>
          <div className="flex items-center justify-center gap-6 text-[#424242] flex-wrap">
            <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {news.date ? format(new Date(news.date), 'MMMM d, yyyy') : ''}</span>
            <span className="flex items-center"><User className="w-4 h-4 mr-2" /> Metropolitan Comms</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 section-padding">
        <Link href="/news">
          <Button variant="ghost" className="text-[#424242] pl-0 mb-6 hover:text-[#144A92] hover:bg-transparent">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to News
          </Button>
        </Link>

        <div className="rounded-xl overflow-hidden shadow-sm border border-black/[0.06] mb-12 aspect-video">
           <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-lg prose-headings:font-display prose-headings:text-black prose-a:text-[#144A92] max-w-none">
          <p className="lead font-medium text-xl text-[#424242] mb-8">{news.summary}</p>
          <div dangerouslySetInnerHTML={{ __html: news.content }} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
