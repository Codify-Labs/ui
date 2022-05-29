function SvgArrow(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 17"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.017.57A1 1 0 012.43.616l6.75 7.2a1 1 0 010 1.368l-6.75 7.2a1 1 0 11-1.459-1.368L7.08 8.5.971 1.984A1 1 0 011.017.57z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default SvgArrow;
