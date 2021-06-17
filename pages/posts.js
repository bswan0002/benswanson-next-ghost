import Layout from "../components/layout";

export { getStaticProps } from "./index";

export default function Posts({ posts }) {
  return (
    <Layout>
      <div>posts</div>
    </Layout>
  );
}
