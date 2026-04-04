import type { MetadataRoute } from "next";
import { getAllColumns, getAllCategories, getAllEditors } from "@/lib/content";
import { BASE_URL } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const columns = getAllColumns().map((c) => ({
    url: `${BASE_URL}/articles/${c.slug}/`,
    lastModified: c.updatedAt ? new Date(c.updatedAt) : new Date(c.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const categories = getAllCategories().map((c) => ({
    url: `${BASE_URL}/category/${c.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const editors = getAllEditors().map((e) => ({
    url: `${BASE_URL}/editors/${e.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }));

  return [
    { url: `${BASE_URL}/`, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE_URL}/about/`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/editors/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    ...categories,
    ...columns,
    ...editors,
  ];
}
