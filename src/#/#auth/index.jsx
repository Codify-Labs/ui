import Logo from "components/Logo";
import SvgArrow from "icons/SvgArrow";
import { SvgBoy, SvgGirl } from "icons/SvgBoy";
import SvgCalendar from "icons/SvgCalendar";
import SvgCheck from "icons/SvgCheck";
import SvgCheckSolid from "icons/SvgCheckSolid";
import { SvgEye, SvgEyeClosed } from "icons/SvgEye";
import SvgGoogle from "icons/SvgGoogle";
import SvgPerson from "icons/SvgPerson";
import SvgPhone from "icons/SvgPhone";
import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import iff from "utils/iff";

function Auth(props) {
  const [step, setStep] = useState(1);
  const history = useHistory();
  let { method } = useParams();

  if (method === `login`) {
    return (
      <section className="container | h-full w-full | flex flex-col justify-between">
        <div className="go__home | py-5">
          <Logo />
        </div>

        <div className="fcc flex-1">
          <div className="w-2/5 space-y-7 px-12 py-7  shadow-300 auth__card rounded-lg">
            <h3 className="font-bold text-3xl">Akkountga kirish</h3>

            <div className="flex flex-col space-y-7">
              <label htmlFor="phone" className="relative space-y-3">
                <p className="text-[#949494] text-sm">Telefon raqam:</p>
                <div className="relative">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="+998 __ - ___ __ __"
                    className="w-full | border border-opacity-50 focus:border-opacity-100 border-gray-primary py-3 px-3 duration-200"
                  />
                  <SvgPhone className="text-gray-primary h-5 | absolute right-5 top-[30%]" />
                </div>
              </label>

              <label htmlFor="password" className="relative space-y-3">
                <p className="text-[#949494] text-sm">Kirish uchun parol:</p>

                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="+998 __ - ___ __ __"
                    className="w-full | border border-opacity-50 focus:border-opacity-100 border-gray-primary py-3 px-3 duration-200"
                  />
                  <SvgEye className="text-gray-primary h-3.5 | absolute right-5 top-[36%]" />
                </div>
              </label>

              <button
                onClick={() => setStep(2)}
                className="py-3 bg-gray-primary text-white font-bold | click:scale fcc"
              >
                Kirish
              </button>
            </div>

            <p className="text-[#949494] text-sm">
              Akkauntingiz yo’qmi?{" "}
              <Link to={`/auth/register`} className={`text-blue-700 px-3`}>
                Ro’yhattan o’tish
              </Link>
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

  if (step === 1) {
    return (
      <section className="container | h-full w-full | flex flex-col justify-between">
        <div className="go__home | py-5">
          <Logo />
        </div>

        <div className="fcc flex-1">
          <div className="w-2/5 space-y-7 px-12 py-7  shadow-300 auth__card rounded-lg">
            <h3 className="font-bold text-3xl">Ro’yhattan o’tish</h3>
            <p className="text-[#949494] text-sm">
              Ro’yhattan o’tish orqali siz davomatingizni saqlab qolasiz.
            </p>

            <div className="flex flex-col space-y-7">
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
              <button
                onClick={() => setStep(2)}
                className="py-3 bg-gray-primary text-white font-bold | click:scale fcc"
              >
                Davom
                <SvgArrow className="text-white h-3.5 ml-5" />
              </button>
            </div>

            <p className="text-[#949494] text-sm">
              Platformada royhatta birmisiz?{" "}
              <Link to={`/auth/login`} className={`text-blue-700 px-3`}>
                Kirish
              </Link>
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
  } else if (step === 2) {
    return (
      <section className="container | h-full w-full | flex flex-col justify-between">
        <div className="go__home | py-5">
          <Logo />
        </div>

        <div className="fcc flex-1">
          <div className="w-2/5 space-y-7 px-12 py-7  shadow-300 auth__card rounded-lg">
            <h3 className="font-bold text-3xl">Tadiqlash</h3>
            <p className="text-[#949494] text-sm">
              Jo’natilgan 6 raqamli kodni kiriting:
            </p>

            <div className="flex flex-col space-y-7">
              <label htmlFor="phone" className="relative">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="___ - ___"
                  className="w-full | border border-opacity-50 focus:border-opacity-100 border-gray-primary py-3 px-3 duration-200"
                />
                <SvgCheck className="text-gray-primary h-5 | absolute right-5 top-[30%]" />
              </label>
              <button
                onClick={() => setStep(3)}
                className="py-3 bg-gray-primary text-white font-bold | click:scale fcc"
              >
                Davom
                <SvgArrow className="text-white h-3.5 ml-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } else if (step === 3) {
    return (
      <section className="container | h-full w-full | flex flex-col justify-between">
        <div className="go__home | py-5">
          <Logo />
        </div>

        <div className="fcc flex-1">
          <div className="w-2/5 space-y-7 px-12 py-7  shadow-300 auth__card rounded-lg">
            <h3 className="font-bold text-3xl">Ximoyalash</h3>

            <div className="flex flex-col space-y-7">
              <label htmlFor="password" className="relative | space-y-3">
                <p className="text-[#949494] text-sm">
                  Akkauntingiz uchun parol:
                </p>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Parol"
                    className="w-full | border border-opacity-50 focus:border-opacity-100 border-gray-primary py-3 px-3 duration-200"
                  />
                  <SvgEye className="text-gray-primary h-3.5 | absolute right-5 top-[36%]" />
                </div>
              </label>

              <label
                htmlFor="confirm__password"
                className="relative | space-y-3"
              >
                <p className="text-[#949494] text-sm">Parolni tastiqlang:</p>
                <div className="relative">
                  <input
                    type="password"
                    name="confirm__password"
                    id="confirm__password"
                    placeholder="Qayta tering:"
                    className="w-full | border border-opacity-50 focus:border-opacity-100 border-gray-primary py-3 px-3 duration-200"
                  />
                  <SvgEyeClosed className="text-gray-primary h-3 | absolute right-5 top-[40%]" />
                </div>
              </label>

              <button
                onClick={() => setStep(4)}
                className="py-3 bg-gray-primary text-white font-bold | click:scale fcc"
              >
                Davom
                <SvgArrow className="text-white h-3.5 ml-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } else if (step === 4) {
    return (
      <section className="container | h-full w-full | flex flex-col justify-between">
        <div className="go__home | py-5">
          <Logo />
        </div>

        <div className="fcc flex-1">
          <div className="w-2/5 space-y-7 px-12 py-7  shadow-300 auth__card rounded-lg">
            <h3 className="font-bold text-3xl">Ma’lumotlar</h3>

            <div className="flex flex-col space-y-7">
              <label htmlFor="name" className="relative | space-y-3">
                <p className="text-[#949494] text-sm">
                  Sizni nima deb chaqiraylik?
                </p>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Ismingiz"
                    className="w-full | border border-opacity-50 focus:border-opacity-100 border-gray-primary py-3 px-3 duration-200"
                  />
                  <SvgPerson className="text-gray-primary h-5 | absolute right-5 top-[30%]" />
                </div>
              </label>

              <label htmlFor="birth" className="relative | space-y-3">
                <p className="text-[#949494] text-sm">Tugi’lgan sanangiz</p>
                <div className="relative">
                  <input
                    type="date"
                    name="birth"
                    id="birth"
                    placeholder="YIL - OY - KUN"
                    className="w-full | border border-opacity-50 focus:border-opacity-100 border-gray-primary py-3 px-3 duration-200"
                  />

                  {/* <div className="bg-white w- absolute right-3 top-[30%] fcc">
                    <SvgCalendar className="text-gray-primary h-5" />
                  </div> */}
                </div>
              </label>

              <div className="space-y-3">
                <p className="text-[#949494] text-sm">Jinsingiz</p>

                <div className="flex | space-x-3">
                  <button className="relative fcc p-2 | text-xl border border-gray-primary text-gray-primary font-bold | click:scale w-full">
                    <SvgBoy className="text-white h-[80px] mr-5" />
                    Erkak
                    <div className="absolute top-0 right-0 h-5 w-5 bg-gray-primary fcc">
                      <SvgCheckSolid className="h-2 text-white" />
                    </div>
                  </button>

                  <button className="fcc p-2 | text-xl border border-[#C2C2C2] text-gray-primary font-bold | click:scale w-full">
                    <SvgGirl className="text-white h-[70px] mr-5" />
                    Ayol
                  </button>
                </div>
              </div>

              <button
                onClick={() => history.push("/")}
                className="w-full py-3 bg-gray-primary text-white font-bold | click:scale fcc"
              >
                Yakunlash
                <SvgCheckSolid className="text-white h-3.5 ml-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Auth;
