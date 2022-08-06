import React, { useState } from "react";
import "./style.css";

const Exercise3 = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="centeredContent">
        Button has been clicked: {count} times
      </div>
      <div className="centered">
        <button onClick={incrementCount}>Click Me</button>
      </div>
    </>
  );
};

export default Exercise3;
