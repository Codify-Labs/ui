import React from "react";
import File from "./File";
import Editor from "./Editor";
import { useState } from "react";

function IDE(props) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-1/2 h-full py-2  flex flex-col items-stretch relative bg-white">
      <div>
        <div className="flex flex-nowrap overflow-x-auto py-2 px-2">
          {props.editor.map((file, index) => (
            <File
              lang={file.language}
              active={activeTab === index}
              onClick={() => setActiveTab(index)}
              key={`index_${file.language}`}
            />
          ))}
        </div>
      </div>
      {props.editor.map((file, index) => {
        return (
          <Editor
            language={file.language}
            value={file.value}
            onChange={file.onChange}
            className={`h-full ${activeTab !== index && "hidden"}`}
            lineNumbers={true}
            onRun={props.onRun}
            liveServer={props.liveServer}
            onLiveServerToggle={props.toggleLiveServer}
            key={`${file.language}_${index}`}
          />
        );
      })}
    </div>
  );
}

export default IDE;
