import type { Metadata } from "next";
import Link from "next/link";
import { XCircle, ArrowLeft, Home, HelpCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Checkout Cancelled | Artigo",
  description: "Your checkout was cancelled. No charges have been made.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CancelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full">
        {/* Cancel Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-text-tertiary/20 rounded-full blur-xl" />
            <XCircle
              className="relative text-text-secondary"
              size={80}
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-4">
          Checkout Cancelled
        </h1>
        <p className="text-xl text-text-secondary text-center mb-12">
          No worries — you haven&#39;t been charged.
        </p>

        {/* CTA Section */}
        <div className="glass-strong rounded-2xl p-8 border border-white/40 mb-8 text-center">
          <p className="text-text-secondary mb-6">
            Change your mind? You can complete your purchase anytime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/#pricing" className="flex-1">
              Try Again
            </Button>
            <Button
              href="/"
              variant="secondary"
              icon={<Home size={18} />}
              className="flex-1"
            >
              Back to Home
            </Button>
          </div>
        </div>

        {/* Help Section */}
        <div className="glass-strong rounded-2xl p-8 border border-white/40">
          <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
            <HelpCircle size={20} className="text-accent-indigo" />
            Have questions about Artigo Pro?
          </h2>

          <ul className="space-y-3">
            <li>
              <Link
                href="/#pricing"
                className="text-text-secondary hover:text-accent-indigo transition-colors inline-flex items-center gap-2"
              >
                <span>→</span>
                <span>View pricing & features</span>
              </Link>
            </li>
            <li>
              <Link
                href="/#faq"
                className="text-text-secondary hover:text-accent-indigo transition-colors inline-flex items-center gap-2"
              >
                <span>→</span>
                <span>Read FAQs</span>
              </Link>
            </li>
            <li>
              <a
                href="mailto:support@getartigo.com"
                className="text-text-secondary hover:text-accent-indigo transition-colors inline-flex items-center gap-2"
              >
                <Mail size={16} />
                <span>Contact support</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent-indigo transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
