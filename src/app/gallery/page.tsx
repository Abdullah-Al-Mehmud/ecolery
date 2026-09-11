import type { Metadata } from "next";
import { GallerySection, type GalleryCategory } from "@/components/sections/GallerySection";
import { galleryCategories } from "@/lib/gallery-data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Field visits, partnerships, campaigns and recognition: a visual record of the Ecolery journey.",
};

export const dynamic = "force-static";

export default function GalleryPage() {
  const categories: GalleryCategory[] = galleryCategories;

  return (
    <main>
      <GallerySection categories={categories} />
    </main>
  );
}