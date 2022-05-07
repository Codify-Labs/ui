import { useRef, useState } from "react";
import useWindowSize from "hooks/useWindowSize";

import { Article } from "./components";
import IDE from "./IDE";
import { App } from "components/Layout/App";
import Logo from "components/Logo";
import Progress from "#/#home/cmp/Progress";
import { Disclosure, Transition } from "@headlessui/react";
import HamburgerMenu from "react-hamburger-menu";
import { Dialog } from "@headlessui/react";
import { Collapse } from "react-collapse";
import chai from "chai";
window.chai = chai;

const config = {
  files: {
    "/index.html": {
      code: `<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
      <h1>Alhamdulillah!</h1>
  </body>
</html>
`.trim(),
    },
    "/index.js": {
      code: `import "./style.css"`,
    },
    "/style.css": {
      code: `h1 {
  color: blue;
  border-bottom: 1px dotted blue;
}`.trim(),
    },
  },
  dependencies: {},
  entry: "index.js",
};

const tests = {
  0: {
    code: (files) => {
      let passed, message;
      console.log(files);
      try {
        window.chai.assert.match(
          files["/index.html"].code,
          /<h1>.*<\/h1>/,
          `\`Assalom, Dunyo!\` - matnini \`<h1>\` tegi orasiga yozilganiga ishonch xosil qiling!`
        );

        passed = true;
      } catch (err) {
        passed = false;
        message = `\`Assalom, Dunyo!\` - matnini \`<h1>\` tegi orasiga yozilganiga ishonch xosil qiling!`;
      }

      return { passed, message };
    },
  },

  1: {
    code: (files) => {
      let passed, message;

      try {
        window.chai.assert.match(
          files["/style.css"].code,
          /h1.*\{\s+color:.*[a-zA-Z].*\s+\}/,
          `\`Assalom, Dunyo!\` - matnini \`<h1>\` tegi orasiga yozilganiga ishonch xosil qiling!`
        );

        passed = true;
      } catch (err) {
        passed = false;
        message = `\`style.css\`da sarlavhani tanlab, \`color: red;\` qiymatini bering!`;
      }

      return { passed, message };
    },
  },
};

const articles = [
  {
    id: 2,
    slug: "/html-ro'yxat",
    title: "HTML - Sarlavhalar",
    type: "article",
    completed: true,
  },

  {
    id: 3,
    slug: "/matin-paragraaf",
    title: "Matin (paragraf)",
    type: "exercise",
    completed: true,
  },

  {
    id: 4,
    slug: "/block-va-inline-teglar",
    title: "“block” va “inline” Teglar",
    type: "project",
    completed: false,
  },
];

