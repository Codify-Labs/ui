import React from "react";

function Level({ level, white = null }) {
  const loop = 5 - level;

  const colored = range({ to: level });
  const unColored = range({ to: loop });

  let coloredClasses = !!white
    ? "w-2.5 h-2.5 | mr-1 | bg-white"
    : "w-2.5 h-2.5 | mr-1 | bg-gray-800";

  let unColoredClasses = !!white
    ? "w-2.5 h-2.5 | mr-1 | bg-gray-700 "
    : "w-2.5 h-2.5 | mr-1 | bg-gray-400";

  return (
    <ul className="flex items-center">
      {colored.map((colored, id) => {
        return (
          <li
            className={coloredClasses}
            key={`${id}_${colored}`}
            style={{ borderRadius: "3px" }}
          ></li>
        );
      })}

      {unColored.map((colored, id) => {
        return (
          <li
            className={unColoredClasses}
            key={`${id}_${colored}`}
            style={{ borderRadius: "3px" }}
          ></li>
        );
      })}
    </ul>
  );
}

const range = (options) => {
  const { from = 0, step = 1, to } = options;

  return Array.from(
    { length: Math.ceil((to - from) / step) },
    (_, i) => i * step + from
  );
};

export default Level;
