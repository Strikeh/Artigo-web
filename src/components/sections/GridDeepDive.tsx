"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageLightbox } from "@/components/ui/ImageLightbox";

const presets = [
  {
    id: "bookmark",
    name: "Bookmark 4×1",
    desc: "US Letter (Landscape)",
    image: "/images/4x1landscape.gif",
  },
  {
    id: "square",
    name: "Portrait 2×2",
    desc: "Square grid",
    image: "/images/portrait2x2.gif",
  },
  {
    id: "contact",
    name: "Landscape 4×4",
    desc: "Contact sheet",
    image: "/images/landscape4x4.gif",
  },
  {
    id: "thumb",
    name: "Portrait 8×8",
    desc: "Thumbnail grid",
    image: "/images/portrait8x8.gif",
  },
];

export function GridDeepDive() {
  const [activePreset, setActivePreset] = useState(presets[0]); // Default to Bookmark

  return (
    <section className="section-padding bg-white/30">
      <div className="max-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual — Grid Preview */}
          <div className="order-last lg:order-first">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="glass-strong rounded-2xl p-6 shadow-lg"
            >
              {/* Grid Preview Visual */}
              <div className="bg-page rounded-xl p-8 mb-6 min-h-[400px] flex flex-col justify-center relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePreset.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full aspect-[4/3] max-h-[350px]"
                  >
                    <ImageLightbox
                      src={activePreset.image}
                      alt={`${activePreset.name} Animation`}
                      width={800}
                      height={600}
                      className="object-contain w-full h-full rounded-md"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="text-xs text-text-tertiary">
                    {activePreset.name} — Paper 8.5×11 in
                  </p>
                </div>
              </div>

              {/* Preset Cards */}
              <div className="grid grid-cols-2 gap-3">
                {presets.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => setActivePreset(preset)}
                    className={`rounded-xl border p-3 text-left transition-all duration-200 ${
                      activePreset.id === preset.id
                        ? "bg-indigo-50 border-indigo-200 shadow-sm ring-1 ring-indigo-200"
                        : "bg-white/50 border-transparent hover:bg-white hover:border-gray-200"
                    }`}
                  >
                    <p
                      className={`text-sm font-semibold transition-colors ${
                        activePreset.id === preset.id
                          ? "text-indigo-900"
                          : "text-text-primary"
                      }`}
                    >
                      {preset.name}
                    </p>
                    <p className="text-xs text-text-secondary">{preset.desc}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              accent="art prints."
              className="text-left"
              subtitle="Bookmarks. Sticker sheets. Contact grids."
            >
              More than art prints.
            </SectionHeading>

            <div className="mt-6 space-y-4 text-text-secondary leading-relaxed">
              <p>
                Artigo’s grid engine arranges your artwork into print-ready
                layouts. Perfect for physical product mockups or digital
                printable bundles.
              </p>
              <p>
                Choose a preset. Or define your own rows, columns, margins, and
                spacing.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Grid Engine Video */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="glass-strong rounded-2xl p-3 shadow-xl max-w-4xl mx-auto overflow-hidden">
            <div className="rounded-xl overflow-hidden aspect-video">
              <iframe
                src="https://www.youtube.com/embed/Ww73hfQROro"
                title="Artigo | Create Print-Ready Image Grids in Seconds (8x8, 4x4 &amp; More)"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
