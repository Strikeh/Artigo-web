"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FolderOpen, SlidersHorizontal, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const steps = [
  {
    num: "01",
    icon: FolderOpen,
    iconColor: "text-feature-orange",
    iconBg: "bg-orange-50",
    title: "Select",
    description: "Drop in your artwork folder and choose your output location.",
    image: "/images/step-1-select.png",
  },
  {
    num: "02",
    icon: SlidersHorizontal,
    iconColor: "text-feature-purple",
    iconBg: "bg-purple-50",
    title: "Configure",
    description:
      "Toggle ratios, sizes, grids, and crop modes. Preview before you run.",
    image: "/images/step-2-configure.png",
  },
  {
    num: "03",
    icon: Rocket,
    iconColor: "text-feature-indigo",
    iconBg: "bg-indigo-50",
    title: "Generate",
    description:
      "Artigo handles the math, naming, DPI metadata, folders, and ZIP packaging.",
    image: "/images/step-3-generate.png",
  },
];

function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-bold text-accent-indigo tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="max-container">
        <SectionHeading accent="Unlimited output.">
          Three clicks. Unlimited output.
        </SectionHeading>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <GlassCard key={step.num} delay={i * 0.15} className="relative">
              <span className="text-6xl font-extrabold text-text-tertiary/40 absolute top-4 right-6 select-none">
                {step.num}
              </span>

              <div
                className={`w-12 h-12 rounded-xl ${step.iconBg} flex items-center justify-center mb-5`}
              >
                <step.icon className={step.iconColor} size={24} />
              </div>

              <h3 className="text-xl font-bold text-text-primary mb-3">
                {step.title}
              </h3>

              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                {step.description}
              </p>

              {/* Screenshot Image */}
              <div className="rounded-xl bg-page overflow-hidden aspect-video relative border border-card-border shadow-sm group-hover:shadow-md transition-shadow">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-lg md:text-xl font-medium text-text-secondary">
            1 artwork → 5 ratios → 4 sizes each →{" "}
            <strong>20 ready-to-sell files.</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
