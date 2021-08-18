import Code from "./Code";
import Info from "./Info";

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
