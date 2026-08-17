import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogs, getBlogBySlug } from "@/lib/blogs";
import BlogDetailClient from "@/components/sections/BlogDetailClient";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Not Found · Ecolery" };

  return {
    title: `${post.title} · Ecolery`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage, width: 1200, height: 700 }],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) notFound();

  const currentIndex = blogs.findIndex((b) => b.slug === slug);
  const nextPost = blogs[currentIndex + 1] ?? blogs[0];
  const prevPost = blogs[currentIndex - 1] ?? blogs[blogs.length - 1];

  return (
    <BlogDetailClient post={post} prevPost={prevPost} nextPost={nextPost} />
  );
}
