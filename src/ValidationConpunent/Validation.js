import React from "react";

const Validation = props => {
  let validationMess = "Text long enough!!!";
  if (props.count <= 5) {
    validationMess = "Text too short!!!";
  }
  return <div>{validationMess}</div>;
};

export default Validation;
