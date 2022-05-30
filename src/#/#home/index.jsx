import { App } from "components/Layout/App";
import Logo from "components/Logo";
import { Link } from "react-router-dom";
import Progress from "./cmp/Progress";
import CourseCard from "./cmp/CourseCard";
import Header from "components/Header";
import useScrollToTop from "helpers/scrollToTop";

function Home(props) {
  useScrollToTop();

  return (
    <App className="scroll-white">
      <App.Header className="bg-glass-100">
        <Header />
      </App.Header>

      <App.Container>
        <section className="flex-col fc pt-20 | relative | space-y-10">
          <h1 className="text-5xl font-bold | text-gray-primary | relative">
            <span className="gradient-blue">O’rganing.</span>

            <span className="text-gray-primary absolute inset-0 | overlay-1">
              O’rganing.
            </span>
          </h1>
          <h1 className="text-5xl font-bold | text-gray-primary | relative">
            <span className="gradient-pink">Amaliyotta sinang.</span>
            <span className="text-gray-primary absolute inset-0 | overlay-2">
              Amaliyotta sinang.
            </span>
          </h1>
          <h1 className="text-5xl font-bold | text-gray-primary | relative">
            <span className="gradient-yellow">Kelajak kasbini o’rganing.</span>
            <span className="text-gray-primary absolute inset-0 | overlay-3">
              Kelajak kasbini o’rganing.
            </span>
          </h1>

          <div className="absolute top-1/4 right-0 h-20 pointer-events-none">
            <img
              src="https://i.ibb.co/Kj1DsJt/mouse-keyboard.png"
              alt="mouse"
              className="h-full object-contain"
            />
          </div>
        </section>

        <div className="fcc space-x-10 | pt-20">
          <button className="relative px-16 py-3 font-bold text-black group outline-none focus:outline-none">
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-transparent border-2 border-gray-primary group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-gray-primary active:bg-blue-700 duration-200"></span>
            <span className="relative text-white pointer-events-none | fcc">
              Boshlash
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 ml-5"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.13841 5.13807L10.2051 4.07137C11.0645 3.21201 12.5718 2.61563 14.0696 2.40167C14.8078 2.29622 15.5058 2.28966 16.0755 2.37498C16.6653 2.4633 17.0268 2.63595 17.1956 2.80477C17.3644 2.97357 17.5371 3.335 17.6254 3.92476C17.7107 4.49447 17.7041 5.19252 17.5987 5.93068C17.3847 7.42851 16.7883 8.93583 15.9289 9.79527L10.0003 15.7239L8.47171 14.1953C8.21136 13.9349 7.78925 13.9349 7.5289 14.1953C7.26855 14.4556 7.26855 14.8777 7.5289 15.1381L9.52892 17.1381C9.78927 17.3984 10.2114 17.3984 10.4717 17.1381L11.2013 16.4085L12.762 19.0097C12.8676 19.1857 13.0484 19.3033 13.2522 19.3283C13.4559 19.3534 13.6599 19.2832 13.805 19.1381L16.4717 16.4714C16.6201 16.323 16.6899 16.1135 16.6603 15.9057L16.0408 11.569L16.8717 10.7381C18.0123 9.59744 18.6826 7.7714 18.9186 6.11924C19.0382 5.2824 19.0524 4.4513 18.944 3.72728C18.8386 3.02331 18.6029 2.32643 18.1384 1.86193C17.6739 1.39745 16.977 1.16178 16.273 1.05635C15.549 0.947926 14.7179 0.962193 13.881 1.08173C12.2289 1.31774 10.4028 1.988 9.26225 3.12856L8.43128 3.95957L4.09461 3.34005C3.88688 3.31037 3.6773 3.38023 3.52893 3.52861L0.86226 6.19527C0.717097 6.34044 0.646909 6.54438 0.671992 6.74813C0.697076 6.95189 0.814633 7.13272 0.990668 7.23834L3.59185 8.79904L2.86228 9.5286C2.73725 9.65363 2.66702 9.8232 2.66701 10C2.66701 10.1768 2.73725 10.3464 2.86228 10.4714L4.86228 12.4714C5.12263 12.7318 5.54474 12.7318 5.80509 12.4714C6.06544 12.2111 6.06544 11.789 5.80509 11.5286L4.27649 10L5.13842 9.13808L9.13841 5.13807ZM13.466 17.5915L12.1731 15.4367L14.8622 12.7476L15.2932 15.7643L13.466 17.5915ZM4.56367 7.82721L7.25279 5.13808L4.23603 4.70712L2.40883 6.53432L4.56367 7.82721ZM3.1384 13.8047C3.39875 13.5444 3.39875 13.1223 3.1384 12.8619C2.87805 12.6016 2.45594 12.6016 2.19559 12.8619L0.86226 14.1953C0.60191 14.4556 0.60191 14.8777 0.86226 15.1381C1.12261 15.3984 1.54472 15.3984 1.80507 15.1381L3.1384 13.8047ZM5.13843 15.8048C5.39878 15.5444 5.39879 15.1223 5.13844 14.862C4.8781 14.6016 4.45599 14.6016 4.19563 14.8619L1.52893 17.5286C1.26858 17.7889 1.26857 18.211 1.52892 18.4714C1.78927 18.7317 2.21138 18.7317 2.47173 18.4714L5.13843 15.8048ZM7.1384 17.8047C7.39875 17.5444 7.39875 17.1223 7.1384 16.8619C6.87805 16.6016 6.45594 16.6016 6.19559 16.8619L4.86226 18.1953C4.60191 18.4556 4.60191 18.8777 4.86226 19.1381C5.12261 19.3984 5.54472 19.3984 5.80507 19.1381L7.1384 17.8047ZM12.6667 8.99847C13.5863 8.99847 14.3318 8.25298 14.3318 7.33338C14.3318 6.41378 13.5863 5.66829 12.6667 5.66829C11.7471 5.66829 11.0016 6.41378 11.0016 7.33338C11.0016 8.25298 11.7471 8.99847 12.6667 8.99847Z"
                  fill="white"
                />
              </svg>
            </span>
          </button>

          <button className="relative px-12 py-3 text-gray-400 group outline-none focus:outline-none">
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-transparent border-2 border-gray-400 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full border bg-white border-gray-400 text-gray-primary duration-200"></span>
            <span className="relative pointer-events-none">
              Ro’yxattan o’tish
            </span>
          </button>
        </div>

        <div className="courses | pt-40">
          <div className="available:courses">
            <div className="courses | grid xl:grid-cols-2 grid-cols-2 gap-x-20 gap-y-20 | xl:px-28 pt-5">
              <Link to="/course/react" className="relative">
                <CourseCard
                  image={"https://i.ibb.co/Tr8Nntq/htmll.png"}
                  progress={0}
                  language={`HTML`}
                  level={1}
                />
              </Link>

              <Link to="/course/react" className="relative">
                <CourseCard
                  image={"https://i.ibb.co/pPCpKXK/css.png"}
                  progress={10}
                  language={`CSS`}
                  level={2}
                />
              </Link>

              <Link to="/course/react" className="relative">
                <CourseCard
                  image={"https://i.ibb.co/MDwS9Db/Group-230-2.png"}
                  progress={33}
                  language={`Javascript`}
                  level={2}
                />
              </Link>

              <Link to="/course/react" className="relative">
                <CourseCard
                  image={"https://i.ibb.co/JnR1qXW/Group-230-1.png"}
                  progress={45}
                  language={`React JS`}
                  level={3}
                  new={true}
                />
              </Link>
            </div>
          </div>

          <div className="coming:courses | pt-36">
            <div className="available:courses">
              <h1 className="text-3xl font-bold px-28 | text-gray-primary uppercase">
                Tez orada:
              </h1>

              <div className="courses | pt-10 | grid xl:grid-cols-2 grid-cols-2 gap-x-20 gap-y-20 | xl:px-28">
                <div onClick={() => alert("Tez orata start beriladi!")}>
                  <CourseCard
                    image={"https://i.ibb.co/9VrT1qB/Group.png"}
                    progress={0}
                    language={`Vue JS`}
                    level={3}
                    wait={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="why:we | pt-28">
          <h1 className="title | text-3xl font-extrabold | text-gray-primary | pt-5 pb-10 | text-center uppercase">
            <span className="gradient-blue">Codify</span> qanday ishlaydi?
          </h1>

          <div className="start | flex items-center justify-between">
            <div className="info | w-1/2">
              <h1 className="title | text-3xl font-extrabold | text-gray-primary | pb-5">
                O’rganish.
              </h1>
              <p className="text-[#787878] text-sm w-3/4">
                Sizning kelajagingiz uchun professionallar tomonidan
                tayyorlangan eng yaxshi maqolalarni o'qing
              </p>

              <ul className="pt-5">
                <li className="| text-gray-primary | fc | mb-2">
                  <span className="text-lg mr-3">✔</span> Yoqimli interfeys
                </li>
                <li className="| text-gray-primary | fc | mb-2">
                  <span className="text-lg mr-3">✔</span> Qabul qilish oson
                </li>
                <li className="| text-gray-primary | fc | mb-2">
                  <span className="text-lg mr-3">✔</span> Interaktiv rejim
                </li>
              </ul>
            </div>

            <div className="h-96 w-[1px] bg-gradient-to-b from-gray-300 to-blue-900 | relative flex-col fcc">
              <div className="box | bg-gradient-blue w-8 h-8 fcc text-white rounded-full | ">
                1
              </div>
            </div>

            <div className="image | h-96 w-1/2">
              <img
                src="https://i.ibb.co/87D9wJ1/article.png"
                alt="codify.uz - Article"
                className="h-full object-contain mx-auto"
              />
            </div>
          </div>

          <div className="start | flex items-center justify-between">
            <div className="info | w-1/2">
              <h1 className="title | text-3xl font-extrabold | text-gray-primary | pb-5">
                Amaliyotta sinang.
              </h1>
              <p className="text-[#787878] text-sm w-3/4">
                Har bir kod qismini interaktiv IDEda sinab ko'ring
              </p>

              <ul className="pt-5">
                <li className="| text-gray-primary | fc | mb-2">
                  <span className="text-lg mr-3">✔</span> Engil Dasturlash
                  sharoiti (IDE)
                </li>
                <li className="| text-gray-primary | fc | mb-2">
                  <span className="text-lg mr-3">✔</span> Mini-Brauzerda Live
                  ko’rish
                </li>
                <li className="| text-gray-primary | fc | mb-2">
                  <span className="text-lg mr-3">✔</span> Interaktiv rejim
                </li>
              </ul>
            </div>

            <div className="h-96 w-[1px] bg-blue-900 | relative flex-col fcc">
              <div className="box | blue-gradient w-8 h-8 fcc text-white rounded-full | ">
                2
              </div>
            </div>

            <div className="image | h-96 w-1/2 |">
              <img
                src="https://i.ibb.co/q7H8cm4/editor.png"
                alt="codify.uz - Article"
                className="h-full object-contain mx-auto"
              />
            </div>
          </div>

          <div className="start | flex items-center justify-between">
            <div className="info | w-1/2">
              <h1 className="title | text-3xl font-extrabold | text-gray-primary | pb-5">
                Mustahkamlang.
              </h1>
              <p className="text-[#787878] text-sm w-3/4">
                Xar bir maqolada qo’shimcha, o’rta darajadagi, mashqlarni
                bajaring va bilimlaringizni mustahkamlang!
              </p>

              <ul className="pt-5">
                <li className="| text-gray-primary | fc | mb-2">
                  <span className="text-lg mr-3">✔</span> Yoqimli interfeys
                </li>
                <li className="| text-gray-primary | fc | mb-2">
                  <span className="text-lg mr-3">✔</span> Qabul qilish oson
                </li>
                <li className="| text-gray-primary | fc | mb-2">
                  <span className="text-lg mr-3">✔</span> Interaktiv rejim
                </li>
              </ul>
            </div>

            <div className="h-96 w-[1px] bg-gradient-to-b from-blue-900 to-white | relative flex-col fcc">
              <div className="box | blue-gradient w-8 h-8 fcc text-white rounded-full | ">
                3
              </div>
            </div>

            <div className="image | h-96 w-1/2 |">
              <img
                src="https://i.ibb.co/HTJ3VTh/exersice.png"
                alt="codify.uz - Article"
                className="h-full object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </App.Container>
      <App.Footer className="shadow-300 py-4">
        <div className="container fcb | relative">
          <h3 className="text-gray-primary | font-bold | duration-200 hover:text-blue-700 | cursor-pointer">
            Codify.uz <span className="opacity-0">spandasdsadasdasdad</span>
          </h3>

          <ul className="fc">
            <a href="https://www.instagram.com/codify.uz/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-5 text-gray-400 hover:text-gray-700 duration-200"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M12 7a5 5 0 100 10 5 5 0 000-10zm-3 5a3 3 0 106 0 3 3 0 00-6 0z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="currentColor"
                  d="M18 5a1 1 0 100 2 1 1 0 000-2z"
                ></path>
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M5 1a4 4 0 00-4 4v14a4 4 0 004 4h14a4 4 0 004-4V5a4 4 0 00-4-4H5zm14 2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>

            <a href="https://t.me/codifyuz" target="_blank" className="mx-5">
              <svg
                className="h-5 text-gray-400 hover:text-gray-700 duration-200"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="1">
                  <path
                    d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15Z"
                    fill="currentColor"
                  />
                  <path
                    d="M10.3614 4.44373C10.3614 4.44373 11.1417 4.14026 11.0767 4.87726C11.055 5.18072 10.8599 6.24286 10.7082 7.39171L10.188 10.7949C10.188 10.7949 10.1446 11.2934 9.75443 11.3801C9.36426 11.4669 8.779 11.0767 8.67062 10.99C8.58391 10.9249 7.0449 9.94951 6.50299 9.47263C6.35125 9.34257 6.17784 9.08246 6.52466 8.77899L8.80068 6.61136C9.06079 6.35124 9.32091 5.74431 8.23709 6.4813L5.20241 8.54055C5.20241 8.54055 4.85559 8.75731 4.2053 8.56223L2.79634 8.1287C2.79634 8.1287 2.27611 7.80356 3.16484 7.47841C5.33247 6.45963 7.99865 5.41916 10.3614 4.44373Z"
                    fill="white"
                  />
                </g>
              </svg>
            </a>

            <a href="https://github.com/Codify-Labs" target="_blank">
              <svg
                className="h-5 text-gray-400 hover:text-gray-700 duration-200"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="1"
                  fillRule="evenodd"
                  clip-rule="evenodd"
                  d="M7.5 0C3.35775 0 0 3.363 0 7.51275C0 10.8315 2.14875 13.6477 5.12925 14.6407C5.50425 14.7097 5.64075 14.478 5.64075 14.2785C5.64075 14.1007 5.63475 13.6275 5.631 13.0012C3.5445 13.455 3.10425 11.994 3.10425 11.994C2.76375 11.1255 2.27175 10.8945 2.27175 10.8945C1.59075 10.4295 2.3235 10.4385 2.3235 10.4385C3.07575 10.491 3.47175 11.2125 3.47175 11.2125C4.14075 12.36 5.2275 12.0285 5.65425 11.8365C5.72325 11.3512 5.91675 11.0205 6.13125 10.833C4.46625 10.6432 2.715 9.99825 2.715 7.11975C2.715 6.3 3.0075 5.62875 3.48675 5.10375C3.4095 4.914 3.15225 4.14975 3.56025 3.11625C3.56025 3.11625 4.19025 2.91375 5.62275 3.88575C6.23458 3.71889 6.86583 3.63389 7.5 3.633C8.1375 3.636 8.77875 3.71925 9.378 3.88575C10.8097 2.91375 11.4382 3.1155 11.4382 3.1155C11.8477 4.14975 11.5898 4.914 11.5133 5.10375C11.9932 5.62875 12.2843 6.3 12.2843 7.11975C12.2843 10.0057 10.53 10.641 8.85975 10.827C9.129 11.0587 9.36825 11.517 9.36825 12.2182C9.36825 13.2217 9.35925 14.0325 9.35925 14.2785C9.35925 14.4795 9.49425 14.7135 9.87525 14.64C11.3687 14.1391 12.667 13.1815 13.5866 11.9025C14.5062 10.6236 15.0006 9.08799 15 7.51275C15 3.363 11.6415 0 7.5 0Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </ul>

          <div className="veev.uz | fc | shadow-400 px-3 py-1 rounded-md">
            <svg
              className="h-10"
              viewBox="0 0 31 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="23.2632"
                width="8.86225"
                height="27.6945"
                rx="4.43112"
                transform="rotate(30 23.2632 0)"
                fill="black"
              />
              <path
                d="M21.1059 3.85993C22.3299 1.73975 25.041 1.01332 27.1612 2.23741C29.2814 3.4615 30.0078 6.17257 28.7837 8.29276L26.3996 12.4222C24.4418 15.8132 20.1057 16.9751 16.7147 15.0173L15.8484 14.5171C15.4775 14.3029 15.3504 13.8287 15.5645 13.4578L21.1059 3.85993Z"
                fill="url(#paint0_linear)"
              />
              <path
                d="M2.21556 8.26886C0.991942 6.14949 1.71809 3.43946 3.83747 2.21583C5.95684 0.992213 8.66687 1.71836 9.89049 3.83774L19.3066 20.147C20.5303 22.2663 19.8041 24.9764 17.6847 26.2C15.5654 27.4236 12.8553 26.6975 11.6317 24.5781L2.21556 8.26886Z"
                fill="black"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="27.1612"
                  y1="2.23741"
                  x2="21.1055"
                  y2="20.2869"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.375" />
                  <stop offset="1" stop-color="#ABABAB" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>

            <div className="logo | text-gray-primary | pl-3 | text-sm">
              <p className="text-xs">Сайт поддерживается студией:</p>
              <p className="font-bold">veev.uz</p>
            </div>
          </div>
        </div>
      </App.Footer>
    </App>
  );
}

export default Home;
