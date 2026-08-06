import type { Metadata } from "next";
import { ImpactChart } from "@/components/sections/ImpactChart";
import { ImpactHero } from "@/components/sections/ImpactHero";
import { ImpactPillars } from "@/components/sections/ImpactPillars";
import { ImpactReport } from "@/components/sections/ImpactReport";
import { ImpactSDGs } from "@/components/sections/ImpactSDGs";

export const metadata: Metadata = {
  title: "Impact — Ecolery",
  description:
    "Real numbers, real change — cups replaced, plastic avoided, children educated.",
};

export default function ImpactPage() {
  return (
    <main>
      <ImpactHero />
      <ImpactPillars />
      <ImpactSDGs />
      <ImpactChart />
      <ImpactReport />
    </main>
  );
}