export default function Lesson() {
  const [height] = useWindowSize();
  const header = useRef();
  const [sidebar, setSidebar] = useState(false);

  function runTests(files) {
    // Check the user submitted code ...
  }

  return (
    <App>
      <App.Header className="z-[10000] px-3">
        <Transition show={sidebar}>
          <Dialog
            onClose={() => setSidebar(false)}
            className="fixed inset-0 z-50 overflow-y-auto | flex"
          >
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="-translate-x-1/2"
              enterTo="opacity-100 translate-x-0"
              leave="opacity-100 -translate-x-12 duration-300"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 -translate-x-1/2"
              className={`w-1/3 z-50 fixed inset-0`}
            >
              <div className="h-screen w-full z-[10000] bg-white shadow-300 | px-4 py-5 | overflow-y-auto">
                <div className="flex">
                  <div className="img | h-20 w-20 fcc shrink-0 grow-0">
                    <img
                      src="https://i.ibb.co/Tr8Nntq/htmll.png"
                      className="h-full object-contain"
                    />
                  </div>
                  <div className="w-4/5 | pl-3">
                    <div className="flex justify-between items-end | pb-5">
                      <h2 className="uppercase | font-bold text-3xl | text-gray-primary">
                        html
                      </h2>
                      <p className="text-sm font-bold | text-gray-primary">
                        20%
                      </p>
                    </div>
                    <Progress total={35} />
                  </div>
                </div>

                <div className="cirriculum | pt-7 | space-y-7">
                  <Disclosure
                    defaultOpen={true}
                    className={`outline-none focus:outline-none`}
                  >
                    {({ open }) => (
                      <div className="module | pb-5">
                        <Disclosure.Button className="w-full outline-none focus:outline-none">
                          <div className="module:button | border-[0.25px] fcb | cursor-pointer | px-3 py-3">
                            <div className="fc | space-x-5">
                              <div className="w-6 h-6 | bg-gray-primary rounded-full text-white fcc">
                                1
                              </div>
                              <h1 className="text-xl">HTML - Kirish</h1>
                            </div>
                            <div
                              className={`duration-400 ${open && "rotate-90"}`}
                            >
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

                        <Collapse isOpened={open}>
                          <div className="pt-5 px-2 border-[0.25px] border-y-0">
                            {articles.map((article, index) => (
                              <ArticleProgressCard
                                config={article}
                                active={index === 2}
                                key={index}
                                last={index + 1 === articles.length}
                              />
                            ))}
                          </div>
                        </Collapse>
                      </div>
                    )}
                  </Disclosure>
                </div>
              </div>
            </Transition.Child>

            <Transition.Child
              as="div"
              enter="ease-out duration-100"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              // leave="ease-in duration-200"
              // leaveFrom="opacity-100"
              // leaveTo="opacity-0"
            >
              <Dialog.Overlay className="w-full h-full fixed inset-0 bg-gray-300 opacity-50" />
            </Transition.Child>
          </Dialog>
        </Transition>

        <header
          className={` w-full py-2 flex items-center justify-between | relative`}
          style={{
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.01)",
          }}
          ref={header}
        >
          <div className="flex items-center justify-center">
            <Logo />
            <button className={`ml-12 outline-none focus:outline-none`}>
              <div
                className="menu h-10 w-10 flex items-center justify-center hover:bg-[#F6F6F6] duration-200 cursor-pointer"
                onClick={() => setSidebar(!sidebar)}
              >
                <ul>
                  <HamburgerMenu
                    isOpen={sidebar}
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
            </button>
          </div>

          <div className="title fcc">
            <h1 className="text-gray-primary">7. HTML - Jadval Yaratish</h1>
          </div>

          <div className="flex items-center justify-center">
            <div className="next__actions ml-10 flex items-center justify-center">
              <div className="| px-5 py-2 | flex items-center justify-center hover:bg-gray-100 rounded-[2px] click:scale | duration-150">
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

                <h1 className="ml-3 text-md">Orqaga</h1>
              </div>
              <div className="| px-7 py-2 ml-7 | flex items-center justify-center bg-[#017AFF] text-white font-bold rounded-[2px] click:scale">
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

      <App.Body className="relative">
        <section
          className="w-full | flex"
          style={{
            height: `${height - header?.current?.offsetHeight + 0.5}px`,
          }}
        >
          <Article width={`33.3333%`} />
          <div className="w-[66.6666%] flex relative bg-gray-primary">
            <IDE
              config={config}
              onTestRun={runTests}
              onRestore={() => console.log(`Restore`)}
            />
          </div>
        </section>
      </App.Body>
    </App>
  );
}

