import React, { useState } from "react";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
export default function SelectBox() {
  const [course, setCourse] = useState("");
  function updateValue(e, val) {
    console.warn(e.target.value);
    setCourse(e.target.value);
  }
  return (
    <>
      <h1>Select Box|MaterialUI</h1>
      <div>
        <Select value={course} displayEmpty onChange={updateValue}>
          <MenuItem value="">Select Course</MenuItem>
          <MenuItem value={1}>Node</MenuItem>
          <MenuItem value={2}>PHP</MenuItem>
          <MenuItem value={3}>Python</MenuItem>
          <MenuItem value={4}>Java</MenuItem>
        </Select>
      </div>
    </>
  );
}
