import React from "react";

const ChildComponent = ({ currentValue, setCurrentValue }) => {
  //code here
  return (
    <div id="child">
      Find The Square <br />
      <input
        id="input"
        value={currentValue}
        onChange={(e) => setCurrentValue(e.target.value)}
      />
    </div>
  );
};

export default ChildComponent;
