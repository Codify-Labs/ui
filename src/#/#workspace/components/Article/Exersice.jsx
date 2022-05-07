import { useState } from "react";
import Markdown from "components/Markdown/Markdown";
import useToggle from "hooks/useToggle";
import { Collapse } from "react-collapse";

function Exersice(props) {
  const [solutionActive, toggleSolution] = useToggle(false);
  const [exerciseAcive, toggleExercise] = useToggle(!props.completed);
  const [completed, toggleCompleted] = useToggle(props.completed);

  const [body] = useState(props.body);
  const [solution] = useState(props.solution);

  return (
    <div
      className={`relative | transform overflow-hidden ${
        completed && "border-l-[0.5em] border-[#20E100]"
      }`}
    >
      {completed && <div className="absolute inset-0 | bg-[#E1E1E173]"></div>}
      {/* ============ EXERCISE */}
      <div className="border-b border-gray-300">
        <div id="article">
          <div className="flex space-x-5 px-4 py-5">
            <div className="flex space-x-5">
              <div
                className={`completed | w-6 h-6 | rounded-[3px] fcc | cursor-pointer ${
                  completed ? "bg-[#20E100]" : "bg-gray-300"
                }`}
              >
                <svg
                  className={`w-full ${!completed && "hidden"}`}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.6227 5.13595C16.0079 5.38781 16.116 5.90427 15.8642 6.28947L10.1975 14.9562C10.0639 15.1604 9.84758 15.2958 9.60552 15.3267C9.36346 15.3576 9.12002 15.2808 8.93944 15.1167L5.27278 11.7834C4.93223 11.4738 4.90714 10.9467 5.21672 10.6062C5.52631 10.2657 6.05335 10.2405 6.3939 10.5501L9.33739 13.226C11.3415 10.1609 12.4651 8.44248 14.4692 5.37739C14.7211 4.99219 15.2375 4.88409 15.6227 5.13595Z"
                    fill="white"
                  />
                </svg>
              </div>

              <h3
                style={{
                  fontSize: "1rem",
                  color: "#05192D !important",
                }}
              >
                2.
              </h3>
            </div>

            <div className="last-child">
              <Markdown src={body} />
            </div>
          </div>
        </div>
        {/* ============ SOLUTION */}
        <div className={`result my-5 mx-3 bg-[#FFFFA6]`}>
          <div
            className="dropdown px-4 | cursor-pointer | relative | flex items-center  py-2 rounded-[7px]"
            onClick={toggleSolution}
          >
            <h1 className="text-[15px] text-[#B19500]">
              {solutionActive ? (
                "Echim:"
              ) : (
                <h1>Qiynalyapsizmi? Echimni ko’rish:</h1>
              )}
            </h1>

            <div
              className={`absolute right-2 duration-500 ${
                solutionActive && "rotate-90"
              }`}
            >
              <svg
                className="w-4"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.25 2.75C8.25 2.33579 7.91421 2 7.5 2C7.08579 2 6.75 2.33579 6.75 2.75V6.75H2.75C2.33579 6.75 2 7.08579 2 7.5C2 7.91421 2.33579 8.25 2.75 8.25H6.75V12.25C6.75 12.6642 7.08579 13 7.5 13C7.91421 13 8.25 12.6642 8.25 12.25V8.25H12.25C12.6642 8.25 13 7.91421 13 7.5C13 7.08579 12.6642 6.75 12.25 6.75H8.25V2.75Z"
                  fill="#B19500"
                />
              </svg>
            </div>
          </div>

          <Collapse isOpened={solutionActive}>
            <div
              className={`rounded-[7px] | px-4 duration-500 | relative pt-3 bg-[#FFFFCC]`}
              id="article"
            >
              <Markdown src={solution} />
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default Exersice;
