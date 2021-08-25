import React from "react";

function Blockquote(props) {
  return (
    <div
      className="overflow-hidden rounded-[5px] mb-10 "
      style={{
        boxShadow: "0px 2px 10px rgba(172, 172, 172, 0.2)",
      }}
    >
      <div
        className="menu py-3 px-4"
        style={{
          boxShadow: "0px 2px 17px rgba(172, 172, 172, 0.1)",
        }}
      >
        <div className="w-full | flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#F96057]"></div>
          <div className="w-3 h-3 rounded-full bg-[#F8CE52] | mx-2"></div>
          <div className="w-3 h-3 rounded-full bg-[#5FCF65]"></div>
        </div>
      </div>

      <div className="last-child | p-4 font-serif ">{props.children}</div>
    </div>
  );
}

export default Blockquote;
