import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Journey } from "@/components/sections/Journey";
import { Certifications } from "@/components/sections/Certifications";
import { Industries } from "@/components/sections/Industries";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Products />
      <HowItWorks />
      <Journey />
      <Certifications />
      <Industries />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </main>
  );
}
