import { ImpactHero } from "@/components/sections/ImpactHero";
import { ImpactPillars } from "@/components/sections/ImpactPillars";
import { SDGStrip } from "@/components/sections/SDGStrip";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact · Ecolery",
  description: "Real numbers, real change. Cups replaced, plastic avoided, children educated.",
};

export default function ImpactPage() {
  return (
    <main>
      <ImpactHero />
      <ImpactPillars />
      <SDGStrip />

      {/* <ImpactSDGs /> */}
      {/* <ImpactChart /> */}
      {/* <ImpactReport /> */}
    </main>
  );
}
