export default function Info(props) {
  return (
    <div className="relative my-7">
      <div className="| px-6 py-6 | overflow-hidden | last-child" id={props.id}>
        {props.children}
      </div>
    </div>
  );
}
