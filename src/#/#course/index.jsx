import Button from "components/Button";
import Header from "components/Header";
import { App } from "components/Layout/App";
import check from "utils/iff";
import { Disclosure, Transition } from "@headlessui/react";
import { Collapse } from "react-collapse";
import Footer from "components/Footer";
import cn from "classnames";
import Progress from "components/Progress";
import useScrollToTop from "helpers/scrollToTop";

const style = {
  h1: `font-bold text-5xl text-gray-primary`,
  h2: `font-bold text-4xl text-gray-primary`,
  h3: `font-bold text-3xl text-gray-primary`,
  h4: `font-bold text-2xl text-gray-primary`,
  p: `text-gray-primary text-base pt-5`,
  circle: `w-72 h-64 bg-blue-700 absolute left-[-10rem] top-0 rounded-full blur-[50px] opacity-30`,
  circle2: `w-full h-full bg-blue-700 absolute inset-0 blur-[100px] opacity-[14%]`,
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

const slug = `what-is-jsx`;

function Course(props) {
  useScrollToTop();

  return (
    <>
      <App className="scroll-white">
        <App.Header className="bg-glass-100">
          <Header />
        </App.Header>

        <App.Container className="px-20 space-y-40">
          <div className={`fcc flex-col space-y-10 pt-20`}>
            <div className={style.circle + ` move`}></div>

            <h1 className={style.h1}>HTML</h1>

            {check(false)
              .then(<Button href={`/course/${slug}/start`}>Boshlash</Button>)
              .else(<Button href={`/course/${slug}/resume`}>Davom</Button>)}
          </div>

          <div className={`relative space-y-20`}>
            <div className="flex">
              <div className={`w-1/6 h-36 fcc shrink-0`}>
                <img
                  src="https://i.ibb.co/Tr8Nntq/htmll.png"
                  alt="HTML-COURSE_LOGO"
                  className={`h-full`}
                />
              </div>

              <div className={`w-5/6 shrink-0`}>
                <h2 className={style.h2}>HTML</h2>

                <p className={style.p}>
                  HTML (Hypertext Markup Language — hipermatnli belgilash tili)
                  — SGML (Standard Generalized Markup Language — standart
                  umumlashtirilgan belgilash tili) ga asoslangan va xalqaro ISO
                  8879 standartiga mos keluvchi til, xalqaro toʻrda ishlatiladi.
                  Dunyodagi barcha saytlar asosi.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-4 | pt-20">
              {[
                {
                  num: 3,
                  h1: `Module`,
                },
                {
                  num: 220,
                  h1: `Maqola`,
                },
                {
                  num: 32,
                  h1: `Mashq`,
                },
                {
                  num: `3+`,
                  h1: `Proekt`,
                },
              ].map((m) => (
                <div className="fcc flex-col | space-y-3">
                  <h3 className={`${style.h1}`}>{m.num}</h3>

                  <h3 className={style.h2}>{m.h1}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="modules |  space-y-20">
            <div className="space-y-5 px-10">
              <h2 className={cn(style.h3, `uppercase`)}>
                HTML kursida yoritiladigan mavzular:
              </h2>

              <p>
                Bu HTML kursi yakuniga to’laligicha tugatgandan so’ng qanday
                mavzularni, va qanday ko’nikmalarga ega bo’lasiz:
              </p>
            </div>

            <div className="grid grid-cols-3 | relative">
              <div className={style.circle2}></div>
              {[
                [
                  "Arrays",
                  "Functions",
                  "Arrow functions",
                  "Advanced Arrays",
                  "Destructuring",
                  "Optional chaining",
                ],
                [
                  "Classes",
                  "Reduce",
                  "Callbacks",
                  "Asynchronous logic",
                  "Advanced classes",
                  "Prototypical inheritance",
                  "JSON",
                  "Promises",
                  "Fetch",
                  "Work with real APIs",
                ],
                [
                  "Lexical scope",
                  "Async/await",
                  "DOM Selection",
                  "DOM basics",
                  "Advanced DOM",
                  "DOM Events",
                  "Managers Module",
                  "Bundlers Modules",
                ],
                [
                  "Dynamic",
                  "imports EcmaScript Legacy",
                  "var Legacy",
                  "topics",
                ],
                [
                  "Window object",
                  "Closures",
                  "Loops",
                  "iteration",
                  "The event loop",
                ],
              ].map((num) => (
                <ul className="no_padding_top space-y-2 pl-14 py-10 border-r border-b border-[#226EDF] border-opacity-50">
                  {num.map((name) => (
                    <li className="text-[#226EDF] list-disc ">{name}</li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <div className="projects space-y-10">
            <div className="space-y-5 px-10">
              <h2 className={cn(style.h3, ` uppercase`)}>
                SIZ BILAN YARATAMIZ:
              </h2>

              <p>
                Shu proektlar InshaAllah yakunda sizning porfoliongizda bo’ladi:
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10">
              {[
                {
                  img: `/pr_1.png`,
                  title: `🔥 Pokemon Game`,
                  desc: `Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s`,
                },
                {
                  img: `https://static.tildacdn.com/tild3562-6231-4832-b932-333539346135/1638657495780.png`,
                  title: `📝 Todo ilova`,
                  desc: `Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s`,
                },
                {
                  img: `https://static.tildacdn.com/tild3432-3839-4438-b237-336139383237/Frame_11_3.jpg`,
                  title: `✨ FAQ`,
                  desc: `Animatsiya, \`useState\` va React yordamida olgan bilimlarimizni qiyin bo'lgan FAQ saytini yaratamiz!`,
                },
              ].map((p) => (
                <div className="grid grid-cols-3 | border border-gray-primary">
                  <div className="img h-48 col-span-1 overflow-hidden border-r border-gray-primary fcc">
                    <img
                      src={p.img}
                      alt="Project Logo"
                      className="h-full object-contain"
                    />
                  </div>

                  <div className="col-span-2 | px-5 py-3">
                    <h4 className={style.h4}>{p.title}</h4>
                    <p className={style.p}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="progress | px-10 space-y-10">
            <div className="space-y-5">
              <h2 className={cn(style.h3, ` uppercase`)}>
                HTML kursi o’quv rejasi:
              </h2>
            </div>

            <div className="space-y-5">
              <div className="fcb">
                <h4 className={style.h4}>17%</h4>
                <SvgCup className="h-8" />
              </div>

              <Progress total={70} size={`sm`} />
            </div>

            <div className="cirriculum | pt-7">
              <>
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
                              2
                            </div>
                            <h1 className="text-xl">HTML - Form</h1>
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
              </>
            </div>
          </div>

          <div className="cta pb-20">
            <div className={`fcc flex-col`}>
              <div className={style.circle + ` move`}></div>

              <h3 className={style.h2 + ` text-center w-4/5 pb-20`}>
                Haliham boshlamadingizmi?
              </h3>

              {check(true)
                .then(
                  <Button href={`/course/${slug}/resume`}>Boshladik</Button>
                )
                .else(<Button href={`/course/${slug}/resume`}>Davom</Button>)}
            </div>
          </div>
        </App.Container>

        <App.Footer className="shadow-300 py-4">
          <Footer />
        </App.Footer>
      </App>
    </>
  );
}

function SvgCup(props) {
  return (
    <svg
      className="h-12"
      {...props}
      viewBox="0 0 70 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_464_699)">
        <path
          d="M50.4157 31.4269C54.5818 30.7605 58.355 28.9897 61.3702 26.2772C65.2721 22.7654 67.4212 18.1326 67.4212 13.1733C67.4212 9.4436 64.0384 6.44163 59.8802 6.44163H51.8886C51.8886 6.3128 51.8886 6.21067 51.8886 6.13081V1.17707C51.8886 0.465486 51.1774 0 50.387 0H19.61C18.8195 0 18.2487 0.465486 18.2487 1.17707V6.33039C18.2487 6.34627 18.1806 6.31292 18.1811 6.44175H10.1158C5.95945 6.44175 2.57812 9.44262 2.57812 13.1722C2.57812 18.1219 4.72816 22.7656 8.63244 26.2796C11.6139 28.9614 15.4883 30.7659 19.6179 31.4275C20.8555 33.9688 22.8326 36.1405 25.3773 37.7455C26.8028 38.6445 28.412 39.3257 29.9865 39.7851V47.5399H29.3214C26.137 47.5399 23.5448 49.8072 23.5448 52.6732V53.9184C20.3954 53.9424 17.8188 56.2638 17.8188 59.1149V61.6473C17.8188 62.3589 18.4612 63.0001 19.2518 63.0001H50.7447C51.5352 63.0001 52.1748 62.3589 52.1748 61.6473V59.1149C52.1748 56.2638 49.598 53.9424 46.4488 53.9184V52.6732C46.4488 49.8072 43.8595 47.5399 40.6751 47.5399H40.0072V39.7911C44.588 38.5155 48.3677 35.5188 50.4157 31.4269ZM11.2399 14.1718H18.2486V22.9743C14.3835 21.3572 11.6282 17.908 11.2399 14.1718ZM51.8886 14.1718H58.7984C58.4108 17.908 55.7536 21.3548 51.8886 22.9773V14.1718ZM59.8802 9.01835C62.46 9.01835 64.5585 10.8645 64.5585 13.1733C64.5585 17.4442 62.7073 21.4462 59.3463 24.4711C57.1255 26.4687 54.428 27.8654 51.4497 28.5896C51.6782 27.6632 51.8082 26.7179 51.8384 25.769C57.7016 23.8622 61.7097 18.8344 61.7097 13.1752C61.7097 12.2872 60.8889 11.595 59.8802 11.595H51.8886V9.01835H59.8802ZM21.1114 2.57672H49.0256V5.15345H21.1114V2.57672ZM10.6567 24.4436C7.29342 21.4166 5.44102 17.4348 5.44102 13.1733C5.44102 10.8645 7.53814 9.01835 10.1158 9.01835H18.2486V11.5951H10.1172C9.1141 11.5951 8.32851 12.2704 8.32851 13.1733C8.32851 16.1633 9.39683 18.9731 11.4179 21.3296C13.1544 23.3541 15.5378 24.9001 18.2114 25.7674C18.212 25.791 18.2409 27.325 18.5836 28.5806C15.6088 27.8513 12.852 26.4184 10.6567 24.4436ZM21.984 29.8272C21.9736 29.8027 21.984 29.7785 21.972 29.7547C21.6136 28.9001 21.1114 26.7493 21.1114 25.334V7.73005H49.0256V25.334C49.0256 26.6976 48.7035 28.1675 48.0856 29.8271C45.9133 34.7296 40.7847 37.8954 35.0238 37.8954C29.2824 37.8954 24.0356 34.6531 21.984 29.8272ZM49.3119 59.1149V60.4234H20.682V59.1149C20.682 57.6696 21.9899 56.5584 23.5956 56.5584H46.4011C48.0069 56.5582 49.3119 57.6696 49.3119 59.1149ZM43.586 52.6732V53.9817H26.4079V52.6732C26.4079 51.2279 27.7158 50.1166 29.3215 50.1166H40.6751C42.281 50.1166 43.586 51.2279 43.586 52.6732ZM37.1442 47.5399H32.8497V40.3458C33.5654 40.428 34.2835 40.472 35.0116 40.472C35.7321 40.472 36.4285 40.4286 37.1442 40.3487V47.5399Z"
          fill="#05192D"
        />
        <path
          d="M36.2482 29.6488C36.8847 29.8507 37.6176 30.0833 38.3673 30.0833C38.8283 30.0833 39.2959 29.9953 39.7513 29.7582C40.9765 29.1203 41.2235 27.8999 41.4222 26.919C41.5027 26.5212 41.5939 26.0702 41.7204 25.8735C41.8329 25.6985 42.2236 25.4042 42.5377 25.1676C43.3544 24.552 44.4732 23.7091 44.4732 22.3941C44.4732 21.0792 43.3546 20.2362 42.5377 19.6206C42.2238 19.3841 41.8329 19.0895 41.7206 18.9147C41.594 18.7178 41.5027 18.267 41.4222 17.869C41.2235 16.8884 40.9765 15.6679 39.7516 15.0302C38.556 14.4076 37.2766 14.8133 36.2483 15.1395C35.8088 15.279 35.3103 15.4371 35.0252 15.4371C34.7402 15.4371 34.2418 15.279 33.8021 15.1395C32.7744 14.8135 31.495 14.4074 30.299 15.0302C29.0739 15.6681 28.8268 16.8885 28.6283 17.8694C28.5478 18.2672 28.4564 18.7181 28.33 18.9148C28.2175 19.0898 27.8267 19.3842 27.5127 19.6209C26.6959 20.2365 25.5771 21.0793 25.5771 22.3943C25.5771 23.7092 26.6958 24.5523 27.5127 25.1678C27.8266 25.4044 28.2175 25.699 28.3297 25.8737C28.4563 26.0706 28.5476 26.5215 28.6282 26.9194C28.8268 27.9001 29.0739 29.1206 30.2989 29.7583C31.4943 30.3808 32.7739 29.9751 33.802 29.6489C34.2416 29.5094 34.74 29.3513 35.0251 29.3513C35.3102 29.3513 35.8085 29.5094 36.2482 29.6488ZM32.8503 27.2188C32.5184 27.324 31.985 27.4932 31.7366 27.5057C31.6166 27.3053 31.5106 26.7821 31.4448 26.4572C31.3225 25.8528 31.1837 25.1678 30.808 24.5833C30.4427 24.0151 29.8876 23.5968 29.3507 23.1922C29.0464 22.9628 28.5465 22.586 28.448 22.3943C28.5464 22.2026 29.0464 21.8257 29.3507 21.5965C29.8875 21.1919 30.4427 20.7738 30.8081 20.2053C31.1837 19.6209 31.3225 18.9359 31.4448 18.3316C31.5106 18.0067 31.6164 17.4834 31.7366 17.2831C31.9849 17.2955 32.5184 17.4647 32.8503 17.57C33.5066 17.7782 34.2503 18.0141 35.0251 18.0141C35.7999 18.0141 36.5436 17.7782 37.1999 17.57C37.5318 17.4648 38.0652 17.2955 38.3136 17.2831C38.4335 17.4835 38.5396 18.0067 38.6054 18.3316C38.7277 18.936 38.8665 19.621 39.2422 20.2055C39.6075 20.7737 40.1626 21.192 40.6995 21.5965C41.0038 21.8259 41.5037 22.2026 41.6022 22.3943C41.5038 22.586 41.0038 22.9629 40.6995 23.1922C40.1627 23.5968 39.6075 24.0149 39.2421 24.5833C38.8665 25.1678 38.7277 25.8528 38.6054 26.4572C38.5396 26.7821 38.4338 27.3054 38.3136 27.5057C38.0653 27.4933 37.5318 27.3242 37.1999 27.2188C36.5436 27.0106 35.8 26.7747 35.0251 26.7747C34.2502 26.7747 33.5066 27.0106 32.8503 27.2188Z"
          fill="#05192D"
        />
      </g>
      <defs>
        <clipPath id="clip0_464_699">
          <rect width="70" height="63" fill="white" />
        </clipPath>
      </defs>
    </svg>
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

export default Course;
