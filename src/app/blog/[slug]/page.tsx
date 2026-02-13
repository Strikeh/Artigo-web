import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Placeholder for future MDX-based blog posts
const posts: Record<
  string,
  { title: string; content: string; date: string; readTime: string }
> = {
  "sell-digital-wall-art-etsy": {
    title: "How to Sell Digital Wall Art on Etsy: Complete Guide",
    date: "Coming Soon",
    readTime: "8 min read",
    content:
      "This article is coming soon. Stay tuned for a comprehensive guide on selling digital wall art on Etsy, including listing strategies, pricing tips, and how Artigo can automate your production pipeline.",
  },
  "best-aspect-ratios-wall-art": {
    title: "The Best Aspect Ratios for Wall Art Prints",
    date: "Coming Soon",
    readTime: "5 min read",
    content:
      "This article is coming soon. We'll cover the most popular aspect ratios for wall art, why they matter for your customers, and how to offer every option effortlessly.",
  },
  "batch-resize-images-print": {
    title: "How to Batch Resize Images for Print on Demand",
    date: "Coming Soon",
    readTime: "6 min read",
    content:
      "This article is coming soon. Learn how to automate your image resizing workflow with proper DPI settings for professional print output.",
  },
  "creating-bookmark-printables": {
    title: "Creating Bookmark Printables: A Step-by-Step Guide",
    date: "Coming Soon",
    readTime: "7 min read",
    content:
      "This article is coming soon. We'll walk through creating professional bookmark sheets using grid composition tools.",
  },
  "understanding-dpi-for-print": {
    title: "Understanding DPI for Print: What Every Seller Needs to Know",
    date: "Coming Soon",
    readTime: "5 min read",
    content:
      "This article is coming soon. DPI demystified — what it means, why it matters, and how to get it right.",
  },
  "speed-up-etsy-workflow": {
    title: "5 Ways to Speed Up Your Etsy Digital Download Workflow",
    date: "Coming Soon",
    readTime: "4 min read",
    content:
      "This article is coming soon. Practical tips to cut production time and list more products faster.",
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = posts[params.slug];
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} — Artigo Blog`,
    description: post.content.slice(0, 160),
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];

  if (!post) {
    return (
      <div className="min-h-screen pt-24 section-padding">
        <div className="max-container text-center">
          <h1 className="text-3xl font-bold text-text-primary">
            Post Not Found
          </h1>
          <Link
            href="/blog"
            className="mt-4 inline-flex items-center gap-2 text-accent-indigo"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      <article className="section-padding">
        <div className="max-container max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent-indigo transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-text-secondary">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="glass-strong rounded-card p-8">
              <p className="text-text-secondary leading-relaxed">
                {post.content}
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
