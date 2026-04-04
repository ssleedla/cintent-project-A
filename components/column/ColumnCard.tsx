import Link from "next/link";
import type { Column } from "@/lib/types";
import { getEditorBySlug, getCategoryBySlug } from "@/lib/content";

interface Props {
  column: Column;
  featured?: boolean;
}

export function ColumnCard({ column, featured }: Props) {
  const editor = getEditorBySlug(column.editor);
  const category = getCategoryBySlug(column.category);

  if (featured) {
    return (
      <Link href={`/articles/${column.slug}/`} className="group block">
        <article className="bg-white rounded-xl border border-warm-200 overflow-hidden hover:shadow-lg transition-shadow">
          <div className="p-8 md:p-10">
            {category && (
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-teal-700 mb-3">
                {category.name}
              </span>
            )}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-teal-800 transition-colors leading-tight mb-3" style={{ fontFamily: "Georgia, serif" }}>
              {column.title}
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">{column.excerpt}</p>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              {editor && <span>By {editor.name}, {editor.credentials}</span>}
              <span>&middot;</span>
              <span>{column.readingTime}</span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/articles/${column.slug}/`} className="group block">
      <article className="bg-white rounded-lg border border-warm-200 p-5 hover:shadow-md transition-shadow h-full">
        {category && (
          <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-teal-700 mb-2">
            {category.name}
          </span>
        )}
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-teal-800 transition-colors leading-snug mb-2" style={{ fontFamily: "Georgia, serif" }}>
          {column.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-3 line-clamp-2">{column.excerpt}</p>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          {editor && <span>{editor.name}</span>}
          <span>&middot;</span>
          <span>{column.readingTime}</span>
        </div>
      </article>
    </Link>
  );
}
