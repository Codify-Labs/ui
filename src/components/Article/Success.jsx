import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

export default function Success(props) {
  var result = md.render(props.text);

  return (
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
      <div
        className="text-[#03A700] | px-6 py-6"
        dangerouslySetInnerHTML={{
          __html: result,
        }}
      />
    </div>
  );
}
