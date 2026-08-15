import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { Hero } from "@/components/sections/Hero";
import { ImpactStory } from "@/components/sections/ImpactStory";
import { NewsletterStrip } from "@/components/sections/NewsletterStrip";
import { PartnerEndorsements } from "@/components/sections/PartnerEndorsements";
import { PartnerMarquee } from "@/components/sections/PartnerMarquee";
import { ProblemStatementStrip } from "@/components/sections/ProblemStatementStrip";
import { SDGStrip } from "@/components/sections/SDGStrip";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ImpactSection } from "@/components/template/ImpactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemStatementStrip />
      <ImpactSection />
      <ImpactStory />
      <ComparisonSection />
      <FeaturesGrid />
      {/* <HowItsMadeSection /> */}
      {/* <CareersCTA /> */}
      <PartnerEndorsements />
      <PartnerMarquee />
      <SDGStrip />
      <TestimonialsSection />
      <NewsletterStrip />
    </main>
  );
}
