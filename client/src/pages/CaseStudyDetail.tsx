import { useRoute } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useCaseStudy } from "@/hooks/use-case-studies";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MapPin, Building } from "lucide-react";
import { Link } from "wouter";

export default function CaseStudyDetail() {
  const [, params] = useRoute("/case-studies/:id");
  const id = parseInt(params?.id || "0");
  const { data: project, isLoading, error } = useCaseStudy(id);

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

  if (error || !project) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-32">
          <p className="text-lg font-semibold text-black mb-2">Project not found</p>
          <p className="text-[#424242] text-sm mb-6">This project may have been moved or no longer exists.</p>
          <Link href="/case-studies">
            <Button variant="outline" className="rounded-lg">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Projects
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

      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">{project.title}</h1>
            {project.location && (
              <p className="text-xl text-white/80 flex items-center">
                <MapPin className="w-5 h-5 mr-2" /> {project.location}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-padding">
            <Link href="/case-studies">
              <Button variant="ghost" className="text-[#424242] pl-0 mb-6 hover:text-[#144A92] hover:bg-transparent">
                <ArrowLeft className="mr-2 w-4 h-4" /> Back to Projects
              </Button>
            </Link>
            <div className="flex flex-wrap gap-3 mb-10">
              <Badge className="bg-[#144A92]/10 text-[#144A92] hover:bg-[#144A92]/15 border border-[#144A92]/20 text-sm py-1 px-3">{project.division}</Badge>
              {project.completionDate && (
                <Badge variant="outline" className="text-[#424242] border-black/[0.06] bg-[#f8f8f8]">
                  <Calendar className="w-3 h-3 mr-1" /> {project.completionDate}
                </Badge>
              )}
            </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-display font-bold text-black mb-6">Project Overview</h2>
            <div className="prose prose-lg text-[#424242] max-w-none leading-relaxed">
              {project.description.split('\n').map((paragraph, i) => (
                <p key={i} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-[#f8f8f8] rounded-xl p-8 sticky top-24 border border-black/[0.06]">
              <h3 className="text-xl font-bold text-black mb-6">Project Details</h3>

              <div className="space-y-6">
                {project.client && (
                  <div>
                    <p className="text-sm font-semibold text-[#424242]/60 uppercase tracking-wider mb-1">Client</p>
                    <p className="text-lg font-medium text-black flex items-center">
                      <Building className="w-4 h-4 mr-2 text-[#144A92]" /> {project.client}
                    </p>
                  </div>
                )}

                <div>
                   <p className="text-sm font-semibold text-[#424242]/60 uppercase tracking-wider mb-1">Status</p>
                   <p className="text-lg font-medium text-black">Completed</p>
                </div>

                <div className="pt-6 border-t border-black/[0.06]">
                  <Link href="/contact">
                    <Button className="w-full bg-[#144A92] text-white hover:shadow-md hover:scale-[1.03] rounded-lg transition-all">
                      Discuss Similar Project
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
