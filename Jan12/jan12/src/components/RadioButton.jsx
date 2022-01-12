import React, { useState } from "react";
import { Radio } from "@mui/material";
export default function RadioButtons() {
  const [gender, setGender] = useState("female");
  function TestFunc(e) {
    console.log(e.target.value);
    setGender(e.target.value);
  }
  return (
    <>
      <h1>Radio Buttons </h1>
      <div>
        <Radio
          value="male"
          checked={gender === "male"}
          color="primary"
          onChange={TestFunc}
        />
        <span>Male</span>
      </div>

      <div>
        <Radio
          value="female"
          checked={gender === "female"}
          color="secondary"
          onChange={TestFunc}
        />

        <span>Female</span>
      </div>
    </>
  );
}
