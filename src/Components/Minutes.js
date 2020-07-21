import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
export function Minutes() {
  const [minutes, setMinutes] = useState(5);
  return (
    <div className="Minutes">
      <div>
        <button
          onClick={() => {
            setMinutes(minutes - 1);
            console.log("Minus clicked");
          }}
          type="button"
          className="icon_button Munutes_button"
        >
          <FaMinus />
        </button>
      </div>
      <div>{minutes} Minutes</div>
      <div>
        <button
          onClick={() => {
            console.log("Plus clicked");
            setMinutes(minutes + 1);
          }}
          type="button"
          className="icon_button Munutes_button"
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
}
