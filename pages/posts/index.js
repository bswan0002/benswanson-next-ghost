import Layout from "../../components/layout";
import PostPreview from "../../components/postPreview";

export { getStaticProps } from "../index";

export default function Posts({ posts }) {
  const renderPosts = () => {
    return posts.map((post) => <PostPreview key={post.title} post={post} />);
  };
  return (
    <Layout>
      <h1>&#9997;&#65039; Posts</h1>
      {renderPosts()}
    </Layout>
  );
}
