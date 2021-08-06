import React from "react";
import { lazy, useEffect, useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ReactCodeJar } from "react-codejar";
import TabFile from "../../components/TabFile";
import Toggle from "../../components/Toggle";
import useToggle from "../../@hooks/useToggle";
import { refractor } from "refractor";
import cn from "classnames";
import { toHtml } from "hast-util-to-html";

export default function Index() {
  const [activeTab, setActiveTab] = useState(1);
  const [liveServer, toggleLiveServer] = useToggle();
  const [htmlCopied, setHtmlCopied] = useState(false);
  const [cssCopied, setCssCopied] = useState(false);
  console.log(liveServer);
  const [browserCode, setBrowserCode] = useState(``);
  const [htmlCode, setHtmlCode] = useState(``);
  const [cssCode, setCssCode] = useState(``);

  useEffect(() => {
    const timer = setTimeout(() => {
      runBrowser();
    }, 250);

    return () => {
      clearTimeout(timer);
    };
  }, [liveServer, htmlCode, cssCode]);

  return (
    <section className="w-2/3 flex">
      <div className="w-1/2 h-full py-2  flex flex-col items-stretch relative bg-white">
        <div>
          <div className="flex flex-nowrap overflow-x-auto py-2 px-2">
            <TabFile
              language={`html`}
              file={`index.html`}
              active={activeTab === 1}
              onClick={() => setActiveTab(1)}
            />
            <TabFile
              language={`css`}
              file={`style.css`}
              active={activeTab === 2}
              onClick={() => setActiveTab(2)}
            />
          </div>
        </div>
        {/*  */}

        <div
          className={cn({
            hidden: activeTab === 2,
          })}
        >
          <div className="h-full overflow-auto">
            <pre className={`language-html CODY-EDITOR`}>
              <ReactCodeJar
                code={htmlCode}
                onUpdate={setHtmlCode}
                highlight={(editor) => {
                  console.log(editor);
                  const root = refractor.highlight(editor.textContent, "html");
                  console.log(toHtml(root));
                  editor.innerHTML = toHtml(root);
                }}
                lineNumbers={true}
                className="h-full"
              />
            </pre>
          </div>

          <div className="bg-white w-full py-2 px-2 flex items-center justify-between">
            <div className="flex">
              <Toggle status={liveServer} onChange={toggleLiveServer} />

              <svg
                className={cn({ "w-5 mx-8": true, hidden: !htmlCopied })}
                viewBox="0 0 11 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 3.99958L4.00084 6.99916L10 1"
                  stroke="#73CE49"
                  stroke-width="1.89607"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <CopyToClipboard text={htmlCode} onCopy={() => onCopy(`html`)}>
                <svg
                  className={cn("w-5 mx-8 cursor-pointer", {
                    hidden: htmlCopied,
                  })}
                  viewBox="0 0 17 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.784 18.5454H2.12504C0.952797 18.5454 0 17.5926 0 16.4204V5.98855C0 4.8163 0.952797 3.86365 2.12504 3.86365H2.51131C2.83122 3.86365 3.09086 4.12328 3.09086 4.44319C3.09086 4.7631 2.83122 5.02274 2.51131 5.02274H2.12504C1.59262 5.02274 1.15909 5.45612 1.15909 5.98855V16.4204C1.15909 16.9528 1.59262 17.3863 2.12504 17.3863H11.784C12.3165 17.3863 12.75 16.9528 12.75 16.4204V16.0341C12.75 15.7142 13.0096 15.4545 13.3295 15.4545C13.6494 15.4545 13.9091 15.7142 13.9091 16.0341V16.4204C13.9091 17.5926 12.9563 18.5454 11.784 18.5454Z"
                    fill="#5F5F5F"
                  />
                  <path
                    d="M14.8751 13.909H6.76146C5.58921 13.909 4.63641 12.9562 4.63641 11.784V2.12501C4.63641 0.952766 5.58921 -3.05176e-05 6.76146 -3.05176e-05H14.8751C16.0473 -3.05176e-05 17 0.952766 17 2.12501V11.784C17 12.9562 16.0473 13.909 14.8751 13.909ZM6.76146 1.15906C6.22903 1.15906 5.7955 1.59259 5.7955 2.12501V11.784C5.7955 12.3164 6.22903 12.75 6.76146 12.75H14.8751C15.4075 12.75 15.8409 12.3164 15.8409 11.784V2.12501C15.8409 1.59259 15.4075 1.15906 14.8751 1.15906H6.76146Z"
                    fill="#5F5F5F"
                  />
                </svg>
              </CopyToClipboard>

              <svg
                className="w-5 cursor-pointer"
                onClick={() => setHtmlCode(``)}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.9245 1.45966C10.2505 1.45966 11.5786 1.83605 12.7653 2.54823C13.5179 3.00108 14.1942 3.57022 14.7688 4.2348L12.7864 4.16941C12.5536 4.16163 12.3586 4.34423 12.3509 4.57718C12.3433 4.81 12.5257 5.00512 12.7587 5.01263L15.5015 5.10321C15.6591 5.16807 15.8402 5.13181 15.9607 5.01118C16.0811 4.89055 16.1171 4.70941 16.0519 4.55187L15.9616 1.80968C15.9564 1.57673 15.7632 1.39216 15.5303 1.3973C15.2975 1.40257 15.1126 1.59571 15.1179 1.82853C15.1179 1.8317 15.1179 1.8346 15.1182 1.83763L15.1704 3.41966C14.59 2.7995 13.9268 2.26254 13.1994 1.82445C11.8817 1.03383 10.4034 0.615906 8.9245 0.615906C6.562 0.615906 4.38381 1.59004 2.79202 3.35875C1.38191 4.92562 0.540001 7.0346 0.540001 9.00041C0.540001 9.23336 0.72879 9.42228 0.961876 9.42228C1.19496 9.42228 1.38375 9.23336 1.38375 9.00041C1.38375 7.23737 2.14458 5.33932 3.41917 3.92327C4.84906 2.33478 6.80405 1.45966 8.9245 1.45966Z"
                  fill="#5F5F5F"
                />
                <path
                  d="M16.9931 8.57855C16.76 8.57855 16.5713 8.76734 16.5713 9.00043C16.5713 10.7633 15.8104 12.6615 14.5358 14.0777C13.1059 15.6662 11.1509 16.541 9.0305 16.541C7.70449 16.541 6.37638 16.1649 5.18972 15.4527C4.43707 14.9998 3.76075 14.4306 3.18621 13.7662L5.16863 13.8316C5.40145 13.8391 5.59644 13.6565 5.60408 13.4237C5.61173 13.1908 5.42927 12.9958 5.19631 12.9881L2.45347 12.8976C2.29592 12.8328 2.11478 12.8692 1.99428 12.9897C1.87392 13.1103 1.83793 13.2913 1.90305 13.4488L1.99336 16.191C1.99863 16.4241 2.19177 16.6088 2.42473 16.6035C2.65755 16.5984 2.84238 16.4053 2.83711 16.1723C2.83711 16.1693 2.83711 16.1664 2.83685 16.1632L2.78464 14.5812C3.36498 15.2015 4.02825 15.7382 4.75559 16.1765C6.07329 16.9673 7.55156 17.3851 9.0305 17.3851C11.393 17.3851 13.5712 16.4111 15.163 14.6423C16.5731 13.0753 17.415 10.9664 17.415 9.00043C17.415 8.76734 17.2262 8.57855 16.9931 8.57855Z"
                  fill="#5F5F5F"
                />
              </svg>
            </div>

            <div
              className="bg-[#017AFF] p-2 rounded-[7px] click:scale"
              onClick={runBrowser}
            >
              <svg
                className="w-7"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.1877 8.29088C17.4695 9.06983 17.4695 10.9302 16.1877 11.7091L7.7887 16.8135C6.45587 17.6235 4.75 16.6641 4.75 15.1044L4.75 4.8956C4.75 3.33594 6.45587 2.37647 7.7887 3.18648L16.1877 8.29088Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>

        <div
          className={cn({
            hidden: activeTab === 1,
          })}
        >
          <div className="h-full overflow-auto">
            <pre className={`language-css CODY-EDITOR`}>
              <ReactCodeJar
                code={cssCode}
                onUpdate={setCssCode}
                highlight={(editor) => {
                  const root = refractor.highlight(editor.textContent, "css");
                  editor.innerHTML = toHtml(root);
                }}
                lineNumbers={true}
                className="h-full"
              />
            </pre>
          </div>

          <div className="bg-white w-full py-2 px-2 flex items-center justify-between">
            <div className="flex">
              <Toggle status={liveServer} onChange={toggleLiveServer} />

              <svg
                className={cn({ "w-5 mx-8": true, hidden: !cssCopied })}
                viewBox="0 0 11 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 3.99958L4.00084 6.99916L10 1"
                  stroke="#73CE49"
                  stroke-width="1.89607"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <CopyToClipboard text={cssCode} onCopy={() => onCopy(`css`)}>
                <svg
                  className={cn("w-5 mx-8 cursor-pointer", {
                    hidden: cssCopied,
                  })}
                  viewBox="0 0 17 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.784 18.5454H2.12504C0.952797 18.5454 0 17.5926 0 16.4204V5.98855C0 4.8163 0.952797 3.86365 2.12504 3.86365H2.51131C2.83122 3.86365 3.09086 4.12328 3.09086 4.44319C3.09086 4.7631 2.83122 5.02274 2.51131 5.02274H2.12504C1.59262 5.02274 1.15909 5.45612 1.15909 5.98855V16.4204C1.15909 16.9528 1.59262 17.3863 2.12504 17.3863H11.784C12.3165 17.3863 12.75 16.9528 12.75 16.4204V16.0341C12.75 15.7142 13.0096 15.4545 13.3295 15.4545C13.6494 15.4545 13.9091 15.7142 13.9091 16.0341V16.4204C13.9091 17.5926 12.9563 18.5454 11.784 18.5454Z"
                    fill="#5F5F5F"
                  />
                  <path
                    d="M14.8751 13.909H6.76146C5.58921 13.909 4.63641 12.9562 4.63641 11.784V2.12501C4.63641 0.952766 5.58921 -3.05176e-05 6.76146 -3.05176e-05H14.8751C16.0473 -3.05176e-05 17 0.952766 17 2.12501V11.784C17 12.9562 16.0473 13.909 14.8751 13.909ZM6.76146 1.15906C6.22903 1.15906 5.7955 1.59259 5.7955 2.12501V11.784C5.7955 12.3164 6.22903 12.75 6.76146 12.75H14.8751C15.4075 12.75 15.8409 12.3164 15.8409 11.784V2.12501C15.8409 1.59259 15.4075 1.15906 14.8751 1.15906H6.76146Z"
                    fill="#5F5F5F"
                  />
                </svg>
              </CopyToClipboard>

              <svg
                className="w-5 cursor-pointer"
                onClick={() => setCssCode(``)}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.9245 1.45966C10.2505 1.45966 11.5786 1.83605 12.7653 2.54823C13.5179 3.00108 14.1942 3.57022 14.7688 4.2348L12.7864 4.16941C12.5536 4.16163 12.3586 4.34423 12.3509 4.57718C12.3433 4.81 12.5257 5.00512 12.7587 5.01263L15.5015 5.10321C15.6591 5.16807 15.8402 5.13181 15.9607 5.01118C16.0811 4.89055 16.1171 4.70941 16.0519 4.55187L15.9616 1.80968C15.9564 1.57673 15.7632 1.39216 15.5303 1.3973C15.2975 1.40257 15.1126 1.59571 15.1179 1.82853C15.1179 1.8317 15.1179 1.8346 15.1182 1.83763L15.1704 3.41966C14.59 2.7995 13.9268 2.26254 13.1994 1.82445C11.8817 1.03383 10.4034 0.615906 8.9245 0.615906C6.562 0.615906 4.38381 1.59004 2.79202 3.35875C1.38191 4.92562 0.540001 7.0346 0.540001 9.00041C0.540001 9.23336 0.72879 9.42228 0.961876 9.42228C1.19496 9.42228 1.38375 9.23336 1.38375 9.00041C1.38375 7.23737 2.14458 5.33932 3.41917 3.92327C4.84906 2.33478 6.80405 1.45966 8.9245 1.45966Z"
                  fill="#5F5F5F"
                />
                <path
                  d="M16.9931 8.57855C16.76 8.57855 16.5713 8.76734 16.5713 9.00043C16.5713 10.7633 15.8104 12.6615 14.5358 14.0777C13.1059 15.6662 11.1509 16.541 9.0305 16.541C7.70449 16.541 6.37638 16.1649 5.18972 15.4527C4.43707 14.9998 3.76075 14.4306 3.18621 13.7662L5.16863 13.8316C5.40145 13.8391 5.59644 13.6565 5.60408 13.4237C5.61173 13.1908 5.42927 12.9958 5.19631 12.9881L2.45347 12.8976C2.29592 12.8328 2.11478 12.8692 1.99428 12.9897C1.87392 13.1103 1.83793 13.2913 1.90305 13.4488L1.99336 16.191C1.99863 16.4241 2.19177 16.6088 2.42473 16.6035C2.65755 16.5984 2.84238 16.4053 2.83711 16.1723C2.83711 16.1693 2.83711 16.1664 2.83685 16.1632L2.78464 14.5812C3.36498 15.2015 4.02825 15.7382 4.75559 16.1765C6.07329 16.9673 7.55156 17.3851 9.0305 17.3851C11.393 17.3851 13.5712 16.4111 15.163 14.6423C16.5731 13.0753 17.415 10.9664 17.415 9.00043C17.415 8.76734 17.2262 8.57855 16.9931 8.57855Z"
                  fill="#5F5F5F"
                />
              </svg>
            </div>

            <div
              className="bg-[#017AFF] p-2 rounded-[7px] click:scale"
              onClick={runBrowser}
            >
              <svg
                className="w-7"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.1877 8.29088C17.4695 9.06983 17.4695 10.9302 16.1877 11.7091L7.7887 16.8135C6.45587 17.6235 4.75 16.6641 4.75 15.1044L4.75 4.8956C4.75 3.33594 6.45587 2.37647 7.7887 3.18648L16.1877 8.29088Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>

        {/*  */}
      </div>

      <div className="w-1/2 h-full flex flex-col items-stretch">
        <div className="px-5 py-4 | flex items-center justify-between">
          <div className="menu flex items-center justify-center">
            <ul className="flex items-center justify-center">
              <li className="w-3 h-3 rounded-full bg-[#F96057]"></li>
              <li className="w-3 h-3 rounded-full bg-[#F8CE52] | mx-2"></li>
              <li className="w-3 h-3 rounded-full bg-[#5FCF65]"></li>
            </ul>
          </div>
          <div className="search flex items-center justify-between px-8 py-2 bg-[#f2f2f2] rounded-[7px]">
            <div className="lock">
              <svg
                className="w-3"
                viewBox="0 0 8 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 0C2.61929 0 1.5 1.11929 1.5 2.5V3.5H1C0.447715 3.5 0 3.94772 0 4.5V9.5C0 10.0523 0.447715 10.5 1 10.5H7C7.55228 10.5 8 10.0523 8 9.5V4.5C8 3.94772 7.55228 3.5 7 3.5H6.5V2.5C6.5 1.11929 5.38071 0 4 0ZM5.5 3.5V2.5C5.5 1.67157 4.82843 1 4 1C3.17157 1 2.5 1.67157 2.5 2.5V3.5H5.5Z"
                  fill="#BBBBBB"
                />
              </svg>
            </div>
            <p className="text-center text-sm text-[#797979] pl-6 select-none	">
              localhost:3000/index.html
            </p>
          </div>
          <div className="actions click:scale">
            <svg
              className="w-5"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9991 7.71621H6.36908"
                stroke="#BBBBBB"
                stroke-width="1.07508"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.9014 5.62628L15 7.71623L12.9014 9.80618"
                stroke="#BBBBBB"
                stroke-width="1.07508"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.1064 4.49758C10.8699 1.93173 9.90953 1 6.08942 1C1.00001 1 1.00001 2.65562 1.00001 7.62964C1.00001 12.6037 1.00001 14.2593 6.08942 14.2593C9.90953 14.2593 10.8699 13.3275 11.1064 10.7617"
                stroke="#BBBBBB"
                stroke-width="1.07508"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="w-full h-full overflow-auto">
          {/*  */}
          <iframe
            srcDoc={browserCode}
            frameborder="0"
            height="100%"
            width="100%"
          ></iframe>
          {/*  */}
        </div>
        <div className="console"></div>
      </div>
    </section>
  );

  function runBrowser() {
    if (liveServer) {
      setBrowserCode(`${htmlCode}<style>${cssCode}</style>`);
    }
  }

  function onCopy(lang) {
    if (lang === `html`) setHtmlCopied(true);
    if (lang === `css`) setCssCopied(true);

    setTimeout(() => {
      setHtmlCopied(false);
      setCssCopied(false);
    }, 2000);
  }
}
{
  /* <Editor
                //   language={}
                //   value={}
                //   onChange={}
                //   className="h-full"
                //   lineNumbers={true}
                // /> */
}
