import { memo, useState } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import directive from "remark-directive";
import { visit } from "unist-util-visit";
import components from "./Article/components";

function Article(props) {
  const [markdown] = useState(`### Paragraflar yaratish`);

  return (
    <div
      className="h-full overflow-auto px-2"
      id="article"
      style={{ width: props.width }}
    >
      <article className="px-3">
        <h1 className="py-7">HTML - Sarlavhalar</h1>
        <Markdown
          children={markdown}
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[directive, directiveCustom]}
          components={components}
        />
      </article>
    </div>
  );

  function directiveCustom() {
    return (tree) => {
      visit(
        tree,
        ["textDirective", "leafDirective", "containerDirective"],
        (node) => {
          node.data = {
            hName: node.name,
            hProperties: node.attributes,
            ...node.data,
          };
          return node;
        }
      );
    };
  }
}

export default memo(Article);
