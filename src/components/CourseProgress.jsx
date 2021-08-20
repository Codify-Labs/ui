function CourseProgress(props) {
  return (
    <>
      <div
        className="rounded-[10px] h-[0.75rem] | w-full flex items-center px-2"
        style={{ backgroundColor: props.color }}
      >
        <div
          className="bg-white h-[0.25rem] rounded-[10px] duration-500"
          style={{ width: `${props.progress}%` }}
        />
      </div>
    </>
  );
}
export default CourseProgress;
