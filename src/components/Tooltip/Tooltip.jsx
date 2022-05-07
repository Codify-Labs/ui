import ReactTooltip from "react-tooltip";

export default function Tooltip(props) {
  return (
    <>
      <ReactTooltip id={props.id} place="top" effect="solid">
        {props.text}
      </ReactTooltip>
      {props.children}
    </>
  );
}
