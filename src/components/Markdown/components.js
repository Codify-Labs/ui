import Blockquote from "./components/Blockquote";
import Code from "./components/Code";
import Info from "./components/Info";

export default {
  code: (value) => {
    if (!value.inline) {
      return (
        <Code
          language={value.className.replace("language-", "")}
          value={value.children[0]}
        />
      );
    }

    return <code>{`${value.children[0]}`}</code>;
  },
  main: Info,
  blockquote: Blockquote,
};
