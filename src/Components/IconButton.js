import React from "react";

// const text = "Add";
// const reactElement = (
//   <button className="icon_button cta">
//     <FaHome />
//     <span style={{ fontWeight: "bold" }}> {text} </span>
//   </button>
// );
export const IconButton = props => (
  <button className="icon_button cta">
    {props.icon}
    <span style={{ fontWeight: "bold" }}> {props.text} </span>
  </button>
);
