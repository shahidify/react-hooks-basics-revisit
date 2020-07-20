import React from "react";

export const CTAButton = props => (
  <button
    onKeyDown={event => {
      if (event.key === "Enter" || event.key === " ") props.onKeyboardClick();
    }}
    className="icon_button cta"
  >
    {props.children}
  </button>
);
