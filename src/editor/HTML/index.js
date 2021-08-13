import React from "react";
import { useEffect, useState } from "react";

import useToggle from "../../@hooks/useToggle";
import Safari from "../../components/Safari";
import IDE from "../../components/IDE";

export default function Index() {
  const [liveServer, toggleLiveServer] = useToggle();

  const [htmlCode, setHtmlCode] = useState(``);
  const [browserCode, setBrowserCode] = useState(``);

  const editors = [
    {
      ext: "index.html",
      name: "index.html",
      language: "html",
      value: "<h1>Alhamdulillah</h1>",
      onChange: setHtmlCode,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      runBrowser();
    }, 250);

    return () => {
      clearTimeout(timer);
    };
  }, [liveServer, htmlCode]);

  return (
    <section className="w-2/3 flex">
      <IDE
        editor={editors}
        liveServer={liveServer}
        onRun={runBrowser}
        toggleLiveServer={toggleLiveServer}
      />

      <Safari src={browserCode} setSrc={setBrowserCode} template={`html`} />
    </section>
  );

  function runBrowser(force) {
    if (!liveServer && !force) {
      return;
    }
    //
    const passed = new RegExp(
      `console\\.log\\(\\["([^]+)\\"]\\);?`,
      `igm`
    ).test(htmlCode.replace(/\s/g, ""));

    if (passed) {
      // Do something
      // ...
      // ...

      alert("WooHoo!");
    }

    //
    setBrowserCode(`${htmlCode}`);
  }
}
