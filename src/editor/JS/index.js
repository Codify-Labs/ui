import React from "react";
import { useEffect, useState } from "react";

import File from "../../components/IDE/File";
import useToggle from "../../hooks/useToggle";
import Editor from "../../components/IDE/Editor";
import Safari from "../../components/IDE/Safari";

export default function Index() {
  const [activeTab, setActiveTab] = useState(1);
  const [liveServer, toggleLiveServer] = useToggle();

  const [jsCode, setJsCode] = useState(``);
  const [browserCode, setBrowserCode] = useState(``);

  useEffect(() => {
    const timer = setTimeout(() => {
      runBrowser();
    }, 250);

    return () => {
      clearTimeout(timer);
    };
  }, [liveServer, jsCode]);

  return (
    <section className="w-2/3 flex">
      <div className="w-1/2 h-full py-2  flex flex-col items-stretch relative bg-white z-40">
        <div>
          <div className="flex flex-nowrap overflow-x-auto py-2 px-2">
            <File
              lang={`js`}
              active={activeTab === 1}
              onClick={() => setActiveTab(1)}
            />
          </div>
        </div>

        <Editor
          language={`js`}
          value={jsCode}
          onChange={setJsCode}
          className={`h-full ${activeTab === 2 && "hidden"}`}
          lineNumbers={true}
          onRun={runBrowser}
          liveServer={liveServer}
          onLiveServerToggle={toggleLiveServer}
        />
      </div>

      <Safari
        src={browserCode}
        setSrc={setBrowserCode}
        console={true}
        template={`js`}
      />
    </section>
  );

  function runBrowser(force) {
    if (liveServer || force) {
      setBrowserCode(`${jsCode}`);
    }
  }
}
