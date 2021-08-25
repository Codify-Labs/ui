import { useRef } from "react";
import useWindowSize from "hooks/useWindowSize";

import { Article, Header, IDE } from "./components";

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

        <IDE env={`CSS`} width={`66.6667%`} />
      </section>
    </div>
  );
}
