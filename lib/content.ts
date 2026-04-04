import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { Column, Editor, Category } from "./types";

const COLUMNS_DIR = path.join(process.cwd(), "content/columns");

export function getAllColumns(): Column[] {
  if (!fs.existsSync(COLUMNS_DIR)) return [];
  const files = fs.readdirSync(COLUMNS_DIR).filter((f) => f.endsWith(".md"));
  const columns = files
    .map((file) => getColumnBySlug(file.replace(".md", "")))
    .filter((c): c is Column => c !== null);
  columns.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  return columns;
}

export function getColumnBySlug(slug: string): Column | null {
  const filePath = path.join(COLUMNS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);
  return {
    slug,
    title: data.title,
    category: data.category,
    editor: data.editor,
    publishedAt: data.publishedAt,
    updatedAt: data.updatedAt,
    excerpt: data.excerpt,
    coverImage: data.coverImage,
    tags: data.tags ?? [],
    featured: data.featured ?? false,
    sources: data.sources ?? [],
    calctoolsLink: data.calctoolsLink,
    content,
    readingTime: stats.text,
  };
}

export function getColumnsByCategory(category: string): Column[] {
  return getAllColumns().filter((c) => c.category === category);
}

export function getColumnsByEditor(editorSlug: string): Column[] {
  return getAllColumns().filter((c) => c.editor === editorSlug);
}

export function getAllEditors(): Editor[] {
  const filePath = path.join(process.cwd(), "content/editors.json");
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export function getEditorBySlug(slug: string): Editor | null {
  return getAllEditors().find((e) => e.slug === slug) ?? null;
}

export function getAllCategories(): Category[] {
  const filePath = path.join(process.cwd(), "content/categories.json");
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export function getCategoryBySlug(slug: string): Category | null {
  return getAllCategories().find((c) => c.slug === slug) ?? null;
}
