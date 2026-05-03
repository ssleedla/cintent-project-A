import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Guidelines",
  description: "How HealthKoLab sources, reviews, and publishes evidence-based health content.",
};

export default function EditorialGuidelinesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Georgia, serif" }}>
        Editorial Guidelines
      </h1>

      <div className="prose max-w-none">
        <p className="text-sm text-gray-500 mb-6">Last reviewed: April 2026</p>

        <p>
          HealthKoLab publishes evidence-based health content. The following guidelines describe
          how we select topics, source claims, and review articles before publication.
        </p>

        <h2>Source Hierarchy</h2>
        <p>
          We prioritize sources in approximately this order:
        </p>
        <ol>
          <li>Systematic reviews and meta-analyses in peer-reviewed journals</li>
          <li>Randomized controlled trials</li>
          <li>Position statements from professional bodies (WHO, CDC, NIH, ACSM, ADA, etc.)</li>
          <li>Large prospective cohort studies</li>
          <li>Mechanistic research from primary literature</li>
        </ol>
        <p>
          We avoid relying on case reports, animal studies in isolation, and opinion pieces unless
          we explicitly frame them as preliminary or hypothetical.
        </p>

        <h2>Citations</h2>
        <p>
          Every claim of fact is linked to a primary source. Citations are listed at the bottom of
          each article and link to PubMed, journal websites, or authoritative organizations. We
          aim for at least three independent sources per article and routinely use more.
        </p>

        <h2>Author Verification</h2>
        <p>
          All editors hold relevant credentials in their content area: medical degrees, doctorates
          in health sciences, certified clinical practice, or equivalent professional experience.
          Editor profiles list their credentials and areas of expertise.
        </p>

        <h2>Review Process</h2>
        <p>
          Each article is reviewed before publication for:
        </p>
        <ul>
          <li>Accuracy of factual claims against cited sources</li>
          <li>Currency of cited research (preferring sources within the last 10 years for evolving topics)</li>
          <li>Appropriate caveats around uncertain or contested findings</li>
          <li>Clarity and absence of medical advice framing (we present evidence, not prescriptions)</li>
        </ul>

        <h2>Updates and Corrections</h2>
        <p>
          When new research substantially changes the conclusions of a published article, we
          update the article and add an &ldquo;Updated&rdquo; timestamp. Significant factual corrections are
          noted in the article body. We do not silently rewrite history.
        </p>

        <h2>What We Do Not Publish</h2>
        <ul>
          <li>Sponsored content disguised as editorial</li>
          <li>Affiliate-driven product recommendations</li>
          <li>Personal medical advice for individual readers</li>
          <li>Claims that depend on a single small or unreplicated study</li>
        </ul>

        <h2>Independence</h2>
        <p>
          HealthKoLab is editorially independent. We do not accept payment for coverage, and our
          recommendations are not influenced by supplement companies, device manufacturers, or
          clinical organizations.
        </p>

        <h2>Reader Feedback</h2>
        <p>
          If you spot an error, have a citation we missed, or want to suggest a topic, please
          reach out through the contact information on our <a href="/about/">About page</a>.
        </p>
      </div>
    </div>
  );
}
