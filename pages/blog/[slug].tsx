import { GetStaticPaths, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import DateFormatter from "../../components/date-parser";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
    "excerpt",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

function BlogPost({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NextSeo title={post.title} description={post.excerpt} />
      <article className="prose lg:prose-lg lg:max-w-[1024px] prose-invert mx-auto px-8 prose-img:rounded-xl mt-4">
        <h1>{post.title}</h1>
        <p className=" text-neutral-400">
          {post.author.name} | {<DateFormatter dateString={post.date} />}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </article>
    </>
  );
}

export default BlogPost;
