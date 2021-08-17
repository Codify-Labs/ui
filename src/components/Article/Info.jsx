export default function Info(props) {
  console.log(props, "props");
  const icons = {
    success: (
      <svg
        className="w-6"
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.1914 16.4043L14.1363 20.3475L22.0228 12.461"
          stroke="#03A700"
          stroke-width="1.24628"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.735596 16.4042C0.735596 27.9315 4.57913 31.7751 16.1064 31.7751C27.6337 31.7751 31.4772 27.9315 31.4772 16.4042C31.4772 4.87695 27.6337 1.03342 16.1064 1.03342C4.57913 1.03342 0.735596 4.87695 0.735596 16.4042Z"
          stroke="#03A700"
          stroke-width="1.24628"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),

    warn: (
      <svg
        className="w-6"
        viewBox="0 0 34 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.9716 30.7538C6.30655 30.7538 2.12077 29.9962 1.44233 26.1611C0.763882 22.326 5.10489 15.116 6.44259 12.7365C10.9161 4.78117 13.9561 1.19452 16.9716 1.19452C19.9871 1.19452 23.027 4.78117 27.5006 12.7365C28.8383 15.116 33.1793 22.326 32.5008 26.1611C31.8241 29.9962 27.6366 30.7538 16.9716 30.7538Z"
          stroke="#BD8800"
          stroke-width="1.23164"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.9716 10.2266V16.6229"
          stroke="#BD8800"
          stroke-width="1.23164"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.9645 22.3704H16.9808"
          stroke="#BD8800"
          stroke-width="1.23164"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),

    error: (
      <svg
        className="w-6"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.5229 12.1735L11.8662 19.8302"
          stroke="#FE0000"
          stroke-width="1.19835"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.5323 19.8403L11.8629 12.1708"
          stroke="#FE0000"
          stroke-width="1.19835"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.917847 16.0167C0.917847 27.1006 4.61356 30.7963 15.6975 30.7963C26.7814 30.7963 30.4771 27.1006 30.4771 16.0167C30.4771 4.93277 26.7814 1.23706 15.6975 1.23706C4.61356 1.23706 0.917847 4.93277 0.917847 16.0167Z"
          stroke="#FE0000"
          stroke-width="1.19835"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),

    info: (
      <svg
        className="w-6"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M26.9301 13.617C26.9301 23.3709 23.6778 26.6231 13.924 26.6231C4.17012 26.6231 0.917893 23.3709 0.917893 13.617C0.917893 3.86317 4.17012 0.610951 13.924 0.610951C23.6778 0.610951 26.9301 3.86317 26.9301 13.617Z"
          stroke="#1758FF"
          stroke-width="1.05455"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.924 19.0938V13.6172"
          stroke="#1758FF"
          stroke-width="1.05455"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.9301 8.69596H13.915"
          stroke="#1758FF"
          stroke-width="1.05455"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  };
  return (
    <div id={props.id} className="relative my-7 rounded-[7px]">
      <div className="absolute -top-2 -left-2 bg-white w-8 h-8 rounded-full">
        {icons[props.id]}
      </div>
      <div
        className="| px-6 py-6 | rounded-[7px] overflow-hidden | last-child"
        id={props.id}
      >
        {props.children}
      </div>
    </div>
  );
}
