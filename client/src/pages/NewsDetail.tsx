import { useRoute } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useNewsItem } from "@/hooks/use-news";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";
import { format } from "date-fns";

export default function NewsDetail() {
  const [, params] = useRoute("/news/:id");
  const id = parseInt(params?.id || "0");
  const { data: news, isLoading, error } = useNewsItem(id);

  if (isLoading) return <div className="min-h-screen bg-white flex items-center justify-center"><div className="w-10 h-10 border-4 border-[#144A92] border-t-transparent rounded-full animate-spin"/></div>;
  if (error || !news) return <div className="min-h-screen bg-white flex items-center justify-center text-[#424242]">Article not found</div>;

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      <div className="bg-[#f8f8f8] pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-black text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">{news.title}</h1>
          <div className="flex items-center justify-center gap-6 text-[#424242]">
            <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {news.date ? format(new Date(news.date), 'MMMM d, yyyy') : ''}</span>
            <span className="flex items-center"><User className="w-4 h-4 mr-2" /> Metropolitan Comms</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-xl overflow-hidden shadow-sm border border-black/[0.06] mb-12">
           <img src={news.image} alt={news.title} className="w-full h-auto" />
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
