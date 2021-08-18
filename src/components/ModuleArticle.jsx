import cn from "classnames";

function ModuleArticle(props) {
  return (
    <li className="relative">
      <div className="flex items-center py-2 z-20">
        <div
          className={cn({
            "check relative border-[0.15rem] after:h-full rounded-[0.6rem] w-6 h-6 flex items-center justify-center bg-white": true,
            "after:h-0": props.article.last,
            "border-[#61DAFB] after:bg-[#61dafb]": props.article.completed,
          })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="8"
            viewBox="0 0 24 18"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23.0175 1.28545C22.2853 0.575524 21.1162 0.593565 20.4063 1.32575L9.28178 12.799L4.03653 6.25677C3.39859 5.46109 2.2364 5.33321 1.44071 5.97116C0.645029 6.60911 0.517157 7.77129 1.1551 8.56698L7.43823 16.4037C7.80723 16.8639 8.3516 17.1007 8.89901 17.0951C9.53299 17.2768 10.2439 17.1121 10.7351 16.6055L23.0578 3.89663C23.7677 3.16445 23.7497 1.99538 23.0175 1.28545Z"
              fill={`${props.article.completed ? "#61DAFB" : "silver"}`}
            />
          </svg>
        </div>
        <p
          className={`pl-3 | text-sm leading-5 tracking-wide ${
            props.article.active && "font-bold text-[1rem] text-[#61DAFB]"
          }`}
        >
          HTML - Sarlavhalar
        </p>
      </div>
    </li>
  );
}

export default ModuleArticle;
