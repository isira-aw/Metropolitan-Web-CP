import { useEffect, useState, type ReactNode } from "react";
import { Link } from "wouter";
import type { LucideIcon } from "lucide-react";
import { CheckCircle2, ChevronDown, Quote } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { InquiryForm } from "@/components/InquiryForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCaseStudies } from "@/hooks/use-case-studies";
import { useTestimonials } from "@/hooks/use-testimonials";
import { cn } from "@/lib/utils";

/**
 * Shared structural shell for the six division pages (Central AC, Elevators,
 * Fire Protection, Generator, ELV, Solar). Owns the common layout — hero,
 * technical specs, services grid, optional accordion divisions, "why choose
 * us", testimonials, optional FAQ, projects, optional partners grid, and
 * contact — while every piece of division-specific copy/data is passed in as
 * props. Nothing here should contain division-specific business logic beyond
 * the `divisionKey` used to filter case studies/testimonials.
 */

const SECTION_PADDING = "py-20 md:py-24";
const CONTAINER = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

export interface DivisionSpec {
  label: string;
  value: string;
  icon?: LucideIcon;
}

export interface DivisionService {
  icon: LucideIcon;
  title: string;
  description: string;
  /** Optional secondary checklist rendered under the description (2-col bullet grid). */
  details?: string[];
}

export interface WhyChooseUsBlock {
  icon?: LucideIcon;
  title?: string;
  /** Bullet list — used when `description` is not provided. */
  items?: string[];
  /** Plain paragraph — used instead of a bullet list. */
  description?: string;
}

export interface SideCardItem {
  label: string;
  value?: string;
  description?: string;
}

export interface WhyChooseUsConfig {
  /** "checklist": single bullet list + optional side card (2-col). "grid": centered heading + N feature blocks. */
  layout: "checklist" | "grid";
  heading: string;
  headingIcon?: LucideIcon;
  intro?: string;
  blocks: WhyChooseUsBlock[];
  sideCard?: {
    icon?: LucideIcon;
    heading: string;
    items: SideCardItem[];
  };
  badges?: string[];
}

export interface ProcessStepsConfig {
  heading: string;
  subtitle?: string;
  steps: { step: string; title: string; desc: string }[];
  /** Where to render this section relative to the others. Default "afterServices". */
  position?: "beforeServices" | "afterServices" | "afterWhyChooseUs";
}

export interface TopBannerConfig {
  icon: LucideIcon;
  text: string;
  className?: string;
}

export interface AfterHeroBannerConfig {
  heading?: string;
  icon?: LucideIcon;
  items: { icon: LucideIcon; label: string }[];
  className?: string;
}

export interface ExtraGridConfig {
  heading: string;
  subtitle?: string;
  items: string[];
}

