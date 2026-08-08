import type { Metadata } from "next";
import { ProductComingSoon } from "@/components/sections/ProductComingSoon";
import { ProductFAQ } from "@/components/sections/ProductFAQ";
import { ProductHero } from "@/components/sections/ProductHero";
import { ProductQuoteForm } from "@/components/sections/ProductQuoteForm";
import { ProductSpecs } from "@/components/sections/ProductSpecs";
import { ProductWhereToBuy } from "@/components/sections/ProductWhereToBuy";

export const metadata: Metadata = {
  title: "Edible Cup — Ecolery",
  description:
    "A sturdy, edible, fully compostable cup — gone from the planet in 180 days. Get a quote today.",
};

export default function ProductPage() {
  return (
    <main>
      <ProductHero />
      <ProductSpecs />
      <ProductQuoteForm />
      <ProductWhereToBuy />
      <ProductComingSoon />
      <ProductFAQ />
    </main>
  );
}
