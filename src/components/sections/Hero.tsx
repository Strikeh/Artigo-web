"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedBlobs } from "@/components/layout/AnimatedBlobs";

const screenshots = [
  { src: "/images/home.png", alt: "Artigo Home Dashboard" },
  { src: "/images/ratio-management.png", alt: "Ratio & Size Management" },
  { src: "/images/grid-composition.png", alt: "Grid Layout Editor" },
  { src: "/images/global-settings.png", alt: "Global Application Settings" },
  { src: "/images/roadmap.png", alt: "Product Roadmap" },
  { src: "/images/processing.png", alt: "Batch Processing in Action" },
  { src: "/images/results.png", alt: "Generated Results" },
];

const BrowserFrame = () => (
  <div className="w-full h-12 bg-white border-b border-gray-200 flex items-center px-4 justify-between select-none">
    {/* Window Controls */}
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]" />
      <div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-[#D89E24]" />
      <div className="w-3 h-3 rounded-full bg-[#28C840] border border-[#1AAB29]" />
    </div>

    {/* Address Bar */}
    <div className="flex-1 max-w-2xl mx-6">
      <div className="w-full h-8 bg-gray-100 rounded-lg flex items-center justify-center relative group">
        <div className="flex items-center gap-2 text-sm text-gray-500 font-medium group-hover:text-gray-900 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-50"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          artigo.app
        </div>
      </div>
    </div>

    {/* Empty Flex Item for Balance */}
    <div className="w-[52px]" />
  </div>
);

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(timer);
  }, []);

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

        {/* Hero Dashboard Image Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.4,
            type: "spring",
            bounce: 0.2,
          }}
          className="relative mt-20 max-w-6xl mx-auto perspective-1000 w-full px-4 md:px-0"
        >
          <div className="relative glass-strong rounded-2xl overflow-hidden shadow-2xl border border-white/50 group bg-gray-50/50">
            {/* Browser Frame Header */}
            <div className="bg-white border-b border-gray-200">
              <div className="flex items-center justify-between px-4 h-12">
                {/* Traffic Lights */}
                <div className="flex items-center gap-2 w-20">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-sm" />
                </div>

                {/* Address Bar */}
                <div className="flex-1 max-w-2xl px-4">
                  <div className="w-full h-8 bg-gray-100/80 rounded-lg flex items-center justify-center gap-2 text-xs font-medium text-gray-500 hover:bg-gray-100 transition-colors cursor-default border border-transparent hover:border-gray-200">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-60"
                    >
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span>artigo.app</span>
                  </div>
                </div>

                {/* Right Controls Placeholder */}
                <div className="w-20 flex justify-end gap-3 text-gray-400">
                  <div className="w-4 h-4 rounded bg-gray-200" />
                  <div className="w-4 h-4 rounded bg-gray-200" />
                </div>
              </div>
            </div>

            <div className="bg-page overflow-hidden shadow-inner aspect-[16/10] relative flex items-center justify-center p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full p-4 md:p-8"
                >
                  <div className="relative w-full h-full shadow-2xl rounded-lg overflow-hidden border border-black/5 bg-white">
                    <Image
                      src={screenshots[currentIndex].src}
                      alt={screenshots[currentIndex].alt}
                      fill
                      className="object-contain"
                      priority={currentIndex === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {screenshots.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "w-6 bg-white"
                        : "w-1.5 bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-t from-gray-50/10 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
