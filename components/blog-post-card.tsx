import Link from "next/link";
import { Post } from "../lib/api";
import DateFormatter from "./date-parser";

export type BlogPostCardProps = {
  post: Post;
};

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const { title, excerpt, date, author, slug } = post;
  return (
    <div className="border text-white border-neutral-700  rounded-xl p-4">
      <h2 className="font-bold text-2xl">{title}</h2>
      <p className=" text-neutral-400">
        {author.name} | {<DateFormatter dateString={date} />}
      </p>
      <p className="my-3">{excerpt}</p>
      <div className="flex justify-end">
        <Link href={`blog/${slug}`} passHref>
          <a className="custom-button bg-blue-600 hover:bg-blue-700">
            Mehr lesen
          </a>
        </Link>
      </div>
    </div>
  );
}
