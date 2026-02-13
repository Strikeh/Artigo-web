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
          Manual resizing is <span className="gradient-text">not a workflow.</span>
        </SectionHeading>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Old Way */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-card bg-white border border-red-100/60 p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                <X className="text-red-500" size={20} />
              </div>
              <h3 className="text-xl font-bold text-text-primary">
                What most sellers still do
              </h3>
            </div>

            <ul className="space-y-3">
              {oldWay.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X
                    className="text-red-400 flex-shrink-0 mt-0.5"
                    size={16}
                  />
                  <span className="text-sm text-text-secondary leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm font-medium text-red-500 bg-red-50 rounded-lg p-3 text-center">
              20 artworks × 5 ratios × 4 sizes ={" "}
              <strong>400 chances to make mistakes.</strong>
            </p>
          </motion.div>

          {/* New Way */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-card bg-white border border-emerald-100/60 p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                <Check className="text-success" size={20} />
              </div>
              <h3 className="text-xl font-bold text-text-primary">
                What Artigo does instead
              </h3>
            </div>

            <ul className="space-y-3">
              {newWay.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check
                    className="text-success flex-shrink-0 mt-0.5"
                    size={16}
                  />
                  <span className="text-sm text-text-secondary leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm font-medium text-success bg-emerald-50 rounded-lg p-3 text-center">
              Same 400 files. <strong>Generated in minutes.</strong>
            </p>

            <p className="mt-6 text-sm font-medium text-success bg-emerald-50 rounded-lg p-3 text-center">
              Same 400 files. Under 10 minutes.{" "}
              <strong>Zero errors.</strong>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
