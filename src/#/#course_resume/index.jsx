import React, { useEffect } from "react";
import Loading from "components/Loading";
import { useHistory } from "react-router-dom";

function CourseResume() {
  const history = useHistory();
  useEffect(() => {
    let redirector;
    redirector = setTimeout(() => {
      history.push(`/lesson/react-jsx/`);
    }, 100000);

    return () => {
      clearTimeout(redirector);
    };
  }, []);
  return (
    <div className="fcc h-full w-full bg-gray-primary">
      <Loading color={`white`} />
    </div>
  );
}

export default CourseResume;
