import React from "react";
import "./UserInput.css";

const userinput = props => {
  return (
    <input
      className='UserInput'
      type='text'
      onChange={props.changed}
      value={props.name}
    />
  );
};

export default userinput;
