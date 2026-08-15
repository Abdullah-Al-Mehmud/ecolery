import { AboutFounderNote } from "@/components/sections/AboutFounderNote";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutJourney } from "@/components/sections/AboutJourney";
import { AboutMission } from "@/components/sections/AboutMission";
import { AboutStats } from "@/components/sections/AboutStats";
import { AboutTeam } from "@/components/sections/AboutTeam";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About · Ecolery",
  description: "Shaping a zero-plastic tomorrow together.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStats />
      <AboutMission />
      <AboutJourney />
      <AboutTeam />
      <AboutFounderNote />
    </main>
  );
}