export interface ContactHighlight {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface AccordionDivisionItem {
  id: string;
  title: string;
  icon: LucideIcon;
  content: ReactNode;
}

export interface AccordionDivisionsConfig {
  heading: string;
  subtitle?: string;
  items: AccordionDivisionItem[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqConfig {
  heading: string;
  subtitle?: string;
  items: FaqItem[];
}

export interface PartnerItem {
  name: string;
  tagline?: string;
  logo: string;
  url: string;
}

export interface PartnersConfig {
  heading: string;
  subtitle?: string;
  items: PartnerItem[];
}

export interface ContactCalloutConfig {
  icon: LucideIcon;
  heading: string;
  description?: string;
  items?: string[];
  bigText?: string;
  className?: string;
}

export interface DivisionPageLayoutProps {
  /** Enum key used to filter case studies / testimonials, e.g. "CENTRAL_AC". */
  divisionKey: string;
  /** Human-readable division name passed to InquiryForm and used in the case-studies query param. */
  divisionLabel: string;

  topBanner?: TopBannerConfig;

  // Hero
  eyebrowIcon: LucideIcon;
  eyebrowText: string;
  eyebrowClassName?: string;
  title: ReactNode;
  description: string;
  ctaPrimaryLabel: string;
  ctaPrimaryIcon?: LucideIcon;
  ctaPrimaryClassName?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryClassName?: string;
  heroImage: string;
  heroImageAlt: string;
  heroStat?: { icon: LucideIcon; label: string; value: string };
  heroBackgroundClassName?: string;
  heroTextTheme?: "dark" | "light";

  afterHeroBanner?: AfterHeroBannerConfig;

  specs?: DivisionSpec[];

  servicesTitle: string;
  servicesSubtitle?: string;
  services: DivisionService[];

  accordionDivisions?: AccordionDivisionsConfig;

  processSteps?: ProcessStepsConfig;

  whyChooseUs?: WhyChooseUsConfig;

  extraGrid?: ExtraGridConfig;

  faq?: FaqConfig;

  projectsTitle: string;
  viewAllLabel?: string;
  caseStudiesQueryValue: string;

  partners?: PartnersConfig;

  contactHeading: string;
  contactDescription: string;
  contactHighlights?: ContactHighlight[];
  contactCallout?: ContactCalloutConfig;
}

function Eyebrow({ icon: Icon, text, className }: { icon: LucideIcon; text: string; className?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-2 bg-[#144A92]/[0.06] px-4 py-2 rounded-full mb-6", className)}>
      <Icon className="w-4 h-4 text-[#144A92]" />
      <span className="eyebrow text-[#144A92]">{text}</span>
    </div>
  );
}

const STEP_GRID_COLS: Record<number, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  5: "md:grid-cols-5",
};

function ProcessStepsSection({ config }: { config: ProcessStepsConfig }) {
  const cols = STEP_GRID_COLS[Math.min(config.steps.length, 5)] ?? "md:grid-cols-4";
  return (
    <section className={cn(SECTION_PADDING, "bg-[#0a0e14] text-white")}>
      <div className={CONTAINER}>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">{config.heading}</h2>
        {config.subtitle && (
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-12">{config.subtitle}</p>
        )}
        <div className={cn("grid grid-cols-1 gap-6 mt-12", cols)}>
          {config.steps.map((item, i) => (
            <div key={i} className="relative animate-scroll-reveal" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="bg-white/[0.06] backdrop-blur-sm p-6 rounded-2xl border border-white/10 h-full card-hover-dark">
                <div className="text-4xl font-bold text-[var(--metro-light-blue)] mb-3">{item.step}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
              {i < config.steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[var(--metro-light-blue)]/60" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AccordionDivisionsSection({
  config,
  expandedId,
  onToggle,
}: {
  config: AccordionDivisionsConfig;
  expandedId: string | null;
  onToggle: (id: string) => void;
}) {
  return (
    <section className={cn(SECTION_PADDING, "bg-[#144A92]/[0.02]")}>
      <div className={CONTAINER}>
        <SectionHeader title={config.heading} subtitle={config.subtitle} />
        <div className="space-y-3 md:space-y-4 mt-8 md:mt-12">
          {config.items.map((division) => {
            const Icon = division.icon;
            const isExpanded = expandedId === division.id;
            return (
              <div key={division.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
                <button
                  onClick={() => onToggle(division.id)}
                  className="w-full p-4 md:p-6 flex items-center justify-between hover:bg-gray-50 transition-all"
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#144A92]/[0.06] rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#144A92]" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-black">{division.title}</h3>
                  </div>
                  <ChevronDown className={cn("w-5 h-5 md:w-6 md:h-6 text-[#424242] transition-transform duration-300", isExpanded && "rotate-180")} />
                </button>
                <div className={cn("overflow-hidden transition-all duration-500 ease-in-out", isExpanded ? "max-h-[8000px] opacity-100" : "max-h-0 opacity-0")}>
                  <div className="p-4 md:p-6 pt-0 border-t border-gray-100">{division.content}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FaqSection({
  config,
  activeIndex,
  onToggle,
}: {
  config: FaqConfig;
  activeIndex: number | null;
  onToggle: (i: number) => void;
}) {
  return (
    <section className={cn(SECTION_PADDING, "bg-[#f8f8f8]")}>
      <div className={cn(CONTAINER, "max-w-3xl")}>
        <SectionHeader title={config.heading} subtitle={config.subtitle} />
        <div className="space-y-3 md:space-y-4 mt-8 md:mt-12">
          {config.items.map((item, i) => {
            const isActive = activeIndex === i;
            return (
              <div key={i} className={cn("bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300", isActive && "shadow-md border-[#144A92]/20")}>
                <button
                  onClick={() => onToggle(i)}
                  className="w-full p-4 md:p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-all"
                >
                  <span className="font-bold text-black pr-4 text-sm md:text-base">{item.question}</span>
                  <span className={cn("text-2xl text-[#144A92] transition-transform duration-300 shrink-0", isActive && "rotate-45")}>+</span>
                </button>
                <div className={cn("overflow-hidden transition-all duration-300", isActive ? "max-h-40" : "max-h-0")}>
                  <p className="px-4 md:px-6 pb-4 md:pb-6 text-[#424242] text-sm md:text-base">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PartnersSection({ config }: { config: PartnersConfig }) {
  return (
    <section className={cn(SECTION_PADDING, "bg-[#144A92]/[0.02]")}>
      <div className={CONTAINER}>
        <SectionHeader title={config.heading} subtitle={config.subtitle} />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 mt-8 md:mt-12">
          {config.items.map((partner, i) => (
            <a
              key={i}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-4 md:p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-10 md:h-12 w-auto object-contain mb-2 opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
              />
              <p className="font-bold text-black group-hover:text-[#144A92] transition-colors text-xs md:text-sm">{partner.name}</p>
              {partner.tagline && <p className="text-[9px] md:text-[10px] text-[#424242] mt-0.5 leading-tight">{partner.tagline}</p>}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DivisionPageLayout({
  divisionKey,
  divisionLabel,
  topBanner,
  eyebrowIcon,
  eyebrowText,
  eyebrowClassName,
  title,
  description,
  ctaPrimaryLabel,
  ctaPrimaryIcon: CtaPrimaryIcon,
  ctaPrimaryClassName,
  ctaSecondaryLabel,
  ctaSecondaryClassName,
  heroImage,
  heroImageAlt,
  heroStat,
  heroBackgroundClassName = "bg-[#f8f8f8]",
  heroTextTheme = "dark",
  afterHeroBanner,
  specs,
  servicesTitle,
  servicesSubtitle,
  services,
  accordionDivisions,
  processSteps,
  whyChooseUs,
  extraGrid,
  faq,
  projectsTitle,
  viewAllLabel = "View All Projects",
  caseStudiesQueryValue,
  partners,
  contactHeading,
  contactDescription,
  contactHighlights,
  contactCallout,
}: DivisionPageLayoutProps) {
  const { data: projects, isLoading } = useCaseStudies({ division: divisionKey, limit: 3 });
  const { data: testimonialsData } = useTestimonials({ division: divisionKey });
  const [expandedDivisionId, setExpandedDivisionId] = useState<string | null>(null);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroIsDark = heroTextTheme === "light";
  const HeroStatIcon = heroStat?.icon;

  const processStepsPosition = processSteps?.position ?? "afterServices";

  const scrollToContact = () => {
    document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {topBanner && (
        <div className={cn("py-3 text-white", topBanner.className ?? "bg-[var(--metro-red)]")}>
          <div className={cn(CONTAINER, "flex items-center justify-center gap-3 text-sm font-semibold")}>
            <topBanner.icon className="w-5 h-5" />
            <span>{topBanner.text}</span>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className={cn("relative overflow-hidden", SECTION_PADDING, heroBackgroundClassName)}>
        <div
          className={cn(
            "absolute inset-0 pointer-events-none",
            heroIsDark ? "blueprint-grid opacity-[0.14]" : "blueprint-grid opacity-[0.06]"
          )}
        />
        <div className={cn(CONTAINER, "relative z-10")}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-scroll-reveal">
              <Eyebrow icon={eyebrowIcon} text={eyebrowText} className={eyebrowClassName} />
              <h1
                className={cn(
                  "text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6",
                  heroIsDark ? "text-white" : "text-black"
                )}
              >
                {title}
              </h1>
              <p
                className={cn(
                  "text-lg md:text-xl leading-relaxed mb-8",
                  heroIsDark ? "text-white/80" : "text-[#424242]"
                )}
              >
                {description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={scrollToContact} size="lg" className={cn("rounded-lg", ctaPrimaryClassName ?? "bg-[#144A92] hover:bg-[#144A92]/90")}>
                  {ctaPrimaryLabel}
                  {CtaPrimaryIcon && <CtaPrimaryIcon className="ml-2 w-4 h-4" />}
                </Button>
                {ctaSecondaryLabel && (
                  <Button
                    onClick={scrollToContact}
                    size="lg"
                    variant="outline"
                    className={cn("rounded-lg", ctaSecondaryClassName)}
                  >
                    {ctaSecondaryLabel}
                  </Button>
                )}
              </div>
            </div>

            <div className="relative animate-image-pop delay-200">
              <img
                src={heroImage}
                alt={heroImageAlt}
                className="rounded-xl shadow-sm w-full h-[420px] md:h-[500px] object-cover"
              />
              {heroStat && HeroStatIcon && (
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-sm border border-black/[0.06]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#144A92]/[0.06] rounded-full flex items-center justify-center">
                      <HeroStatIcon className="w-6 h-6 text-[#144A92]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#424242]">{heroStat.label}</p>
                      <p className="text-2xl font-bold text-black">{heroStat.value}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {afterHeroBanner && (
        <section className={cn("py-8 text-white", afterHeroBanner.className ?? "bg-[#144A92]")}>
          <div className={CONTAINER}>
            {afterHeroBanner.heading && (
              <div className="flex items-center justify-center gap-3 mb-4">
                {afterHeroBanner.icon && <afterHeroBanner.icon className="w-6 h-6" />}
                <h3 className="font-bold text-lg">{afterHeroBanner.heading}</h3>
              </div>
            )}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {afterHeroBanner.items.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* TECHNICAL SPECS */}
      {specs && specs.length > 0 && (
        <section className={cn(SECTION_PADDING, "bg-white")}>
          <div className={CONTAINER}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {specs.map((spec, i) => {
                const Icon = spec.icon;
                return (
                  <Card
                    key={i}
                    className="rounded-xl border border-black/[0.06] shadow-sm card-hover animate-scroll-reveal"
                    style={{ animationDelay: `${i * 0.08}s` }}
                  >
                    <CardContent className="p-6 text-center">
                      {Icon && <Icon className="w-8 h-8 text-[#144A92] mx-auto mb-3" />}
                      <p className="text-sm text-[#424242] mb-2">{spec.label}</p>
                      <p className="text-2xl font-bold text-[#144A92]">{spec.value}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {processSteps && processStepsPosition === "beforeServices" && (
        <ProcessStepsSection config={processSteps} />
      )}

      {/* SERVICES */}
      <section className={cn(SECTION_PADDING, "bg-[#f8f8f8]")}>
        <div className={CONTAINER}>
          <SectionHeader title={servicesTitle} subtitle={servicesSubtitle} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="group bg-white p-8 rounded-xl border border-black/[0.06] shadow-sm card-hover animate-scroll-reveal"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="flex items-start gap-6 mb-4">
                    <div className="w-14 h-14 bg-[#144A92]/[0.06] rounded-xl flex items-center justify-center shrink-0 transition-all group-hover:bg-[#144A92] group-hover:scale-105">
                      <Icon className="w-7 h-7 text-[#144A92] group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-black mb-2">{service.title}</h3>
                      <p className="text-[#424242]">{service.description}</p>
                    </div>
                  </div>
                  {service.details && service.details.length > 0 && (
                    <div className="grid grid-cols-2 gap-3 mt-4 pl-0 md:pl-20">
                      {service.details.map((detail, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#144A92] shrink-0 mt-0.5" />
                          <span className="text-sm text-[#424242]">{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {processSteps && processStepsPosition === "afterServices" && (
        <ProcessStepsSection config={processSteps} />
      )}

      {/* ACCORDION DIVISIONS */}
      {accordionDivisions && (
        <AccordionDivisionsSection
          config={accordionDivisions}
          expandedId={expandedDivisionId}
          onToggle={(id) => setExpandedDivisionId((prev) => (prev === id ? null : id))}
        />
      )}

      {/* WHY CHOOSE US */}
      {whyChooseUs && (
        <section className={cn(SECTION_PADDING, "bg-[#0a0e14] text-white relative overflow-hidden")}>
          <div className="absolute inset-0 blueprint-grid opacity-[0.1] pointer-events-none" />
          <div className={cn(CONTAINER, "relative z-10")}>
            {whyChooseUs.layout === "checklist" ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-white text-3xl md:text-4xl font-display font-bold mb-6">{whyChooseUs.heading}</h2>
                  {whyChooseUs.intro && <p className="text-white/70 text-lg mb-6">{whyChooseUs.intro}</p>}
                  <div className="space-y-4">
                    {whyChooseUs.blocks[0]?.items?.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[var(--metro-light-blue)] shrink-0 mt-0.5" />
                        <p className="text-white/90 text-lg">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {whyChooseUs.sideCard && (
                  <div className="bg-white/[0.06] p-8 rounded-xl border border-white/10">
                    {whyChooseUs.sideCard.icon && (
                      <whyChooseUs.sideCard.icon className="w-12 h-12 text-[var(--metro-light-blue)] mb-6" />
                    )}
                    <h3 className="text-2xl font-bold mb-4">{whyChooseUs.sideCard.heading}</h3>
                    <ul className="space-y-4 text-white/90">
                      {whyChooseUs.sideCard.items.map((item, i) =>
                        item.value ? (
                          <li key={i} className="flex gap-4">
                            <div className="text-3xl font-bold text-[var(--metro-light-blue)] shrink-0">{item.value}</div>
                            <div>
                              <p className="font-semibold">{item.label}</p>
                              {item.description && <p className="text-white/70 text-sm">{item.description}</p>}
                            </div>
                          </li>
                        ) : (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[var(--metro-light-blue)] rounded-full" />
                            <span>{item.label}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <>
                <div className="text-center mb-12 max-w-2xl mx-auto">
                  {whyChooseUs.headingIcon && (
                    <whyChooseUs.headingIcon className="w-14 h-14 text-[var(--metro-light-blue)] mx-auto mb-4" />
                  )}
                  <h2 className="text-white text-3xl md:text-4xl font-display font-bold mb-4">{whyChooseUs.heading}</h2>
                  {whyChooseUs.intro && <p className="text-white/70 text-lg">{whyChooseUs.intro}</p>}
                </div>
                <div
                  className={cn(
                    "grid grid-cols-1 gap-6",
                    whyChooseUs.blocks.length >= 4 ? "md:grid-cols-4" : whyChooseUs.blocks.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
                  )}
                >
                  {whyChooseUs.blocks.map((block, i) => {
                    const Icon = block.icon;
                    return (
                      <div
                        key={i}
                        className="bg-white/[0.06] p-6 rounded-xl border border-white/10 card-hover-dark animate-scroll-reveal"
                        style={{ animationDelay: `${i * 0.08}s` }}
                      >
                        {Icon && <Icon className="w-10 h-10 text-[var(--metro-light-blue)] mb-4" />}
                        {block.title && <h3 className="text-lg font-bold mb-3">{block.title}</h3>}
                        {block.description ? (
                          <p className="text-white/80 text-sm">{block.description}</p>
                        ) : (
                          <ul className="space-y-2">
                            {block.items?.map((item, j) => (
                              <li key={j} className="flex items-start gap-2 text-white/80 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-[var(--metro-light-blue)] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {whyChooseUs.badges && whyChooseUs.badges.length > 0 && (
              <div className="mt-12 text-center">
                <div className="inline-flex flex-wrap gap-3 justify-center">
                  {whyChooseUs.badges.map((badge, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-white/[0.06] border border-white/15 text-white text-sm"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {processSteps && processStepsPosition === "afterWhyChooseUs" && (
        <ProcessStepsSection config={processSteps} />
      )}

      {/* EXTRA GRID (e.g. industries served) */}
      {extraGrid && (
        <section className={cn(SECTION_PADDING, "bg-[#f8f8f8]")}>
          <div className={CONTAINER}>
            <SectionHeader title={extraGrid.heading} subtitle={extraGrid.subtitle} />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {extraGrid.items.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl border border-black/[0.06] card-hover text-center animate-scroll-reveal"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <p className="font-semibold text-black">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TESTIMONIALS */}
      {testimonialsData && testimonialsData.length > 0 && (
        <section className={cn(SECTION_PADDING, "bg-white")}>
          <div className={CONTAINER}>
            <SectionHeader title="Client Testimonials" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {testimonialsData.map((t) => (
                <Card key={t.id} className="rounded-xl border border-black/[0.06] shadow-sm card-hover">
                  <CardContent className="p-8">
                    <Quote className="w-10 h-10 text-[#144A92]/20 mb-4" />
                    <p className="text-lg italic text-[#424242] mb-6">"{t.content}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#144A92]/[0.06] flex items-center justify-center text-[#144A92] font-bold text-lg">
                        {t.author[0]}
                      </div>
                      <div>
                        <p className="font-bold text-black">{t.author}</p>
                        <p className="text-sm text-[#424242]">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faq && (
        <FaqSection
          config={faq}
          activeIndex={activeFaqIndex}
          onToggle={(i) => setActiveFaqIndex((prev) => (prev === i ? null : i))}
        />
      )}

      {/* PROJECTS */}
      <section className={cn(SECTION_PADDING, "bg-[#f8f8f8]")}>
        <div className={CONTAINER}>
          <SectionHeader title={projectsTitle} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {isLoading ? (
              Array(3)
                .fill(0)
                .map((_, i) => <div key={i} className="h-[400px] bg-white animate-pulse rounded-xl" />)
            ) : projects?.data && projects.data.length > 0 ? (
              projects.data.map((p) => <CaseStudyCard key={p.id} item={p} />)
            ) : (
              <div className="col-span-3 text-center py-12 text-[#424242]">
                No projects found for this division yet.
              </div>
            )}
          </div>

          {projects?.data && projects.data.length > 0 && (
            <div className="text-center mt-12">
              <Link href={`/case-studies?division=${encodeURIComponent(caseStudiesQueryValue)}`}>
                <Button variant="outline" size="lg">{viewAllLabel}</Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* PARTNERS */}
      {partners && <PartnersSection config={partners} />}

      {/* CONTACT */}
      <section id="contact-section" className={cn(SECTION_PADDING, "bg-white")}>
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-6">{contactHeading}</h2>
              <p className="text-[#424242] text-lg mb-8">{contactDescription}</p>

              {contactHighlights && contactHighlights.length > 0 && (
                <div className="space-y-4">
                  {contactHighlights.map((h, i) => {
                    const Icon = h.icon;
                    return (
                      <div key={i} className="flex items-center gap-4 p-4 bg-[#f8f8f8] rounded-xl border border-black/[0.06]">
                        <Icon className="w-8 h-8 text-[#144A92] shrink-0" />
                        <div>
                          <p className="font-semibold text-black">{h.title}</p>
                          <p className="text-sm text-[#424242]">{h.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {contactCallout && (
                <div className={cn("p-6 rounded-xl border-2", contactCallout.className ?? "bg-[#144A92]/[0.04] border-[#144A92]/15")}>
                  <h4 className="font-bold text-black mb-3 flex items-center gap-2">
                    <contactCallout.icon className="w-5 h-5 text-[#144A92]" />
                    {contactCallout.heading}
                  </h4>
                  {contactCallout.description && <p className="text-[#424242] mb-4">{contactCallout.description}</p>}
                  {contactCallout.items && (
                    <ul className="space-y-3">
                      {contactCallout.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-[#424242]">
                          <CheckCircle2 className="w-5 h-5 text-[#144A92] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {contactCallout.bigText && (
                    <p className="text-3xl font-bold text-[#144A92]">{contactCallout.bigText}</p>
                  )}
                </div>
              )}
            </div>
            <InquiryForm division={divisionLabel} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
