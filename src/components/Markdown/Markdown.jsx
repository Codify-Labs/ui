import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import directive from "remark-directive";
import components from "./components";
import { visit } from "unist-util-visit";
import gfmRemark from "remark-gfm";

function Markdown(props) {
  return (
    <ReactMarkdown
      children={props.src}
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[directive, directiveCustom, gfmRemark]}
      components={components}
      className="scroll-white"
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
