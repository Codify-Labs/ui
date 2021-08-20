import { useState } from "react";
import Markdown from "../Markdown/Markdown";
import useToggle from "../../@hooks/useToggle";
import { Collapse } from "react-collapse";

function Exersice(props) {
  const { completed } = props;
  console.log(!completed);
  const [solutionActive, toggleSolution] = useToggle(false);
  const [exerciseAcive, toggleExercise] = useToggle(!completed);

  const [exercise] =
    useState(`Quyidagi xatboshiga "devilla.uz haqida" matni bilan "izoh" qo'shing. 
:::main{#warn}
Sichqoncha bilan ustiga oborganda xabarnoma chiqishi kerak.
:::

~~~html
<p>
    Devilla.uz bu dasturchilarni tayyorlash platfromasi!
</p>
~~~`);

  const [solution] =
    useState(`Sichqoncha bilan ustiga oborganda xabarnoma chiqishi kerak.
~~~html
<p title="devilla.uz haqida">
    Devilla.uz bu dasturchilarni tayyorlash platfromasi!
</p>
~~~
  
`);

  return (
    <div className="exercise mb-7">
      {/* EXERCISE DROPDOWN */}
      {/* EXERCISE DROPDOWN */}
      <div
        className={`relative | flex items-center | py-2 px-4 | ${
          completed ? "bg-[#20E100]" : "bg-[#efefef]"
        } rounded-[7px]`}
      >
        <div
          className={`completed | w-7 h-7 | p-1.5 rounded-[7px] | cursor-pointer ${
            completed ? "bg-white" : "bg-gray-300"
          }`}
        >
          <svg
            className={`w-full h-full ${!completed && "hidden"}`}
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 3.99958L4.00084 6.99916L10 1"
              stroke="#73CE49"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <h1
          className={`pl-10 | text-[15px] ${
            completed ? "text-white" : "text-[#151541]"
          } font-extrabold`}
        >
          Jadval yaratish
        </h1>
        <div
          className={`absolute right-1 rounded-[7px] duration-500 w-10 h-10 | flex items-center justify-center |  cursor-pointer ${
            !exerciseAcive ? "rotate-0" : "rotate-90"
          }`}
          onClick={toggleExercise}
        >
          <svg
            className="w-2"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 0.999999L9 9L1 17"
              stroke={`${completed ? "white" : "#151541"}`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {/*  */}
      <Collapse isOpened={exerciseAcive}>
        <div className="transform px-4 mt-7 overflow-hidden">
          {/* MASHQ TSHUNUTIRILISHI */}
          <div className={`px-4`} id="article">
            <Markdown src={exercise} />
          </div>

          {/* ECHIM */}
          <div className={`result px-4 mt-16 rounded-[7px] bg-[#ffff0033]`}>
            <div
              className="dropdown | cursor-pointer | relative | flex items-center  py-2 rounded-[7px]"
              onClick={toggleSolution}
            >
              <div className="completed">
                <svg
                  className="w-6"
                  viewBox="0 0 22 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.14 25.05H8.63a1.46 1.46 0 01-1.46-1.52v-3.04a.38.38 0 01.75 0v3.04a.7.7 0 00.7.76h4.52a.93.93 0 00.94-.76v-3.04a.38.38 0 01.75 0v3.04a1.66 1.66 0 01-1.69 1.52z"
                    fill="#D6B300"
                  />
                  <path
                    d="M14.14 20.87H7.87a.76.76 0 01-.75-.63 8.27 8.27 0 00-2.07-3.95 7.9 7.9 0 1111.9 0 8.27 8.27 0 00-2.07 3.95.76.76 0 01-.74.63zM11 3.93A7.15 7.15 0 005.62 15.8a9 9 0 012.25 4.32h6.26a9.02 9.02 0 012.26-4.32 7.15 7.15 0 00-5.4-11.86zM11 26.42a1.72 1.72 0 01-1.72-1.71.4.4 0 01.38-.41h2.68a.38.38 0 01.38.37A1.73 1.73 0 0111 26.42zm-.9-1.37a.96.96 0 001.8 0h-1.8zM7.03 22.53a.38.38 0 01-.04-.75l7.89-.81a.38.38 0 11.07.75l-7.89.8-.03.01zM7.08 24.08a.38.38 0 11-.03-.75l7.83-.8a.38.38 0 01.4.48.38.38 0 01-.33.26l-7.83.8-.04.01zM10.97 2.3a.38.38 0 01-.38-.38V.38a.38.38 0 01.76 0v1.54a.38.38 0 01-.38.38zM6.44 3.53a.38.38 0 01-.33-.19l-.77-1.33a.38.38 0 01.65-.38l.77 1.34a.38.38 0 01-.32.56zM3.13 6.87a.37.37 0 01-.2-.05L1.6 6.04a.38.38 0 11.38-.65l1.33.77a.38.38 0 01-.18.7zM1.92 11.4H.38a.38.38 0 110-.75h1.54a.38.38 0 010 .76zM1.82 16.71a.38.38 0 01-.2-.7l1.35-.77a.38.38 0 11.37.65l-1.33.77a.38.38 0 01-.2.05zM15.56 3.53a.38.38 0 01-.32-.56L16 1.63a.38.38 0 01.65.38l-.77 1.33a.38.38 0 01-.33.2zM18.88 6.87a.38.38 0 01-.2-.7l1.35-.78a.38.38 0 11.38.65l-1.34.78a.37.37 0 01-.2.05zM21.62 11.4h-1.54a.38.38 0 110-.75h1.54a.38.38 0 010 .76zM20.18 16.71a.38.38 0 01-.18-.05l-1.34-.77a.38.38 0 11.37-.65l1.34.77a.38.38 0 01-.19.7z"
                    fill="#D6B300"
                  />
                  <path
                    d="M9.37 20.87a.38.38 0 01-.36-.3l-1.83-7.85a.38.38 0 01.5-.43l1.7.63 1.43-.86a.38.38 0 01.39 0l1.42.86 1.7-.63a.38.38 0 01.5.43L13 20.58a.38.38 0 11-.73-.18l1.67-7.16-1.22.45a.38.38 0 01-.33-.03L11 12.83l-1.38.83a.38.38 0 01-.33.03l-1.22-.45 1.67 7.16a.38.38 0 01-.37.47z"
                    fill="#D6B300"
                  />
                </svg>
              </div>
              <h1 className="pl-10 | text-[15px] text-[#D6B300] font-extrabold">
                Echim
              </h1>

              <div
                className={`absolute right-2 duration-500 ${
                  solutionActive && "rotate-90"
                }`}
              >
                <svg
                  className="w-2"
                  viewBox="0 0 10 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 0.999999L9 9L1 17"
                    stroke="#D6B300"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <Collapse isOpened={solutionActive}>
              <div
                className={`rounded-[7px] | duration-500 | relative pt-3`}
                id="article"
              >
                <Markdown src={solution} />
              </div>
            </Collapse>
          </div>
        </div>
      </Collapse>
    </div>
  );
}

export default Exersice;
