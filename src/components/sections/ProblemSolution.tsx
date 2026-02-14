"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const oldWay = [
  "Open in Photoshop",
  "Resize for 2:3",
  "Save",
  "Reopen",
  "Resize for 3:4",
  "Repeat for 4:5, 1:1, A-series",
  "Rename every file",
  "Create folders",
  "Zip everything manually",
];

const newWay = [
  "Select your artwork folder",
  "Choose ratios & sizes",
  "Click Generate",
  "Get organized, DPI-embedded, upload-ready files",
];

export function ProblemSolution() {
  return (
    <section className="section-padding">
      <div className="max-container">
        <SectionHeading subtitle="See the difference Artigo makes in your workflow.">
          Manual resizing is{" "}
          <span className="gradient-text">not a workflow.</span>
        </SectionHeading>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Old Way */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="glass-strong rounded-card p-8 md:p-10 border border-red-100 relative overflow-hidden group"
          >
            {/* Subtle bg decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center shadow-sm">
                <X size={24} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-text-primary">
                What most sellers still do
              </h3>
            </div>

            <ul className="space-y-4 relative z-10">
              {oldWay.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <X className="text-red-500" size={14} strokeWidth={2.5} />
                  </div>
                  <span className="text-base text-text-secondary font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 relative z-10 bg-red-50 rounded-xl p-4 border border-red-100 text-center">
              <p className="text-sm font-semibold text-red-600">
                20 artworks × 5 ratios × 4 sizes =
              </p>
              <p className="text-lg font-bold text-red-700 mt-1">
                400 chances to make mistakes.
              </p>
            </div>
          </motion.div>

          {/* New Way */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="glass-strong rounded-card p-8 md:p-10 border border-emerald-100 relative overflow-hidden group shadow-lg ring-1 ring-emerald-500/10"
          >
            {/* Subtle bg decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-sm">
                <Check size={24} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-text-primary">
                What Artigo does instead
              </h3>
            </div>

            <ul className="space-y-4 relative z-10">
              {newWay.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Check
                      className="text-emerald-600"
                      size={14}
                      strokeWidth={3}
                    />
                  </div>
                  <span className="text-base text-text-primary font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 relative z-10 bg-emerald-50 rounded-xl p-4 border border-emerald-100 text-center">
              <p className="text-sm font-semibold text-emerald-600">
                Same 400 files. Under 10 minutes.
              </p>
              <p className="text-lg font-bold text-emerald-700 mt-1">
                Zero errors.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
