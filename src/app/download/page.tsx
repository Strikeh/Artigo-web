"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Monitor,
  Apple,
  HardDrive,
  Cpu,
  MemoryStick,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedBlobs } from "@/components/layout/AnimatedBlobs";

type OS = "windows" | "mac" | "other";

const systemReqs = [
  { icon: Monitor, label: "OS", value: "Windows 10+ (64-bit) or macOS 12+" },
  { icon: Cpu, label: "Processor", value: "Apple Silicon & Intel supported" },
  { icon: MemoryStick, label: "RAM", value: "4 GB minimum, 8 GB recommended" },
  { icon: HardDrive, label: "Disk", value: "200 MB free space" },
];

export default function DownloadPage() {
  const [os, setOs] = useState<OS>("other");

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes("win")) setOs("windows");
    else if (ua.includes("mac")) setOs("mac");
  }, []);

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <AnimatedBlobs variant="hero" />

        <div className="max-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-tight">
              Download{" "}
              <span className="gradient-text accent-underline">Artigo</span>
            </h1>
            <p className="mt-4 text-lg text-text-secondary max-w-xl mx-auto">
              Get started in under a minute. Free version available — no account
              required.
            </p>

            {/* Primary Download Button */}
            <div className="mt-10 flex flex-col items-center gap-4">
              {os === "windows" || os === "other" ? (
                <>
                  <Button size="lg" icon={<Monitor size={20} />}>
                    Download for Windows
                  </Button>
                  <a
                    href="#"
                    className="text-sm text-text-secondary hover:text-accent-indigo transition-colors flex items-center gap-1"
                  >
                    <Apple size={14} />
                    Also available for macOS
                    <ExternalLink size={12} />
                  </a>
                </>
              ) : (
                <>
                  <Button size="lg" icon={<Apple size={20} />}>
                    Download for macOS
                  </Button>
                  <a
                    href="#"
                    className="text-sm text-text-secondary hover:text-accent-indigo transition-colors flex items-center gap-1"
                  >
                    <Monitor size={14} />
                    Also available for Windows
                    <ExternalLink size={12} />
                  </a>
                </>
              )}
            </div>

            {/* Version */}
            <p className="mt-6 text-xs text-text-tertiary">
              v1.0.0 ·{" "}
              <a href="#" className="underline hover:text-text-secondary">
                Changelog
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="section-padding">
        <div className="max-container max-w-3xl">
          <h2 className="text-2xl font-bold text-text-primary text-center mb-10">
            System Requirements
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {systemReqs.map((req) => (
              <motion.div
                key={req.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-strong rounded-card p-5 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                  <req.icon className="text-accent-indigo" size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">
                    {req.label}
                  </p>
                  <p className="text-sm text-text-secondary">{req.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="section-padding bg-white/30">
        <div className="max-container max-w-3xl">
          <h2 className="text-2xl font-bold text-text-primary text-center mb-10">
            Installation
          </h2>

          <ol className="space-y-6">
            {[
              {
                step: "1",
                title: "Download the installer",
                desc: "Click the download button above to get the latest version for your operating system.",
              },
              {
                step: "2",
                title: "Run the installer",
                desc: "Open the downloaded file and follow the installation wizard. On macOS, drag Artigo to your Applications folder.",
              },
              {
                step: "3",
                title: "Start producing",
                desc: "Launch Artigo, select your source folder, configure your ratios, and hit Generate. It's that simple.",
              },
            ].map((item) => (
              <motion.li
                key={item.step}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-5"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary mt-1">
                    {item.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
