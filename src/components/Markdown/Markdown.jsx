import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import directive from "remark-directive";
import components from "./components";
import { visit } from "unist-util-visit";

function Markdown(props) {
  return (
    <ReactMarkdown
      children={props.src}
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[directive, directiveCustom]}
      components={components}
    />
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

export default Markdown;
