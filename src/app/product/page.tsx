import { ProductComingSoon } from "@/components/sections/ProductComingSoon";
import { ProductFAQ } from "@/components/sections/ProductFAQ";
import { ProductHero } from "@/components/sections/ProductHero";
import { ProductPricing } from "@/components/sections/ProductPricing";
import { ProductSpecs } from "@/components/sections/ProductSpecs";
import { ProductWhereToBuy } from "@/components/sections/ProductWhereToBuy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edible Cup",
  description:
    "A sturdy, edible, fully compostable cup, gone from the planet in 180 days. Get a quote today.",
};

export default function ProductPage() {
  return (
    <main>
      <ProductHero />
      <ProductSpecs />
      <ProductPricing />
      {/* <ProductQuoteForm /> */}
      <ProductWhereToBuy />
      <ProductComingSoon />
      <ProductFAQ />
    </main>
  );
}
