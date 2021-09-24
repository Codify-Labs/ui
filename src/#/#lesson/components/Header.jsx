import Logo from "components/Logo";

export default function Header(props) {
  return (
    <header
      className={`w-full py-3 flex items-center justify-between | relative`}
      style={{
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.01)",
      }}
      ref={props.refs}
    >
      <div className="flex items-center justify-center">
        <Logo />

        <div className="menu px-3 py-4 ml-12 flex items-center justify-center hover:bg-[#F6F6F6] duration-200 rounded-[6px] cursor-pointer ">
          <ul>
            <li className="mb-2 w-7 h-[2px] bg-gray-900 rounded-full"></li>
            <li className="mt-2 w-7 h-[2px] bg-gray-900 rounded-full"></li>
          </ul>
        </div>
      </div>
      
      <div className="flex items-center justify-center">
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
  );
}
