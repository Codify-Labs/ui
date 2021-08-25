export default function Image(props) {
  return (
    <div className="img  pb-7">
      <div
        className={`alt | flex items-center justify-end ${
          props.alt === "" ? "hidden" : ""
        }`}
      >
        <h1
          className="px-5 py-2 rounded-t-md"
          style={{
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.05)",
          }}
        >
          {props.alt}
        </h1>
      </div>
      <img
        className="w-full rounded-[7px]"
        style={{
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.05)",
        }}
        src={props.src}
        alt={props.alt}
      />
    </div>
  );
}
