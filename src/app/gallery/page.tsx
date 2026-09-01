import { readdir } from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import { GallerySection, type GalleryCategory } from "@/components/sections/GallerySection";

export const metadata: Metadata = {
  title: "Gallery · Ecolery",
  description:
    "Field visits, partnerships, campaigns and recognition — a visual record of the Ecolery journey.",
};

const IMAGE_EXTENSION = /\.(jpe?g|png|webp|avif|gif)$/i;

const prettifyLabel = (name: string) => name.trim().replace(/([a-z])([A-Z])/g, "$1 $2");

const slugify = (name: string) =>
  name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export default async function GalleryPage() {
  const base = path.join(process.cwd(), "public", "gallery");
  const entries = await readdir(base, { withFileTypes: true });

  const categories: GalleryCategory[] = await Promise.all(
    entries
      .filter((entry) => entry.isDirectory())
      .map(async (dir) => {
        const files = await readdir(path.join(base, dir.name));
        const images = files
          .filter((file) => IMAGE_EXTENSION.test(file))
          .map((file) => encodeURI(`/gallery/${dir.name}/${file}`));

        return { slug: slugify(dir.name), label: prettifyLabel(dir.name), images };
      }),
  );

  categories.sort((a, b) => a.label.localeCompare(b.label));

  return (
    <main>
      <GallerySection categories={categories} />
    </main>
  );
}