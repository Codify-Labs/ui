import React from "react";
import { useEffect, useState } from "react";

import useToggle from "../../hooks/useToggle";
import Safari from "../../components/IDE/Safari";
import IDE from "../../components/IDE/IDE";

export default function Index(props) {
  const [liveServer, toggleLiveServer] = useToggle();

  const [htmlCode, setHtmlCode] = useState(``);
  const [cssCode, setCssCode] = useState(``);

  const [browserCode, setBrowserCode] = useState(``);

  const editor = [
    {
      file: "index.html",
      name: "index.html",
      language: "html",
      value: htmlCode,
      onChange: setHtmlCode,
    },
    {
      ext: "style.css",
      name: "script.css",
      language: "css",
      value: cssCode,
      onChange: setCssCode,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      runBrowser();
    }, 250);

    return () => {
      clearTimeout(timer);
    };
  }, [liveServer, htmlCode, cssCode]);

  return (
    <section className="flex" style={{ width: props.width }}>
      <IDE
        editor={editor}
        liveServer={liveServer}
        onRun={runBrowser}
        toggleLiveServer={toggleLiveServer}
      />
      <Safari src={browserCode} setSrc={setBrowserCode} template={`html`} />
    </section>
  );

  function runBrowser(force) {
    if (liveServer || force) {
      setBrowserCode(`${htmlCode}<style>${cssCode}</style>`);
    }
  }
}
