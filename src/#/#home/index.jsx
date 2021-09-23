import { App } from "components/Layout/App";
import Logo from "components/Logo";

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
                <section className="flex-col fc py-12">
                    <h1 className="text-5xl font-extrabold | pb-5">O’rganing.</h1>
                    <h1 className="text-5xl font-extrabold | py-7 |"><span className="bg-gradient-blue">Amaliyotta sinang.</span></h1>
                    <h1 className="text-5xl font-extrabold | pt-5">Kelajak kasbini o’rganing.</h1>
                
                </section>

                <div className="absolute top-1/4 right-0 h-20 pointer-events-none">
                    <img src="https://i.ibb.co/Kj1DsJt/mouse-keyboard.png" alt="mouse" className="h-full object-contain"/>
                </div>

                <div className="fcc">

                <button className="mt-7 | bg-blue-900 text-white | px-16 py-2 | rounded-[7px] | click:scale | font-semibold">Boshlash</button>
                </div>

            </App.Container>
            <App.Footer></App.Footer>
        </App>
    );
}

export default Home;
