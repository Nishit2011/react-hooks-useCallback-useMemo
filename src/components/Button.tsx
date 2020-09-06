import React from "react";

const Button = (props) => {
  console.log(props);
  return (
    <div>
      <input type="button" value={props.btnName} onClick={props.handleClick} />
    </div>
  );
};

export default React.memo(Button);
