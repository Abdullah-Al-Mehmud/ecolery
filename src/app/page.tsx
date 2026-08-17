import { BlogSection } from "@/components/sections/BlogSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { Hero } from "@/components/sections/Hero";
import { ImpactStory } from "@/components/sections/ImpactStory";
import { NewsletterStrip } from "@/components/sections/NewsletterStrip";
import { PartnerMarquee } from "@/components/sections/PartnerMarquee";
import { ProblemStatementStrip } from "@/components/sections/ProblemStatementStrip";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ImpactSection } from "@/components/template/ImpactSection";

export default function Home() {
  return (
    <main>
      {/* 1. Hook */}
      <Hero />

      {/* 2. Pain point */}
      <ProblemStatementStrip />

      {/* 3. Solution */}
      <ComparisonSection />

      {/* 4. Proof — metrics + gallery */}
      <ImpactSection />

      {/* 5. Consumer social proof */}
      <TestimonialsSection />

      {/* 6. Human story */}
      <ImpactStory />

      {/* 7. Trust — logo wall */}
      <PartnerMarquee />

      {/* 8. Content */}
      <BlogSection />

      {/* 9. CTA */}
      <NewsletterStrip />
    </main>
  );
}
