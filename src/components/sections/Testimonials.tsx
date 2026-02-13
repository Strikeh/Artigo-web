"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "I used to spend my entire Sunday resizing files for my Etsy shop. Now I do it in my coffee break. Artigo is the best investment I've made for my business.",
    name: "Sarah M.",
    role: "Etsy Wall Art Seller",
  },
  {
    quote:
      "The grid feature alone is worth the price. I create bookmark sheets in seconds that used to take me 30 minutes each in Canva.",
    name: "James K.",
    role: "Printable Design Shop",
  },
  {
    quote:
      "Finally a tool that understands Etsy sellers. The auto-ZIP and folder organization feature means my digital downloads are ready to list immediately.",
    name: "Maria L.",
    role: "Digital Art Studio",
  },
  {
    quote:
      "I switched from manually resizing in Photoshop. 400 files used to take me a full day. Now? Under 10 minutes. Not kidding.",
    name: "David R.",
    role: "Print on Demand Creator",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-white/30">
      <div className="max-container">
        <SectionHeading accent="Loved">
          Loved by sellers worldwide.
        </SectionHeading>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-strong rounded-card p-6"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="text-warning fill-warning"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-text-secondary italic leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">
                    {t.name}
                  </p>
                  <p className="text-xs text-text-secondary">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-text-tertiary italic">
          Early access feedback — real user testimonials coming soon.
        </p>
      </div>
    </section>
  );
}
