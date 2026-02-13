"use client";

import { motion } from "framer-motion";
import { Download, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedBlobs } from "@/components/layout/AnimatedBlobs";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <AnimatedBlobs variant="hero" />

      <div className="max-container w-full section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-primary leading-[1.05]">
              Stop resizing.
              <br />
              <span className="gradient-text">
                Start shipping.
              </span>
            </h1>

            <p className="mt-6 text-xl md:text-2xl font-medium text-text-primary leading-tight max-w-xl">
              Artigo turns one artwork into every print-ready size — instantly.
            </p>

            <p className="mt-4 text-lg text-text-secondary leading-relaxed max-w-xl">
              Generate perfectly cropped, DPI-correct files for every ratio, every size, in one click. Built for serious digital sellers.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                href="/download"
                size="lg"
                icon={<Download size={20} />}
              >
                Download Free
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

          {/* Product Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 48, rotateY: -8 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Screenshot placeholder */}
            <div className="relative">
              <div className="glass-strong rounded-2xl p-3 shadow-2xl">
                <div className="bg-page rounded-xl overflow-hidden aspect-[16/10]">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-50">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-2xl font-bold">A</span>
                      </div>
                      <p className="text-text-secondary text-sm">
                        hero-screenshot.png
                      </p>
                      <p className="text-text-tertiary text-xs mt-1">
                        Replace with app screenshot
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="absolute -top-4 -right-4 glass-strong rounded-xl px-4 py-2.5 shadow-lg"
              >
                <span className="text-sm font-semibold text-success flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  300 DPI
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="absolute -bottom-4 -left-4 glass-strong rounded-xl px-4 py-2.5 shadow-lg"
              >
                <span className="text-sm font-semibold text-accent-indigo">
                  5 Ratios × 4 Sizes = 20 Files
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.4 }}
                className="absolute -bottom-4 right-8 glass-strong rounded-xl px-4 py-2.5 shadow-lg"
              >
                <span className="text-sm font-semibold text-feature-orange">
                  Auto ZIP 📦
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
