import React from "react";
import { FaHome, FaPlus, FaMinus } from "react-icons/fa";
import { IconButton, CTAButton, Minutes } from "./Components";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div>
        {/* <div style={{ margin: "5px" }}>
          <IconButton icon={<FaHome />} text="Home" />
        </div>
        <div style={{ margin: "5px" }}>
          <CTAButton
            onKeyboardClick={() => {
              console.log("clicked!");
            }}
          >
            <FaPlus /> Add
          </CTAButton>
        </div>
        <div style={{ margin: "5px" }}>
          <CTAButton>
            <FaMinus /> Subtract
          </CTAButton>
        </div> */}
      </div>
      <div>
        <Minutes />
      </div>
    </div>
  );
}
