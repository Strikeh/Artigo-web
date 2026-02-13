"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function SocialProof() {
  return (
    <section className="relative bg-white/40 border-y border-white/60">
      <div className="max-container px-6 py-8 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <p className="text-text-secondary text-sm md:text-base font-semibold whitespace-nowrap">
              Trusted by digital sellers worldwide
            </p>

            <div className="hidden lg:flex items-center gap-6 text-sm text-text-secondary italic">
              <span>&ldquo;Saved me 6+ hours per week.&rdquo;</span>
              <span className="w-1 h-1 rounded-full bg-text-tertiary" />
              <span>&ldquo;Now I generate 200 files in under 10 minutes.&rdquo;</span>
              <span className="w-1 h-1 rounded-full bg-text-tertiary" />
              <span>&ldquo;Game changer for my Etsy workflow.&rdquo;</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
