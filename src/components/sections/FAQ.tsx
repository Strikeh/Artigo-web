"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { AccordionItem } from "@/components/ui/AccordionItem";

const faqs = [
  {
    q: "What image formats does Artigo support?",
    a: "Artigo accepts JPG, JPEG, PNG, WebP, TIFF, and BMP as input. Output is available in JPG and PNG format.",
  },
  {
    q: "Does Artigo work offline?",
    a: "Yes! Artigo is a desktop application that runs entirely on your computer. No internet connection required, no cloud uploads, your files never leave your machine.",
  },
  {
    q: "What operating systems are supported?",
    a: "Artigo runs on Windows and macOS. We're exploring Linux support for a future release.",
  },
  {
    q: "What DPI should I use for print?",
    a: "300 DPI is the industry standard for high-quality print. Artigo defaults to 300 DPI but lets you set any value you need.",
  },
  {
    q: "Can I customize the output file naming?",
    a: "Absolutely. Pro users get full template-based naming with placeholders like {name}, {ratio}, {size}, {dpi}, and {format}. You can even preview the result with your actual file names before processing.",
  },
  {
    q: "What's the difference between Fit, Fill, and Stretch crop modes?",
    a: "Fit keeps the full image visible and adds white borders where needed. Fill smartly crops to exactly match the target ratio (most popular for wall art). Stretch distorts the image to fill the target dimensions. Choose the one that suits your artwork style.",
  },
  {
    q: "How fast is the batch processing?",
    a: "A single high-res artwork (8000×8000) generates 25+ variants in under 30 seconds. A batch of 20 artworks with 500 total output files completes in under 10 minutes.",
  },
  {
    q: "Is there a limit on file size or resolution?",
    a: "No hard limits. Artigo uses streaming architecture (Sharp/libvips) so even very large files are processed efficiently without consuming excessive memory.",
  },
  {
    q: "Do I get free updates?",
    a: "Yes. Your Pro license includes free updates for life, including new features, presets, and improvements.",
  },
  {
    q: "What if I'm not satisfied?",
    a: "We offer a 30-day money-back guarantee, no questions asked.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-padding">
      <div className="max-container max-w-3xl">
        <SectionHeading>Frequently Asked Questions</SectionHeading>

        <div className="mt-12 space-y-3">
          {faqs.map((faq) => (
            <AccordionItem key={faq.q} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
