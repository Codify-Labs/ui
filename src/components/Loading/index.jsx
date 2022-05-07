import { useEffect, useState } from "react";

function Loading(props) {
  const [animation, setAnimation] = useState(``);

  useEffect(() => {
    setTimeout(() => {
      setAnimation("active");
    }, 0);
  }, []);

  useEffect(() => {
    const an = setInterval(() => {
      if (animation == "active") {
        setAnimation("inActive");
      } else {
        setAnimation("active");
      }
    }, 2000);

    return () => clearInterval(an);
  }, [animation]);

  return (
    <svg
      viewBox="0 0 40 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={`h-12 ${props.className} ${animation}`}
    >
      <rect
        x="32.4196"
        y="1.4516"
        width="6.12903"
        height="6.12903"
        stroke="#017AFF"
        strokeWidth="0.322581"
        className="svg-elem-1"
      ></rect>
      <rect
        x="33.5483"
        width="6.45161"
        height="6.45161"
        fill="#017AFF"
        className="svg-elem-2"
      ></rect>
      <rect
        x="0.16129"
        y="1.4516"
        width="25.4839"
        height="6.12903"
        stroke={`${props.color === `white` ? "#FFFFFF" : "#05192D"}`}
        strokeWidth="0.322581"
        className="svg-elem-3"
      ></rect>
      <rect
        x="11.7741"
        y="11.7742"
        width="25.4839"
        height="6.12903"
        stroke={`${props.color === `white` ? "#FFFFFF" : "#05192D"}`}
        strokeWidth="0.322581"
        className={`svg-elem-4 ${props.color === `white` && "white"}`}
      ></rect>
      <rect
        x="2.58057"
        width="25.8065"
        height="6.45161"
        fill={`${props.color === `white` ? "#FFFFFF" : "#05192D"}`}
        className={`svg-elem-5 ${props.color === `white` && "white"}`}
      ></rect>
      <rect
        x="14.1934"
        y="10.3226"
        width="25.8065"
        height="6.45161"
        fill={`${props.color === `white` ? "#FFFFFF" : "#05192D"}`}
        className={`svg-elem-6 ${props.color === `white` && "white"}`}
      ></rect>
    </svg>
  );
}

export default Loading;
