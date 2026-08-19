import { BlogSection } from "@/components/sections/BlogSection";
import { CertificationStrip } from "@/components/sections/CertificationStrip";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { FeatureGallery } from "@/components/sections/FeatureGallery";
import { Hero } from "@/components/sections/Hero";
import { ImpactMetrics } from "@/components/sections/ImpactMetrics";
import { ImpactStory } from "@/components/sections/ImpactStory";
import { MissionSection } from "@/components/sections/MissionSection";
import { PartnerMarquee } from "@/components/sections/PartnerMarquee";
import { ProblemStatementStrip } from "@/components/sections/ProblemStatementStrip";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FadeIn } from "@/components/shared/FadeIn";

export default function Home() {
  return (
    <main>
      {/* 1. Hook */}
      <Hero />

      {/* 2. Pain point */}
      <FadeIn>
        <ProblemStatementStrip />
      </FadeIn>

      <MissionSection />
      <CertificationStrip />
      <ImpactMetrics />
      {/* 6. Human story */}
      <FadeIn>
        <ImpactStory />
      </FadeIn>

      {/* 3. Solution */}
      <FadeIn>
        <ComparisonSection />
      </FadeIn>

      {/* feature gallery */}
      <FeatureGallery />

      {/* 7. Trust — logo wall */}
      <FadeIn>
        <PartnerMarquee />
      </FadeIn>

      {/* 8. Content */}
      <FadeIn>
        <BlogSection />
      </FadeIn>
      {/* 5. Consumer social proof */}
      <FadeIn>
        <TestimonialsSection />
      </FadeIn>

      {/* 9. CTA */}
      {/* <FadeIn>
        <NewsletterStrip />
      </FadeIn> */}
    </main>
  );
}
