import Layout from "../components/layout";
import PostPreview from "../components/postPreview";

export { getStaticProps } from "./index";

export default function Posts({ posts }) {
  const renderPosts = () => {
    return posts.map((post) => <PostPreview key={post.title} post={post} />);
  };
  return (
    <Layout>
      <div className="px-2 mt-8 md:px-0">
        <h1>&#9997;&#65039; Posts</h1>
        <h2 className="mt-8">this is an h2</h2>
        {renderPosts()}
      </div>
    </Layout>
  );
}
