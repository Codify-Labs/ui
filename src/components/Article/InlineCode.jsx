import React from "react";

export default function InlineCode(props) {
  console.log(props, "=");

  return (
    <code>{`<${props.type}>${props.props.children[0]}</${props.type}>`}</code>
  );
}
