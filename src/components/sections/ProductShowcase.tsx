"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const galleryItems = [
  { label: "Home Screen", placeholder: "gallery-1.png" },
  { label: "Ratio Screen", placeholder: "gallery-2.png" },
  { label: "Grid Screen", placeholder: "gallery-3.png" },
  { label: "Processing", placeholder: "gallery-4.png" },
  { label: "Results", placeholder: "gallery-5.png" },
  { label: "Settings", placeholder: "gallery-6.png" },
  { label: "Output Folder", placeholder: "gallery-7.png" },
];

export function ProductShowcase() {
  return (
    <section id="showcase" className="section-padding overflow-hidden">
      <div className="max-container">
        <SectionHeading accent="action">See it in action.</SectionHeading>

        {/* Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="glass-strong rounded-2xl p-3 shadow-xl max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden aspect-video bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-white/80 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg
                    className="w-8 h-8 text-accent-indigo ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-text-secondary text-sm">demo-video.mp4</p>
                <p className="text-text-tertiary text-xs mt-1">
                  Full walkthrough — 1-2 min
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Screenshot Gallery */}
        <div className="mt-12 relative">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-4 -mx-4">
            {galleryItems.map((item, i) => (
              <motion.div
                key={item.placeholder}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex-shrink-0 snap-center"
              >
                <div className="glass-strong rounded-xl p-2 shadow-sm w-64">
                  <div className="rounded-lg overflow-hidden aspect-[16/10] bg-gradient-to-br from-slate-50 to-indigo-50/30 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-xs text-text-tertiary">
                        {item.placeholder}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-text-secondary text-center mt-2 font-medium">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
