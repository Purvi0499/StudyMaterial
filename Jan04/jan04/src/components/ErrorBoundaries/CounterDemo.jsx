import React, { useState } from "react";
import "./counterDemo.css";
function CounterDemo() {
  const [count, setCount] = useState(0);
  if (count === 5) {
    throw new Error("Error occured!");
  } else {
    return (
      <>
        <p className="counter">{count}</p>
        <center>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </center>
      </>
    );
  }
}

export default CounterDemo;
