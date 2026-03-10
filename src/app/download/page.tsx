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
  AlertTriangle,
  Shield,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedBlobs } from "@/components/layout/AnimatedBlobs";

type OS = "windows" | "mac" | "linux" | "other";

const VERSION = "1.2.0";
const BASE_URL = `https://github.com/Strikeh/Artigo-web/releases/latest/download`;

const DOWNLOAD_URLS = {
  windows: `${BASE_URL}/Artigo-Setup-${VERSION}.exe`,
  macArm: `${BASE_URL}/Artigo-${VERSION}-mac-arm64.dmg`,
  macIntel: `${BASE_URL}/Artigo-${VERSION}-mac-x64.dmg`,
  linux: `${BASE_URL}/Artigo-${VERSION}-amd64.deb`,
};

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
    else if (ua.includes("linux")) setOs("linux");
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
              {os === "mac" ? (
                <>
                  <p className="text-sm text-text-secondary font-medium">
                    Choose your Mac:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={DOWNLOAD_URLS.macArm}
                      className="btn-primary px-8 py-4 text-base inline-flex items-center gap-3"
                    >
                      <Apple size={20} />
                      Download for Apple Silicon (M1/M2/M3)
                    </a>
                    <a
                      href={DOWNLOAD_URLS.macIntel}
                      className="btn-secondary px-8 py-4 text-base inline-flex items-center gap-3"
                    >
                      <Apple size={20} />
                      Download for Intel Mac
                    </a>
                  </div>
                  <p className="text-xs text-text-tertiary">
                    Not sure? <strong>Apple menu → About This Mac</strong> —
                    look for &quot;Apple M…&quot; (Silicon) or
                    &quot;Intel&quot;.
                  </p>
                </>
              ) : os === "linux" ? (
                <>
                  <a
                    href={DOWNLOAD_URLS.linux}
                    className="btn-primary px-10 py-5 text-lg inline-flex items-center gap-3"
                  >
                    <Download size={20} />
                    Download for Linux (.deb)
                  </a>
                  <p className="text-xs text-text-tertiary">
                    Ubuntu / Debian-based distros
                  </p>
                </>
              ) : (
                <>
                  <a
                    href={DOWNLOAD_URLS.windows}
                    className="btn-primary px-10 py-5 text-lg inline-flex items-center gap-3"
                  >
                    <Download size={20} />
                    Download for Windows
                  </a>
                </>
              )}

              {/* Other platforms */}
              <details className="mt-2 text-center group">
                <summary className="text-sm text-text-tertiary cursor-pointer inline-flex items-center gap-1 hover:text-text-secondary transition-colors list-none">
                  Other platforms
                  <ChevronDown
                    size={14}
                    className="group-open:rotate-180 transition-transform"
                  />
                </summary>
                <div className="mt-3 flex flex-col sm:flex-row gap-2 justify-center">
                  {os !== "windows" && (
                    <a
                      href={DOWNLOAD_URLS.windows}
                      className="btn-ghost text-sm px-4 py-2 inline-flex items-center gap-2"
                    >
                      <Download size={14} /> Windows (.exe)
                    </a>
                  )}
                  {os !== "mac" && (
                    <>
                      <a
                        href={DOWNLOAD_URLS.macArm}
                        className="btn-ghost text-sm px-4 py-2 inline-flex items-center gap-2"
                      >
                        <Apple size={14} /> macOS Apple Silicon
                      </a>
                      <a
                        href={DOWNLOAD_URLS.macIntel}
                        className="btn-ghost text-sm px-4 py-2 inline-flex items-center gap-2"
                      >
                        <Apple size={14} /> macOS Intel
                      </a>
                    </>
                  )}
                  {os !== "linux" && (
                    <a
                      href={DOWNLOAD_URLS.linux}
                      className="btn-ghost text-sm px-4 py-2 inline-flex items-center gap-2"
                    >
                      <Download size={14} /> Linux (.deb)
                    </a>
                  )}
                </div>
              </details>
            </div>

            {/* Version */}
            <p className="mt-6 text-xs text-text-tertiary">
              v{VERSION} ·{" "}
              <a
                href="https://github.com/Strikeh/Artigo-web/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-text-secondary"
              >
                Release Notes
              </a>
            </p>
          </motion.div>

          {/* Platform-specific Warning Notice */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 max-w-2xl mx-auto"
          >
            {os === "mac" ? (
              <div className="glass-strong rounded-2xl p-6 border border-blue-400/30 bg-blue-50/50">
                <div className="flex items-start gap-4">
                  <AlertTriangle
                    className="text-blue-600 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div className="text-left">
                    <h3 className="text-base font-semibold text-text-primary mb-2">
                      macOS Gatekeeper Warning Expected
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      Because Artigo is <strong>not yet notarized</strong> by
                      Apple, macOS may block the app on first launch. To open
                      it: go to{" "}
                      <strong>System Settings → Privacy &amp; Security</strong>,
                      scroll down, and click{" "}
                      <strong>&quot;Open Anyway&quot;</strong> next to Artigo.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="glass-strong rounded-2xl p-6 border border-yellow-400/30 bg-yellow-50/50">
                <div className="flex items-start gap-4">
                  <AlertTriangle
                    className="text-yellow-600 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div className="text-left">
                    <h3 className="text-base font-semibold text-text-primary mb-2">
                      Windows SmartScreen Warning Expected
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      This installer is <strong>not yet code-signed</strong>.
                      You&#39;ll see a &quot;Windows protected your PC&quot;
                      warning. This is normal for new apps. Click{" "}
                      <strong>&quot;More info&quot;</strong> →{" "}
                      <strong>&quot;Run anyway&quot;</strong> to install.
                    </p>
                  </div>
                </div>
              </div>
            )}
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
            Installation Guide
          </h2>

          <ol className="space-y-6">
            {(os === "mac"
              ? [
                  {
                    step: "1",
                    title: "Download the DMG",
                    desc: 'Click the download button above. Choose "Apple Silicon" for M1/M2/M3 Macs or "Intel" for older Macs.',
                  },
                  {
                    step: "2",
                    title: "Open the DMG",
                    desc: "Double-click the downloaded .dmg file. Drag Artigo to your Applications folder.",
                  },
                  {
                    step: "3",
                    title: "Handle Gatekeeper (if shown)",
                    desc: 'If macOS says "Artigo cannot be opened", go to System Settings → Privacy & Security, scroll down, and click "Open Anyway".',
                  },
                  {
                    step: "4",
                    title: "Launch Artigo",
                    desc: "Open Artigo from your Applications folder or Launchpad. You may be asked to confirm once more — click Open.",
                  },
                  {
                    step: "5",
                    title: "Start creating",
                    desc: "Select your images, configure ratios, and generate your production files!",
                  },
                ]
              : [
                  {
                    step: "1",
                    title: "Download the installer",
                    desc: "Click the download button above to get Artigo-Setup.exe (approx. 200 MB).",
                  },
                  {
                    step: "2",
                    title: "Run the installer",
                    desc: "Double-click the downloaded .exe file to start the installation wizard.",
                  },
                  {
                    step: "3",
                    title: "Handle SmartScreen warning (if shown)",
                    desc: 'If you see "Windows protected your PC", click "More info" then "Run anyway". This is normal for new apps without code signing.',
                  },
                  {
                    step: "4",
                    title: "Complete installation",
                    desc: "Follow the installer steps. Artigo will be added to your Start Menu and desktop.",
                  },
                  {
                    step: "5",
                    title: "Launch and start creating",
                    desc: "Open Artigo, select your images, configure ratios, and generate your production files!",
                  },
                ]
            ).map((item) => (
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

          {/* Trust & Security Note */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 glass-strong rounded-2xl p-6 border border-white/40"
          >
            <div className="flex items-start gap-4">
              <Shield
                className="text-accent-indigo flex-shrink-0 mt-1"
                size={24}
              />
              <div>
                {os === "mac" ? (
                  <>
                    <h3 className="text-base font-semibold text-text-primary mb-2">
                      Why the Gatekeeper warning?
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-3">
                      Apple requires a paid Developer ID and notarization to
                      suppress this warning.{" "}
                      <strong>The app is completely safe</strong> — it runs
                      entirely offline and doesn&#39;t collect any data.
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      We plan to add notarization in a future release.
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="text-base font-semibold text-text-primary mb-2">
                      Why the SmartScreen warning?
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-3">
                      This warning appears because we haven&#39;t purchased a
                      code signing certificate yet (€120/year).{" "}
                      <strong>The app is completely safe</strong> — it runs
                      entirely offline and doesn&#39;t collect any data.
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      As more users install Artigo, Microsoft builds reputation
                      and the warning will automatically reduce. We may add code
                      signing or publish to Microsoft Store in future releases.
                    </p>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
