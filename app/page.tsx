import { getAllColumns } from "@/lib/content";
import { ColumnCard } from "@/components/column/ColumnCard";

export default function Home() {
  const columns = getAllColumns();
  const featured = columns.find((c) => c.featured) ?? columns[0];
  const latest = columns.filter((c) => c.slug !== featured?.slug);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {featured && (
        <section className="mb-12">
          <ColumnCard column={featured} featured />
        </section>
      )}

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">
          Latest Columns
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((column) => (
            <ColumnCard key={column.slug} column={column} />
          ))}
        </div>
      </section>

      {columns.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg">Coming soon.</p>
          <p className="text-sm mt-2">Our editors are preparing the first columns.</p>
        </div>
      )}
    </div>
  );
}
