import React from "react";
import { Slider } from "@mui/material";
export default function Sliders() {
  const mark = [
    {
      value: 0,
      label: "start",
    },
    {
      value: 50,
      label: "middle",
    },
    {
      value: 100,
      label: "end",
    },
  ];
  function getvalue(e, val) {
    console.warn(val);
  }
  return (
    <>
      <h1>Slider</h1>
      <div style={{ height: 300, margin: 40, alignContent: "center" }}>
        <Slider
          color="secondary"
          defaultValue={50}
          max={100}
          step={10}
          marks={mark}
          valueLabelDisplay="auto"
          onChange={getvalue}
        />
      </div>
    </>
  );
}
