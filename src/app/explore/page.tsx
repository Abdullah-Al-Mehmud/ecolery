import type { Metadata } from "next";
import { ExploreAwards } from "@/components/sections/ExploreAwards";
import { PressNewsGrid } from "@/components/sections/PressNewsGrid";

export const metadata: Metadata = {
  title: "Explore — Ecolery",
  description:
    "Awards and achievements behind the cup — hackathon champions, national sustainability lists and green enterprise recognition.",
};

export default function ExplorePage() {
  return (
    <main>
      <ExploreAwards />
      <PressNewsGrid />
    </main>
  );
}
