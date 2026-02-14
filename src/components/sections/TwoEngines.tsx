"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Crop, LayoutGrid } from "lucide-react";

export function TwoEngines() {
  return (
    <section className="pb-24 pt-0">
      <div className="max-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
            Two production engines.{" "}
            <span className="gradient-text">One workflow.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <GlassCard className="p-8 flex flex-col items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
              <Crop size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                Ratio Engine
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed">
                Turn one artwork into every customer-ready print size.
                DPI-correct, perfectly cropped, organized, and zipped.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="p-8 flex flex-col items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
              <LayoutGrid size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                Grid Engine
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed">
                Combine many images into printable grid sheets—ideal for sticker
                sets, clipart bundles, flashcards, thumbnails, and preview
                sheets.
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
