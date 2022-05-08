import { memo } from "react";
import Editor from "@monaco-editor/react";
import _ from "lodash";
import Safari from "components/IDE/Safari";
import { SandpackClient } from "@codesandbox/sandpack-client";
import { useEffect, useState } from "react";
import cn from "classnames";
import Loading from "components/Loading";

const editorOptions = {
  showOpenInCodeSandbox: false,
  showLoadingScreen: false,
};

const DEPENDENCIES = {
  react: {
    react: "17",
    "react-dom": "17",
  },

  html: {},
};

function IDE(props) {
  const CONFIG = {
    react: {
      files: {
        "/index.html": {
          code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>`,
        },

        "/index.jsx": {
          code: `import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <h1 style={{ color: \`#017AFF\` }}>TryCode IDE</h1>,
  document.getElementById("root")
);`,
          active: true,
        },
      },

      dependencies: DEPENDENCIES[props.config.template || "html"],

      entry: "index.jsx",
    },

    html: {
      files: {
        "/index.html": {
          code: ``,
        },

        "/index.js": {
          code: ``,
          hidden: true,
        },
      },

      dependencies: DEPENDENCIES[props.config.template || "html"],

      entry: "index.js",
    },
  };
  // const executer = useExecuter();

  const [client, setClient] = useState(false);
  const [config, setConfig] = useState(
    _.merge(CONFIG[props.config.template || "html"], props.config)
  );

  const [fileName, setFileName] = useState(
    _.findKey(config.files, ["active", true]) ||
      _.findKey(config.files, (e) => !e.hidden)
  );
  const thecode = config.files[fileName].code;

  const [code, setCode] = useState(thecode);
  const [url, setUrl] = useState("/");

  useEffect(() => {
    setCode(config.files[fileName].code);
  }, [fileName]);

  const tabs = _.compact(
    _.map(config.files, (value, key) => {
      if (!value.hidden) {
        return key;
      }

      return false;
    })
  );

  const iframe = document.querySelector("#codifyuz");

  useEffect(() => {
    if (iframe) {
      setClient(() => {
        const iframe = new SandpackClient("#codifyuz", config, editorOptions);

        return iframe;
      });
    }
  }, [iframe]);

  function restore() {
    setConfig(() =>
      _.merge(CONFIG[props.config.template || "html"], props.config)
    );

    setCode(() => config.files[fileName].code);
  }

  function goBack() {
    if (!client.iframe.current) {
      let domain = new URL(client.iframe.src).hostname;

      client.iframe.src = `https://${domain}` + "/a.html";
    }

    // if(!client.iframe.current) {
    //   client.iframe?.current?.src = "/a.html";
    // }
  }

  function reload() {
    client.dispatch({ type: "refresh" });
  }

  useEffect(() => {
    let editorTimeout;

    if (client) {
      config.files[fileName].code = code;

      editorTimeout = setTimeout(() => {
        client.updatePreview(config);
      }, 350);
    }

    return () => {
      clearTimeout(editorTimeout);
    };
  }, [code]);

  return (
    <>
      <div className="w-1/2 bg-white | order-2">
        <Safari onRefresh={reload} onUrlBack={goBack} />
      </div>

      <div className="w-1/2">
        <div className="h-full w-full | relative | flex flex-col flex-grow">
          <div className="tabs bg-black | flex flex-nowrap | w-full overflow-x-auto duration-100">
            {tabs.map((name) => (
              <div
                className={cn({
                  "tab | bg-gray-primary w-36 flex-none | hover:bg-opacity-75 | fcc | space-x-3 py-3 | cursor-pointer": true,
                  "border-b border-[#03EF62]": fileName === name,
                })}
                onClick={() => setFileName(name)}
              >
                <div className="h-4">
                  <img
                    src={`/langs/${ext(name).toUpperCase()}.svg`}
                    alt="#"
                    className="object-contain h-full"
                  />
                </div>
                <h3
                  className={cn({
                    "text-sm": true,
                    "text-[#9F9F9F]": fileName !== name,
                    "text-[#03EF62]": fileName === name,
                  })}
                >
                  {getfileName(name)}
                </h3>
              </div>
            ))}
          </div>

          <div className="editor h-full">
            <Editor
              height={`100%`}
              defaultLanguage={getLang(fileName)}
              path={fileName}
              theme="codify"
              value={code}
              onChange={onChange}
              options={{
                scrollbar: {
                  verticalScrollbarSize: 7,
                  horizontalScrollbarSize: 7,
                },
                fontSize: 14,
                lineNumbersMinChars: 3,
                padding: {
                  top: 20,
                },
                fontWeight: 400,
                // formatOnPaste: true,
                fontFamily: "JetBrains Mono",
                minimap: {
                  enabled: false,
                },
              }}
              loading={``}
              beforeMount={onMount}
            />
          </div>

          <div className="relative h-16 fc justify-end mr-5">
            <div className="absolute  | fc | space-x-5">
              <button
                className="fcc | border border-white hover:bg-gray-500 | w-10 h-10 | rounded-sm | outline-none focus:outline-none click:scale | duration-100"
                onClick={restore}
              >
                <svg
                  className="h-5"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.1499 7.5001C13.1499 4.6647 10.9401 1.8501 7.4999 1.8501C4.92148 1.8501 3.55327 3.62121 2.90202 4.7502H4.49997C4.91418 4.7502 5.24997 5.08599 5.24997 5.5002C5.24997 5.91442 4.91418 6.2502 4.49997 6.2502H1.49997C1.08576 6.2502 0.749971 5.91442 0.749971 5.5002V2.5002C0.749971 2.08599 1.08576 1.7502 1.49997 1.7502C1.91418 1.7502 2.24997 2.08599 2.24997 2.5002V3.8983C3.05941 2.634 4.6627 0.850098 7.4999 0.850098C11.5627 0.850098 14.1499 4.1855 14.1499 7.5001C14.1499 10.8147 11.5627 14.1501 7.4999 14.1501C5.55606 14.1501 3.93766 13.381 2.78536 12.2085C2.1684 11.5807 1.68655 10.8391 1.35803 10.0408C1.25294 9.78548 1.37475 9.49328 1.63012 9.38818C1.88548 9.28309 2.17769 9.4049 2.28278 9.66026C2.56362 10.3426 2.97483 10.9746 3.49858 11.5076C4.47039 12.4964 5.83484 13.1501 7.4999 13.1501C10.9401 13.1501 13.1499 10.3355 13.1499 7.5001Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button
                className="fc | h-10 px-4 | rounded-sm | click:scale bg-blue-700 text-white | font-bold | outline-none focus:outline-none"
                onClick={runTest}
              >
                Tekshirish
                <svg
                  className="h-4 ml-2"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.49951 12.25V2.75L12.4995 7.5L3.49951 12.25Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  function runTest() {
    props.onTestRun(config.files);
  }

  function onChange(code) {
    setCode(code);
  }
  function getLang(string) {
    const lang = {
      js: "javascript",
      jsx: "javascript",
      tsx: "typescript",
      ts: "typescript",
      sass: "css",
    };
    const langExt = ext(string);

    return lang[langExt] || langExt;
  }

  function ext(string) {
    return string.split(".").pop();
  }

  function getfileName(url) {
    return url.substring(url.lastIndexOf("/") + 1);
  }

  function onMount(monaco) {
    monaco.editor.defineTheme("codify", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "", foreground: "FFFFFF", background: "000000" },
        { token: "invalid", foreground: "f44747" },
        { token: "emphasis", fontStyle: "italic" },
        { token: "strong", fontStyle: "bold" },

        { token: "variable", foreground: "f07178" },
        { token: "variable.parameter", foreground: "9CDCFE" },
        { token: "constant", foreground: "c792ea" },
        { token: "comment", foreground: "48A431" },
        { token: "number", foreground: "fd9170" },
        { token: "regexp", foreground: "f2ff00" },
        { token: "annotation", foreground: "569CD6" },
        { token: "type", foreground: "FF47C1" },
        {
          token: "squiggly-inline-unnecessary",
          foreground: "FF47C1",
          opacity: 1,
        },
        { token: "delimiter", foreground: "FFFF00" },
        { token: "delimiter.html", foreground: "89ddff" },

        { token: "tag", foreground: "f07178" },
        { token: "tag.id.pug", foreground: "4F76AC" },
        { token: "tag.class.pug", foreground: "4F76AC" },
        { token: "meta", foreground: "D4D4D4" },
        { token: "meta.tag", foreground: "CE9178" },
        { token: "metatag", foreground: "#ffcb6b" },
        { token: "metatag.content.html", foreground: "1AEBFF" },
        { token: "metatag.html", foreground: "ffcb6b" },
        { token: "metatag.xml", foreground: "569CD6" },
        { token: "metatag.php", fontStyle: "bold" },

        { token: "key", foreground: "9CDCFE" },
        { token: "string.key", foreground: "9CDCFE" },
        { token: "string.value", foreground: "CE9178" },

        { token: "attribute.name", foreground: "ffcb6b" },
        { token: "attribute.value", foreground: "c3e88d" },

        { token: "string", foreground: "03EF62" },
        { token: "string.sql", foreground: "FF0000" },

        { token: "keyword", foreground: "569CD6" },
        { token: "keyword.flow", foreground: "C586C0" },

        { token: "operator.sql", foreground: "778899" },
        { token: "operator.swift", foreground: "909090" },
        { token: "predefined.sql", foreground: "FF00FF" },
      ],
      colors: {
        "editor.foreground": "#FFFFFF",
        "editor.background": "#05192D",
        "editor.selectionBackground": "#253B76",
        "editor.lineHighlightBackground": "#FFFFFF0F",
        "editorCursor.foreground": "#FFFFFFA6",
        "editorWhitespace.foreground": "#FFFFFF40",
      },
    });
  }
}

export default memo(IDE);
