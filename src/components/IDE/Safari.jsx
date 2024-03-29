import cn from "classnames";
import { useEffect, useState } from "react";
import Inspector from "react-inspector";
import theme from "./theme";

export default function Safari(props) {
  const [consoleActive, setConsoleActive] = useState(props.console || false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const msg = window.addEventListener("message", function (response) {
      if (response.data && response.data.source === "iframe") {
        setResult((res) => res.concat(response.data));
      }
    });

    return () => window.removeEventListener("message", msg);
  }, []);

  const customLogs = `
      _log = console.log;

      console.log = function (...rest) {
        window.parent.postMessage(
          {
            source: "iframe",
            message: rest,
            method: "log",
          },
          "*"
        );

        _log.apply(console, arguments);
      };

      console.table = function (...rest) {

        window.parent.postMessage(
          {
            source: "iframe",
            message: rest,
            method: "table",
          },
          "*"
        );

        _log.apply(console, arguments);
      };
  `;

  return (
    <div className="w-full h-full flex flex-col items-stretch">
      <div className="px-5 py-1 z-40 | flex items-center justify-between | shadow-sm">
        <div className="menu fc space-x-3">
          <div
            className="actions click:scale | hover:bg-gray-100 duration-100 p-1 rounded-sm"
            onClick={props.onUrlBack}
          >
            <svg
              className="h-5 rotate-180"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.32502 4.30157C8.52648 4.11271 8.8429 4.12291 9.03176 4.32437L14.0318 9.6577C14.2121 9.85003 14.2121 10.1493 14.0318 10.3416L9.03176 15.675C8.8429 15.8764 8.52648 15.8866 8.32502 15.6978C8.12357 15.5089 8.11336 15.1925 8.30223 14.991L12.9816 9.99967L8.30223 5.00831C8.11336 4.80685 8.12357 4.49044 8.32502 4.30157Z"
                fill="#05192D"
              />
            </svg>
          </div>
          <div className="actions click:scale | hover:bg-gray-100 duration-100 p-1 rounded-sm">
            <svg
              className="h-5"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.32502 4.30157C8.52648 4.11271 8.8429 4.12291 9.03176 4.32437L14.0318 9.6577C14.2121 9.85003 14.2121 10.1493 14.0318 10.3416L9.03176 15.675C8.8429 15.8764 8.52648 15.8866 8.32502 15.6978C8.12357 15.5089 8.11336 15.1925 8.30223 14.991L12.9816 9.99967L8.30223 5.00831C8.11336 4.80685 8.12357 4.49044 8.32502 4.30157Z"
                fill="#05192D"
              />
            </svg>
          </div>
        </div>
        <div className="search flex items-center justify-between px-5 flex-grow mx-5 py-1 bg-[#f2f2f2] rounded-[7px]">
          <div className="lock">
            <svg
              className="w-2.5"
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
          <input
            type="text"
            name="url"
            id="url"
            className="focus:outline-none outline-none | py-1 px-3 | rounded-[7px] ml-6 w-full | text-sm"
            placeholder="/"
          />
        </div>
        <div
          className="actions click:scale | hover:bg-gray-100 duration-100 p-1 rounded-sm"
          onClick={props.onRefresh}
        >
          <svg
            className="h-4"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.8501 7.5001C1.8501 4.6647 4.05992 1.8501 7.5001 1.8501C10.2784 1.8501 11.6516 3.90652 12.2368 5.00012H10.5001C10.224 5.00012 10.0001 5.22398 10.0001 5.50012C10.0001 5.77626 10.224 6.00012 10.5001 6.00012H13.5001C13.7763 6.00012 14.0001 5.77626 14.0001 5.50012V2.50012C14.0001 2.22398 13.7763 2.00012 13.5001 2.00012C13.224 2.00012 13.0001 2.22398 13.0001 2.50012V4.3133C12.2956 3.07138 10.6661 0.850098 7.5001 0.850098C3.43728 0.850098 0.850098 4.1855 0.850098 7.5001C0.850098 10.8147 3.43728 14.1501 7.5001 14.1501C9.44394 14.1501 11.0623 13.381 12.2146 12.2085C12.8316 11.5807 13.3134 10.8391 13.642 10.0408C13.7471 9.78548 13.6252 9.49327 13.3699 9.38818C13.1145 9.28308 12.8223 9.4049 12.7172 9.66026C12.4364 10.3426 12.0252 10.9746 11.5014 11.5076C10.5296 12.4964 9.16516 13.1501 7.5001 13.1501C4.05992 13.1501 1.8501 10.3355 1.8501 7.5001Z"
              fill="#05192D"
            />
          </svg>
        </div>
      </div>

      <div className="w-full h-full overflow-auto" id="codify-iframe-parent">
        {/* FRAME */}
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          id={`codifyuz`}
          className={`codifyuz`}
        ></iframe>
        {/* FRAME */}
      </div>
      <div className="z-20">
        <div
          className="sticky | bg-gray-100 hover:bg-gray-200 duration-300 | w-full px-4 py-2 top-0 right-0  z-10 | flex items-center cursor-pointer text-blue-900"
          onClick={() => setConsoleActive(!consoleActive)}
        >
          <div className="console:icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 44 44"
              className="h-5 mr-2"
            >
              <g data-name="Layer 2">
                <g>
                  <path d="M20 25a1 1 0 00-.41-.79l-8-6A1 1 0 0011 18a1 1 0 00-1 1 1 1 0 00.41.79L17.33 25l-6.93 5.2a1 1 0 00-.4.8 1 1 0 001 1 1 1 0 00.59-.21l8-6A1 1 0 0020 25zM40 0H4a4 4 0 00-4 4v36a4 4 0 004 4h36a4 4 0 004-4V4a4 4 0 00-4-4zm2 40a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h36a2 2 0 012 2zm-15-8h-6a1 1 0 000 2h6a1 1 0 000-2z"></path>
                </g>
              </g>
            </svg>
          </div>
          Console
          <svg
            className={cn({
              "w-2.5 ml-3 transform duration-500 -rotate-90": true,
              "rotate-0": consoleActive,
            })}
            viewBox="0 0 5 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth={5}
          >
            <path
              d="M2.50004 -1.52588e-05C2.64016 -1.52588e-05 2.75596 0.104108 2.77429 0.239201L2.77681 0.276758V5.81222C2.77681 5.96508 2.6529 6.08899 2.50004 6.08899C2.35992 6.08899 2.24412 5.98487 2.22579 5.84978L2.22327 5.81222V0.276758C2.22327 0.1239 2.34718 -1.52588e-05 2.50004 -1.52588e-05Z"
              fill="black"
            />
            <path
              d="M4.5271 3.38437C4.63495 3.27605 4.81019 3.27568 4.91851 3.38353C5.01698 3.48158 5.02625 3.63532 4.94609 3.74385L4.91936 3.77495L2.69631 6.00758C2.59797 6.10635 2.44368 6.11533 2.33515 6.03453L2.30407 6.0076L0.0806602 3.77496C-0.0272024 3.66665 -0.0268396 3.49141 0.0814706 3.38355C0.179934 3.28549 0.333714 3.27688 0.441899 3.3575L0.472886 3.38436L2.5003 5.41994L4.5271 3.38437Z"
              fill="black"
            />
          </svg>
        </div>

        <div
          className={cn({
            "| overflow-auto transform duration-500": true,
            "h-0": !consoleActive,
            "h-64": consoleActive,
          })}
        >
          <div className="w-full h-full overflow-auto bg-[#fafafa]  relative group">
            <div
              className="fixed right-5 mt-1 mr-1  bg-white p-2 rounded-md hidden group-hover:flex cursor-pointer "
              style={{ zIndex: 1000000000 }}
              onClick={() => {
                props.setSrc("");
                setResult([]);
              }}
            >
              {" "}
              <svg
                className="w-4"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.9245 1.45966C10.2505 1.45966 11.5786 1.83605 12.7653 2.54823C13.5179 3.00108 14.1942 3.57022 14.7688 4.2348L12.7864 4.16941C12.5536 4.16163 12.3586 4.34423 12.3509 4.57718C12.3433 4.81 12.5257 5.00512 12.7587 5.01263L15.5015 5.10321C15.6591 5.16807 15.8402 5.13181 15.9607 5.01118C16.0811 4.89055 16.1171 4.70941 16.0519 4.55187L15.9616 1.80968C15.9564 1.57673 15.7632 1.39216 15.5303 1.3973C15.2975 1.40257 15.1126 1.59571 15.1179 1.82853C15.1179 1.8317 15.1179 1.8346 15.1182 1.83763L15.1704 3.41966C14.59 2.7995 13.9268 2.26254 13.1994 1.82445C11.8817 1.03383 10.4034 0.615906 8.9245 0.615906C6.562 0.615906 4.38381 1.59004 2.79202 3.35875C1.38191 4.92562 0.540001 7.0346 0.540001 9.00041C0.540001 9.23336 0.72879 9.42228 0.961876 9.42228C1.19496 9.42228 1.38375 9.23336 1.38375 9.00041C1.38375 7.23737 2.14458 5.33932 3.41917 3.92327C4.84906 2.33478 6.80405 1.45966 8.9245 1.45966Z"
                  fill="black"
                />
                <path
                  d="M16.9931 8.57855C16.76 8.57855 16.5713 8.76734 16.5713 9.00043C16.5713 10.7633 15.8104 12.6615 14.5358 14.0777C13.1059 15.6662 11.1509 16.541 9.0305 16.541C7.70449 16.541 6.37638 16.1649 5.18972 15.4527C4.43707 14.9998 3.76075 14.4306 3.18621 13.7662L5.16863 13.8316C5.40145 13.8391 5.59644 13.6565 5.60408 13.4237C5.61173 13.1908 5.42927 12.9958 5.19631 12.9881L2.45347 12.8976C2.29592 12.8328 2.11478 12.8692 1.99428 12.9897C1.87392 13.1103 1.83793 13.2913 1.90305 13.4488L1.99336 16.191C1.99863 16.4241 2.19177 16.6088 2.42473 16.6035C2.65755 16.5984 2.84238 16.4053 2.83711 16.1723C2.83711 16.1693 2.83711 16.1664 2.83685 16.1632L2.78464 14.5812C3.36498 15.2015 4.02825 15.7382 4.75559 16.1765C6.07329 16.9673 7.55156 17.3851 9.0305 17.3851C11.393 17.3851 13.5712 16.4111 15.163 14.6423C16.5731 13.0753 17.415 10.9664 17.415 9.00043C17.415 8.76734 17.2262 8.57855 16.9931 8.57855Z"
                  fill="black"
                />
              </svg>
            </div>

            <div className="w-full bg-[#fafafa] rounded-[7px]">
              {result.length > 0 &&
                result.map((res, index) => (
                  <div
                    className={`flex py-2 px-2 border-b-2 border-gray-300 ${
                      typeof res.message[0] === "object" ||
                      typeof res.message[0] === "array"
                        ? "items-center"
                        : "items-center"
                    }`}
                  >
                    {res.message.map((r) => (
                      <div className="mr-5">
                        <Inspector
                          theme={theme}
                          table={res.method === "table"}
                          data={r}
                        />
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
