import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Artigo | Tips for Digital Art Sellers",
  description:
    "Guides, tips, and best practices for Etsy sellers, digital art automation, batch resizing, and print production.",
};

const posts = [
  {
    slug: "create-preview-grids-digital-art-packs",
    title: "How to Create Beautiful Preview Grids for Large Digital Art Packs",
    excerpt:
      "Selling digital bundles with 50+ images? Learn how to instantly generate stunning preview grids and contact sheets to showcase your entire collection.",
    category: "Tutorial",
    readTime: "4 min",
    date: "February 21, 2026",
  },
  {
    slug: "batch-resize-images-etsy-without-photoshop",
    title: "How to Batch Resize Images for Etsy Without Photoshop or Scripts",
    excerpt:
      "Etsy changed their recommended photo ratio, and updating old listings is a nightmare. Here is how to automate it without coding.",
    category: "Guide",
    readTime: "3 min",
    date: "February 21, 2026",
  },
  {
    slug: "sell-digital-wall-art-etsy",
    title: "How to Sell Digital Wall Art on Etsy: Complete Guide",
    excerpt:
      "Everything you need to know about listing, pricing, and automating your digital wall art business on Etsy.",
    category: "Guide",
    readTime: "8 min",
    date: "Coming Soon",
  },
  {
    slug: "best-aspect-ratios-wall-art",
    title: "The Best Aspect Ratios for Wall Art Prints",
    excerpt:
      "Understand which ratios your customers want and how to offer every option without manual resizing.",
    category: "Education",
    readTime: "5 min",
    date: "Coming Soon",
  },
  {
    slug: "batch-resize-images-print",
    title: "How to Batch Resize Images for Print on Demand",
    excerpt:
      "Step-by-step guide to automating your image resizing workflow with proper DPI and format settings.",
    category: "Tutorial",
    readTime: "6 min",
    date: "Coming Soon",
  },
  {
    slug: "creating-bookmark-printables",
    title: "Creating Bookmark Printables: A Step-by-Step Guide",
    excerpt:
      "Learn how to create professional bookmark sheets using grid composition tools.",
    category: "Tutorial",
    readTime: "7 min",
    date: "Coming Soon",
  },
  {
    slug: "understanding-dpi-for-print",
    title: "Understanding DPI for Print: What Every Seller Needs to Know",
    excerpt:
      "DPI demystified — what it means, why it matters, and how to get it right for every print size.",
    category: "Education",
    readTime: "5 min",
    date: "Coming Soon",
  },
  {
    slug: "speed-up-etsy-workflow",
    title: "5 Ways to Speed Up Your Etsy Digital Download Workflow",
    excerpt:
      "Practical tips to cut production time and list more products faster.",
    category: "Tips",
    readTime: "4 min",
    date: "Coming Soon",
  },
];

const categoryColors: Record<string, string> = {
  Guide: "bg-blue-50 text-blue-700",
  Education: "bg-purple-50 text-purple-700",
  Tutorial: "bg-indigo-50 text-indigo-700",
  Tips: "bg-emerald-50 text-emerald-700",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding">
        <div className="max-container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight">
              Artigo{" "}
              <span className="gradient-text accent-underline">Blog</span>
            </h1>
            <p className="mt-4 text-lg text-text-secondary max-w-xl mx-auto">
              Guides, tips, and best practices for digital art sellers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="glass-strong rounded-card p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] || "bg-gray-50 text-gray-700"}`}
                  >
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-text-tertiary">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent-indigo transition-colors">
                  {post.title}
                </h2>

                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-text-tertiary italic">
                    {post.date}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-medium text-accent-indigo flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Read
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
