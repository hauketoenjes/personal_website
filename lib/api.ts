import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export type Post = {
  title: string;
  date: string;
  slug: string;
  author: {
    name: string;
  };
  content: string;
  excerpt: string;
};

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs(): string[] {
  const postSlugs = fs.readdirSync(postsDirectory);
  return postSlugs
    .filter((fileName) => fileName.endsWith(".md"))
    .filter((fileName) => fileName !== "template.md");
}

export function getPostBySlug(slug: string, fields: string[] = []): Post {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {} as Post;

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
