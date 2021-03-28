import React from "react";

const Input = props => {
  return (
    <div>
      <input type='text' onChange={props.count} value={props.text} />
      <p>Text is: {props.text}</p>
    </div>
  );
};

export default Input;
