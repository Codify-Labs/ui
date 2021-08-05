import { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import "./index.css";
import "./App.css";
import { ReactCodeJar } from "react-codejar";
import { useToggle } from "ahooks";

export default function Lesson() {
  const [liveServer, { toggle: toggleLiveServer }] = useToggle();

  const [code, setCode] = useState();
  const header = useRef();
  return (
    <div className="h-full max-w-screen-2xl mx-auto">
      <header
        ref={header}
        className="w-full px-6 py-3 flex items-center justify-between"
        style={{
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.01)",
        }}
      >
        <div className="flex items-center justify-center">
          <div className="logo">
            <svg
              className="w-10"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="31.0004" cy="30.6586" r="3.99955" fill="#0033E7" />
              <rect
                width="7.98748"
                height="27.649"
                rx="3.99374"
                transform="matrix(-0.587785 0.809017 0.809017 0.587785 4.69495 0)"
                fill="#0D55FF"
              />
              <path
                opacity="0.95"
                d="M24.0723 20.775C25.857 19.4783 26.2526 16.9804 24.956 15.1957C23.6593 13.411 21.1614 13.0154 19.3767 14.312L3.47116 25.8681C1.68647 27.1647 1.29084 29.6626 2.58749 31.4473C3.88414 33.232 6.38207 33.6277 8.16676 32.331L24.0723 20.775Z"
                fill="#0041DA"
              />
            </svg>
          </div>

          <div className="menu px-4 py-[10px] ml-12 flex items-center justify-center bg-[#F6F6F6] rounded-[6px] hover:bg-gray-100 cursor-pointer click:scale">
            <h1 className="font-medium pr-3">O'quv dasturi</h1>
            <ul>
              <li className="mb-2 w-7 h-[2px] bg-gray-900 rounded-full"></li>
              <li className="mt-2 w-7 h-[2px] bg-gray-900 rounded-full"></li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="action__c mr-12 flex items-center justify-center">
            <div className="dark-mode pr-10">
              <svg
                className="w-6"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5377 10.8268C18.3433 10.778 18.1489 10.8268 17.9789 10.9488C17.3472 11.4856 16.6183 11.9247 15.8165 12.2175C15.0634 12.5103 14.2373 12.6566 13.3627 12.6566C11.3947 12.6566 9.59682 11.8515 8.30914 10.5584C7.02147 9.26537 6.21971 7.45995 6.21971 5.48375C6.21971 4.65424 6.36549 3.84912 6.60844 3.11719C6.8757 2.33647 7.26443 1.62894 7.77464 1.019C7.9933 0.750625 7.94471 0.360264 7.67746 0.140686C7.50739 0.0186985 7.31302 -0.0300967 7.11865 0.0186985C5.05351 0.579842 3.25563 1.82412 1.96796 3.48315C0.728872 5.11779 0 7.14279 0 9.33857C0 11.9979 1.06901 14.4133 2.81831 16.1699C4.5676 17.9265 6.94858 19 9.62111 19C11.8563 19 13.9215 18.2193 15.5736 16.9262C17.25 15.6087 18.4648 13.7301 18.975 11.5831C19.0722 11.2416 18.8778 10.9 18.5377 10.8268Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="dark-mode pr-10">
              <svg
                className="w-6"
                viewBox="0 0 16 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1551 5.84023L14.8972 5.09529C15.1856 4.80581 15.1856 4.33643 14.8972 4.0471C14.6088 3.75761 14.1413 3.75761 13.8529 4.0471L13.1108 4.79204C11.8656 3.75066 10.3525 3.12154 8.73849 2.97426V1.48249H9.45235C9.86018 1.48249 10.1908 1.15054 10.1908 0.741173C10.1908 0.33181 9.86018 0 9.45235 0H6.54765C6.13982 0 5.80924 0.33181 5.80924 0.741173C5.80924 1.15054 6.13982 1.48249 6.54765 1.48249H7.26152V2.97426C3.22126 3.34303 0 6.74985 0 10.97C0 15.4081 3.57797 19 8.00007 19C12.4215 19 16 15.4087 16 10.97C16 9.07426 15.3495 7.27895 14.1551 5.84023ZM7.99993 17.5175C4.40318 17.5175 1.47683 14.5804 1.47683 10.97C1.47683 7.35983 4.40318 4.42268 7.99993 4.42268C11.5968 4.42268 14.523 7.35983 14.523 10.97C14.523 14.5804 11.5968 17.5175 7.99993 17.5175ZM11.4222 7.53509C11.7106 7.82457 11.7106 8.29395 11.4222 8.58328L8.52215 11.4942C8.23374 11.7837 7.76611 11.7837 7.47785 11.4942C7.18945 11.2047 7.18945 10.7353 7.47785 10.446L10.3778 7.53509C10.6662 7.24561 11.1338 7.24561 11.4222 7.53509Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>

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

      <section
        className="w-full h-full | flex"
        style={{
          height: `${window.offsetHeight - header?.current?.offsetHeight}px`,
        }}
      >
        <article
          className="w-1/3 h-[38rem] px-4 pt-7 overflow-auto |"
          style={{
            height: `${window.offsetHeight - header?.current?.offsetHeight}px`,
          }}
        >
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          repellat aut nostrum omnis hic perspiciatis quasi blanditiis quidem
          quod excepturi tenetur id numquam, distinctio totam, iste vel odit
          doloremque similique non voluptatum quas eveniet. Soluta quis
          necessitatibus sit nobis, laborum optio officia doloribus vitae odio a
          ad repellendus, provident quos fuga, architecto adipisci sed voluptas
          sint accusamus modi nemo maiores deleniti incidunt voluptate.
          Voluptas, rerum vitae, nisi eos sapiente adipisci ipsa earum aut amet
          nam distinctio nobis consequuntur voluptates est itaque at quia
          facere, placeat magni sint? Saepe aspernatur dolores velit sit
          expedita sapiente alias consequuntur, necessitatibus veniam earum
          perspiciatis? Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Alias quod vel esse unde amet ipsum harum recusandae facilis!
          Maxime at eligendi quasi iure libero nisi officia facilis, nam
          laboriosam esse natus nobis soluta voluptate repellendus obcaecati
          facere odit laudantium cum magni minus saepe. Quaerat rerum
          exercitationem vero, dolorum voluptates esse deserunt repellendus sunt
          voluptate sapiente similique, expedita, laboriosam tempore! Delectus,
          inventore sapiente officia enim incidunt minus ea sed animi, quia quos
          voluptatem, eius sint deleniti perspiciatis cupiditate quisquam
          exercitationem nobis corrupti qui. Asperiores temporibus fuga
          excepturi quasi nemo est vitae odio eaque explicabo, ipsum eligendi
          maxime ullam error nulla, minus, illo consequatur ut similique quia
          facilis natus eius. Quam quaerat sapiente voluptas cum tempore nihil
          reprehenderit aspernatur eum earum exercitationem saepe architecto,
          deleniti recusandae sint quod totam modi expedita explicabo harum
          minima qui eos voluptatem, ut omnis? Temporibus ipsum officiis harum
          iste aut at? Dignissimos unde officiis accusantium magnam et quae
          consequuntur quis facere repellat, quo quas commodi iusto eveniet sed
          cupiditate eius sint? Ratione quia officiis totam molestiae blanditiis
          est, architecto minus laborum quidem quae vero unde delectus porro,
          exercitationem neque explicabo! Necessitatibus nemo quisquam sapiente
          omnis, ullam eaque obcaecati dignissimos commodi? Nostrum magni
          voluptatibus dolorum id tenetur nihil soluta porro nisi odit aliquid
          provident illo atque voluptatum at eos eaque nobis laborum illum velit
          incidunt itaque, fuga eum! Illo numquam voluptates necessitatibus!
          Vitae nesciunt tenetur quam facere sint quisquam possimus animi sit
          eaque, veritatis voluptas, beatae incidunt nihil quis aliquid velit
          corrupti eos. Doloribus error iure aliquam perspiciatis odit aut eius
          ex culpa repellendus laudantium laborum illum animi voluptatem, amet
          optio quisquam rerum excepturi officia quidem a explicabo. Quaerat
          aspernatur dolore quasi porro eaque dolorum maiores, vitae id,
          delectus, fugit assumenda nesciunt repudiandae iure ipsum quam
          facilis? Maiores officiis quam aut consectetur ducimus unde accusamus
          provident fuga illo doloribus perspiciatis, magnam atque corrupti
          laboriosam temporibus excepturi dolorum sint animi illum voluptate
          odio aperiam quae nesciunt veniam? Commodi, mollitia incidunt.
          Perspiciatis reiciendis architecto vero doloremque dolor veritatis
          esse nostrum blanditiis, error distinctio, expedita labore natus
          impedit ullam sequi fuga eos quo? Harum nihil, itaque nam expedita
          odio hic laudantium ea dolore vel incidunt exercitationem molestias
          fuga suscipit beatae, provident maxime nisi earum? Iusto commodi
          nostrum eveniet vel porro vero debitis autem cumque. Numquam et illum
          repellat aspernatur, atque aliquam enim, delectus eveniet quaerat
          voluptates est quod! Beatae necessitatibus repudiandae eum, provident
          ratione vitae distinctio atque voluptatum praesentium quisquam, at
          sequi architecto dicta. Laborum, reprehenderit unde alias nostrum
          doloribus quam molestias at id odit rerum dolores sed nulla libero
          temporibus animi nobis vero, veritatis ullam, accusamus inventore.
          Mollitia laudantium dignissimos similique voluptatum quia maiores
          autem sint iusto dolorum! Officiis necessitatibus exercitationem
          provident perspiciatis facilis excepturi, rem, praesentium voluptates
          expedita pariatur accusantium. Laudantium dicta deleniti, placeat quia
          natus totam adipisci doloribus. Impedit, praesentium debitis
          accusantium nisi aliquid ab maiores fuga ducimus tempora enim aperiam
          asperiores ratione nostrum iure sapiente explicabo expedita maxime
          voluptatum deleniti laudantium architecto perspiciatis. Quasi
          excepturi animi id ut voluptas esse non assumenda cupiditate, enim
          doloribus ratione adipisci modi pariatur nemo at. Blanditiis, numquam?
          Quasi, eaque ducimus amet, dicta a iste ratione porro optio numquam
          aut fugiat, voluptatum quibusdam deleniti explicabo placeat
          perferendis. In fugit deserunt natus minus omnis soluta dolorum?
          Molestias, rem placeat nihil eligendi libero qui temporibus nostrum
          in, dignissimos ex ab maxime dolorem laborum sint dolores consectetur.
          Quo eos ratione recusandae soluta assumenda debitis cum exercitationem
          unde. Repellat adipisci iusto saepe iure ipsa! Modi quo laboriosam
          quod veritatis expedita quae eum inventore rerum dolore, ipsam
          reiciendis possimus sunt corporis pariatur doloremque ut repudiandae
          tempore ad ratione ipsum. Eos delectus distinctio placeat quis fugit
          non, veniam vel eaque quasi impedit officia voluptas. Sequi vitae
          rerum ipsam incidunt architecto, sed vel tempora? Rerum unde provident
          facilis numquam ratione voluptatem repellat similique culpa,
          reprehenderit soluta. Ipsa magni repellat voluptatum maxime. Dicta
          facilis vel recusandae quae reiciendis praesentium eos molestiae
          expedita aut quidem harum nostrum libero, veniam eaque ullam sunt
          neque porro ut. Optio quam corporis possimus quo doloribus cum
          necessitatibus a mollitia nihil asperiores eaque veniam incidunt
          dolores at, laudantium neque voluptate perspiciatis repellat. Velit
          vel quam voluptatum ipsum eaque, neque accusantium necessitatibus nemo
          cupiditate ab, harum nam non voluptates vitae odit, corporis libero
          consequuntur. Est consequuntur ipsam vel culpa sint labore doloribus
          nemo! At voluptate provident, architecto repudiandae assumenda quod
          neque sed maiores placeat quos reprehenderit! Totam quisquam veniam
          odio optio excepturi! Tempora natus distinctio non excepturi aliquam
          facilis quis, ex dolorum nam delectus earum doloremque laudantium,
          sapiente, animi perspiciatis fugiat porro. Iste eius corporis
          inventore provident iusto vitae quo quos quia dolore eum voluptatem
          modi nam doloremque non, fuga aliquam dicta officia rerum. Deleniti
          dignissimos possimus, quidem ea error molestiae earum fugiat. Quo eius
          quidem id nostrum molestiae sapiente ab corrupti dolor esse rem
          ratione quae odio, perferendis ullam deserunt explicabo quos tempora.
          Sunt neque cum similique officiis magnam delectus dolores eveniet quis
          laudantium earum, fuga perspiciatis ex sapiente quas expedita! Quam,
          unde a ea quos provident beatae aliquam accusantium cumque eius
          eligendi. Placeat fugit ipsum nisi natus! Labore culpa repudiandae
          aliquam illo ipsa in dicta. Veritatis maxime alias nostrum natus ipsa
          esse modi rem repudiandae eaque nam, atque a voluptatibus ducimus
          animi minima nihil quia, delectus officia unde? Pariatur corporis
          aspernatur porro consequuntur, delectus cupiditate sed! Optio
          provident assumenda quibusdam sed reiciendis esse cum, vel autem
          reprehenderit perspiciatis commodi accusantium suscipit iusto. Iste
          similique perspiciatis cumque facilis doloribus maxime consequatur
          facere accusamus, alias est id a distinctio quae in quod? Odio, quo!
          Temporibus, quod explicabo! Maxime fugit, nemo, neque, ratione
          consequatur commodi dolore necessitatibus doloribus blanditiis
          architecto animi voluptatum at nulla delectus tenetur? Nihil, dolorum
          consequatur. Tempore, consectetur quia saepe natus cupiditate
          similique accusantium, veritatis impedit deleniti corporis, dicta rem
          nesciunt? Soluta beatae perspiciatis minima, odit ratione magnam
          quidem necessitatibus alias quisquam nostrum autem ullam, in
          voluptates voluptate. Quam, illo consequatur! Assumenda ratione odio
          doloremque cupiditate atque consectetur, nemo dignissimos rem quaerat,
          nesciunt suscipit totam veniam iure saepe ipsa fugit corporis. Qui
          impedit veniam maiores, mollitia quia tenetur dolore hic inventore
          maxime excepturi aliquid optio!
        </article>
        <div className="w-1/3 h-full py-2  flex flex-col relative bg-white">
          <div className="">
            <div className="flex flex-nowrap overflow-x-auto py-2 px-2">
              <a className="mr-7 | px-5 py-2 | inline-flex items-center  bg-[#017AFF] text-white font-bold rounded-[7px] click:scale">
                <svg
                  viewBox="0 0 20 20"
                  className="w-6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M1.2593 -0.33792L2.55734 16.2682C2.57683 16.5175 2.74562 16.7302 2.98406 16.8058L9.81438 18.9713C9.93517 19.0096 10.0648 19.0096 10.1856 18.9713L17.0159 16.8058C17.2544 16.7302 17.4232 16.5175 17.4427 16.2682L18.7407 -0.33792C18.7686 -0.694942 18.4865 -1 18.1284 -1H1.87167C1.51359 -1 1.23143 -0.694942 1.2593 -0.33792ZM15.412 4.81439H6.9524L7.2077 7.16866H15.228L14.7033 13.8804L10 15.3715L5.29674 13.8804L5.02264 10.3739H7.49129V12.0939L10.066 12.7849L12.6253 12.0939L12.8239 9.35271H4.9428L4.41957 2.65862H15.5804L15.412 4.81439Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <h1 className="font-bold ml-3 text-lg">index.html</h1>
              </a>
              <a
                className="mr-7 | px-5 py-2 | inline-flex items-center  bg-white text-[#017AFF] font-bold rounded-[7px] click:scale"
                style={{
                  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.06)",
                }}
              >
                <svg
                  className="w-6"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.25 0L2.84375 18L10 20L17.1537 18.0012L18.75 0H1.25Z"
                    fill="#017AFF"
                  />
                  <path
                    d="M15.3425 5.88624L15.1413 8.14749L14.5338 14.9262L10 16.18L9.99626 16.1812L5.46501 14.9262L5.14876 11.3812H7.36876L7.53376 13.22L9.99751 13.885L9.99876 13.8837L12.4663 13.2187L12.8025 10.155L5.04251 10.1762L4.82251 8.08124L12.9888 7.98499L13.1538 5.74249L4.60376 5.76624L4.46001 3.67999H10H15.54L15.3425 5.88624Z"
                    fill="#FAFAFA"
                  />
                </svg>
                <h1 className="font-bold ml-3 text-lg">index.html</h1>
              </a>
            </div>
          </div>
          {/* @TODO FIX HEIGHT ISSUE */}
          <div className="h-[475px]">
            <pre className={`language-html self-stretch `}>
              <ReactCodeJar
                code={code} // Initial code value
                onUpdate={setCode} // Update the text
                highlight={(code) => {
                  const highlighted = Prism.highlight(
                    code.textContent,
                    Prism.languages.css,
                    "css"
                  );

                  code.innerHTML = highlighted;
                }} // Highlight function, receive the editor
                language={"html"}
                lineNumbers={true}
                className="h-full"
              />
            </pre>
          </div>

          <div className="bg-white w-full py-2 px-2 flex items-center justify-between">
            <div className="flex">
              <div className="relative w-[3rem] h-6 rounded-full bg-[#E8F3FF] flex items-center justify-end">
                <div className="bg-[#017AFF] w-5 h-5 rounded-full mx-1"></div>
              </div>

              <svg
                className="w-5 mx-8 cursor-pointer"
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

              <svg
                className="w-5 cursor-pointer"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.9245 1.45966C10.2505 1.45966 11.5786 1.83605 12.7653 2.54823C13.5179 3.00108 14.1942 3.57022 14.7688 4.2348L12.7864 4.16941C12.5536 4.16163 12.3586 4.34423 12.3509 4.57718C12.3433 4.81 12.5257 5.00512 12.7587 5.01263L15.5015 5.10321C15.6591 5.16807 15.8402 5.13181 15.9607 5.01118C16.0811 4.89055 16.1171 4.70941 16.0519 4.55187L15.9616 1.80968C15.9564 1.57673 15.7632 1.39216 15.5303 1.3973C15.2975 1.40257 15.1126 1.59571 15.1179 1.82853C15.1179 1.8317 15.1179 1.8346 15.1182 1.83763L15.1704 3.41966C14.59 2.7995 13.9268 2.26254 13.1994 1.82445C11.8817 1.03383 10.4034 0.615906 8.9245 0.615906C6.562 0.615906 4.38381 1.59004 2.79202 3.35875C1.38191 4.92562 0.540001 7.0346 0.540001 9.00041C0.540001 9.23336 0.72879 9.42228 0.961876 9.42228C1.19496 9.42228 1.38375 9.23336 1.38375 9.00041C1.38375 7.23737 2.14458 5.33932 3.41917 3.92327C4.84906 2.33478 6.80405 1.45966 8.9245 1.45966Z"
                  fill="#5F5F5F"
                />
                <path
                  d="M16.9931 8.57855C16.76 8.57855 16.5713 8.76734 16.5713 9.00043C16.5713 10.7633 15.8104 12.6615 14.5358 14.0777C13.1059 15.6662 11.1509 16.541 9.0305 16.541C7.70449 16.541 6.37638 16.1649 5.18972 15.4527C4.43707 14.9998 3.76075 14.4306 3.18621 13.7662L5.16863 13.8316C5.40145 13.8391 5.59644 13.6565 5.60408 13.4237C5.61173 13.1908 5.42927 12.9958 5.19631 12.9881L2.45347 12.8976C2.29592 12.8328 2.11478 12.8692 1.99428 12.9897C1.87392 13.1103 1.83793 13.2913 1.90305 13.4488L1.99336 16.191C1.99863 16.4241 2.19177 16.6088 2.42473 16.6035C2.65755 16.5984 2.84238 16.4053 2.83711 16.1723C2.83711 16.1693 2.83711 16.1664 2.83685 16.1632L2.78464 14.5812C3.36498 15.2015 4.02825 15.7382 4.75559 16.1765C6.07329 16.9673 7.55156 17.3851 9.0305 17.3851C11.393 17.3851 13.5712 16.4111 15.163 14.6423C16.5731 13.0753 17.415 10.9664 17.415 9.00043C17.415 8.76734 17.2262 8.57855 16.9931 8.57855Z"
                  fill="#5F5F5F"
                />
              </svg>
            </div>

            <div className="bg-[#017AFF] p-2 rounded-[7px] click:scale">
              <svg
                className="w-7"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.1877 8.29088C17.4695 9.06983 17.4695 10.9302 16.1877 11.7091L7.7887 16.8135C6.45587 17.6235 4.75 16.6641 4.75 15.1044L4.75 4.8956C4.75 3.33594 6.45587 2.37647 7.7887 3.18648L16.1877 8.29088Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="mini-browser w-1/3 |">
          <div className="header pt-5 px-5 | flex items-center justify-between">
            <div className="menu flex items-center justify-center">
              <ul className="flex items-center justify-center">
                <li className="w-3 h-3 rounded-full bg-[#F96057]"></li>
                <li className="w-3 h-3 rounded-full bg-[#F8CE52] | mx-2"></li>
                <li className="w-3 h-3 rounded-full bg-[#5FCF65]"></li>
              </ul>
            </div>
            <div className="search flex items-center justify-between px-8 py-2 bg-[#f2f2f2] rounded-[7px]">
              <div className="lock">
                <svg
                  className="w-3"
                  viewBox="0 0 8 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 0C2.61929 0 1.5 1.11929 1.5 2.5V3.5H1C0.447715 3.5 0 3.94772 0 4.5V9.5C0 10.0523 0.447715 10.5 1 10.5H7C7.55228 10.5 8 10.0523 8 9.5V4.5C8 3.94772 7.55228 3.5 7 3.5H6.5V2.5C6.5 1.11929 5.38071 0 4 0ZM5.5 3.5V2.5C5.5 1.67157 4.82843 1 4 1C3.17157 1 2.5 1.67157 2.5 2.5V3.5H5.5Z"
                    fill="#BBBBBB"
                  />
                </svg>
              </div>
              <p className="text-center text-sm text-[#797979] pl-6 select-none	">
                localhost:3000/index.html
              </p>
            </div>
            <div className="actions click:scale">
              <svg
                className="w-5"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9991 7.71621H6.36908"
                  stroke="#BBBBBB"
                  stroke-width="1.07508"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.9014 5.62628L15 7.71623L12.9014 9.80618"
                  stroke="#BBBBBB"
                  stroke-width="1.07508"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.1064 4.49758C10.8699 1.93173 9.90953 1 6.08942 1C1.00001 1 1.00001 2.65562 1.00001 7.62964C1.00001 12.6037 1.00001 14.2593 6.08942 14.2593C9.90953 14.2593 10.8699 13.3275 11.1064 10.7617"
                  stroke="#BBBBBB"
                  stroke-width="1.07508"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="body"></div>
          <div className="console"></div>
        </div>
      </section>
    </div>
  );
}
