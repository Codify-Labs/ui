import Level from "../Level";
import ModuleArticle from "../ModuleArticle";
import CourseProgress from "../CourseProgress";
import useToggle from "../../@hooks/useToggle";

export default function Header(props) {
  const [menu, toggleMenu] = useToggle(false);

  return (
    <header
      ref={props.refs}
      className="w-full px-6 py-3 flex items-center justify-between"
      style={{
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.01)",
      }}
    >
      <section
        className={`flex h-full | absolute top-0 left-0 w-[30%] bg-white ${
          !menu && "-left-96 hidden"
        }`}
        style={{ zIndex: 1000000 }}
      >
        <div className="fixed overflow-y-auto h-full w-inherit ">
          <div className="sticky top-0 pt-2 px-2 z-20 bg-white shadow-100">
            <div className="card | sticky top-3 | rounded-md w-full bg-[#61dafb] z-20">
              <div className="info flex pl-2">
                <div className="course__img w-1/5 flex items-center justify-center">
                  <img
                    src="https://laracasts.s3.amazonaws.com/series/thumbnails/beginning-react.png"
                    alt="course__image"
                    className="w-11/12"
                  />
                </div>

                <div className="course__info | w-4/5 | py-3 px-2 | relative |">
                  <span
                    className="absolute  top-0 right-3 text-sm text-white font-extrabold "
                    style={{ fontSize: "0.75rem" }}
                  >
                    {23}
                    <span style={{ fontSize: "0.7rem" }}>%</span>
                  </span>
                  <div className="flex items-center w-full ">
                    <h1 className="font-extrabold text-lg text-white w-1/5">
                      ReactJs
                    </h1>
                    <div className="w-4/5 ml-8 mt-1">
                      <CourseProgress progress={23} />
                    </div>
                  </div>

                  <div className="flex items-center justify-between  pt-3">
                    <div className="level flex items-center">
                      <div className="flex-col ml-1">
                        <p className="text-xs text-white font-bold">Daraja:</p>
                        <Level level={3} white={true} />
                      </div>
                    </div>
                    <div className="hours flex items-center">
                      <svg
                        className="w-7 h-7"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.60294 5.30147C9.60294 7.67681 7.67728 9.60294 5.30147 9.60294C2.92613 9.60294 1 7.67681 1 5.30147C1 2.92566 2.92613 1 5.30147 1C7.67728 1 9.60294 2.92566 9.60294 5.30147Z"
                          stroke="white"
                          stroke-width="0.75"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.25036 5.65819L5.1438 5.62378V3.36981"
                          stroke="white"
                          stroke-width="0.75"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div className="flex-col ml-1 pt-">
                        <p className="text-xs text-white font-bold">
                          Davomiyligi:
                        </p>

                        <p className="text-[10px] text-white font-bold">
                          15 Soat
                        </p>
                      </div>
                    </div>

                    <div className="hours flex items-center">
                      <svg
                        className="w-7 h-7"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.14706 5.30147C1.14706 8.52734 2.22266 9.60294 5.44854 9.60294C8.67441 9.60294 9.75001 8.52734 9.75001 5.30147C9.75001 2.0756 8.67441 1 5.44854 1C2.22266 1 1.14706 2.0756 1.14706 5.30147Z"
                          stroke="white"
                          stroke-width="0.75"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.91293 6.83707L4.64487 4.498L6.98394 3.76605L6.252 6.10466L3.91293 6.83707Z"
                          stroke="white"
                          stroke-width="0.75"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div className="flex-col ml-1">
                        <p className="text-xs text-white font-bold">
                          Modullar:
                        </p>
                        <p className="text-[10px] text-white font-bold">
                          3 modul
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="| px-2 rounded-[0.5rem] bg-white">
            <div className="cirriculum py-5">
              <div className="module mb-3">
                <div className="module__intro flex items-center relative bg-[#F7F7F7] px-5 py-3 rounded-md | group ">
                  <p className="text-sm text-black font-bold">1.</p>
                  <h3 className="text-sm font-bold ml-5">
                    HTML - Veb Asoslari
                  </h3>
                </div>

                <ul className={`px-7 py-3 `}>
                  <ModuleArticle
                    article={{ completed: true, last: false }}
                    key={1}
                  />
                  <ModuleArticle
                    article={{ completed: true, last: false }}
                    key={2}
                  />
                  <ModuleArticle
                    article={{
                      completed: true,
                      last: false,
                      active: true,
                    }}
                    key={3}
                  />
                  <ModuleArticle
                    article={{ completed: false, last: false }}
                    key={4}
                  />
                  <ModuleArticle
                    article={{ completed: false, last: true }}
                    key={5}
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center">
        <div className="logo">
          <svg
            className="w-10"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="31.0004" cy="30.6586" r="3.99955" fill="#0033E7" />
            <rect
              width="7.98748"
              height="27.649"
              rx="3.99374"
              transform="matrix(-0.587785 0.809017 0.809017 0.587785 4.69495 0)"
              fill="#0D55FF"
            />
            <path
              opacity="0.95"
              d="M24.0723 20.775C25.857 19.4783 26.2526 16.9804 24.956 15.1957C23.6593 13.411 21.1614 13.0154 19.3767 14.312L3.47116 25.8681C1.68647 27.1647 1.29084 29.6626 2.58749 31.4473C3.88414 33.232 6.38207 33.6277 8.16676 32.331L24.0723 20.775Z"
              fill="#0041DA"
            />
          </svg>
        </div>

        <div
          className="menu px-4 py-[10px] ml-12 flex items-center justify-center bg-[#F6F6F6] rounded-[6px] hover:bg-gray-100 cursor-pointer "
          onClick={() => toggleMenu()}
        >
          <h1 className="font-medium pr-3">O'quv dasturi</h1>
          <ul>
            <li className="mb-2 w-7 h-[2px] bg-gray-900 rounded-full"></li>
            <li className="mt-2 w-7 h-[2px] bg-gray-900 rounded-full"></li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="action__c mr-12 flex items-center justify-center">
          <div className="dark-mode pr-10">
            <svg
              className="w-6"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5377 10.8268C18.3433 10.778 18.1489 10.8268 17.9789 10.9488C17.3472 11.4856 16.6183 11.9247 15.8165 12.2175C15.0634 12.5103 14.2373 12.6566 13.3627 12.6566C11.3947 12.6566 9.59682 11.8515 8.30914 10.5584C7.02147 9.26537 6.21971 7.45995 6.21971 5.48375C6.21971 4.65424 6.36549 3.84912 6.60844 3.11719C6.8757 2.33647 7.26443 1.62894 7.77464 1.019C7.9933 0.750625 7.94471 0.360264 7.67746 0.140686C7.50739 0.0186985 7.31302 -0.0300967 7.11865 0.0186985C5.05351 0.579842 3.25563 1.82412 1.96796 3.48315C0.728872 5.11779 0 7.14279 0 9.33857C0 11.9979 1.06901 14.4133 2.81831 16.1699C4.5676 17.9265 6.94858 19 9.62111 19C11.8563 19 13.9215 18.2193 15.5736 16.9262C17.25 15.6087 18.4648 13.7301 18.975 11.5831C19.0722 11.2416 18.8778 10.9 18.5377 10.8268Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="dark-mode pr-10">
            <svg
              className="w-6"
              viewBox="0 0 16 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1551 5.84023L14.8972 5.09529C15.1856 4.80581 15.1856 4.33643 14.8972 4.0471C14.6088 3.75761 14.1413 3.75761 13.8529 4.0471L13.1108 4.79204C11.8656 3.75066 10.3525 3.12154 8.73849 2.97426V1.48249H9.45235C9.86018 1.48249 10.1908 1.15054 10.1908 0.741173C10.1908 0.33181 9.86018 0 9.45235 0H6.54765C6.13982 0 5.80924 0.33181 5.80924 0.741173C5.80924 1.15054 6.13982 1.48249 6.54765 1.48249H7.26152V2.97426C3.22126 3.34303 0 6.74985 0 10.97C0 15.4081 3.57797 19 8.00007 19C12.4215 19 16 15.4087 16 10.97C16 9.07426 15.3495 7.27895 14.1551 5.84023ZM7.99993 17.5175C4.40318 17.5175 1.47683 14.5804 1.47683 10.97C1.47683 7.35983 4.40318 4.42268 7.99993 4.42268C11.5968 4.42268 14.523 7.35983 14.523 10.97C14.523 14.5804 11.5968 17.5175 7.99993 17.5175ZM11.4222 7.53509C11.7106 7.82457 11.7106 8.29395 11.4222 8.58328L8.52215 11.4942C8.23374 11.7837 7.76611 11.7837 7.47785 11.4942C7.18945 11.2047 7.18945 10.7353 7.47785 10.446L10.3778 7.53509C10.6662 7.24561 11.1338 7.24561 11.4222 7.53509Z"
                fill="black"
              />
            </svg>
          </div>
        </div>

        <div className="next__actions ml-10 flex items-center justify-center">
          <div className="prev flex items-center justify-center click:scale">
            <svg
              className="w-[7px]"
              viewBox="0 0 6 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.84494 0.155864C6.03289 0.344828 6.04998 0.640524 5.8962 0.848894L5.84494 0.908591L1.27835 5.49997L5.84494 10.0913C6.03289 10.2803 6.04998 10.576 5.8962 10.7844L5.84494 10.8441C5.65699 11.033 5.36287 11.0502 5.15562 10.8956L5.09624 10.8441L0.155061 5.87633C-0.0328918 5.68737 -0.0499783 5.39167 0.103801 5.1833L0.155061 5.12361L5.09624 0.155864C5.30299 -0.0519954 5.63819 -0.0519954 5.84494 0.155864Z"
                fill="black"
              />
            </svg>

            <h1 className=" ml-3 text-md">Orqaga</h1>
          </div>
          <div
            className="| px-7 py-2 ml-10 | flex items-center justify-center bg-[#017AFF] text-white font-bold rounded-[7px] click:scale"
            onClick={() => toggleMenu()}
          >
            <h1 className="font-bold mr-3 text-lg">Davom</h1>
            <svg
              className="w-[9px] transform rotate-180"
              viewBox="0 0 6 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.84494 0.155864C6.03289 0.344828 6.04998 0.640524 5.8962 0.848894L5.84494 0.908591L1.27835 5.49997L5.84494 10.0913C6.03289 10.2803 6.04998 10.576 5.8962 10.7844L5.84494 10.8441C5.65699 11.033 5.36287 11.0502 5.15562 10.8956L5.09624 10.8441L0.155061 5.87633C-0.0328918 5.68737 -0.0499783 5.39167 0.103801 5.1833L0.155061 5.12361L5.09624 0.155864C5.30299 -0.0519954 5.63819 -0.0519954 5.84494 0.155864Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
