import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-warm-200 bg-white mt-16">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-teal-800 mb-3" style={{ fontFamily: "Georgia, serif" }}>
              HealthKoLab
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Evidence-based health insights bridging Western and Korean health research.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/category/nutrition/" className="hover:text-teal-700">Nutrition & Diet</Link></li>
              <li><Link href="/category/fitness/" className="hover:text-teal-700">Fitness & Exercise</Link></li>
              <li><Link href="/category/mental-health/" className="hover:text-teal-700">Mental Health</Link></li>
              <li><Link href="/category/preventive-care/" className="hover:text-teal-700">Preventive Care</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/about/" className="hover:text-teal-700">About Us</Link></li>
              <li><Link href="/editors/" className="hover:text-teal-700">Our Editors</Link></li>
              <li><Link href="/editorial-guidelines/" className="hover:text-teal-700">Editorial Guidelines</Link></li>
              <li><Link href="/privacy-policy/" className="hover:text-teal-700">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-warm-200 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} HealthKoLab. All rights reserved. Content is for informational purposes only and not medical advice.
        </div>
      </div>
    </footer>
  );
}
