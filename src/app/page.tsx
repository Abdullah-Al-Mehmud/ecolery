import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <HowItWorks />
      <Testimonials />
      <CTABanner />
    </main>
  );
}


