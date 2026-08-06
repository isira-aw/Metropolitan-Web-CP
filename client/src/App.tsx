import { Switch, Route, useLocation } from "wouter";
import { lazy, Suspense, useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ChatbotWidget } from "@/components/ChatbotWidget";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const DivisionsIntro = lazy(() => import("@/pages/DivisionsIntro"));
const CentralAC = lazy(() => import("@/pages/CentralAC"));
const Elevators = lazy(() => import("@/pages/Elevators"));
const FireProtection = lazy(() => import("@/pages/FireProtection"));
const Generator = lazy(() => import("@/pages/Generator"));
const Solar = lazy(() => import("@/pages/Solar"));
const ELV = lazy(() => import("@/pages/ELV"));
const CaseStudies = lazy(() => import("@/pages/CaseStudies"));
const CaseStudyDetail = lazy(() => import("@/pages/CaseStudyDetail"));
const News = lazy(() => import("@/pages/News"));
const NewsDetail = lazy(() => import("@/pages/NewsDetail"));
const Careers = lazy(() => import("@/pages/Careers"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/not-found"));

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function RouteFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-10 h-10 rounded-full border-2 border-[var(--metro-blue)]/20 border-t-[var(--metro-blue)] animate-spin" />
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/divisions" component={DivisionsIntro} />
        <Route path="/divisions/central-ac" component={CentralAC} />
        <Route path="/divisions/elevators-and-travelators" component={Elevators} />
        <Route path="/divisions/fire-detection-protection" component={FireProtection} />
        <Route path="/divisions/generator" component={Generator} />
        <Route path="/divisions/solar" component={Solar} />
        <Route path="/divisions/elv" component={ELV} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/case-studies/:id" component={CaseStudyDetail} />
        <Route path="/news" component={News} />
        <Route path="/news/:id" component={NewsDetail} />
        <Route path="/careers" component={Careers} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ScrollToTop />
        <Router />
        <ChatbotWidget />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
