import CopyToClipboard from "react-copy-to-clipboard";
import cn from "classnames";
import Tooltip from "./Tooltip";
import { useRef, useState } from "react";
import { refractor } from "refractor";
import { toHtml } from "hast-util-to-html";

export default function Article() {
  const [codeCopied, setCopied] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [result, setResult] = useState(false);
  const exercise = useRef();
  const code = toHtml(
    refractor.highlight(
      `<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`,
      `html`
    )
  );
  return (
    <div className="w-1/3 h-full overflow-auto px-2 |" id="article">
      <div className="w-full relative mt-3 mb-7 rounded-[7px] overflow-hidden">
        <div style={{ padding: "50% 0 0 0", position: "relative" }}>
          <iframe
            src="https://player.vimeo.com/video/115719437?h=f7e3e58b4b&title=0&byline=0&portrait=0"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
            }}
            thumbnail="/ex.png"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <article className="px-3">
        <h1 className="text-[2.25rem] font-extrabold | pb-7">
          HTML - Jadval Yaratish
        </h1>
        <h2 className="text-3xl font-semibold | pb-7">Jadval Teglari</h2>
        {/* <h3 className="text-2xl font-semibold | pb-7">Jadval Teglari</h3>
          <h4 className="text-xl font-semibold | pb-7">Jadval Teglari</h4>
          <h5 className="text-lg font-semibold | pb-7">Jadval Teglari</h5> */}

        <p className="text-md pb-7 leading-7">
          HTML da qatorlar va ustunlar yaratish uchun asosiy 4ta teg mavjud:
        </p>

        <ul className="list-disc ml-4 pb-7">
          <li className="pb-2 leading-7">
            <code className="mx-1 text-[#FA7D6C] font-semibold bg-[#FFF6F6] px-1 rounded-md border-[1px] border-[#ffb8af]">{`<table></table>`}</code>{" "}
            -{" "}
            <em className="text-[#017AFF] not-italic font-extrabold">
              Ota-Ona
            </em>{" "}
            tegi. Bu jadval yaratish tegi{" "}
          </li>
          <li className="pb-2 leading-7">
            <code className="mx-1 text-[#FA7D6C] font-semibold bg-[#FFF6F6] px-1 rounded-md border-[1px] border-[#ffb8af]">{`<tr></tr>`}</code>{" "}
            - Jadvalda{" "}
            <em className="text-[#017AFF] not-italic font-extrabold">Qator</em>{" "}
            yaratish uchun
          </li>
          <li className="pb-2 leading-7">
            <code className="mx-1 text-[#FA7D6C] font-semibold bg-[#FFF6F6] px-1 rounded-md border-[1px] border-[#ffb8af]">{`<th></th>`}</code>{" "}
            - Eng tepada Ustun nomlanishi uchun
          </li>
          <li className="pb-2 leading-7">
            <code className="mx-1 text-[#FA7D6C] font-semibold bg-[#FFF6F6] px-1 rounded-md border-[1px] border-[#ffb8af]">{`<th></th>`}</code>{" "}
            - Qator ichida kataklar uchun Ota-Ona Tegi
          </li>
        </ul>

        <h2 className="text-3xl font-semibold | pb-7">Ota-Ona Tegi</h2>

        <p className="text-md pb-7 leading-7">
          Eng boshida siz jadval uchun{" "}
          <code className="mx-1  text-[#FA7D6C] font-semibold bg-[#FFF6F6] mx-1 px-1 rounded-md border-[1px] border-[#ffb8af] | whitespace-nowrap">{`<table></table>`}</code>
          mo’ljallangan:
        </p>

        <div className="w-full relative group mb-7">
          <div className="flex items-center justify-end">
            <h1 className="bg-[#F5F6F9] py-2 px-5 rounded-t-lg text-[#5F5F5F] font-bold">
              HTML
            </h1>
          </div>

          <pre className="language-css text-xl | relative">
            <div
              dangerouslySetInnerHTML={{
                __html: code,
              }}
            ></div>
          </pre>

          <div className="absolute bottom-3 right-2 w-10 h-10">
            <CopyToClipboard text={`Babur`} onCopy={() => onCopy()}>
              <div className="bg-white rounded-[15px] w-full  h-full opacity-0 flex transform transition duration-300 group-hover:opacity-100 items-center justify-center cursor-pointer">
                <svg
                  className={cn({ "w-4": true, hidden: !codeCopied })}
                  viewBox="0 0 11 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 3.99958L4.00084 6.99916L10 1"
                    stroke="#73CE49"
                    stroke-width="1.89607"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  className={cn("w-4", {
                    hidden: codeCopied,
                  })}
                  viewBox="0 0 17 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.784 18.5454H2.12504C0.952797 18.5454 0 17.5926 0 16.4204V5.98855C0 4.8163 0.952797 3.86365 2.12504 3.86365H2.51131C2.83122 3.86365 3.09086 4.12328 3.09086 4.44319C3.09086 4.7631 2.83122 5.02274 2.51131 5.02274H2.12504C1.59262 5.02274 1.15909 5.45612 1.15909 5.98855V16.4204C1.15909 16.9528 1.59262 17.3863 2.12504 17.3863H11.784C12.3165 17.3863 12.75 16.9528 12.75 16.4204V16.0341C12.75 15.7142 13.0096 15.4545 13.3295 15.4545C13.6494 15.4545 13.9091 15.7142 13.9091 16.0341V16.4204C13.9091 17.5926 12.9563 18.5454 11.784 18.5454Z"
                    fill="#5F5F5F"
                  />
                  <path
                    d="M14.8751 13.909H6.76146C5.58921 13.909 4.63641 12.9562 4.63641 11.784V2.12501C4.63641 0.952766 5.58921 -3.05176e-05 6.76146 -3.05176e-05H14.8751C16.0473 -3.05176e-05 17 0.952766 17 2.12501V11.784C17 12.9562 16.0473 13.909 14.8751 13.909ZM6.76146 1.15906C6.22903 1.15906 5.7955 1.59259 5.7955 2.12501V11.784C5.7955 12.3164 6.22903 12.75 6.76146 12.75H14.8751C15.4075 12.75 15.8409 12.3164 15.8409 11.784V2.12501C15.8409 1.59259 15.4075 1.15906 14.8751 1.15906H6.76146Z"
                    fill="#5F5F5F"
                  />
                </svg>
              </div>
            </CopyToClipboard>
          </div>
        </div>
        <p className="text-md pb-7 leading-7">
          Eng boshida siz jadval uchun
          <code className="mx-1  text-[#FA7D6C] font-semibold bg-[#FFF6F6] mx-1 px-1 rounded-md border-[1px] border-[#ffb8af] | whitespace-nowrap">{`<table></table>`}</code>
          mo’ljallangan:
        </p>

        <div className="info bg-[#F3FFF3] | relative rounded-[7px] mb-7">
          <div className="absolute -top-2 -left-2 bg-white w-8 h-8 rounded-full">
            <svg
              className="w-6"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5365 10.0001L8.84634 12.3089L13.4641 7.69119"
                stroke="#03A700"
                stroke-width="0.72973"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1 10C1 16.7495 3.25049 19 10 19C16.7495 19 19 16.7495 19 10C19 3.25049 16.7495 1 10 1C3.25049 1 1 3.25049 1 10Z"
                stroke="#03A700"
                stroke-width="0.72973"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="text-[#03A700] | px-6 py-6 | ">
            Success: Couldn't find a{" "}
            <em className="text-[#017AFF] not-italic font-extrabold">
              `pages`
            </em>{" "}
            directory. Please create one under the project root
          </div>
        </div>

        <ul className="list-decimal ml-4 pb-7">
          <li className="pb-2 leading-7">
            <code className="mx-1 text-[#FA7D6C] font-semibold bg-[#FFF6F6] px-1 rounded-md border-[1px] border-[#ffb8af]">{`<table></table>`}</code>{" "}
            -{" "}
            <em className="text-[#017AFF] not-italic font-extrabold">
              Ota-Ona
            </em>{" "}
            tegi. Bu jadval yaratish tegi{" "}
          </li>
          <li className="pb-2 leading-7">
            <code className="mx-1 text-[#FA7D6C] font-semibold bg-[#FFF6F6] px-1 rounded-md border-[1px] border-[#ffb8af]">{`<tr></tr>`}</code>{" "}
            - Jadvalda{" "}
            <em className="text-[#017AFF] not-italic font-extrabold">Qator</em>{" "}
            yaratish uchun
          </li>
          <li className="pb-2 leading-7">
            <code className="mx-1 text-[#FA7D6C] font-semibold bg-[#FFF6F6] px-1 rounded-md border-[1px] border-[#ffb8af]">{`<th></th>`}</code>{" "}
            - Eng tepada Ustun nomlanishi uchun
          </li>
          <li className="pb-2 leading-7">
            <code className="mx-1 text-[#FA7D6C] font-semibold bg-[#FFF6F6] px-1 rounded-md border-[1px] border-[#ffb8af]">{`<th></th>`}</code>{" "}
            - Qator ichida kataklar uchun Ota-Ona Tegi
          </li>
        </ul>
      </article>
      <div className="exercsices">
        <div className="title | flex items-end | px-4 my-7 mb-12 |">
          <div className="icon">
            <svg
              className="w-12"
              viewBox="0 0 34 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4147 21.822C13.2862 21.822 13.1569 21.7778 13.0513 21.6879L9.41902 18.595C9.29372 18.4882 9.22168 18.3322 9.22168 18.1674C9.22168 18.003 9.29404 17.847 9.41902 17.7402L13.0513 14.6473C13.2872 14.4462 13.6415 14.4747 13.8426 14.7105C14.0433 14.9467 14.0151 15.301 13.779 15.5018L10.6488 18.1674L13.779 20.8331C14.0151 21.0342 14.0433 21.3884 13.8426 21.6243C13.7314 21.7549 13.5735 21.822 13.4147 21.822Z"
                fill="#017AFF"
              />
              <path
                d="M20.5854 21.822C20.4266 21.822 20.2687 21.7549 20.1578 21.6243C19.9567 21.3884 19.9852 21.0342 20.2211 20.8331L23.3513 18.1674L20.2211 15.5018C19.9852 15.301 19.9567 14.9467 20.1578 14.7105C20.3586 14.4747 20.7132 14.4462 20.9488 14.6473L24.5811 17.7402C24.7063 17.847 24.7784 18.003 24.7784 18.1674C24.7784 18.3322 24.7063 18.4882 24.5811 18.595L20.9488 21.6879C20.8432 21.7778 20.7138 21.822 20.5854 21.822Z"
                fill="#017AFF"
              />
              <path
                d="M15.7142 24.1418C15.6757 24.1418 15.6368 24.1377 15.5977 24.1296C15.2944 24.0657 15.1002 23.7678 15.1641 23.4646L17.4279 12.7165C17.4918 12.4133 17.7894 12.219 18.0929 12.2829C18.3961 12.3468 18.5903 12.6444 18.5264 12.9479L16.2627 23.6961C16.2069 23.9604 15.9739 24.1418 15.7142 24.1418Z"
                fill="#017AFF"
              />
              <path
                d="M30.2311 29.9975H3.76887C1.69085 29.9975 0 28.3069 0 26.2286V3.76887C0 1.69085 1.69085 0 3.76887 0H30.2311C32.3091 0 34 1.69085 34 3.76887V26.2286C34 28.3069 32.3091 29.9975 30.2311 29.9975ZM3.76887 1.12264C2.30981 1.12264 1.12264 2.30981 1.12264 3.76887V26.2286C1.12264 27.6876 2.30981 28.8748 3.76887 28.8748H30.2311C31.6902 28.8748 32.8774 27.6876 32.8774 26.2286V3.76887C32.8774 2.30981 31.6902 1.12264 30.2311 1.12264H3.76887Z"
                fill="#017AFF"
              />
              <path
                d="M33.4387 8.98833H0.561321C0.251216 8.98833 0 8.73712 0 8.42701C0 8.11722 0.251216 7.86569 0.561321 7.86569H33.4387C33.7488 7.86569 34 8.11722 34 8.42701C34 8.73712 33.7488 8.98833 33.4387 8.98833Z"
                fill="#017AFF"
              />
              <path
                d="M9.5907 6.30234C8.61152 6.30234 7.81433 5.50515 7.81433 4.52597C7.81433 3.54648 8.61152 2.7496 9.5907 2.7496C10.5702 2.7496 11.3671 3.54648 11.3671 4.52597C11.3671 5.50515 10.5702 6.30234 9.5907 6.30234ZM9.5907 3.87224C9.23048 3.87224 8.93697 4.16543 8.93697 4.52597C8.93697 4.88651 9.23048 5.1797 9.5907 5.1797C9.95123 5.1797 10.2444 4.88651 10.2444 4.52597C10.2444 4.16543 9.95123 3.87224 9.5907 3.87224Z"
                fill="#017AFF"
              />
              <path
                d="M4.13293 6.28513C3.15344 6.28513 2.35657 5.48825 2.35657 4.50876C2.35657 3.52927 3.15344 2.73239 4.13293 2.73239C5.11243 2.73239 5.9093 3.52927 5.9093 4.50876C5.9093 5.48825 5.11243 6.28513 4.13293 6.28513ZM4.13293 3.85503C3.77271 3.85503 3.47921 4.14854 3.47921 4.50876C3.47921 4.86929 3.77271 5.16248 4.13293 5.16248C4.49347 5.16248 4.78666 4.86929 4.78666 4.50876C4.78666 4.14854 4.49347 3.85503 4.13293 3.85503Z"
                fill="#017AFF"
              />
              <path
                d="M15.0485 6.31927C14.0693 6.31927 13.2725 5.52239 13.2725 4.5429C13.2725 3.56372 14.0693 2.76685 15.0485 2.76685C16.028 2.76685 16.8249 3.56372 16.8249 4.5429C16.8249 5.52239 16.028 6.31927 15.0485 6.31927ZM15.0485 3.88917C14.6883 3.88917 14.3951 4.18236 14.3951 4.5429C14.3951 4.90344 14.6883 5.19663 15.0485 5.19663C15.4091 5.19663 15.7022 4.90344 15.7022 4.5429C15.7022 4.18236 15.4091 3.88917 15.0485 3.88917Z"
                fill="#017AFF"
              />
            </svg>
          </div>
          <h1 className="font-bold | border-b-4 border-[#017AFF]  | text-3xl ml-5 text-[#017AFF]">
            Praktika
          </h1>
        </div>

        <div className="exercise mb-7">
          {/* EXERCISE DROPDOWN */}
          <div
            className="dropdown | relative | flex items-center  py-2 mb-7 px-4 bg-[#F1FFF1] | cursor-pointer"
            onClick={() => setDropDown(!dropDown)}
          >
            <div className="completed">
              <svg
                className="w-6"
                viewBox="0 0 11 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 3.99958L4.00084 6.99916L10 1"
                  stroke="#73CE49"
                  stroke-width="1.89607"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h1 className="pl-10 | text-lg text-[#73CE49] font-extrabold">
              Jadval yaratish
            </h1>
            <div className="arrow | absolute right-3">
              <svg
                className="w-3"
                viewBox="0 0 10 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 0.999999L9 9L1 17"
                  stroke="#73CE49"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div
            className={`transition-all transform duration-500 exercise__body overflow-hidden`}
            ref={exercise}
            style={{
              height: `${dropDown ? "auto" : "0"}`,
            }}
          >
            {/* MASHQ TSHUNUTIRILISHI */}
            <div className={`px-4`}>
              <p className="text-md pb-7 leading-7">
                Eng boshida siz jadval uchun
                <code className="mx-1  text-[#FA7D6C] font-semibold bg-[#FFF6F6] mx-1 px-1 rounded-md border-[1px] border-[#ffb8af] | whitespace-nowrap">{`<table></table>`}</code>
                mo’ljallangan:
              </p>

              <h5 className="text-lg font-semibold | pb-7">Taxminiy natija:</h5>

              <div className="img  pb-7">
                {/* <div className="alt | flex items-center justify-end">
                      <h1
                        className="px-5 py-2 rounded-t-md"
                        style={{
                          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.05)",
                        }}
                      >
                        Taxminiy Natija:
                      </h1>
                    </div> */}
                <img
                  className="w-full rounded-[7px]"
                  style={{
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.05)",
                  }}
                  src="https://cdn.dribbble.com/users/3071632/screenshots/15315334/media/89df955d75ddfcdf66cc0b157f343771.png?compress=1"
                  alt={`alt`}
                />
              </div>
            </div>

            {/* ECHIM */}
            <div
              className="result mx-4 px-4 mt-16 rounded-[7px]"
              style={{ background: "rgba(255, 255, 0, 0.2)" }}
            >
              <div className="dropdown | relative | flex items-center  py-2 mb-7 rounded-[7px] |">
                <div className="completed">
                  <svg
                    className="w-7"
                    viewBox="0 0 22 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.14 25.05H8.63a1.46 1.46 0 01-1.46-1.52v-3.04a.38.38 0 01.75 0v3.04a.7.7 0 00.7.76h4.52a.93.93 0 00.94-.76v-3.04a.38.38 0 01.75 0v3.04a1.66 1.66 0 01-1.69 1.52z"
                      fill="#D6B300"
                    />
                    <path
                      d="M14.14 20.87H7.87a.76.76 0 01-.75-.63 8.27 8.27 0 00-2.07-3.95 7.9 7.9 0 1111.9 0 8.27 8.27 0 00-2.07 3.95.76.76 0 01-.74.63zM11 3.93A7.15 7.15 0 005.62 15.8a9 9 0 012.25 4.32h6.26a9.02 9.02 0 012.26-4.32 7.15 7.15 0 00-5.4-11.86zM11 26.42a1.72 1.72 0 01-1.72-1.71.4.4 0 01.38-.41h2.68a.38.38 0 01.38.37A1.73 1.73 0 0111 26.42zm-.9-1.37a.96.96 0 001.8 0h-1.8zM7.03 22.53a.38.38 0 01-.04-.75l7.89-.81a.38.38 0 11.07.75l-7.89.8-.03.01zM7.08 24.08a.38.38 0 11-.03-.75l7.83-.8a.38.38 0 01.4.48.38.38 0 01-.33.26l-7.83.8-.04.01zM10.97 2.3a.38.38 0 01-.38-.38V.38a.38.38 0 01.76 0v1.54a.38.38 0 01-.38.38zM6.44 3.53a.38.38 0 01-.33-.19l-.77-1.33a.38.38 0 01.65-.38l.77 1.34a.38.38 0 01-.32.56zM3.13 6.87a.37.37 0 01-.2-.05L1.6 6.04a.38.38 0 11.38-.65l1.33.77a.38.38 0 01-.18.7zM1.92 11.4H.38a.38.38 0 110-.75h1.54a.38.38 0 010 .76zM1.82 16.71a.38.38 0 01-.2-.7l1.35-.77a.38.38 0 11.37.65l-1.33.77a.38.38 0 01-.2.05zM15.56 3.53a.38.38 0 01-.32-.56L16 1.63a.38.38 0 01.65.38l-.77 1.33a.38.38 0 01-.33.2zM18.88 6.87a.38.38 0 01-.2-.7l1.35-.78a.38.38 0 11.38.65l-1.34.78a.37.37 0 01-.2.05zM21.62 11.4h-1.54a.38.38 0 110-.75h1.54a.38.38 0 010 .76zM20.18 16.71a.38.38 0 01-.18-.05l-1.34-.77a.38.38 0 11.37-.65l1.34.77a.38.38 0 01-.19.7z"
                      fill="#D6B300"
                    />
                    <path
                      d="M9.37 20.87a.38.38 0 01-.36-.3l-1.83-7.85a.38.38 0 01.5-.43l1.7.63 1.43-.86a.38.38 0 01.39 0l1.42.86 1.7-.63a.38.38 0 01.5.43L13 20.58a.38.38 0 11-.73-.18l1.67-7.16-1.22.45a.38.38 0 01-.33-.03L11 12.83l-1.38.83a.38.38 0 01-.33.03l-1.22-.45 1.67 7.16a.38.38 0 01-.37.47z"
                      fill="#D6B300"
                    />
                  </svg>
                </div>
                <h1 className="pl-10 | text-lg text-[#D6B300] font-extrabold">
                  Echim
                </h1>
              </div>
              <div
                className={`rounded-[7px] relative cursor-pointer`}
                onClick={() => setResult(true)}
              >
                <div
                  className={`absolute inset-0 flex items-center justify-center z-50 ${
                    result && "hidden"
                  }`}
                >
                  <Tooltip text={`Echimni ko'rish`} id="solution">
                    <svg
                      className="w-8 focus:outline-none click:scale"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 27 22"
                      fill="none"
                      data-tip
                      data-for="solution"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.772 10.8653C17.772 13.2243 15.8589 15.1374 13.5 15.1374C11.141 15.1374 9.22791 13.2243 9.22791 10.8653C9.22791 8.50501 11.141 6.59326 13.5 6.59326C15.8589 6.59326 17.772 8.50501 17.772 10.8653Z"
                        stroke="#515151"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1 10.8654C1 15.2969 6.59609 20.7309 13.5 20.7309C20.4026 20.7309 26 15.301 26 10.8654C26 6.42991 20.4026 1 13.5 1C6.59609 1 1 6.43396 1 10.8654Z"
                        stroke="#515151"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Tooltip>
                </div>
                <div
                  className={`transition-all transform duration-300 ${
                    !result ? "blur-sm" : "blur-none"
                  }`}
                >
                  <p className="text-md pb-7 leading-7">
                    Eng boshida siz jadval uchun
                    <code className="mx-1  text-[#FA7D6C] font-semibold bg-[#FFF6F6] mx-1 px-1 rounded-md border-[1px] border-[#ffb8af] | whitespace-nowrap">{`<table></table>`}</code>
                    mo’ljallangan:
                  </p>

                  <div className="w-full relative group pb-7">
                    <div className="flex items-center justify-end">
                      <h1 className="bg-[#F5F6F9] py-2 px-5 rounded-t-lg text-[#5F5F5F] font-bold">
                        HTML
                      </h1>
                    </div>

                    <pre className="language-css text-xl | relative">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: code,
                        }}
                      ></div>
                    </pre>

                    <div className="absolute bottom-9 right-2 w-10 h-10">
                      <CopyToClipboard text={`Babur`} onCopy={() => onCopy()}>
                        <div className="bg-white rounded-[15px] w-full  h-full opacity-0 flex transform transition duration-300 group-hover:opacity-100 items-center justify-center cursor-pointer">
                          <svg
                            className={cn({
                              "w-4": true,
                              hidden: !codeCopied,
                            })}
                            viewBox="0 0 11 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 3.99958L4.00084 6.99916L10 1"
                              stroke="#73CE49"
                              stroke-width="1.89607"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <svg
                            className={cn("w-4", {
                              hidden: codeCopied,
                            })}
                            viewBox="0 0 17 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.784 18.5454H2.12504C0.952797 18.5454 0 17.5926 0 16.4204V5.98855C0 4.8163 0.952797 3.86365 2.12504 3.86365H2.51131C2.83122 3.86365 3.09086 4.12328 3.09086 4.44319C3.09086 4.7631 2.83122 5.02274 2.51131 5.02274H2.12504C1.59262 5.02274 1.15909 5.45612 1.15909 5.98855V16.4204C1.15909 16.9528 1.59262 17.3863 2.12504 17.3863H11.784C12.3165 17.3863 12.75 16.9528 12.75 16.4204V16.0341C12.75 15.7142 13.0096 15.4545 13.3295 15.4545C13.6494 15.4545 13.9091 15.7142 13.9091 16.0341V16.4204C13.9091 17.5926 12.9563 18.5454 11.784 18.5454Z"
                              fill="#5F5F5F"
                            />
                            <path
                              d="M14.8751 13.909H6.76146C5.58921 13.909 4.63641 12.9562 4.63641 11.784V2.12501C4.63641 0.952766 5.58921 -3.05176e-05 6.76146 -3.05176e-05H14.8751C16.0473 -3.05176e-05 17 0.952766 17 2.12501V11.784C17 12.9562 16.0473 13.909 14.8751 13.909ZM6.76146 1.15906C6.22903 1.15906 5.7955 1.59259 5.7955 2.12501V11.784C5.7955 12.3164 6.22903 12.75 6.76146 12.75H14.8751C15.4075 12.75 15.8409 12.3164 15.8409 11.784V2.12501C15.8409 1.59259 15.4075 1.15906 14.8751 1.15906H6.76146Z"
                              fill="#5F5F5F"
                            />
                          </svg>
                        </div>
                      </CopyToClipboard>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function onCopy() {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }
}
