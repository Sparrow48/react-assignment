import React from "react";
import "./UserOutput.css";

const useroutput = props => {
  return (
    <div className='UserOutput'>
      <p onClick={props.clicked}>UserName: {props.username}</p>
      <p>Happy coding!!!</p>
    </div>
  );
};

export default useroutput;
