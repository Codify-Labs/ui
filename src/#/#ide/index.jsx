import { useRef } from "react";
import useWindowSize from "hooks/useWindowSize";

import { Header, IDE } from "#/#lesson/components";
import { useParams } from "react-router";

export default function CodingEnvironment() {
  const [height] = useWindowSize();
  const header = useRef();
  const params = useParams();

  return (
    <div className="h-full max-w-screen-2xl mx-auto">
      <Header refs={header} />
      <section
        className="w-full | flex "
        style={{
          height: `${height - header?.current?.offsetHeight}px`,
        }}
      >
        <IDE env={params?.lang?.toUpperCase()} width={`100%`} />
      </section>
    </div>
  );
}
