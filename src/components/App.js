import React, { useState, useEffect } from "react";
import "../styles/App.css";
import ChildComponent from "./ChildComponent";
const App = () => {
  const [currentValue, setCurrentValue] = useState("");
  const [squareValue, setSquareValue] = useState(0);
  useEffect(() => {
    setSquareValue(Number(currentValue) * Number(currentValue));
  }, [currentValue]);

  return (
    <div id="main">
      <ChildComponent
        currentValue={currentValue}
        setCurrentValue={setCurrentValue}
      />

      <p id="output">{squareValue}</p>
    </div>
  );
};

export default App;
