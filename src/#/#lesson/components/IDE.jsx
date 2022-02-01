import { lazy, memo, Suspense, useState } from "react";
import Loading from "components/IDE/Loading";
import "public/styles/editor-dark.css";

function Environment(props) {
  const [src] = useState(props.src);
  const [env] = useState(props.env);

  const Template = {
    IDE: lazy(() => import(`editor/${env}`)),
  };

  return (
    <Suspense fallback={<Loading color={`black`} />}>
      <Template.IDE src={src} width={props.width} />
    </Suspense>
  );
}

export default memo(Environment);
