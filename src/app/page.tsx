import { BlogSection } from "@/components/sections/BlogSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { Hero } from "@/components/sections/Hero";
import { ImpactStory } from "@/components/sections/ImpactStory";
import { PartnerMarquee } from "@/components/sections/PartnerMarquee";
import { ProblemStatementStrip } from "@/components/sections/ProblemStatementStrip";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FadeIn } from "@/components/shared/FadeIn";
import { ImpactSection } from "@/components/template/ImpactSection";

export default function Home() {
  return (
    <main>
      {/* 1. Hook */}
      <Hero />

      {/* 2. Pain point */}
      <FadeIn>
        <ProblemStatementStrip />
      </FadeIn>

      <ImpactSection />

      {/* 3. Solution */}
      <FadeIn>
        <ComparisonSection />
      </FadeIn>

      {/* 4. Proof — metrics + gallery */}

      {/* 5. Consumer social proof */}
      <FadeIn>
        <TestimonialsSection />
      </FadeIn>

      {/* 6. Human story */}
      <FadeIn>
        <ImpactStory />
      </FadeIn>

      {/* 7. Trust — logo wall */}
      <FadeIn>
        <PartnerMarquee />
      </FadeIn>

      {/* 8. Content */}
      <FadeIn>
        <BlogSection />
      </FadeIn>

      {/* 9. CTA */}
      {/* <FadeIn>
        <NewsletterStrip />
      </FadeIn> */}
    </main>
  );
}
