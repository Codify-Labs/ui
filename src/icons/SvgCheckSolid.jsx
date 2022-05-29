function SvgCheckSolid(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 7 7"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.633 1.099l-.283.412L3.09 6.26a.5.5 0 01-.797.036L.428 4.047l-.32-.385.77-.638.32.385 1.442 1.74L5.525.944l.283-.412.825.566z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default SvgCheckSolid;
