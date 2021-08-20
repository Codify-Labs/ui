import Code from "../Article/Code";
import Info from "../Article/Info";

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
};
