import { useState } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Pagination } from "@/components/Pagination";
import { useNews } from "@/hooks/use-news";
import { Card } from "@/components/ui/card";
import { Calendar, ArrowRight, Newspaper } from "lucide-react";
import { format } from "date-fns";

export default function News() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useNews({ limit: 6, page });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="relative bg-[#f8f8f8] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="eyebrow text-[#144A92] mb-4 block">Latest Updates</span>
          <SectionHeader title="News & Insights" subtitle="Updates from across our operations in Sri Lanka." />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array(6).fill(0).map((_, i) => (
              <div key={i} className="h-[400px] bg-[#f8f8f8] animate-pulse rounded-xl" />
            ))
          ) : data?.data && data.data.length > 0 ? (
            data.data.map(item => (
              <Card key={item.id} className="group overflow-hidden rounded-xl border border-black/[0.06] shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-[#144A92] font-medium mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {item.date ? format(new Date(item.date), 'MMM d, yyyy') : 'Recent'}
                  </div>
                  <h3 className="text-xl font-bold font-display text-black mb-3 group-hover:text-[#144A92] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-[#424242] text-sm line-clamp-3 mb-6">
                    {item.summary}
                  </p>
                  <Link href={`/news/${item.id}`}>
                    <span className="inline-flex items-center font-bold text-[#144A92] hover:underline cursor-pointer">
                      Read More <ArrowRight className="ml-1 w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </Card>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center text-center py-20 px-4">
              <div className="w-16 h-16 rounded-full bg-[#144A92]/[0.06] flex items-center justify-center mb-5">
                <Newspaper className="w-7 h-7 text-[#144A92]" />
              </div>
              <p className="text-lg font-semibold text-black mb-1">No news articles yet</p>
              <p className="text-[#424242] text-sm max-w-sm">
                Check back soon for updates from across our operations.
              </p>
            </div>
          )}
        </div>

        {data && data.totalPages > 1 && (
          <Pagination
            currentPage={page}
            totalPages={data.totalPages}
            onPageChange={setPage}
          />
        )}
      </div>

      <Footer />
    </div>
  );
}
