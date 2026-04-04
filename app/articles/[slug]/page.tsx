import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllColumns, getColumnBySlug, getEditorBySlug, getCategoryBySlug } from "@/lib/content";
import { SITE_NAME, BASE_URL } from "@/lib/constants";

export function generateStaticParams() {
  return getAllColumns().map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const column = getColumnBySlug(slug);
    if (!column) return { title: "Not Found" };
    return {
      title: column.title,
      description: column.excerpt,
      openGraph: {
        title: column.title,
        description: column.excerpt,
        type: "article",
        publishedTime: column.publishedAt,
        modifiedTime: column.updatedAt,
        url: `${BASE_URL}/articles/${column.slug}/`,
      },
    };
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const column = getColumnBySlug(slug);
  if (!column) notFound();

  const editor = getEditorBySlug(column.editor);
  const category = getCategoryBySlug(column.category);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: column.title,
    description: column.excerpt,
    datePublished: column.publishedAt,
    dateModified: column.updatedAt ?? column.publishedAt,
    author: editor
      ? { "@type": "Person", name: editor.name, jobTitle: editor.title }
      : undefined,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: BASE_URL,
    },
    mainEntityOfPage: `${BASE_URL}/articles/${column.slug}/`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-3xl mx-auto px-4 py-10">
        {/* Category badge */}
        {category && (
          <Link
            href={`/category/${category.slug}/`}
            className="inline-block text-xs font-semibold uppercase tracking-wider text-teal-700 hover:text-teal-900 mb-4"
          >
            {category.name}
          </Link>
        )}

        {/* Title */}
        <h1
          className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {column.title}
        </h1>

        {/* Meta: author + date + reading time */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 mb-2">
          {editor && (
            <span>
              Written by{" "}
              <Link href={`/editors/${editor.slug}/`} className="text-teal-700 hover:underline">
                {editor.name}, {editor.credentials}
              </Link>
            </span>
          )}
          <span>&middot;</span>
          <time dateTime={column.publishedAt}>
            {new Date(column.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>&middot;</span>
          <span>{column.readingTime}</span>
        </div>

        {column.updatedAt && column.updatedAt !== column.publishedAt && (
          <p className="text-xs text-gray-400 mb-6">
            Updated on{" "}
            {new Date(column.updatedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        )}

        {/* Fact-checked badge */}
        <div className="flex items-center gap-2 px-3 py-2 bg-teal-50 border border-teal-200 rounded-lg text-xs text-teal-800 mb-8">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Fact-Checked &middot; Sources cited below</span>
        </div>

        {/* Body */}
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(column.content) }}
        />

        {/* Sources */}
        {column.sources.length > 0 && (
          <section className="mt-10 pt-6 border-t border-warm-200">
            <h2
              className="text-lg font-bold text-gray-800 mb-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Sources & References
            </h2>
            <ol className="space-y-2 text-sm text-gray-500">
              {column.sources.map((source, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-gray-400 shrink-0">[{i + 1}]</span>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-700 hover:underline break-all"
                  >
                    {source.title}
                  </a>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Editor bio */}
        {editor && (
          <section className="mt-10 pt-6 border-t border-warm-200">
            <div className="flex gap-4">
              <div className="shrink-0 w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-lg">
                {editor.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  <Link href={`/editors/${editor.slug}/`} className="hover:text-teal-700">
                    {editor.name}, {editor.credentials}
                  </Link>
                </h3>
                <p className="text-sm text-teal-700 mb-1">{editor.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{editor.bio}</p>
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}

function renderMarkdown(md: string): string {
  return md
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/^> (.+)$/gm, '<blockquote><p>$1</p></blockquote>')
    .replace(/^(?!<[hulo]|<block)(.+)$/gm, '<p>$1</p>')
    .replace(/<p><\/p>/g, '')
    .replace(/\n{2,}/g, '\n');
}
