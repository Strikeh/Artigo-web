"use client";

import { motion } from "framer-motion";
import { Download, Shield, Lock, Laptop, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedBlobs } from "@/components/layout/AnimatedBlobs";

const trustIndicators = [
  { icon: Shield, text: "30-day money-back guarantee" },
  { icon: Lock, text: "No account required" },
  { icon: Laptop, text: "Works offline — your files stay private" },
  { icon: Zap, text: "Free version available" },
];

export function FinalCTA() {
  return (
    <section className="relative section-padding overflow-hidden">
      <AnimatedBlobs variant="cta" />

      <div className="max-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-panel p-12 md:p-16 text-center max-w-4xl mx-auto shadow-2xl border border-white/50"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-tight leading-tight mb-6">
            Ready to automate your
            <br />
            <span className="gradient-text">
              art production?
            </span>
          </h2>

          <p className="mt-6 text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
            Join thousands of digital art sellers who stopped wasting time on
            manual resizing. Download Artigo and start producing — not resizing.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/download"
              size="lg"
              icon={<Download size={20} />}
            >
              Download Artigo Free
            </Button>
            <Button variant="secondary" size="lg" href="#pricing">
              View Pricing
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustIndicators.map((item) => (
              <div
                key={item.text}
                className="flex flex-col items-center gap-3 text-center"
              >
                <item.icon size={20} className="text-accent-indigo" />
                <span className="text-sm text-text-secondary font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
