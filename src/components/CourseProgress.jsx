import { useEffect, useState } from "react";

function CourseProgress(props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress === 100) {
      return;
    }
    var int = setInterval(() => {
      setProgress(progress + 10);
    }, 30);

    return () => clearInterval(int);
  }, [progress]);

  return (
    <>
      <div
        className="rounded-[10px] h-[0.75rem] | w-full flex items-center px-2"
        style={{ backgroundColor: props.color }}
      >
        <div
          className="bg-white h-[0.25rem] rounded-[10px] duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </>
  );
}
export default CourseProgress;
