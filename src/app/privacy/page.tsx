import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedBlobs } from "@/components/layout/AnimatedBlobs";

export const metadata: Metadata = {
  title: "Privacy Policy — Artigo",
  description:
    "Learn how Artigo collects, uses, and protects your personal data.",
  robots: { index: true, follow: true },
};

const lastUpdated = "February 18, 2026";

const sections = [
  {
    id: "overview",
    title: "1. Overview",
    content: `Artigo ("we", "our", or "us") is a desktop software application for Windows developed by an independent creator. This Privacy Policy explains what information we collect, why we collect it, and how we use it when you visit our website (getartigo.com) or use our software.

We take your privacy seriously. Artigo is designed to run locally on your machine — your artwork files are never uploaded to our servers.`,
  },
  {
    id: "data-collected",
    title: "2. Information We Collect",
    subsections: [
      {
        title: "2.1 Website Visitors",
        content: `When you visit getartigo.com, we collect limited anonymous analytics data via Vercel Analytics, including:

• Pages visited and time on page
• Country/region (derived from IP, not stored)
• Browser type and operating system
• Referral source

We do not use cookies for tracking. No personally identifiable information is collected unless you voluntarily provide it (e.g., by contacting us via email).`,
      },
      {
        title: "2.2 Purchases",
        content: `If you purchase a licence, your payment is processed by Stripe. We receive only:

• Your email address (to deliver your licence key)
• Transaction confirmation and amount

We never see or store your payment card details. These are handled exclusively by Stripe under their own Privacy Policy (stripe.com/privacy).`,
      },
      {
        title: "2.3 The Artigo Application",
        content: `The Artigo desktop application processes all files locally on your device. We do not:

• Upload your artwork, images, or any file content to our servers
• Store your folder paths or file names remotely
• Track your usage within the application

An internet connection may be used solely to verify your licence key at launch.`,
      },
    ],
  },
  {
    id: "use-of-data",
    title: "3. How We Use Your Information",
    content: `We use the information we collect to:

• Deliver and activate your purchased licence
• Respond to support requests
• Improve website performance and content
• Monitor for abuse or fraudulent transactions (via Stripe)

We do not sell, rent, or share your personal information with third parties for marketing purposes.`,
  },
  {
    id: "data-retention",
    title: "4. Data Retention",
    content: `Email addresses collected through purchases are retained for as long as your licence is active and for a reasonable period thereafter to handle support queries. You may request deletion at any time by contacting us.

Anonymous analytics data is retained in aggregated form by Vercel and subject to their retention policy.`,
  },
  {
    id: "third-parties",
    title: "5. Third-Party Services",
    content: `We use the following third-party services:

• Vercel — Website hosting and anonymous analytics (vercel.com/legal/privacy-policy)
• Stripe — Payment processing (stripe.com/privacy)
• GitHub — Software distribution via GitHub Releases (docs.github.com/en/site-policy/privacy-policies)

Each of these services has its own privacy policy governing their data handling.`,
  },
  {
    id: "your-rights",
    title: "6. Your Rights",
    content: `Depending on your location, you may have the right to:

• Access the personal data we hold about you
• Request correction or deletion of your data
• Object to or restrict processing of your data
• Withdraw consent where processing is based on consent

To exercise any of these rights, please contact us at privacy@getartigo.com. We will respond within 30 days.`,
  },
  {
    id: "security",
    title: "7. Security",
    content: `We take appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or disclosure. Payments are secured by Stripe's PCI-DSS compliant infrastructure.

However, no method of transmission over the internet is 100% secure. We encourage you to contact us immediately if you suspect any unauthorised use of your data.`,
  },
  {
    id: "children",
    title: "8. Children's Privacy",
    content: `Artigo is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us and we will delete it promptly.`,
  },
  {
    id: "changes",
    title: "9. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. We encourage you to review this policy periodically. Continued use of our website or software after changes are posted constitutes your acceptance of the updated policy.`,
  },
  {
    id: "contact",
    title: "10. Contact Us",
    content: `If you have any questions or concerns about this Privacy Policy or how we handle your data, please reach out:

Email: privacy@getartigo.com
Website: getartigo.com`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="relative section-padding pb-12 overflow-hidden">
        <AnimatedBlobs variant="hero" />
        <div className="max-container relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100/80 text-indigo-600 text-xs font-semibold uppercase tracking-wider mb-6">
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-4 text-text-secondary text-lg">
              Last updated: {lastUpdated}
            </p>
            <p className="mt-4 text-text-secondary max-w-xl leading-relaxed">
              Your privacy matters. This policy explains how we handle your data
              — short version: your files never leave your device.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding pt-0">
        <div className="max-container">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 items-start">
            {/* Sticky TOC */}
            <nav className="hidden lg:block sticky top-28 glass-strong rounded-2xl p-5 border border-white/40">
              <p className="text-xs font-semibold uppercase tracking-wider text-text-tertiary mb-4">
                Contents
              </p>
              <ul className="space-y-2">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-sm text-text-secondary hover:text-indigo-600 transition-colors block py-0.5"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Sections */}
            <div className="space-y-8 max-w-3xl">
              {sections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="glass-strong rounded-2xl p-7 border border-white/40 scroll-mt-28"
                >
                  <h2 className="text-xl font-bold text-text-primary mb-4">
                    {section.title}
                  </h2>

                  {section.subsections ? (
                    <div className="space-y-6">
                      {section.subsections.map((sub) => (
                        <div key={sub.title}>
                          <h3 className="text-base font-semibold text-text-primary mb-2">
                            {sub.title}
                          </h3>
                          <p className="text-text-secondary text-sm leading-relaxed whitespace-pre-line">
                            {sub.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-text-secondary text-sm leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  )}
                </div>
              ))}

              {/* Footer note */}
              <p className="text-xs text-text-tertiary text-center pb-8">
                Questions?{" "}
                <a
                  href="mailto:privacy@getartigo.com"
                  className="text-indigo-500 hover:underline"
                >
                  privacy@getartigo.com
                </a>{" "}
                ·{" "}
                <Link href="/" className="text-indigo-500 hover:underline">
                  Back to home
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
