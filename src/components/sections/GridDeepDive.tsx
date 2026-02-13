"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const presets = [
  { name: "Bookmark 4×1", desc: "US Letter", cells: "4×1" },
  { name: "Portrait 2×2", desc: "Square grid", cells: "2×2" },
  { name: "Landscape 4×4", desc: "Contact sheet", cells: "4×4" },
  { name: "Portrait 8×8", desc: "Thumbnail grid", cells: "8×8" },
];

export function GridDeepDive() {
  return (
    <section className="section-padding bg-white/30">
      <div className="max-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual — Grid Preview */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-strong rounded-2xl p-6 shadow-lg">
              {/* Grid Preview Visual */}
              <div className="bg-page rounded-xl p-6 mb-6">
                <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto">
                  {[...Array(16)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03 }}
                      className="aspect-[3/4] rounded-md bg-gradient-to-br from-indigo-100 to-blue-100 border border-indigo-200/50"
                    />
                  ))}
                </div>
                <p className="text-xs text-text-tertiary text-center mt-4">
                  Landscape 4×4 — Paper 8.5×11 in — Cell 2.13×2.75 in
                </p>
              </div>

              {/* Preset Cards */}
              <div className="grid grid-cols-2 gap-3">
                {presets.map((preset) => (
                  <div
                    key={preset.name}
                    className="rounded-xl border border-indigo-100 bg-indigo-50/30 p-3"
                  >
                    <p className="text-sm font-semibold text-text-primary">
                      {preset.name}
                    </p>
                    <p className="text-xs text-text-secondary">{preset.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading accent="art prints." className="text-left" subtitle="Bookmarks. Sticker sheets. Contact grids.">
              More than art prints.
            </SectionHeading>

            <div className="mt-6 space-y-4 text-text-secondary leading-relaxed">
              <p>
                Artigo’s grid engine arranges your artwork into print-ready layouts.
                Perfect for physical product mockups or digital printable bundles.
              </p>
              <p>
                Choose a preset. Or define your own rows, columns, margins, and spacing.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
