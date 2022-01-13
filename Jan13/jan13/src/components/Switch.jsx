import React from "react";
import { Switch } from "@mui/material";
export default function SwitchMaterialUi() {
  function getData(e, val) {
    console.warn(val);
  }
  return (
    <>
      <h1>Switch|MaterialUI</h1>
      <div>
        <Switch color="secondary" size="small" onChange={getData} />
      </div>
    </>
  );
}
