import type { Metadata } from "next";
import BlogPageClient from "@/components/sections/BlogPageClient";

export const metadata: Metadata = {
  title: "Blog · Ecolery",
  description:
    "Awards, programs, field work and the journey toward a plastic-free future — all in one place.",
};

export default function BlogPage() {
  return <BlogPageClient />;
}
