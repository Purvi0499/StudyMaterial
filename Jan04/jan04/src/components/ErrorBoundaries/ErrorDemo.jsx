import React from "react";
function ErrorDemo(props) {
  if (props.name != "persistent") {
    throw new Error("There is an error!");
  }
  return <div>{props.name}</div>;
}
export default ErrorDemo;
