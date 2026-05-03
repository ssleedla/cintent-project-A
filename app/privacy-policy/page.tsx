import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How HealthKoLab handles your data and visitor information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Georgia, serif" }}>
        Privacy Policy
      </h1>

      <div className="prose max-w-none">
        <p className="text-sm text-gray-500 mb-6">Last updated: April 2026</p>

        <h2>Information We Collect</h2>
        <p>
          HealthKoLab is a content publication. We do not require account creation to read articles.
          When you visit the site, our hosting provider (Vercel) automatically collects standard
          server logs including IP address, browser type, and pages requested. These logs are used
          for security monitoring and aggregate traffic analysis only.
        </p>

        <h2>Analytics</h2>
        <p>
          We use privacy-respecting aggregate analytics to understand which articles readers find
          useful. We do not use third-party advertising trackers or sell data to brokers.
          We do not build individual user profiles.
        </p>

        <h2>Cookies</h2>
        <p>
          The site uses minimal functional cookies to remember display preferences (such as theme
          and font size). We do not use advertising or tracking cookies. You can disable cookies
          through your browser settings without affecting the readability of the content.
        </p>

        <h2>Newsletter and Contact</h2>
        <p>
          If you contact us by email, we use the address solely to respond to your message. We do
          not currently operate a newsletter; any future newsletter would require explicit opt-in
          and provide one-click unsubscribe.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          Articles cite external sources from PubMed, NIH, CDC, WHO, and academic journals. When
          you click a citation link, you leave our site. We do not control or take responsibility
          for the privacy practices of those external sites.
        </p>

        <h2>Children</h2>
        <p>
          HealthKoLab content is intended for general adult audiences. We do not knowingly collect
          information from individuals under 13.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this policy as our practices evolve. The &ldquo;Last updated&rdquo; date at the top
          reflects the most recent revision.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy can be sent through the contact information on our
          <a href="/about/"> About page</a>.
        </p>
      </div>
    </div>
  );
}
