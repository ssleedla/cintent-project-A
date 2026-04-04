import type { Metadata } from "next";
import Link from "next/link";
import { getAllEditors } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Editors",
  description: "Meet the expert health editors and columnists behind HealthKoLab.",
};

export default function EditorsPage() {
  const editors = getAllEditors();
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "Georgia, serif" }}>
        Our Editors
      </h1>
      <p className="text-gray-500 mb-10">
        Each column is written by a subject-matter expert with verified credentials.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {editors.map((editor) => (
          <Link
            key={editor.slug}
            href={`/editors/${editor.slug}/`}
            className="block bg-white rounded-lg border border-warm-200 p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold">
                {editor.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <h2 className="font-semibold text-gray-800">{editor.name}, {editor.credentials}</h2>
                <p className="text-sm text-teal-700">{editor.title}</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{editor.bio}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
