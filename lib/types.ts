export interface Column {
  slug: string;
  title: string;
  category: string;
  editor: string;
  publishedAt: string;
  updatedAt?: string;
  excerpt: string;
  coverImage?: string;
  tags: string[];
  featured?: boolean;
  sources: Source[];
  calctoolsLink?: CalctoolsLink;
  content: string;
  readingTime: string;
}

export interface Source {
  title: string;
  url: string;
}

export interface CalctoolsLink {
  url: string;
  anchor: string;
}

export interface Editor {
  slug: string;
  name: string;
  title: string;
  credentials: string;
  avatar: string;
  bio: string;
  expertise: string[];
  categories: string[];
}

export interface Category {
  slug: string;
  name: string;
  description: string;
}
