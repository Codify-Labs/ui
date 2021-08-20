import { useEffect, useState } from "react";
import { refractor } from "refractor/lib/common.js";
import { toHtml } from "hast-util-to-html";
import cn from "classnames";
import CopyToClipboard from "react-copy-to-clipboard";

export default function Code(props) {
  const [codeCopied, setCopied] = useState(false);
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
      <div className="flex items-center justify-end">
        <h6
          className="bg-[#F5F6F9] rounded-t-lg text-[#5F5F5F] font-bold"
          style={{
            fontSize: "0.8rem",
            lineHeight: "1rem",
            padding: "0.75rem 1.25rem",
          }}
        >
          {props.language.toUpperCase()}
        </h6>
      </div>

      <pre className="language-css text-xl | relative">
        <div
          dangerouslySetInnerHTML={{
            __html: code,
          }}
        ></div>
      </pre>

      <div className="absolute bottom-3 right-2 w-10 h-10">
        <CopyToClipboard text={props.value} onCopy={() => onCopy()}>
          <div className="bg-white rounded-[15px] w-full  h-full opacity-0 flex transform transition duration-300 group-hover:opacity-100 items-center justify-center cursor-pointer">
            <svg
              className={cn({ "w-4": true, hidden: !codeCopied })}
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
            <svg
              className={cn("w-4", {
                hidden: codeCopied,
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
          </div>
        </CopyToClipboard>
      </div>
    </div>
  );

  function onCopy() {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }
}
