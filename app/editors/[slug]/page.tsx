import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllEditors, getEditorBySlug, getColumnsByEditor } from "@/lib/content";
import { ColumnCard } from "@/components/column/ColumnCard";

export function generateStaticParams() {
  return getAllEditors().map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const editor = getEditorBySlug(slug);
    if (!editor) return { title: "Not Found" };
    return {
      title: `${editor.name} — ${editor.title}`,
      description: editor.bio.slice(0, 160),
    };
  });
}

export default async function EditorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const editor = getEditorBySlug(slug);
  if (!editor) notFound();

  const columns = getColumnsByEditor(slug);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex gap-5 mb-8">
        <div className="shrink-0 w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-2xl">
          {editor.name.split(" ").map((n) => n[0]).join("")}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "Georgia, serif" }}>
            {editor.name}, {editor.credentials}
          </h1>
          <p className="text-teal-700 mb-2">{editor.title}</p>
          <p className="text-sm text-gray-500 leading-relaxed">{editor.bio}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {editor.expertise.map((e) => (
              <span key={e} className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded">
                {e}
              </span>
            ))}
          </div>
        </div>
      </div>

      <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
        Columns by {editor.name.split(" ")[0]}
      </h2>
      <div className="grid gap-5 sm:grid-cols-2">
        {columns.map((column) => (
          <ColumnCard key={column.slug} column={column} />
        ))}
      </div>
      {columns.length === 0 && (
        <p className="text-gray-400 text-center py-10">No columns published yet.</p>
      )}
    </div>
  );
}
