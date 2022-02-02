import Editor from "@monaco-editor/react";

const someCode = `import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <h1>
            Awesome ReactJs!
        </h1>
    )
}

ReactDOM.render(<App />, document.querySelector("#app"));
`;

export default function IDE(props) {
  return (
    <>
      <div className="h-full w-full | relative | flex flex-col flex-grow">
        <div className="tabs bg-black | flex flex-nowrap | w-full overflow-x-auto ">
          <div className="tab | bg-gray-primary w-40 flex-none | border-b border-[#03EF62] hover:bg-opacity-75 duration-100 | fcc | space-x-3 py-3.5 | cursor-pointer">
            <div className="icon">
              <svg
                className="h-5"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.00130459 0.45518L0.892142 11.8719C0.905515 12.0433 1.02136 12.1895 1.185 12.2415L5.8726 13.7303C5.9555 13.7566 6.0445 13.7566 6.12739 13.7303L10.815 12.2415C10.9786 12.1895 11.0945 12.0433 11.1079 11.8719L11.9987 0.45518C12.0178 0.209727 11.8242 0 11.5785 0H0.421573C0.175824 0 -0.0178229 0.209727 0.00130459 0.45518ZM9.7142 3.99739H3.90844L4.08366 5.61595H9.58793L9.22786 10.2302L6.00001 11.2554L2.77217 10.2302L2.58406 7.81955H4.27828V9.00202L6.04529 9.47709L7.80173 9.00202L7.938 7.11749H2.52927L2.17018 2.5153H9.82982L9.7142 3.99739Z"
                  fill="#03EF62"
                />
              </svg>
            </div>
            <h3 className="text-[#03EF62]">index.html</h3>
          </div>

          <div className="tab | bg-gray-primary w-40 flex-none | hover:bg-opacity-75 duration-100 | fcc | space-x-3 py-3.5 | cursor-pointer">
            <div className="icon">
              <svg
                className="h-5"
                viewBox="0 0 13 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0L1.18393 13.3714L6.5 14.8571L11.8142 13.3724L13 0H0Z"
                  fill="#9F9F9F"
                />
                <path
                  d="M5.619 8.53C5.619 9.03867 5.48133 9.42833 5.206 9.699C4.93067 9.965 4.55267 10.098 4.072 10.098C3.82467 10.098 3.60067 10.0653 3.4 10C3.19933 9.93 3.02667 9.82967 2.882 9.699C2.73733 9.56367 2.62533 9.40033 2.546 9.209C2.46667 9.013 2.427 8.78667 2.427 8.53V8.068H3.351V8.53C3.351 8.74933 3.41167 8.922 3.533 9.048C3.65433 9.16933 3.82467 9.23 4.044 9.23C4.24933 9.23 4.408 9.16933 4.52 9.048C4.63667 8.92667 4.695 8.754 4.695 8.53V5.968H4.191V5.1H6.039V5.968H5.619V8.53ZM9.26813 6.598C9.26813 6.402 9.19113 6.23167 9.03713 6.087C8.8878 5.94233 8.67547 5.87 8.40013 5.87C8.1668 5.87 7.98247 5.919 7.84713 6.017C7.7118 6.11033 7.64413 6.23867 7.64413 6.402C7.64413 6.486 7.66047 6.563 7.69313 6.633C7.7258 6.69833 7.7818 6.759 7.86113 6.815C7.94513 6.86633 8.05247 6.913 8.18313 6.955C8.31847 6.997 8.4888 7.03667 8.69413 7.074C9.20747 7.16733 9.59947 7.32367 9.87013 7.543C10.1408 7.76233 10.2761 8.08667 10.2761 8.516V8.6C10.2761 8.82867 10.2341 9.03633 10.1501 9.223C10.0708 9.405 9.95413 9.56133 9.80013 9.692C9.64613 9.82267 9.45947 9.923 9.24013 9.993C9.0208 10.063 8.77347 10.098 8.49813 10.098C8.17613 10.098 7.89147 10.0537 7.64413 9.965C7.40147 9.87167 7.19847 9.74567 7.03513 9.587C6.8718 9.42367 6.74813 9.23467 6.66413 9.02C6.58013 8.80067 6.53813 8.56267 6.53813 8.306V8.096H7.46213V8.264C7.46213 8.558 7.54613 8.79367 7.71413 8.971C7.8868 9.14367 8.1528 9.23 8.51213 9.23C8.79213 9.23 8.9998 9.16933 9.13513 9.048C9.27047 8.92667 9.33813 8.782 9.33813 8.614C9.33813 8.53467 9.32413 8.46 9.29613 8.39C9.26813 8.31533 9.21913 8.25 9.14913 8.194C9.07913 8.13333 8.98347 8.07967 8.86213 8.033C8.7408 7.98633 8.5868 7.94667 8.40013 7.914C8.1528 7.872 7.92647 7.81833 7.72113 7.753C7.5158 7.683 7.33613 7.592 7.18213 7.48C7.0328 7.368 6.91613 7.228 6.83213 7.06C6.74813 6.892 6.70613 6.68667 6.70613 6.444V6.402C6.70613 6.20133 6.7458 6.017 6.82513 5.849C6.90913 5.67633 7.02347 5.527 7.16813 5.401C7.31747 5.275 7.4948 5.177 7.70013 5.107C7.91013 5.037 8.14347 5.002 8.40013 5.002C8.68947 5.002 8.94613 5.044 9.17013 5.128C9.39413 5.20733 9.5808 5.317 9.73013 5.457C9.88413 5.597 9.99847 5.758 10.0731 5.94C10.1525 6.122 10.1921 6.31333 10.1921 6.514V6.766H9.26813V6.598Z"
                  fill="#060A2E"
                />
              </svg>
            </div>
            <h3 className="text-[#9F9F9F]">App.js</h3>
          </div>
        </div>

        <div className="editor h-full">
          <Editor
            height={`100%`}
            defaultLanguage="javascript"
            theme="codify"
            options={{
              fontSize: 14,
              lineNumbersMinChars: 4,
              padding: {
                top: 20,
              },
              fontWeight: 500,
              formatOnPaste: true,
              formatOnType: true,
              fontFamily: "JetBrains Mono",
              minimap: {
                enabled: false,
              },
            }}
            defaultValue={someCode}
            beforeMount={onMount}
          />
        </div>

        <div className="relative h-16 fc justify-end mr-5">
          <div className="absolute  | fc | space-x-5">
            <button className="fcc | border border-white hover:bg-gray-500 | w-10 h-10 | rounded-sm | outline-none focus:outline-none click:scale | duration-100">
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
            <button className="fc | h-10 px-4 | rounded-sm | click:scale bg-blue-700 text-white | font-bold | outline-none focus:outline-none">
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
    </>
  );

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
        { token: "delimiter.html", foreground: "FFFF00" },

        { token: "tag", foreground: "569CD6" },
        { token: "tag.id.pug", foreground: "4F76AC" },
        { token: "tag.class.pug", foreground: "4F76AC" },
        { token: "meta", foreground: "D4D4D4" },
        { token: "meta.tag", foreground: "CE9178" },
        { token: "metatag", foreground: "569CD6" },
        { token: "metatag.content.html", foreground: "1AEBFF" },
        { token: "metatag.html", foreground: "569CD6" },
        { token: "metatag.xml", foreground: "569CD6" },
        { token: "metatag.php", fontStyle: "bold" },

        { token: "key", foreground: "9CDCFE" },
        { token: "string.key", foreground: "9CDCFE" },
        { token: "string.value", foreground: "CE9178" },

        { token: "attribute.name", foreground: "569CD6" },
        { token: "attribute.value", foreground: "3FF23F" },

        { token: "string", foreground: "c3e88d" },
        { token: "string.sql", foreground: "FF0000" },

        { token: "keyword", foreground: "569CD6" },
        { token: "keyword.flow", foreground: "C586C0" },

        { token: "operator.sql", foreground: "778899" },
        { token: "operator.swift", foreground: "909090" },
        { token: "predefined.sql", foreground: "FF00FF" },
      ],
      colors: {
        "editor.foreground": "#05192D",
        "editor.background": "#05192D",
        "editor.selectionBackground": "#253B76",
        "editor.lineHighlightBackground": "#FFFFFF0F",
        "editorCursor.foreground": "#FFFFFFA6",
        "editorWhitespace.foreground": "#FFFFFF40",
      },
    });
  }
}
