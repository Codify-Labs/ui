import { useEffect, useState } from "react";
import { refractor } from "refractor/lib/common.js";
import { toHtml } from "hast-util-to-html";

export default function Code(props) {
  const [code, setCode] = useState(``);

  useEffect(() => {
    try {
      setCode(
        toHtml(refractor.highlight(props.value, props.language.toLowerCase()))
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="w-full relative group pb-7">
      <pre
        className={`language-${
          props?.language?.toLowerCase() || "css"
        } | relative rounded-[3px]`}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: code,
          }}
        ></div>
      </pre>
    </div>
  );
}
