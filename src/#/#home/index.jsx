import { App } from "components/Layout/App";
import Logo from "components/Logo";
import { Link } from "react-router-dom";
import Progress from "./cmp/Progress";

function Home(props) {
    return (
        <App>
            <App.Header>
                <div className="container | fcb | py-3">
                    <Logo />

                    <nav>
                        <ul className="fcb w-full">
                            <li className="text-blue-700 | fc | mx-7 px-5 py-2 rounded-md | text-xs | cursor-pointer | bg-[#EFF7FF]">
                                <span className="inline-block | mr-2 | w-2 h-2 | bg-blue-700 rounded-full"></span>
                                Biz haqimizda
                            </li>

                            <li className="text-[#888888] | fc | mx-7 px-5 | text-xs | cursor-pointer">
                                Bosh sahifa
                            </li>

                            <li className="text-[#888888] | fc | mx-7 px-5 | text-xs | cursor-pointer">
                                Kurslar
                            </li>
                        </ul>
                    </nav>

                    <div className="w-9 h-9 | bg-blue-100 | text-blue-700 | fcc rounded-full | text-sm">
                        SB
                    </div>
                </div>
            </App.Header>

            <App.Container>
                <section className="flex-col fc py-12 | relative">
                    <h1 className="text-5xl font-extrabold | text-blue-900 | pb-5">O’rganing.</h1>
                    <h1 className="text-5xl font-extrabold | text-blue-900 | py-7 |"><span className="bg-gradient-blue">Amaliyotta sinang.</span></h1>
                    <h1 className="text-5xl font-extrabold | text-blue-900 | pt-5">Kelajak kasbini o’rganing.</h1>
                    <div className="absolute top-1/4 right-0 h-20 pointer-events-none">
                        <img src="https://i.ibb.co/Kj1DsJt/mouse-keyboard.png" alt="mouse" className="h-full object-contain" />
                    </div>
                </section>


                <div className="fcc">
                    <button className="mt-5 | bg-blue-900 text-white | px-16 py-2 | rounded-[7px] | click:scale | font-semibold">Boshlash</button>
                </div>

                <div className="courses | pt-12">
                    <div className="available:courses">
                        <h1 className="text-2xl font-bold | text-blue-900 | pl-3">Mavjud:</h1>

                        <div className="courses | grid xl:grid-cols-3 grid-cols-2 gap-x-10 gap-y-10 | pt-5">
                            <Link to="/course">
                                <div className="course | flex justify-between px-5 py-5 | shadow-300 | click:scale duration-300 | rounded-md | cursor-pointer">
                                    <div className="info w-2/3">
                                        <h3 className="text-2xl font-extrabold | text-blue-900">HTML</h3>
                                        <div className="progress | fc | mt-12">
                                            <Progress total={20} key={3} />
                                            <p className="text-blue-900 | text-sm font-bold mx-3">20%</p>
                                        </div>
                                    </div>
                                    <div className="img | h-24">
                                        <img src="https://i.ibb.co/Tr8Nntq/htmll.png" alt="html" className="h-full object-contain" />
                                    </div>
                                </div>
                            </Link>
                            <Link to="/course">
                                <div className="course | flex justify-between px-5 py-5 | shadow-300 | click:scale duration-300 | rounded-md | cursor-pointer">
                                    <div className="info w-2/3">
                                        <h3 className="text-2xl font-extrabold | text-blue-900">JS</h3>
                                        <div className="progress | fc | mt-12">
                                            <Progress total={9} key={1} />
                                            <p className="text-blue-900 | text-sm font-bold mx-3">9%</p>
                                        </div>
                                    </div>
                                    <div className="img | h-24">
                                        <img src="https://i.ibb.co/yYh1jMp/js.png" alt="html" className="h-full object-contain" />
                                    </div>
                                </div>
                            </Link>

                            <Link to="/course">
                                <div className="course | flex justify-between px-5 py-5 | shadow-300 | click:scale duration-300 | rounded-md | cursor-pointer">
                                    <div className="info w-2/3">
                                        <h3 className="text-2xl font-extrabold | text-blue-900">CSS</h3>
                                        <div className="progress | fc | mt-12">
                                            <Progress total={3} key={5} />
                                            <p className="text-blue-900 | text-sm font-bold mx-3">0%</p>
                                        </div>
                                    </div>
                                    <div className="img | h-24">
                                        <img src="https://i.ibb.co/pPCpKXK/css.png" alt="html" className="h-full object-contain" />
                                    </div>
                                </div>
                            </Link>

                            <Link to="/course">
                                <div className="course | flex justify-between px-5 py-5 | shadow-300 | click:scale duration-300 | rounded-md | cursor-pointer">
                                    <div className="info w-2/3">
                                        <h3 className="text-2xl font-extrabold | text-blue-900">SASS</h3>
                                        <div className="progress | fc | mt-12">
                                            <Progress total={70} key={12} />
                                            <p className="text-blue-900 | text-sm font-bold mx-3">70%</p>
                                        </div>
                                    </div>
                                    <div className="img | h-24">
                                        <img src="https://i.ibb.co/JpZggqK/sass.png" alt="html" className="h-full object-contain" />
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>

                    <div className="coming:courses | pt-20">
                        <div className="available:courses">
                            <h1 className="text-2xl font-bold | text-blue-900 pl-3">Kutilayotkan:</h1>

                            <div className="courses | grid xl:grid-cols-3 grid-cols-2 gap-x-10 gap-y-10 | pt-5">
                                <div className="course | filter grayscale opacity-30 | flex justify-between px-5 py-5 | shadow-xl | rounded-md">
                                    <div className="info w-2/3">
                                        <h3 className="text-2xl font-extrabold | text-blue-900">React</h3>
                                        <div className="progress | fc | mt-12">
                                            <Progress total={4} key={3} />
                                            <p className="text-blue-900 | text-sm font-bold mx-3">0%</p>
                                        </div>
                                    </div>
                                    <div className="img | h-24">
                                        <img src="https://i.ibb.co/87KzfHq/react.png" alt="html" className="h-full object-contain" />
                                    </div>
                                </div>

                                <div className="course | filter grayscale opacity-30 | flex justify-between px-5 py-5 | shadow-xl | rounded-md">
                                    <div className="info w-2/3">
                                        <h3 className="text-2xl font-extrabold | text-blue-900">Vue</h3>
                                        <div className="progress | fc | mt-12">
                                            <Progress total={4} key={1} />
                                            <p className="text-blue-900 | text-sm font-bold mx-3">0%</p>
                                        </div>
                                    </div>
                                    <div className="img | h-24">
                                        <img src="https://i.ibb.co/gtH5y7p/vue.png" alt="html" className="h-full object-contain" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="why:we | pt-28">
                    <h1 className="title | text-4xl font-extrabold | text-blue-900 | pb-5 | text-center">Bu qanday ishlaydi?</h1>

                    <div className="start | flex items-center justify-between">
                        <div className="info | w-1/2">
                            <h1 className="title | text-3xl font-extrabold | text-blue-900 | pb-5">O’rganish.</h1>
                            <p className="text-[#787878] text-sm w-3/4">Sizning kelajagingiz uchun professionallar tomonidan tayyorlangan eng yaxshi maqolalarni o'qing</p>

                            <ul className="pt-5">
                                <li className="| text-blue-900 | fc | mb-2"><span className="text-lg mr-3">✔</span> Yoqimli interfeys</li>
                                <li className="| text-blue-900 | fc | mb-2"><span className="text-lg mr-3">✔</span> Qabul qilish oson</li>
                                <li className="| text-blue-900 | fc | mb-2"><span className="text-lg mr-3">✔</span> Interaktiv rejim</li>
                            </ul>
                        </div>

                        <div className="h-96 w-[1px] bg-gradient-to-b from-gray-300 to-blue-900 | relative flex-col fcc">
                            <div className="box | blue-gradient w-8 h-8 fcc text-white rounded-full | ">
                                1
                            </div>
                        </div>

                        <div className="image | h-96 w-1/2">
                            <img src="https://i.ibb.co/87D9wJ1/article.png" alt="codify.uz - Article" className="h-full object-contain mx-auto" />
                        </div>
                    </div>

                    <div className="start | flex items-center justify-between">
                        <div className="info | w-1/2">
                            <h1 className="title | text-3xl font-extrabold | text-blue-900 | pb-5">Amaliyotta sinang.</h1>
                            <p className="text-[#787878] text-sm w-3/4">Har bir kod qismini interaktiv IDEda sinab ko'ring</p>

                            <ul className="pt-5">
                                <li className="| text-blue-900 | fc | mb-2"><span className="text-lg mr-3">✔</span> Engil Dasturlash sharoiti (IDE)</li>
                                <li className="| text-blue-900 | fc | mb-2"><span className="text-lg mr-3">✔</span> Mini-Brauzerda Live ko’rish</li>
                                <li className="| text-blue-900 | fc | mb-2"><span className="text-lg mr-3">✔</span> Interaktiv rejim</li>
                            </ul>
                        </div>

                        <div className="h-96 w-[1px] bg-blue-900 | relative flex-col fcc">
                            <div className="box | blue-gradient w-8 h-8 fcc text-white rounded-full | ">
                                2
                            </div>
                        </div>

                        <div className="image | h-96 w-1/2 |">
                            <img src="https://i.ibb.co/q7H8cm4/editor.png" alt="codify.uz - Article" className="h-full object-contain mx-auto" />
                        </div>
                    </div>


                    <div className="start | flex items-center justify-between">
                        <div className="info | w-1/2">
                            <h1 className="title | text-3xl font-extrabold | text-blue-900 | pb-5">Mustahkamlang.</h1>
                            <p className="text-[#787878] text-sm w-3/4">Xar bir maqolada qo’shimcha, o’rta darajadagi, mashqlarni bajaring va bilimlaringizni mustahkamlang!</p>

                            <ul className="pt-5">
                                <li className="| text-blue-900 | fc | mb-2"><span className="text-lg mr-3">✔</span> Yoqimli interfeys</li>
                                <li className="| text-blue-900 | fc | mb-2"><span className="text-lg mr-3">✔</span> Qabul qilish oson</li>
                                <li className="| text-blue-900 | fc | mb-2"><span className="text-lg mr-3">✔</span> Interaktiv rejim</li>
                            </ul>
                        </div>

                        <div className="h-96 w-[1px] bg-gradient-to-b from-blue-900 to-white | relative flex-col fcc">
                            <div className="box | blue-gradient w-8 h-8 fcc text-white rounded-full | ">
                                3
                            </div>
                        </div>

                        <div className="image | h-96 w-1/2 |">
                            <img src="https://i.ibb.co/HTJ3VTh/exersice.png" alt="codify.uz - Article" className="h-full object-contain mx-auto" />
                        </div>
                    </div>
                </div>
            </App.Container>
            <App.Footer className="shadow-300 py-4">
                <div className="container fcb | relative">
                    <h3 className="text-blue-900 | font-extrabold | duration-200 hover:text-blue-700 | cursor-pointer">Codify.uz <span className="opacity-0">spandasdsadasdasdada</span></h3>

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
                                <path fill="currentColor" d="M18 5a1 1 0 100 2 1 1 0 000-2z"></path>
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M5 1a4 4 0 00-4 4v14a4 4 0 004 4h14a4 4 0 004-4V5a4 4 0 00-4-4H5zm14 2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </a>

                        <a href="https://t.me/codifyuz" target="_blank" className="mx-5">
                            <svg className="h-5 text-gray-400 hover:text-gray-700 duration-200" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="1">
                                    <path d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15Z" fill="currentColor" />
                                    <path d="M10.3614 4.44373C10.3614 4.44373 11.1417 4.14026 11.0767 4.87726C11.055 5.18072 10.8599 6.24286 10.7082 7.39171L10.188 10.7949C10.188 10.7949 10.1446 11.2934 9.75443 11.3801C9.36426 11.4669 8.779 11.0767 8.67062 10.99C8.58391 10.9249 7.0449 9.94951 6.50299 9.47263C6.35125 9.34257 6.17784 9.08246 6.52466 8.77899L8.80068 6.61136C9.06079 6.35124 9.32091 5.74431 8.23709 6.4813L5.20241 8.54055C5.20241 8.54055 4.85559 8.75731 4.2053 8.56223L2.79634 8.1287C2.79634 8.1287 2.27611 7.80356 3.16484 7.47841C5.33247 6.45963 7.99865 5.41916 10.3614 4.44373Z" fill="white" />
                                </g>
                            </svg>
                        </a>

                        <a href="https://github.com/Codify-Labs" target="_blank">

                            <svg className="h-5 text-gray-400 hover:text-gray-700 duration-200" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="1" fillRule="evenodd" clip-rule="evenodd" d="M7.5 0C3.35775 0 0 3.363 0 7.51275C0 10.8315 2.14875 13.6477 5.12925 14.6407C5.50425 14.7097 5.64075 14.478 5.64075 14.2785C5.64075 14.1007 5.63475 13.6275 5.631 13.0012C3.5445 13.455 3.10425 11.994 3.10425 11.994C2.76375 11.1255 2.27175 10.8945 2.27175 10.8945C1.59075 10.4295 2.3235 10.4385 2.3235 10.4385C3.07575 10.491 3.47175 11.2125 3.47175 11.2125C4.14075 12.36 5.2275 12.0285 5.65425 11.8365C5.72325 11.3512 5.91675 11.0205 6.13125 10.833C4.46625 10.6432 2.715 9.99825 2.715 7.11975C2.715 6.3 3.0075 5.62875 3.48675 5.10375C3.4095 4.914 3.15225 4.14975 3.56025 3.11625C3.56025 3.11625 4.19025 2.91375 5.62275 3.88575C6.23458 3.71889 6.86583 3.63389 7.5 3.633C8.1375 3.636 8.77875 3.71925 9.378 3.88575C10.8097 2.91375 11.4382 3.1155 11.4382 3.1155C11.8477 4.14975 11.5898 4.914 11.5133 5.10375C11.9932 5.62875 12.2843 6.3 12.2843 7.11975C12.2843 10.0057 10.53 10.641 8.85975 10.827C9.129 11.0587 9.36825 11.517 9.36825 12.2182C9.36825 13.2217 9.35925 14.0325 9.35925 14.2785C9.35925 14.4795 9.49425 14.7135 9.87525 14.64C11.3687 14.1391 12.667 13.1815 13.5866 11.9025C14.5062 10.6236 15.0006 9.08799 15 7.51275C15 3.363 11.6415 0 7.5 0Z" fill="currentColor" />
                            </svg>

                        </a>
                    </ul>

                    <div className="veev.uz | fc | shadow-400 px-3 py-1 rounded-md">
                        <svg className="h-10" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="23.2632" width="8.86225" height="27.6945" rx="4.43112" transform="rotate(30 23.2632 0)" fill="black" />
                            <path d="M21.1059 3.85993C22.3299 1.73975 25.041 1.01332 27.1612 2.23741C29.2814 3.4615 30.0078 6.17257 28.7837 8.29276L26.3996 12.4222C24.4418 15.8132 20.1057 16.9751 16.7147 15.0173L15.8484 14.5171C15.4775 14.3029 15.3504 13.8287 15.5645 13.4578L21.1059 3.85993Z" fill="url(#paint0_linear)" />
                            <path d="M2.21556 8.26886C0.991942 6.14949 1.71809 3.43946 3.83747 2.21583C5.95684 0.992213 8.66687 1.71836 9.89049 3.83774L19.3066 20.147C20.5303 22.2663 19.8041 24.9764 17.6847 26.2C15.5654 27.4236 12.8553 26.6975 11.6317 24.5781L2.21556 8.26886Z" fill="black" />
                            <defs>
                                <linearGradient id="paint0_linear" x1="27.1612" y1="2.23741" x2="21.1055" y2="20.2869" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.375" />
                                    <stop offset="1" stop-color="#ABABAB" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <div className="logo | text-blue-900 | pl-3 | text-sm">
                            <p className="text-xs">Сайт поддерживается студией:</p>
                            <p className="font-bold">veev.uz</p>
                        </div>
                    </div>
                </div>
            </App.Footer>
        </App >
    );
}

export default Home;
