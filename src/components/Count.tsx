import React from "react";

interface Props {
  text?: string;
  val?: string;
}
const Count = ({ text, val }: Props) => {
  console.log("rendering:-" + text);
  return <div>Count {text + val} </div>;
};

export default React.memo(Count);
