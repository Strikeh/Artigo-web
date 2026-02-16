import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title:
    "Artigo — The Production Engine for Digital Art Sellers | Batch Resize & Grid Tool",
  description:
    "Stop resizing images manually. Artigo automates your entire print production pipeline — batch resize to multiple ratios, generate grid sheets, embed DPI metadata, and package ZIP deliverables in one click. Built for Etsy sellers.",
  keywords:
    "batch image resizer, etsy digital art, wall art automation, aspect ratio converter, grid composition tool, print production, DPI converter, bookmark grid maker",
  openGraph: {
    title: "Artigo — Not a design tool. A production engine.",
    description:
      "Turn 1 artwork into 20+ print-ready files in seconds. The automation tool Etsy art sellers didn't know they needed.",
    type: "website",
    siteName: "Artigo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artigo — Automate Your Art Production Pipeline",
    description:
      "Batch resize, grid compose, DPI embed, ZIP package. One click.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://artigo.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Artigo",
              applicationCategory: "DesignApplication",
              operatingSystem: "Windows, macOS",
              description:
                "Batch image resizing and grid composition tool for digital art sellers and print production.",
              offers: {
                "@type": "Offer",
                price: "59",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
