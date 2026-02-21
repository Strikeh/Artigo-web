import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        page: "#f5f5f7",
        "card-white": "#ffffff",
        "card-border": "rgba(0,0,0,0.03)",
        accent: {
          indigo: "#6366f1",
          blue: "#3b82f6",
          purple: "#8b5cf6",
        },
        "text-primary": "#1d1d1f",
        "text-secondary": "#86868b",
        "text-tertiary": "#d2d2d7",
        success: "#10b981",
        warning: "#f59e0b",
        "feature-orange": "#f97316",
        "feature-purple": "#8b5cf6",
        "feature-indigo": "#6366f1",
        footer: "#1d1d1f",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Text",
          "SF Pro Display",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      borderRadius: {
        card: "16px",
        panel: "32px",
        button: "12px",
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #6366f1, #3b82f6)",
        "gradient-accent-hover": "linear-gradient(135deg, #5558e6, #2d74e0)",
      },
      keyframes: {
        "blob-float": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.05)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        typewriter: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "border-spin": {
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "blob-float": "blob-float 20s ease-in-out infinite",
        "blob-float-delay": "blob-float 25s ease-in-out 2s infinite",
        "blob-float-slow": "blob-float 30s ease-in-out 4s infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        shimmer: "shimmer 2s infinite",
        "border-spin": "border-spin 4s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
