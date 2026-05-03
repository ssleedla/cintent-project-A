import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you were looking for does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Georgia, serif" }}>
        404
      </h1>
      <p className="text-xl text-gray-700 mb-2">Page Not Found</p>
      <p className="text-gray-500 mb-8">
        The page you were looking for does not exist or may have been moved.
      </p>
      <div className="flex justify-center gap-4">
        <Link href="/" className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700">
          Back to Home
        </Link>
        <Link href="/articles" className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
          Browse Articles
        </Link>
      </div>
    </div>
  );
}
