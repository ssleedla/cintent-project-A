import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCategories, getCategoryBySlug, getColumnsByCategory } from "@/lib/content";
import { ColumnCard } from "@/components/column/ColumnCard";

export function generateStaticParams() {
  return getAllCategories().map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const category = getCategoryBySlug(slug);
    if (!category) return { title: "Not Found" };
    return {
      title: `${category.name} — Health Columns`,
      description: category.description,
    };
  });
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const columns = getColumnsByCategory(slug);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "Georgia, serif" }}>
          {category.name}
        </h1>
        <p className="text-gray-500">{category.description}</p>
      </header>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {columns.map((column) => (
          <ColumnCard key={column.slug} column={column} />
        ))}
      </div>
      {columns.length === 0 && (
        <p className="text-gray-400 text-center py-10">No columns in this category yet.</p>
      )}
    </div>
  );
}
