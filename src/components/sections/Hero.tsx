"use client";

import { motion } from "framer-motion";
import { Download, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedBlobs } from "@/components/layout/AnimatedBlobs";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 mb-16 overflow-hidden flex flex-col items-center">
      <AnimatedBlobs variant="hero" />

      <div className="max-container w-full section-padding relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto flex flex-col items-center"
        >
          {/* Beta Release Badge */}
          <motion.a
            href="/download"
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-indigo-100 text-indigo-600 text-sm font-semibold mb-8 hover:scale-105 hover:bg-white transition-all shadow-sm hover:shadow-md group"
          >
            <Sparkles
              size={16}
              className="text-indigo-500 group-hover:animate-pulse"
            />
            <span>Beta Now Available — Download Free</span>
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse ml-1" />
          </motion.a>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-primary leading-[1.1]"
          >
            One folder in.
            <br />
            <span className="gradient-text">Every print format out.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 text-xl md:text-2xl text-text-secondary leading-relaxed max-w-2xl"
          >
            Artigo converts every artwork into all selected ratios, sizes, and
            grid sheets — automatically, in a single bulk run.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
