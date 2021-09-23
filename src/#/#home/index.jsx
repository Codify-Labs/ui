import { App } from "components/Layout/App";
import Logo from "components/Logo";
import Progress from "./cmp/Progress";

function Home(props) {
    return (
        <App>
            <App.Header>
                <div className="container | fcb | py-3">
                    <Logo />

                    <nav>
                        <ul className="fcb w-full">
                            <li className="text-blue-700 | fc | mx-7 px-5 | text-xs | cursor-pointer">
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
                        </div>
                    </div>

                    <div className="coming:courses | py-20">
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
            </App.Container>
            <App.Footer></App.Footer>
        </App>
    );
}

export default Home;
