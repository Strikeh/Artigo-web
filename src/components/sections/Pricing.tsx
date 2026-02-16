"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Shield, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const freeTier = {
  name: "Free",
  price: "Free",
  badge: "Get Started",
  cta: "Download Free",
  ctaVariant: "secondary" as const,
  features: [
    { included: true, text: "Up to 3 artworks per batch" },
    { included: true, text: "2 ratios" },
    { included: true, text: "Basic grid presets" },
    { included: true, text: "JPG export" },
    { included: true, text: "Watermark included" },
    { included: false, text: "Unlimited artworks" },
    { included: false, text: "All ratios & sizes" },
  ],
};

const proTier = {
  name: "Pro",
  price: "$59",
  originalPrice: "$99",
  discount: "$40 OFF EARLY BIRD DISCOUNT",
  badge: "Recommended",
  cta: "Upgrade to Pro",
  ctaVariant: "primary" as const,
  features: [
    { included: true, text: "Lifetime license" },
    { included: true, text: "Use on up to 3 devices" },
    { included: true, text: "Unlimited artworks per batch", bold: true },
    { included: true, text: "All ratios & sizes", bold: true },
    { included: true, text: "Full grid engine" },
    { included: true, text: "JPG + PNG export" },
    { included: true, text: "Auto ZIP packaging" },
    { included: true, text: "Custom naming templates" },
    { included: true, text: "No watermark" },
    { included: true, text: "Priority support" },
    { included: true, text: "Free updates for v1" },
  ],
};

export function Pricing() {
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);

  const handleCheckout = async () => {
    setIsCheckoutLoading(true);

    try {
      console.log("Starting checkout request...");

      const response = await fetch(
        "https://artigo-production.up.railway.app/api/checkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        },
      );

      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Error response:", errorData);
        throw new Error(
          errorData.message || `Checkout failed with status ${response.status}`,
        );
      }

      const data = await response.json();
      console.log("Checkout success, redirecting to:", data.url);

      // Redirect to Stripe checkout
      window.location.href = data.url;
    } catch (error) {
      console.error("Checkout error:", error);

      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";

      alert(
        `Unable to start checkout: ${errorMessage}\n\nPlease try again or contact support@getartigo.com`,
      );
      setIsCheckoutLoading(false);
    }
  };

  return (
    <section id="pricing" className="section-padding">
      <div className="max-container">
        <SectionHeading
          accent="Simple"
          subtitle="Pay once. Use forever. Free updates included."
        >
          Simple pricing. No subscriptions.
        </SectionHeading>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="glass-strong rounded-2xl p-8 border border-white/40"
          >
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary bg-page rounded-full px-3 py-1">
                {freeTier.badge}
              </span>
            </div>

            <div className="mb-8">
              <span className="text-4xl font-extrabold text-text-primary">
                {freeTier.price}
              </span>
            </div>

            <ul className="space-y-3 mb-8">
              {freeTier.features.map((f) => (
                <li key={f.text} className="flex items-start gap-3">
                  {f.included ? (
                    <Check
                      className="text-success flex-shrink-0 mt-0.5"
                      size={16}
                    />
                  ) : (
                    <X
                      className="text-text-tertiary flex-shrink-0 mt-0.5"
                      size={16}
                    />
                  )}
                  <span
                    className={`text-sm ${f.included ? "text-text-secondary" : "text-text-tertiary line-through"}`}
                  >
                    {f.text}
                  </span>
                </li>
              ))}
            </ul>

            <Button variant="secondary" href="/download" className="w-full">
              {freeTier.cta}
            </Button>
          </motion.div>

          {/* Pro */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative glass-strong rounded-2xl p-8 border-2 border-accent-indigo/30 shadow-xl"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-accent-indigo/20 to-accent-blue/20 -z-10 blur-sm" />

            <div className="mb-6 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-accent rounded-full px-3 py-1">
                <Sparkles size={12} />
                {proTier.badge}
              </span>
              {proTier.discount && (
                <span className="text-xs font-semibold uppercase tracking-wider text-text-primary bg-success/20 rounded-full px-3 py-1 border border-success/30">
                  {proTier.discount}
                </span>
              )}
            </div>

            <div className="mb-8">
              {proTier.originalPrice && (
                <span className="text-2xl font-bold text-text-secondary/60 line-through mr-3">
                  {proTier.originalPrice}
                </span>
              )}
              <span className="text-4xl font-extrabold text-text-primary">
                {proTier.price}
              </span>
              <span className="text-sm text-text-secondary ml-2">
                one-time payment
              </span>
            </div>

            <ul className="space-y-3 mb-8">
              {proTier.features.map((f) => (
                <li key={f.text} className="flex items-start gap-3">
                  <Check
                    className="text-success flex-shrink-0 mt-0.5"
                    size={16}
                  />
                  <span
                    className={`text-sm text-text-secondary ${f.bold ? "font-semibold text-text-primary" : ""}`}
                  >
                    {f.text}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              onClick={handleCheckout}
              className="w-full"
              disabled={isCheckoutLoading}
            >
              {isCheckoutLoading ? "Starting checkout..." : proTier.cta}
            </Button>
          </motion.div>
        </div>

        {/* Bottom Notes */}
        <div className="mt-10 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-sm text-text-secondary">
            <Shield size={16} className="text-accent-indigo" />
            <span>30-day money-back guarantee. No questions asked.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
