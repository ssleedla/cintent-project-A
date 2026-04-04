import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About HealthKoLab",
  description: "HealthKoLab bridges Western and Korean health research with evidence-based columns from expert editors.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Georgia, serif" }}>
        About HealthKoLab
      </h1>

      <div className="prose max-w-none">
        <p>
          HealthKoLab was founded with a simple mission: to make evidence-based health information
          accessible to everyone. We bridge the gap between Western medical research and
          Asian health standards, offering perspectives that mainstream health media often overlooks.
        </p>

        <h2>Our Approach</h2>
        <p>
          Every column published on HealthKoLab is written by a credentialed health professional
          and fact-checked against primary sources. We cite institutions like the WHO, CDC, NIH,
          and leading Asian health organizations including the Korean Society for the Study of
          Obesity and Japan&apos;s Ministry of Health.
        </p>

        <h2>Why &ldquo;KoLab&rdquo;?</h2>
        <p>
          The name reflects our collaborative approach — &ldquo;Ko&rdquo; for Korea, where many of our
          health standards originate, and &ldquo;Lab&rdquo; for our research-driven methodology. We believe
          health information should be localized, not one-size-fits-all. BMI thresholds,
          dietary guidelines, and risk factors differ significantly across populations.
        </p>

        <h2>Editorial Standards</h2>
        <p>
          We follow strict editorial guidelines. Every claim is backed by peer-reviewed research
          or official health body recommendations. Read our full{" "}
          <Link href="/editorial-guidelines/">Editorial Guidelines</Link> for details.
        </p>

        <h2>Meet Our Team</h2>
        <p>
          Our editors include registered dietitians, certified trainers, clinical psychologists,
          and public health researchers.{" "}
          <Link href="/editors/">View all editors</Link>.
        </p>
      </div>
    </div>
  );
}
