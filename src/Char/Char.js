import React from "react";

const char = props => {
  const style = {
    display: "inline-block",
    color: "white",
    backgroundColor: "#87CEEB	",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black",
    borderRadius: "8px",
  };

  return (
    <div style={style} onClick={props.clicked}>
      {props.chars}
    </div>
  );
};

export default char;
