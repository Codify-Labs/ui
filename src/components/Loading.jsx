import CourseProgress from "./CourseProgress";

export default function Loading(props) {
  return (
    <div className="flex items-center justify-center | w-2/3">
      <div className="w-56">
        <CourseProgress progress={props.progress} color={props.color} />
      </div>
    </div>
  );
}
