import * as React from "react";
import Prism from "prismjs";

export default function SyntaxHighlighter({ data }) {
  function addKeywordTypes() {
    if (typeof Prism === "undefined") {
      return;
    }

    Prism.hooks.add("wrap", function (env) {
      console.log(typeof undefined);
      if (env.type !== "keyword") {
        return;
      }
      env.classes.push("keyword-" + env.content);
    });
  }

  React.useEffect(() => {
    addKeywordTypes();
    Prism.highlightAll();
  }, [data]);
  return null;
}
