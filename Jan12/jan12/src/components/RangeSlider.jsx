import React, { useState } from "react";
import { Slider } from "@mui/material";
export default function Rangeslider() {
  const [val, setVal] = useState([40, 50]);
  function updateVal(e, item) {
    setVal(item);
  }
  return (
    <>
      <h1>Range SLider</h1>
      <div style={{ width: 300, margin: 40 }}>
        <Slider
          value={val}
          max={200}
          onChange={updateVal}
          valueLabelDisplay="auto"
          step={20}
        />
      </div>
    </>
  );
}