function ArticleProgressCard({ config: article, active, last }) {
  const icons = {
    project: (
      <svg
        className="h-5 mr-3"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.80006 1.00006L2.74973 1.00003C2.52128 0.999813 2.32435 0.999625 2.14989 1.04151C1.60142 1.17318 1.17318 1.60142 1.04151 2.14989C0.999625 2.32435 0.999813 2.52128 1.00003 2.74973L1.00006 2.80006V5.20006L1.00003 5.25039C0.999813 5.47884 0.999625 5.67578 1.04151 5.85023C1.17318 6.39871 1.60142 6.82694 2.14989 6.95862C2.32435 7.0005 2.52128 7.00031 2.74973 7.0001L2.80006 7.00006H5.20006L5.25039 7.0001C5.47884 7.00031 5.67578 7.0005 5.85023 6.95862C6.39871 6.82694 6.82694 6.39871 6.95862 5.85023C7.0005 5.67578 7.00031 5.47884 7.0001 5.25039L7.00006 5.20006V2.80006L7.0001 2.74973C7.00031 2.52128 7.0005 2.32435 6.95862 2.14989C6.82694 1.60142 6.39871 1.17318 5.85023 1.04151C5.67578 0.999625 5.47884 0.999813 5.25039 1.00003L5.20006 1.00006H2.80006ZM2.38334 2.01388C2.42638 2.00355 2.49228 2.00006 2.80006 2.00006H5.20006C5.50785 2.00006 5.57375 2.00355 5.61679 2.01388C5.79961 2.05777 5.94236 2.20052 5.98625 2.38334C5.99658 2.42638 6.00006 2.49228 6.00006 2.80006V5.20006C6.00006 5.50785 5.99658 5.57375 5.98625 5.61679C5.94236 5.79961 5.79961 5.94236 5.61679 5.98625C5.57375 5.99658 5.50785 6.00006 5.20006 6.00006H2.80006C2.49228 6.00006 2.42638 5.99658 2.38334 5.98625C2.20052 5.94236 2.05777 5.79961 2.01388 5.61679C2.00355 5.57375 2.00006 5.50785 2.00006 5.20006V2.80006C2.00006 2.49228 2.00355 2.42638 2.01388 2.38334C2.05777 2.20052 2.20052 2.05777 2.38334 2.01388ZM9.80006 1.00006L9.74973 1.00003C9.52128 0.999813 9.32435 0.999625 9.14989 1.04151C8.60142 1.17318 8.17318 1.60142 8.04151 2.14989C7.99962 2.32435 7.99981 2.52128 8.00003 2.74973L8.00006 2.80006V5.20006L8.00003 5.25039C7.99981 5.47884 7.99962 5.67578 8.04151 5.85023C8.17318 6.39871 8.60142 6.82694 9.14989 6.95862C9.32435 7.0005 9.52128 7.00031 9.74973 7.0001L9.80006 7.00006H12.2001L12.2504 7.0001C12.4788 7.00031 12.6758 7.0005 12.8502 6.95862C13.3987 6.82694 13.8269 6.39871 13.9586 5.85023C14.0005 5.67578 14.0003 5.47884 14.0001 5.25039L14.0001 5.20006V2.80006L14.0001 2.74973C14.0003 2.52128 14.0005 2.32435 13.9586 2.14989C13.8269 1.60142 13.3987 1.17318 12.8502 1.04151C12.6758 0.999625 12.4788 0.999813 12.2504 1.00003L12.2001 1.00006H9.80006ZM9.38334 2.01388C9.42638 2.00355 9.49228 2.00006 9.80006 2.00006H12.2001C12.5078 2.00006 12.5737 2.00355 12.6168 2.01388C12.7996 2.05777 12.9424 2.20052 12.9862 2.38334C12.9966 2.42638 13.0001 2.49228 13.0001 2.80006V5.20006C13.0001 5.50785 12.9966 5.57375 12.9862 5.61679C12.9424 5.79961 12.7996 5.94236 12.6168 5.98625C12.5737 5.99658 12.5078 6.00006 12.2001 6.00006H9.80006C9.49228 6.00006 9.42638 5.99658 9.38334 5.98625C9.20052 5.94236 9.05777 5.79961 9.01388 5.61679C9.00354 5.57375 9.00006 5.50785 9.00006 5.20006V2.80006C9.00006 2.49228 9.00354 2.42638 9.01388 2.38334C9.05777 2.20052 9.20052 2.05777 9.38334 2.01388ZM2.74973 8.00003L2.80006 8.00006H5.20006L5.25039 8.00003C5.47884 7.99981 5.67578 7.99962 5.85023 8.04151C6.39871 8.17318 6.82694 8.60142 6.95862 9.14989C7.0005 9.32435 7.00031 9.52128 7.0001 9.74973L7.00006 9.80006V12.2001L7.0001 12.2504C7.00031 12.4788 7.0005 12.6758 6.95862 12.8502C6.82694 13.3987 6.39871 13.8269 5.85023 13.9586C5.67578 14.0005 5.47884 14.0003 5.25039 14.0001L5.20006 14.0001H2.80006L2.74973 14.0001C2.52128 14.0003 2.32435 14.0005 2.14989 13.9586C1.60142 13.8269 1.17318 13.3987 1.04151 12.8502C0.999625 12.6758 0.999813 12.4788 1.00003 12.2504L1.00006 12.2001V9.80006L1.00003 9.74973C0.999813 9.52128 0.999625 9.32435 1.04151 9.14989C1.17318 8.60142 1.60142 8.17318 2.14989 8.04151C2.32435 7.99962 2.52128 7.99981 2.74973 8.00003ZM2.80006 9.00006C2.49228 9.00006 2.42638 9.00354 2.38334 9.01388C2.20052 9.05777 2.05777 9.20052 2.01388 9.38334C2.00355 9.42638 2.00006 9.49228 2.00006 9.80006V12.2001C2.00006 12.5078 2.00355 12.5737 2.01388 12.6168C2.05777 12.7996 2.20052 12.9424 2.38334 12.9862C2.42638 12.9966 2.49228 13.0001 2.80006 13.0001H5.20006C5.50785 13.0001 5.57375 12.9966 5.61679 12.9862C5.79961 12.9424 5.94236 12.7996 5.98625 12.6168C5.99658 12.5737 6.00006 12.5078 6.00006 12.2001V9.80006C6.00006 9.49228 5.99658 9.42638 5.98625 9.38334C5.94236 9.20052 5.79961 9.05777 5.61679 9.01388C5.57375 9.00354 5.50785 9.00006 5.20006 9.00006H2.80006ZM9.80006 8.00006L9.74973 8.00003C9.52128 7.99981 9.32435 7.99962 9.14989 8.04151C8.60142 8.17318 8.17318 8.60142 8.04151 9.14989C7.99962 9.32435 7.99981 9.52128 8.00003 9.74973L8.00006 9.80006V12.2001L8.00003 12.2504C7.99981 12.4788 7.99962 12.6758 8.04151 12.8502C8.17318 13.3987 8.60142 13.8269 9.14989 13.9586C9.32435 14.0005 9.52128 14.0003 9.74973 14.0001L9.80006 14.0001H12.2001L12.2504 14.0001C12.4788 14.0003 12.6758 14.0005 12.8502 13.9586C13.3987 13.8269 13.8269 13.3987 13.9586 12.8502C14.0005 12.6758 14.0003 12.4788 14.0001 12.2504L14.0001 12.2001V9.80006L14.0001 9.74973C14.0003 9.52128 14.0005 9.32435 13.9586 9.14989C13.8269 8.60142 13.3987 8.17318 12.8502 8.04151C12.6758 7.99962 12.4788 7.99981 12.2504 8.00003L12.2001 8.00006H9.80006ZM9.38334 9.01388C9.42638 9.00354 9.49228 9.00006 9.80006 9.00006H12.2001C12.5078 9.00006 12.5737 9.00354 12.6168 9.01388C12.7996 9.05777 12.9424 9.20052 12.9862 9.38334C12.9966 9.42638 13.0001 9.49228 13.0001 9.80006V12.2001C13.0001 12.5078 12.9966 12.5737 12.9862 12.6168C12.9424 12.7996 12.7996 12.9424 12.6168 12.9862C12.5737 12.9966 12.5078 13.0001 12.2001 13.0001H9.80006C9.49228 13.0001 9.42638 12.9966 9.38334 12.9862C9.20052 12.9424 9.05777 12.7996 9.01388 12.6168C9.00354 12.5737 9.00006 12.5078 9.00006 12.2001V9.80006C9.00006 9.49228 9.00354 9.42638 9.01388 9.38334C9.05777 9.20052 9.20052 9.05777 9.38334 9.01388Z"
          fill="#060A2E"
        />
      </svg>
    ),
    article: (
      <svg
        className="h-5 | mr-3"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.22 1L5.19557 1H5.19557C4.69259 0.999992 4.27988 0.999985 3.94614 1.03172C3.59958 1.06467 3.28689 1.13533 3.00275 1.30946C2.72019 1.48261 2.48261 1.72019 2.30946 2.00275C2.13533 2.28689 2.06467 2.59958 2.03172 2.94614C1.99999 3.27988 1.99999 3.69258 2 4.19556V4.19557V4.19557V4.19557L2 4.22V10.78L2 10.8044C1.99999 11.3074 1.99999 11.7201 2.03172 12.0539C2.06467 12.4004 2.13533 12.7131 2.30946 12.9972C2.48261 13.2798 2.72019 13.5174 3.00275 13.6905C3.28689 13.8647 3.59958 13.9353 3.94614 13.9683C4.27989 14 4.69259 14 5.19558 14H5.22H9.78H9.80442C10.3074 14 10.7201 14 11.0539 13.9683C11.4004 13.9353 11.7131 13.8647 11.9972 13.6905C12.2798 13.5174 12.5174 13.2798 12.6905 12.9972C12.8647 12.7131 12.9353 12.4004 12.9683 12.0539C13 11.7201 13 11.3074 13 10.8044V10.78V4.22V4.19558C13 3.69259 13 3.27988 12.9683 2.94614C12.9353 2.59958 12.8647 2.28689 12.6905 2.00275C12.5174 1.72019 12.2798 1.48261 11.9972 1.30946C11.7131 1.13533 11.4004 1.06467 11.0539 1.03172C10.7201 0.999985 10.3074 0.999992 9.80443 1L9.78 1H5.22ZM3.52525 2.1621C3.62586 2.10044 3.76743 2.05322 4.0408 2.02723C4.32161 2.00053 4.68657 2 5.22 2H9.78C10.3134 2 10.6784 2.00053 10.9592 2.02723C11.2326 2.05322 11.3741 2.10044 11.4747 2.1621C11.6228 2.2528 11.7472 2.37724 11.8379 2.52525C11.8996 2.62586 11.9468 2.76743 11.9728 3.0408C11.9995 3.32161 12 3.68657 12 4.22V10.78C12 11.3134 11.9995 11.6784 11.9728 11.9592C11.9468 12.2326 11.8996 12.3741 11.8379 12.4748C11.7472 12.6228 11.6228 12.7472 11.4747 12.8379C11.3741 12.8996 11.2326 12.9468 10.9592 12.9728C10.6784 12.9995 10.3134 13 9.78 13H5.22C4.68657 13 4.32161 12.9995 4.0408 12.9728C3.76743 12.9468 3.62586 12.8996 3.52525 12.8379C3.37724 12.7472 3.2528 12.6228 3.1621 12.4748C3.10044 12.3741 3.05322 12.2326 3.02723 11.9592C3.00053 11.6784 3 11.3134 3 10.78V4.22C3 3.68657 3.00053 3.32161 3.02723 3.0408C3.05322 2.76743 3.10044 2.62586 3.1621 2.52525C3.2528 2.37724 3.37724 2.2528 3.52525 2.1621ZM5 10C4.72386 10 4.5 10.2239 4.5 10.5C4.5 10.7761 4.72386 11 5 11H8C8.27614 11 8.5 10.7761 8.5 10.5C8.5 10.2239 8.27614 10 8 10H5ZM4.5 7.5C4.5 7.22386 4.72386 7 5 7H10C10.2761 7 10.5 7.22386 10.5 7.5C10.5 7.77614 10.2761 8 10 8H5C4.72386 8 4.5 7.77614 4.5 7.5ZM5 4C4.72386 4 4.5 4.22386 4.5 4.5C4.5 4.77614 4.72386 5 5 5H10C10.2761 5 10.5 4.77614 10.5 4.5C10.5 4.22386 10.2761 4 10 4H5Z"
          fill="#05192D"
        />
      </svg>
    ),

    exercise: (
      <svg
        className="h-5 mr-3"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.96424 2.68558C10.0668 2.42919 9.94209 2.13821 9.68569 2.03565C9.4293 1.93309 9.13832 2.0578 9.03576 2.31419L5.03576 12.3142C4.9332 12.5706 5.05791 12.8616 5.3143 12.9641C5.5707 13.0667 5.86168 12.942 5.96424 12.6856L9.96424 2.68558ZM3.85355 5.14634C4.04882 5.3416 4.04882 5.65818 3.85355 5.85344L2.20711 7.49989L3.85355 9.14634C4.04882 9.3416 4.04882 9.65818 3.85355 9.85344C3.65829 10.0487 3.34171 10.0487 3.14645 9.85344L1.14645 7.85344C1.05268 7.75967 1 7.6325 1 7.49989C1 7.36728 1.05268 7.2401 1.14645 7.14634L3.14645 5.14634C3.34171 4.95107 3.65829 4.95107 3.85355 5.14634ZM11.1464 5.14634C11.3417 4.95107 11.6583 4.95107 11.8536 5.14634L13.8536 7.14634C13.9473 7.2401 14 7.36728 14 7.49989C14 7.6325 13.9473 7.75967 13.8536 7.85344L11.8536 9.85344C11.6583 10.0487 11.3417 10.0487 11.1464 9.85344C10.9512 9.65818 10.9512 9.3416 11.1464 9.14634L12.7929 7.49989L11.1464 5.85344C10.9512 5.65818 10.9512 5.3416 11.1464 5.14634Z"
          fill="#05192D"
        />
      </svg>
    ),
  };
  return (
    <div className="article fcb | relative | pb-3 | flex-grow">
      <h3
        className={`mr-3 px-3 py-1 text-gray-primary | cursor-pointer | fc flex-1 hover:bg-gray-100 duration-100 ${
          article.completed && "opacity-40"
        } ${active && "font-bold bg-gray-100"}`}
      >
        {icons[article.type]}
        {article.title}
      </h3>

      {!last && (
        <div className="h-full top-1/4 right-[1.4rem] w-0.5 bg-[#05F300] absolute"></div>
      )}

      {article.completed ? (
        <div className="w-6 h-6 bg-[#05F300] rounded-[3px] fcc relative | mr-3">
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
      ) : (
        <div className="w-6 h-6 bg-[#E0E0E0] rounded-[3px] fcc relative | mr-3"></div>
      )}
    </div>
  );
}
