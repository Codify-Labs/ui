import React from "react";
import cn from "classnames";
export default function TabFile(props) {
  const { active, language, file } = props;
  return (
    <a
      className={cn({
        "mr-7 | px-5 py-2 | inline-flex items-center font-bold rounded-[7px] click:scale text-[#017AFF]": true,
        "bg-[#017AFF] text-[white]": active,
      })}
      onClick={props.onClick}
      style={{
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.06)",
      }}
    >
      <svg
        viewBox="0 0 20 20"
        className="w-6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <path
            d="M1.2593 -0.33792L2.55734 16.2682C2.57683 16.5175 2.74562 16.7302 2.98406 16.8058L9.81438 18.9713C9.93517 19.0096 10.0648 19.0096 10.1856 18.9713L17.0159 16.8058C17.2544 16.7302 17.4232 16.5175 17.4427 16.2682L18.7407 -0.33792C18.7686 -0.694942 18.4865 -1 18.1284 -1H1.87167C1.51359 -1 1.23143 -0.694942 1.2593 -0.33792ZM15.412 4.81439H6.9524L7.2077 7.16866H15.228L14.7033 13.8804L10 15.3715L5.29674 13.8804L5.02264 10.3739H7.49129V12.0939L10.066 12.7849L12.6253 12.0939L12.8239 9.35271H4.9428L4.41957 2.65862H15.5804L15.412 4.81439Z"
            fill={`${active ? "white" : "#017AFF"}`}
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <h1 className="font-bold ml-3 text-lg">{props.file}</h1>
    </a>
  );
}
