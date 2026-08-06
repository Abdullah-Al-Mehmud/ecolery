import { CareersCTA } from "@/components/sections/CareersCTA";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { Hero } from "@/components/sections/Hero";
import { HowItsMadeSection } from "@/components/sections/HowItsMadeSection";
import { PartnerEndorsements } from "@/components/sections/PartnerEndorsements";
import { ProblemStatementStrip } from "@/components/sections/ProblemStatementStrip";
import { PartnerMarquee } from "@/components/sections/PartnerMarquee";
import { SDGStrip } from "@/components/sections/SDGStrip";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ImpactSection } from "@/components/template/ImpactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemStatementStrip />
      <ImpactSection />
      <ComparisonSection />
      <HowItsMadeSection />
      <CareersCTA />
      <PartnerEndorsements />
      <PartnerMarquee />
      <SDGStrip />
      <TestimonialsSection />
      <SiteFooter />
    </main>
  );
}
