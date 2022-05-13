import { InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import BlogPostCard from "../../components/blog-post-card";
import { getAllPosts } from "../../lib/api";

export const getStaticProps = async ({ params }) => {
  const posts = await getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: {
      posts: posts,
    },
  };
};

function BlogPosts({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NextSeo title="Blog"></NextSeo>
      <main className="prose lg:prose-lg lg:max-w-[1024px] prose-invert mx-auto px-8 mt-4">
        <h1>Blog</h1>
        <div className="not-prose space-y-8 flex flex-col">
          {posts.length > 0 ? (
            posts.map((post, index) => <BlogPostCard key={index} post={post} />)
          ) : (
            <h2>Keine Blog Posts</h2>
          )}
        </div>
      </main>
    </>
  );
}

export default BlogPosts;
