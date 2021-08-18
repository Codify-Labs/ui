import { useRef } from "react";
import "./index.css";
import "./App.css";
import Article from "./components/Article";
import useWindowSize from "./@hooks/useWindowSize";
import Environment from "./components/Environment";
import Header from "./components/Article/Header";

export default function Lesson() {
  const [height] = useWindowSize();
  const header = useRef();

  return (
    <div className="h-full max-w-screen-2xl mx-auto">
      <Header refs={header} />
      <section
        className="w-full | flex "
        style={{
          height: `${height - header?.current?.offsetHeight}px`,
        }}
      >
        <Article width={`33.3333%`} />

        <Environment env={`HTML`} width={`66.6667%`} />
      </section>
    </div>
  );
}
