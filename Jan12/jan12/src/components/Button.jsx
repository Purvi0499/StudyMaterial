import { Button } from "@mui/material";
import { Alarm, Delete } from "@material-ui/icons";
import { useState } from "react";

export default function Buttons() {
  const [color, setColor] = useState("primary");
  const [disableBtn, setDisableBtn] = useState(false);
  function customAlert() {
    //  / alert("button clicked");
    setColor("secondary");
    //setDisableBtn(true);
  }
  return (
    <>
      <h1>React MUI</h1>
      <Button
        color={color}
        disabled={disableBtn}
        variant="outlined"
        size="medium"
        startIcon={<Delete />}
        endIcon={<Alarm />}
        onClick={() => {
          customAlert();
        }}
      >
        Material UI Button
      </Button>
    </>
  );
}
