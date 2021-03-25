import React from "react";

const useroutput = props => {
  return (
    <div>
      <p onClick={props.clicked}>UserName: {props.username}</p>
      <p>Happy coding!!!</p>
    </div>
  );
};

export default useroutput;
