import cn from "classnames";
import React from "react";

export default function Toggle(props) {
  const { status: liveServer } = props;

  return (
    <div
      className={cn({
        "relative w-[3rem] h-6 rounded-full flex items-center cursor-pointer outline-none": true,
        "bg-[#F3F4F5]": !liveServer,
        "bg-[#E8F3FF] justify-end": liveServer,
      })}
      onClick={props.onChange}
      {...props}
    >
      <div
        className={cn({
          "w-5 h-5 rounded-full mx-1": true,
          "bg-[#B6B6B6]": !liveServer,
          "bg-[#017AFF]": liveServer,
        })}
      ></div>
    </div>
  );
}
