"use client";

import { motion } from "framer-motion";
import { Download, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedBlobs } from "@/components/layout/AnimatedBlobs";

export function Hero() {
  return (
    <section className="relative pt-32 pb-12 mb-16 overflow-hidden flex flex-col items-center">
      <AnimatedBlobs variant="hero" />

      <div className="max-container w-full section-padding relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-5xl mx-auto flex flex-col items-center"
        >
          {/* Beta Release Badge */}
          <motion.a
            href="/download"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-accent text-white text-sm font-semibold mb-6 hover:scale-105 transition-transform shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            🎉 Beta Now Available — Download Free
          </motion.a>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-primary leading-[1.05]">
            One folder in.
            <br />
            <span className="gradient-text">Every print format out.</span>
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-text-secondary leading-relaxed max-w-2xl">
            Artigo converts every artwork into all selected ratios, sizes, and
            grid sheets — automatically, in a single bulk run.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/download" size="lg" icon={<Download size={20} />}>
              Download Beta
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon={<Play size={20} />}
              href="#showcase"
            >
              Watch Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
