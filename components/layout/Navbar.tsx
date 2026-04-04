import Link from "next/link";

const NAV_ITEMS = [
  { label: "Nutrition", href: "/category/nutrition/" },
  { label: "Fitness", href: "/category/fitness/" },
  { label: "Mental Health", href: "/category/mental-health/" },
  { label: "Preventive Care", href: "/category/preventive-care/" },
  { label: "About", href: "/about/" },
];

export function Navbar() {
  return (
    <header className="border-b border-warm-200 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-teal-800" style={{ fontFamily: "Georgia, serif" }}>
              HealthKoLab
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-600 hover:text-teal-700 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
