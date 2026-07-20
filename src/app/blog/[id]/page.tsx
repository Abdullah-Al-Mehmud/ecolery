import { ARTICLES_DATABASE } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, User, Calendar, BookOpen } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return ARTICLES_DATABASE.map((article) => ({
    id: article.id,
  }));
}

function renderMarkdown(content: string) {
  return content.split("\n\n").map((block, idx) => {
    const trimmed = block.trim();
    if (!trimmed) return null;
    
    if (trimmed.startsWith("# ")) {
      return (
        <h1 key={idx} className="font-display text-4xl sm:text-5xl font-bold text-ink leading-tight mt-12 mb-6 tracking-tight">
          {trimmed.replace("# ", "")}
        </h1>
      );
    }
    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={idx} className="font-display text-2xl md:text-3xl font-bold text-ink leading-tight mt-10 mb-4 tracking-tight border-b border-[#E9E5DD] pb-2">
          {trimmed.replace("## ", "")}
        </h2>
      );
    }
    if (trimmed.startsWith("- ")) {
      return (
        <ul key={idx} className="list-disc pl-6 mb-6 space-y-2 text-ink/80 text-sm md:text-base font-body leading-relaxed max-w-prose">
          {trimmed.split("\n").map((li, liIdx) => (
            <li key={liIdx}>{li.replace("- ", "")}</li>
          ))}
        </ul>
      );
    }
    
    return (
      <p key={idx} className="font-body text-sm md:text-base text-ink/85 leading-relaxed mb-6 max-w-prose text-justify">
        {trimmed}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params;
  const article = ARTICLES_DATABASE.find((a) => a.id === id);

  if (!article) {
    notFound();
  }

  // Find 2 other related/popular articles for the "Read Next" footer
  const readNext = ARTICLES_DATABASE.filter((a) => a.id !== id).slice(0, 2);

  return (
    <main className="py-20 md:py-32 bg-cream min-h-screen text-ink">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Back Link */}
        <Link
          href="/blog"
          className="flex items-center gap-1.5 text-xs font-semibold text-moss hover:text-rust transition-colors mb-12 group inline-flex select-none"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to Journal</span>
        </Link>

        {/* Article Meta Header */}
        <header className="border-b border-[#E9E5DD] pb-10 mb-12">
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-moss mb-6 select-none">
            <span className="bg-moss/5 border border-moss/10 px-3 py-1 rounded-full uppercase tracking-wider text-[9px] font-bold">
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-clay"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
            <span className="flex items-center gap-1 text-clay"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-ink leading-tight tracking-tight mb-8">
            {article.title}
          </h1>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-moss text-cream flex items-center justify-center font-display font-bold text-sm shrink-0">
              {article.author.charAt(4)}
            </div>
            <div>
              <span className="font-body text-xs text-clay block leading-none mb-1">Author</span>
              <span className="font-body text-sm font-semibold text-ink leading-none">{article.author}</span>
            </div>
          </div>
        </header>

        {/* Dynamic Featured Cover Banner Image */}
        {article.images && article.images.length > 0 && (
          <div className="relative w-full aspect-[21/9] rounded-[24px] overflow-hidden border border-[#E9E5DD] mb-12 shadow-sm select-none">
            <Image
              src={article.images[0]}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-w-2xl) 100vw, 800px"
              priority
            />
          </div>
        )}

        {/* Article Body Content */}
        <article className="prose max-w-none">
          {renderMarkdown(article.body)}
        </article>

        {/* Dynamic Secondary Image Showcase Gallery */}
        {article.images && article.images.length > 1 && (
          <div className="my-16 grid grid-cols-1 sm:grid-cols-2 gap-6 select-none">
            {article.images.slice(1).map((imgUrl, imgIdx) => (
              <div key={imgIdx} className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden border border-[#E9E5DD] shadow-sm bg-cream-2/40">
                <Image
                  src={imgUrl}
                  alt={`Asset for ${article.title}`}
                  fill
                  className="object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
                  sizes="(max-w-md) 100vw, 400px"
                />
              </div>
            ))}
          </div>
        )}

        {/* Read Next Section */}
        <footer className="mt-20 pt-16 border-t border-[#E9E5DD]">
          <h3 className="font-display font-bold text-xl text-ink mb-8 flex items-center gap-2 select-none">
            <BookOpen className="w-5 h-5 text-rust" />
            Continue Reading
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 select-none">
            {readNext.map((nextArt) => (
              <Link
                key={nextArt.id}
                href={`/blog/${nextArt.id}`}
                className="bg-cream-2/30 hover:bg-cream-2/70 border border-stone-300/35 rounded-2xl p-6 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[8px] text-clay font-bold tracking-widest uppercase block mb-2">{nextArt.category}</span>
                  <h4 className="font-display font-bold text-base text-ink leading-snug group-hover:text-moss transition-colors">
                    {nextArt.title}
                  </h4>
                </div>
                <span className="text-xs font-semibold text-moss mt-4 block">Read article &rarr;</span>
              </Link>
            ))}
          </div>
        </footer>

      </div>
    </main>
  );
}
