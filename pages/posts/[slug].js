import Layout from "../../components/layout";
import { getPostBySlug } from "../../lib/api";
import { useRouter } from "next/router";
import PostBody from "../../components/postBody";
import SyntaxHighlighter from "../../components/syntaxHighlighter";

export const getStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params.slug);
  return { props: { post }, revalidate: 60 * 60 * 12 };
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout>
        <h1>Loading...</h1>
      </Layout>
    );
  }

  if (post.isFound === false) {
    return (
      <Layout>
        <h1>Post Not Found</h1>
      </Layout>
    );
  }

  const myFunc = () => {
    console.log("does this work?");
    return null;
  };

  return (
    <Layout>
      <SyntaxHighlighter data={post} />
      <h1 className="mb-2">{post.title}</h1>
      {/* <PostBody post={post.html} /> */}
      <div
        dangerouslySetInnerHTML={{ __html: post.html }}
        className="space-y-4"
      />
    </Layout>
  );
}
