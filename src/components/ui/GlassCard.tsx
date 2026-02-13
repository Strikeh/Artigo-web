"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export function GlassCard({
  children,
  className = "",
  hover = true,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={
        hover
          ? {
              y: -4,
              boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
              transition: { duration: 0.2 },
            }
          : undefined
      }
      className={`glass-strong rounded-card p-6 shadow-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}
