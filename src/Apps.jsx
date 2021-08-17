import React from "react";
import { useEffect, useState } from "react";
import { refractor } from "refractor";
import { toHtml } from "hast-util-to-html";

export default function Code() {
  const [code, setCode] = useState(``);

  useEffect(() => {
    try {
      setCode(
        toHtml(refractor.highlight("<h1>Assalamu Alaykum!</h1>", "html"))
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="w-full relative group mb-7">
      <pre className="language-css text-xl | relative">
        <div
          dangerouslySetInnerHTML={{
            __html: code,
          }}
        />
      </pre>
    </div>
  );
}
