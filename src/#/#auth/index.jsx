import Logo from "components/Logo";
import SvgArrow from "icons/SvgArrow";
import SvgGoogle from "icons/SvgGoogle";
import SvgPhone from "icons/SvgPhone";
import React from "react";

function Auth(props) {
  return (
    <section className="container | h-full w-full">
      <div className="go__home | py-5">
        <Logo />
      </div>

      <div className="fcc">
        <div className="w-2/5 space-y-10 px-7 py-7  shadow-300 auth__card rounded-lg">
          <h3 className="font-bold text-3xl">Ro’yhattan o’tish</h3>
          <p className="text-[#949494] text-sm">
            Ro’yhattan o’tish orqali siz davomatingizni saqlab qolasiz.
          </p>

          <div className="flex flex-col space-y-10">
            <label htmlFor="phone" className="relative">
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="+998 __ - ___ __ __"
                className="w-full | border border-opacity-50 focus:border-opacity-100 border-gray-primary py-3 px-3 duration-200"
              />
              <SvgPhone className="text-gray-primary h-5 | absolute right-5 top-[30%]" />
            </label>
            <button className="py-3 bg-gray-primary text-white font-bold | click:scale fcc">
              Davom
              <SvgArrow className="text-white h-3.5 ml-5" />
            </button>
          </div>

          <p className="text-[#949494] text-sm">
            Platformada royhatta birmisiz?{" "}
            <a href="#" className="text-blue-700 px-3">
              Kirish
            </a>
          </p>

          <div className="fcb">
            <div className="flex-1 border border-opacity-70 border-[#C4C4C4]"></div>
            <p className="text-[#949494] text-sm | mx-10">Yoki</p>
            <div className="flex-1 border border-opacity-70 border-[#C4C4C4]"></div>
          </div>

          <button className="py-2 text-lg border border-gray-primary text-gray-primary font-bold | click:scale w-full fcc">
            <SvgGoogle className="text-white h-6 mr-5" />
            Google bilan
          </button>
        </div>
      </div>
    </section>
  );
}

export default Auth;
