import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
export function Minutes() {
  const [minutes, setMinutes] = useState(5);
  const [error, setError] = useState(null);
  const handleAdd = () => {
    setMinutes(minutes + 1);
    setError(null);
  };
  const handleSubtract = () => {
    if (minutes > 1) {
      setMinutes(minutes - 1);
    } else {
      setError("Greater than 0 🤷🏻‍♂️ ");
    }
  };
  return (
    <div>
      <div className="Minutes">
        <div>
          <button
            onClick={handleSubtract}
            type="button"
            className="icon_button Munutes_button"
          >
            <FaMinus />
          </button>
        </div>
        <div>{minutes} Minutes</div>
        <div>
          <button
            onClick={handleAdd}
            type="button"
            className="icon_button Munutes_button"
          >
            <FaPlus />
          </button>
        </div>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}
