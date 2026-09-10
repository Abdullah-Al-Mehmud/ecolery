import type { Metadata } from "next";
import { BlogSection } from "@/components/sections/BlogSection";
import { ExploreAwards } from "@/components/sections/ExploreAwards";

export const metadata: Metadata = {
  title: "Explore",
  description:
    "Awards and achievements behind the cup. Hackathon champions, national sustainability lists and green enterprise recognition.",
};

export default function ExplorePage() {
  return (
    <main>
      <ExploreAwards />
      <BlogSection />
    </main>
  );
}
