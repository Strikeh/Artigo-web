"use client";

import {
  Crop,
  Grid3x3,
  Target,
  Scissors,
  FileText,
  Package,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";

const features = [
  {
    icon: Crop,
    iconColor: "text-feature-purple",
    iconBg: "bg-purple-50",
    title: "Multi-Ratio Batch Engine",
    description:
      "Generate every standard ratio: 1:1, 2:3, 3:4, 4:5, A-series. Multiple sizes per ratio. One click creates every combination.",
    badge: "Up to 20 sizes per artwork",
    badgeVariant: "purple" as const,
  },
  {
    icon: Grid3x3,
    iconColor: "text-feature-indigo",
    iconBg: "bg-indigo-50",
    title: "Grid Composition Engine",
    description:
      "Create printable layouts for bookmarks, business cards, sticker sheets, and contact sheets. Use presets or build fully custom grids.",
    badge: "6 built-in presets",
    badgeVariant: "indigo" as const,
  },
  {
    icon: Target,
    iconColor: "text-success",
    iconBg: "bg-emerald-50",
    title: "Print-Grade DPI Control",
    description:
      "Embed correct DPI metadata automatically. 300 for print. 150 for web. No manual calculation.",
    badge: "Industry standard",
    badgeVariant: "green" as const,
  },
  {
    icon: Scissors,
    iconColor: "text-feature-orange",
    iconBg: "bg-orange-50",
    title: "Smart Crop Modes",
    description:
      "Fit (white border), Fill (smart crop), Stretch, Custom border. Apply once. Runs across every file.",
    badge: "4 crop modes",
    badgeVariant: "orange" as const,
  },
  {
    icon: FileText,
    iconColor: "text-accent-blue",
    iconBg: "bg-blue-50",
    title: "Professional File Naming",
    description:
      "Use placeholders like: {name}{ratio}{size}_{dpi}.jpg. Preview results before generating.",
    badge: "Live preview",
    badgeVariant: "blue" as const,
  },
  {
    icon: Package,
    iconColor: "text-warning",
    iconBg: "bg-amber-50",
    title: "Auto ZIP & Organization",
    description:
      "Outputs are grouped per artwork and ratio. ZIP files are created automatically — ready for Etsy upload.",
    badge: "Upload-ready",
    badgeVariant: "amber" as const,
  },
];

export function Features() {
  return (
    <section id="features" className="section-padding">
      <div className="max-container">
        <SectionHeading accent="Not experimentation.">
          Built for production. Not experimentation.
        </SectionHeading>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <GlassCard key={feature.title} delay={i * 0.1}>
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center`}
                >
                  <feature.icon className={feature.iconColor} size={24} />
                </div>
                <Badge variant={feature.badgeVariant}>{feature.badge}</Badge>
              </div>

              <h3 className="text-lg font-bold text-text-primary mb-2">
                {feature.title}
              </h3>

              <p className="text-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
