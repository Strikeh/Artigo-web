"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ratios = [
  {
    name: "1:1 Square",
    sizes: ['5×5"', '8×8"', '10×10"', '12×12"'],
    color: "border-indigo-200 bg-indigo-50/50",
  },
  {
    name: "2:3 Portrait",
    sizes: ['4×6"', '8×12"', '10×15"', '12×18"'],
    color: "border-blue-200 bg-blue-50/50",
  },
  {
    name: "3:4 Classic",
    sizes: ['6×8"', '9×12"', '12×16"', '15×20"'],
    color: "border-purple-200 bg-purple-50/50",
  },
  {
    name: "4:5 Photo",
    sizes: ['8×10"', '12×15"', '16×20"', '20×25"'],
    color: "border-violet-200 bg-violet-50/50",
  },
  {
    name: "A-Series",
    sizes: ["A5", "A4", "A3", "A2"],
    color: "border-cyan-200 bg-cyan-50/50",
  },
];

export function RatioDeepDive() {
  return (
    <section className="section-padding">
      <div className="max-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading accent="customers expect." className="text-left">
              Every ratio your customers expect.
            </SectionHeading>

            <div className="mt-6 space-y-4 text-text-secondary leading-relaxed">
              <p>
                Buyers don’t think in pixels. They think in frames.
              </p>
              <p>
                Artigo lets you deliver:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>2:3 for bedroom prints</li>
                <li>1:1 for Instagram</li>
                <li>A-series for office prints</li>
                <li>4:5 for photo frames</li>
              </ul>
              <p>
                Without creating each variation manually.
              </p>
            </div>
          </motion.div>

          {/* Visual — Ratio Cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-strong rounded-2xl p-6 shadow-lg">
              <div className="grid grid-cols-1 gap-4">
                {ratios.map((ratio, i) => (
                  <motion.div
                    key={ratio.name}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className={`rounded-xl border p-4 ${ratio.color}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm text-text-primary">
                        {ratio.name}
                      </span>
                      <div className="flex gap-2">
                        {ratio.sizes.map((size) => (
                          <span
                            key={size}
                            className="text-xs bg-white/80 rounded-lg px-2.5 py-1 text-text-secondary font-medium"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
