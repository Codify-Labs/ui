import { useRef } from "react";
import useWindowSize from "hooks/useWindowSize";

import { Article } from "./components";
import IDE from "./IDE";
import { App } from "components/Layout/App";
import Logo from "components/Logo";
import Progress from "#/#home/cmp/Progress";
import { Disclosure, Transition } from "@headlessui/react";
import { Popover } from "@headlessui/react";
import HamburgerMenu from "react-hamburger-menu";
import { Sandpack, sandpackDark } from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";

export default function Lesson() {
  const [height] = useWindowSize();
  const header = useRef();

  return (
    <App>
      <Popover>
        {({ open }) => (
          <>
            <App.Header className="bg-glass-100 px-3">
              <header
                className={` w-full py-2 flex items-center justify-between | relative`}
                style={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.01)",
                }}
                ref={header}
              >
                <div className="flex items-center justify-center">
                  <Logo />
                  <Popover.Button
                    className={`ml-12 outline-none focus:outline-none`}
                  >
                    <div className="menu h-10 w-10 flex items-center justify-center hover:bg-[#F6F6F6] duration-200 cursor-pointer ">
                      <ul>
                        <HamburgerMenu
                          isOpen={open}
                          width={25}
                          height={15}
                          strokeWidth={1}
                          rotate={0}
                          color="#060A2E"
                          borderRadius={50}
                          animationDuration={0.3}
                        />
                      </ul>
                    </div>
                  </Popover.Button>
                </div>

                <div className="title fcc">
                  <h1 className="text-gray-primary">
                    7. HTML - Jadval Yaratish
                  </h1>
                </div>

                <div className="flex items-center justify-center">
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
                    <div className="| px-7 py-2 ml-10 | flex items-center justify-center bg-[#017AFF] text-white font-bold rounded-[7px] click:scale">
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
            </App.Header>
            <Transition
              enter="transition duration-200 ease-in"
              enterFrom="transform opacity-0"
              enterTo="transform opacity-100"
              leave="transition  duration-100 ease-in"
              leaveFrom="transform opacity-100"
              leaveTo="transform opacity-0"
            >
              <Popover.Panel>
                <div
                  className="menu absolute left-0 w-1/3 shadow-300 bg-white z-[1000] rounded-md | px-4 py-5 | overflow-y-auto"
                  style={{
                    height: `${height - header?.current?.offsetHeight - 20}px`,
                  }}
                >
                  <div className="fc">
                    <Progress total={35} />
                    <p className="text-blue-900 | text-sm font-bold mx-3">
                      20%
                    </p>
                  </div>

                  <div className="cirriculum | pt-7">
                    <Disclosure defaultOpen={true}>
                      <div className="module | pb-5">
                        <Disclosure.Button className="w-full">
                          <div className="module:button | border-b border-[#E0E0E0] fcb | cursor-pointer">
                            <h1 className="font-semibold text-xl">
                              HTML - Kirish
                            </h1>

                            <div className="svg">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="h-6"
                              >
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="30"
                                  d="M184 112l144 144-144 144"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </Disclosure.Button>
                        <Disclosure.Panel>
                          <div className="module:panel | pt-5 pl-5">
                            <div className="article fc | relative | pb-5">
                              <div className="w-6 h-6 bg-[#1EC71A] rounded-full fcc relative">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                  className="h-3.5 text-white z-20"
                                >
                                  <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="70"
                                    d="M416 128L192 384l-96-96"
                                  ></path>
                                </svg>
                              </div>

                              <div className="h-full top-1/4 left-[0.7rem] w-0.5 bg-[#1EC71A] absolute left-2/5"></div>

                              <h3 className="pl-5 | text-blue-900 font-semibold | cursor-pointer w-11/12">
                                HTML - Ro’yxat
                              </h3>
                            </div>

                            <div className="article fc | relative | pb-5">
                              <div className="w-6 h-6 bg-[#1EC71A] rounded-full fcc relative | z-20">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                  className="h-3.5 text-white z-20"
                                >
                                  <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="70"
                                    d="M416 128L192 384l-96-96"
                                  ></path>
                                </svg>
                              </div>

                              <div className="h-full top-1/4 left-[0.7rem] w-0.5 bg-blue-900 absolute left-2/5"></div>

                              <h3 className="pl-5 | text-blue-900 font-semibold | cursor-pointer w-11/12">
                                HTML - Sarlavhalar
                              </h3>
                            </div>

                            <div className="article fc | relative | pb-5">
                              <div className="w-6 h-6 bg-blue-900 rounded-full fcc relative | z-20 |">
                                <p className="w-2 h-2 bg-white rounded-full"></p>
                              </div>

                              <h3 className="pl-5 | text-blue-900 font-bold | ">
                                HTML - Iqtiboslar
                              </h3>
                            </div>
                          </div>
                        </Disclosure.Panel>
                      </div>
                    </Disclosure>

                    <Disclosure defaultOpen={true}>
                      <div className="module | pb-5">
                        <Disclosure.Button className="w-full">
                          <div className="module:button | border-b border-[#E0E0E0] fcb | cursor-pointer">
                            <h1 className="font-semibold text-xl">
                              HTML - Kirish
                            </h1>

                            <div className="svg">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="h-6"
                              >
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="30"
                                  d="M184 112l144 144-144 144"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </Disclosure.Button>

                        <Disclosure.Panel>
                          <div className="module:panel | pt-5 pl-5">
                            <div className="article fc | relative | pb-5">
                              <div className="w-6 h-6 bg-gray-200 rounded-full fcc relative"></div>

                              <div className="h-full top-1/4 left-[0.7rem] w-0.5 bg-gray-200 absolute left-2/5"></div>

                              <h3 className="pl-5 | text-blue-900 font-semibold | cursor-pointer w-11/12">
                                HTML - Kirish
                              </h3>
                            </div>
                            <div className="article fc | relative | pb-5">
                              <div className="w-6 h-6 bg-gray-200 rounded-full fcc relative | z-20 |"></div>

                              <h3 className="pl-5 | text-blue-900 font-bold | ">
                                HTML - Iqtiboslar
                              </h3>
                            </div>
                          </div>
                        </Disclosure.Panel>
                      </div>
                    </Disclosure>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>

      <App.Body className="relative">
        <section
          className="w-full | flex"
          style={{
            height: `${height - header?.current?.offsetHeight + 1}px`,
          }}
        >
          <Article width={`33.3333%`} />
          {/* <IDE env={`HTML`} width={`66.6667%`} /> */}
          <div className="w-2/3 h-full flex flex-col items-stretch relative bg-gray-primary">
            <IDE />
          </div>
        </section>
      </App.Body>
    </App>
  );
}
