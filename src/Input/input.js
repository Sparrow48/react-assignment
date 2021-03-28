import React from "react";
import "./input.css";

const Input = props => {
  const divStyle = {
    paddingTop: "10px",
  };
  return (
    <div style={divStyle}>
      <input type='text' onChange={props.count} value={props.text} />
      <p className='p'>{props.text}</p>
    </div>
  );
};

export default Input;
