import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

// Placeholder for future MDX-based blog posts
const posts: Record<
  string,
  {
    title: string;
    content: React.ReactNode;
    date: string;
    readTime: string;
    excerpt: string;
  }
> = {
  "create-preview-grids-digital-art-packs": {
    title: "How to Create Beautiful Preview Grids for Large Digital Art Packs",
    date: "February 21, 2026",
    readTime: "4 min read",
    excerpt:
      "Selling digital bundles with 50+ images? Learn how to instantly generate stunning preview grids and contact sheets to showcase your entire collection.",
    content: (
      <div className="space-y-6">
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-8 bg-gray-100 border border-gray-200">
          <Image
            src="/images/blog-grid-preview-packs.jpg"
            alt="Creating preview grids for digital art packs"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p>
          If you sell digital art bundles, clipart packs, or sticker sets on
          platforms like Etsy or Creative Market, you know that{" "}
          <strong>buyers want to see exactly what they are getting</strong>.
          When you are selling a pack of 50, 100, or even 500 images, a single
          cover photo just isn't enough.
        </p>
        <p>
          You need beautiful, organized preview grids (often called contact
          sheets) to showcase the sheer volume and quality of your collection.
          But creating these manually is a massive headache.
        </p>
        <h2 className="text-2xl font-bold text-text-primary mt-8 mb-4">
          The Nightmare of Manual Grids
        </h2>
        <p>
          Most sellers try to build these preview images in Canva or Photoshop.
          The process usually looks like this:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Create a blank canvas.</li>
          <li>Drag and drop 50 individual images onto the canvas.</li>
          <li>
            Spend 30 minutes manually resizing, aligning, and distributing them
            so the spacing looks even.
          </li>
          <li>
            Realize you missed an image, and have to shift everything around
            again.
          </li>
        </ul>
        <p>
          When you have multiple packs to list, this tedious process eats up
          hours of your valuable time—time you could be spending creating new
          art.
        </p>
        <h2 className="text-2xl font-bold text-text-primary mt-8 mb-4">
          The 5-Second Solution: Artigo's Grid Engine
        </h2>
        <p>
          This is exactly why we built the <strong>Grid Engine</strong> into
          Artigo. It's designed specifically to take the pain out of creating
          preview sheets for large digital bundles.
        </p>
        <p>Instead of manually aligning images, you simply:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Drop your folder of 50+ images into Artigo.</li>
          <li>
            Select the <strong>Grid Engine</strong> and choose a preset (like an
            8x8 thumbnail grid, or a 4x4 contact sheet).
          </li>
          <li>Click generate.</li>
        </ul>
        <p>
          In seconds, Artigo automatically calculates the math, perfectly spaces
          your images, and generates high-resolution, print-ready grid sheets.
          If you have 100 images and choose a 25-image grid, Artigo will
          automatically create 4 perfectly formatted pages for you.
        </p>
        <p>
          You can even customize the rows, columns, margins, and spacing to
          perfectly match your brand's aesthetic.
        </p>
        <div className="mt-8 p-6 bg-indigo-50 rounded-xl border border-indigo-100">
          <h3 className="text-lg font-bold text-indigo-900 mb-2">
            Stop wasting time aligning images
          </h3>
          <p className="text-indigo-800 mb-4">
            Artigo runs 100% offline on your Windows PC. Download it today and
            see how fast you can generate your next product preview gallery.
          </p>
          <Link
            href="/download"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent-indigo text-white font-semibold hover:bg-indigo-600 transition-colors"
          >
            Download Artigo Free
          </Link>
        </div>
      </div>
    ),
  },
  "batch-resize-images-etsy-without-photoshop": {
    title: "How to Batch Resize Images for Etsy Without Photoshop or Scripts",
    date: "February 21, 2026",
    readTime: "3 min read",
    excerpt:
      "Etsy changed their recommended photo ratio, and updating old listings is a nightmare. Here is how to automate it without coding.",
    content: (
      <div className="space-y-6">
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-8 bg-gray-100 border border-gray-200">
          <Image
            src="/images/blog-batch-resize-etsy.jpg"
            alt="Batch resizing images for Etsy"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p>
          If you sell digital art or physical products on Etsy, you probably
          know the frustration: Etsy recently changed their recommended photo
          ratio (they prefer square or 4:3 now), and updating old listings is a
          nightmare.
        </p>
        <p>
          When you search for a solution online, you see a lot of people
          suggesting tools like ImageMagick or writing custom Python scripts.
          But honestly, if you're not a programmer, setting up command-line
          tools is incredibly frustrating.
        </p>
        <p>
          Other suggestions include using Photoshop actions or Canva Pro. But
          Photoshop requires a subscription and a learning curve, and uploading
          high-res art to online tools isn't great for your copyright or your
          internet bandwidth.
        </p>
        <h2 className="text-2xl font-bold text-text-primary mt-8 mb-4">
          The Offline, No-Code Solution
        </h2>
        <p>
          I had this exact same frustration. I was spending hours manually
          resizing my product photos and digital prints for different platforms,
          and it was driving me crazy. I actually got so frustrated that I built
          a simple Windows desktop app specifically to solve this. It's called{" "}
          <strong>Artigo</strong>.
        </p>
        <p>
          It has a 'Ratio Export' tool that does exactly what you need, without
          any coding or terminal commands:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>You drop your batch of images into the app.</li>
          <li>
            You check the boxes for the sizes/ratios you need (e.g., 4:3 for
            Etsy, 1:1 for Shopify/Instagram, A4, etc.).
          </li>
          <li>It automatically resizes and crops all of them at once.</li>
          <li>
            It outputs everything neatly organized into ZIP folders so you don't
            have a messy desktop.
          </li>
        </ul>
        <p>
          It takes about 5 seconds instead of 45 minutes, and you don't need to
          open Photopea or Photoshop at all. Best of all, it runs 100% offline
          on your computer, so your files stay private and you don't have to
          wait for uploads.
        </p>
        <div className="mt-8 p-6 bg-indigo-50 rounded-xl border border-indigo-100">
          <h3 className="text-lg font-bold text-indigo-900 mb-2">
            Ready to speed up your workflow?
          </h3>
          <p className="text-indigo-800 mb-4">
            Artigo is free to download and try. See if it fits your workflow and
            saves you those 45 minutes!
          </p>
          <Link
            href="/download"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent-indigo text-white font-semibold hover:bg-indigo-600 transition-colors"
          >
            Download Artigo Free
          </Link>
        </div>
      </div>
    ),
  },
  "sell-digital-wall-art-etsy": {
    title: "How to Sell Digital Wall Art on Etsy: Complete Guide",
    date: "Coming Soon",
    readTime: "8 min read",
    excerpt:
      "Everything you need to know about listing, pricing, and automating your digital wall art business on Etsy.",
    content: (
      <p>
        This article is coming soon. Stay tuned for a comprehensive guide on
        selling digital wall art on Etsy, including listing strategies, pricing
        tips, and how Artigo can automate your production pipeline.
      </p>
    ),
  },
  "best-aspect-ratios-wall-art": {
    title: "The Best Aspect Ratios for Wall Art Prints",
    date: "Coming Soon",
    readTime: "5 min read",
    excerpt:
      "Understand which ratios your customers want and how to offer every option without manual resizing.",
    content: (
      <p>
        This article is coming soon. We'll cover the most popular aspect ratios
        for wall art, why they matter for your customers, and how to offer every
        option effortlessly.
      </p>
    ),
  },
  "batch-resize-images-print": {
    title: "How to Batch Resize Images for Print on Demand",
    date: "Coming Soon",
    readTime: "6 min read",
    excerpt:
      "Step-by-step guide to automating your image resizing workflow with proper DPI and format settings.",
    content: (
      <p>
        This article is coming soon. Learn how to automate your image resizing
        workflow with proper DPI settings for professional print output.
      </p>
    ),
  },
  "creating-bookmark-printables": {
    title: "Creating Bookmark Printables: A Step-by-Step Guide",
    date: "Coming Soon",
    readTime: "7 min read",
    excerpt:
      "Learn how to create professional bookmark sheets using grid composition tools.",
    content: (
      <p>
        This article is coming soon. We'll walk through creating professional
        bookmark sheets using grid composition tools.
      </p>
    ),
  },
  "understanding-dpi-for-print": {
    title: "Understanding DPI for Print: What Every Seller Needs to Know",
    date: "Coming Soon",
    readTime: "5 min read",
    excerpt:
      "DPI demystified — what it means, why it matters, and how to get it right for every print size.",
    content: (
      <p>
        This article is coming soon. DPI demystified — what it means, why it
        matters, and how to get it right.
      </p>
    ),
  },
  "speed-up-etsy-workflow": {
    title: "5 Ways to Speed Up Your Etsy Digital Download Workflow",
    date: "Coming Soon",
    readTime: "4 min read",
    excerpt:
      "Practical tips to cut production time and list more products faster.",
    content: (
      <p>
        This article is coming soon. Practical tips to cut production time and
        list more products faster.
      </p>
    ),
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
    description: post.excerpt,
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
            <div className="glass-strong rounded-card p-8 text-text-secondary leading-relaxed">
              {post.content}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
