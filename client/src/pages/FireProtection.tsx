import { DivisionPageLayout } from "@/components/DivisionPageLayout";
import { Flame, Bell, Droplets, ShieldAlert, AlertTriangle, FileCheck } from "lucide-react";

export default function FireProtection() {
  const systems = [
    {
      icon: Bell,
      title: "Addressable Fire Alarm Systems",
      description: "Intelligent detection with pinpoint accuracy for rapid response",
      details: ["Multi-sensor detection", "Zone identification", "Remote monitoring", "Auto-dialer integration"],
    },
    {
      icon: Droplets,
      title: "Automatic Sprinkler Systems",
      description: "Water-based suppression for comprehensive fire protection",
      details: ["Wet & dry pipe systems", "Pre-action systems", "Deluge systems", "ESFR sprinklers"],
    },
    {
      icon: Flame,
      title: "FM-200 Gas Suppression",
      description: "Clean agent systems for sensitive equipment protection",
      details: ["Zero residue discharge", "Safe for electronics", "Rapid suppression", "Eco-friendly agents"],
    },
    {
      icon: ShieldAlert,
      title: "Fire Hydrant & Hose Reel",
      description: "Manual firefighting equipment strategically positioned",
      details: ["Indoor hydrant systems", "Outdoor yard hydrants", "First-aid hose reels", "Pressure testing"],
    },
  ];

  const compliance = [
    "NFPA Standards Compliant",
    "Local Fire Department Approved",
    "BS EN 54 Certified Systems",
    "UL Listed Components",
    "FM Global Approved",
    "ISO 9001:2015 Quality Management",
  ];

  const responseSteps = [
    { step: "01", title: "Detection", desc: "Sensors identify smoke, heat, or flame instantly" },
    { step: "02", title: "Alert", desc: "Audible and visual alarms activate throughout facility" },
    { step: "03", title: "Suppression", desc: "Automatic systems engage to control fire spread" },
    { step: "04", title: "Notification", desc: "Fire department and authorities notified automatically" },
  ];

  return (
    <DivisionPageLayout
      divisionKey="FIRE_PROTECTION"
      divisionLabel="Fire Detection & Protection"
      topBanner={{ icon: AlertTriangle, text: "24/7 Emergency Fire Safety Support: +1 (555) 123-FIRE" }}
      eyebrowIcon={Flame}
      eyebrowText="Life Safety Systems"
      eyebrowClassName="bg-[var(--metro-red)]/10"
      title={
        <>
          Fire Detection &<br />
          <span className="text-[var(--metro-red)]">Protection Systems</span>
        </>
      }
      description="State-of-the-art fire safety solutions designed to protect lives, assets, and business continuity. From detection to suppression, we provide comprehensive protection."
      ctaPrimaryLabel="Request Safety Audit"
      ctaPrimaryClassName="bg-[var(--metro-red)] hover:bg-[var(--metro-red)]/90"
      ctaSecondaryLabel="View Certifications"
      heroImage="https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=1200&auto=format&fit=crop"
      heroImageAlt="Fire sprinkler suppression system mounted on a ceiling"
      heroStat={{ icon: ShieldAlert, label: "Response Time", value: "< 30 sec" }}
      heroBackgroundClassName="bg-gradient-to-br from-red-50 via-orange-50 to-white"
      servicesTitle="Comprehensive Fire Safety Solutions"
      servicesSubtitle="Advanced detection and suppression systems tailored to your facility's unique needs"
      services={systems}
      processSteps={{
        heading: "Emergency Response Flow",
        steps: responseSteps,
        position: "beforeServices",
      }}
      whyChooseUs={{
        layout: "checklist",
        heading: "Certified & Compliant Systems",
        intro:
          "All our fire protection installations meet or exceed international safety standards. We work closely with local authorities to ensure full compliance and approval.",
        blocks: [{ items: compliance }],
        sideCard: {
          icon: FileCheck,
          heading: "Why Fire Safety Matters",
          items: [
            { value: "90%", label: "Fire Casualties Preventable", description: "With proper detection systems in place" },
            { value: "60s", label: "Average Escape Time", description: "Early warning is critical for safety" },
            { value: "24/7", label: "Continuous Protection", description: "Automated systems never sleep" },
          ],
        },
      }}
      projectsTitle="Featured Fire Protection Projects"
      viewAllLabel="View All Fire Safety Projects"
      caseStudiesQueryValue="Fire Detection & Protection"
      contactHeading="Protect Your Assets with Expert Fire Safety"
      contactDescription="Don't wait for disaster to strike. Our certified fire protection engineers will assess your facility and design a comprehensive safety system tailored to your needs."
      contactCallout={{
        icon: AlertTriangle,
        heading: "Emergency Services",
        description: "For fire safety emergencies or urgent system repairs, contact our 24/7 hotline",
        bigText: "+1 (555) 123-FIRE",
        className: "bg-[var(--metro-red)]/[0.04] border-[var(--metro-red)]/20",
      }}
    />
  );
}
