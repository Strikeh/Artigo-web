import type { Metadata } from "next";
import { CheckCircle2, Download, BookOpen, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Payment Successful | Artigo",
  description:
    "Thank you for purchasing Artigo Pro. Check your email for your license key.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full">
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-success/20 rounded-full blur-xl" />
            <CheckCircle2
              className="relative text-success"
              size={80}
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-4">
          🎉 Payment Successful!
        </h1>
        <p className="text-xl text-text-secondary text-center mb-12">
          Thank you for purchasing Artigo Pro
        </p>

        {/* Email Info Box */}
        <div className="glass-strong rounded-2xl p-8 border border-white/40 mb-8">
          <div className="flex items-start gap-4 mb-4">
            <Mail className="text-accent-indigo flex-shrink-0 mt-1" size={24} />
            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-2">
                Check Your Email
              </h2>
              <p className="text-text-secondary">
                Your license key has been sent to your email address.
                <br />
                If you don&#39;t see it within 5 minutes, check your spam
                folder.
              </p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="glass-strong rounded-2xl p-8 border border-white/40 mb-8">
          <h2 className="text-xl font-semibold text-text-primary mb-6">
            Next Steps
          </h2>
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-accent text-white text-sm font-semibold flex items-center justify-center">
                1
              </span>
              <span className="text-text-secondary pt-0.5">
                Download Artigo (if you haven&#39;t already)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-accent text-white text-sm font-semibold flex items-center justify-center">
                2
              </span>
              <span className="text-text-secondary pt-0.5">
                Open the app and go to{" "}
                <strong className="text-text-primary">
                  Settings → License
                </strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-accent text-white text-sm font-semibold flex items-center justify-center">
                3
              </span>
              <span className="text-text-secondary pt-0.5">
                Copy/paste your license key from the email
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-accent text-white text-sm font-semibold flex items-center justify-center">
                4
              </span>
              <span className="text-text-secondary pt-0.5">
                Click &quot;Activate&quot; and start creating!
              </span>
            </li>
          </ol>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button
            href="/download"
            icon={<Download size={18} />}
            className="flex-1"
          >
            Download Artigo
          </Button>
          <Button
            href="/blog"
            variant="secondary"
            icon={<BookOpen size={18} />}
            className="flex-1"
          >
            View Resources
          </Button>
        </div>

        {/* Support Footer */}
        <div className="text-center text-sm text-text-secondary">
          Need help?{" "}
          <a
            href="mailto:support@getartigo.com"
            className="text-accent-indigo hover:text-accent-blue transition-colors"
          >
            Contact support
          </a>
        </div>
      </div>
    </div>
  );
}
