import * as React from "react";
import Prism from "prismjs";

export default function SyntaxHighlighter({ data }) {
  function addKeywordTypes() {
    if (typeof Prism === "undefined") {
      return null;
    }

    Prism.hooks.add("wrap", function (env) {
      if (env.type == "keyword") {
        env.classes.push("keyword-" + env.content);
      }
      if (env.type == "operator") {
        env.classes.push("operator-" + env.content);
      }
      return null;
    });
  }

  React.useEffect(() => {
    addKeywordTypes();
    Prism.highlightAll();
  }, [data]);
  return null;
}
