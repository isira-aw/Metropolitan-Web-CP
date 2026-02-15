import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CaseStudy } from "@shared/schema";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  if (!caseStudy) {
    return (
      <Card className="overflow-hidden border-gray-200">
        <div className="relative h-48 overflow-hidden bg-gray-100" />
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <Badge variant="outline" className="bg-white/90 text-color-text border-gray-300">
              Loading...
            </Badge>
          </div>
          <CardTitle className="mt-3">Loading...</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-color-text/70 text-sm line-clamp-3">
            Loading...
          </p>
        </CardContent>
        <CardFooter className="pt-0">
          <span className="flex items-center gap-1 text-sm font-medium text-color-heading hover:text-color-text transition-colors group">
            View Case Study
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden border-gray-200">
      <div className="relative h-48 overflow-hidden">
        <img
          src={caseStudy.image || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"}
          alt={caseStudy.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className="bg-white/90 text-color-text border-gray-300">
            {caseStudy.division}
          </Badge>
        </div>
        <CardTitle className="mt-3">{caseStudy.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-color-text/70 text-sm line-clamp-3">
          {caseStudy.description}
        </p>
      </CardContent>
      <CardFooter className="pt-0">
        <Link href={`/case-studies/${caseStudy.id}`} className="flex items-center gap-1 text-sm font-medium text-color-heading hover:text-color-text transition-colors group">
          View Case Study
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
}
