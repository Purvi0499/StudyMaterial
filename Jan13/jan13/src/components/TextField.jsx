import { TextField } from "@mui/material";
import React from "react";
export default function TextFields() {
  function getData(e) {
    console.warn(e.target.value);
  }
  return (
    <>
      <h1>TextField|Material UI</h1>
      <div>
        <TextField
          label="Enter username"
          color="secondary"
          variant="outlined"
          onChange={getData}
        />
      </div>
      <div>
        <TextField
          label="Enter password"
          color="secondary"
          variant="outlined"
          type="password"
        />
      </div>
    </>
  );
}
