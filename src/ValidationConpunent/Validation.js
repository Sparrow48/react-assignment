import React from "react";

const Validation = props => {
  let validationMess = "Text long enough!!!";
  if (props.count <= 5) {
    validationMess = "Text too short!!!";
  }
  const style = {
    color: "blue",
  };
  return <div style={style}>{validationMess}</div>;
};

export default Validation;
