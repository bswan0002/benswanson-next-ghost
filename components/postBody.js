import unified from "unified";
import parse from "rehype-parse";
import rehype2remark from "rehype-remark";
import stringify from "remark-stringify";
import Markdown from "react-markdown";

export default function PostBody({ post }) {
  const md = unified()
    .use(parse)
    .use(rehype2remark)
    .use(stringify)
    .processSync(post)
    .toString();

  return <Markdown>{md}</Markdown>;
}
