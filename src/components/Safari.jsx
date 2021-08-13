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
        console.log(response.data, "===");
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
            {props.url || "localhost:3000/index.html"}
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
        {/* FRAME */}
        <iframe
          srcDoc={`
            <script>
              ${customLogs}

              ${props.template === "js" ? props.src : ""}
            </script>

            ${props.template === "html" ? props.src : ""}
          `}
          frameBorder="0"
          height="100%"
          width="100%"
        ></iframe>
        {/* FRAME */}
      </div>
      <div className="z-20">
        <div
          className="sticky | bg-gray-100 hover:bg-gray-200 duration-300 font-bold | w-full px-4 py-2 top-0 right-0  z-10 | flex items-center cursor-pointer"
          onClick={() => setConsoleActive(!consoleActive)}
        >
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
