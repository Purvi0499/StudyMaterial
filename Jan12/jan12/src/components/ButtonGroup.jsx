import React from "react";
import { Button, ButtonGroup } from "@mui/material";
export default function ButtonGroups() {
  return (
    <>
      <h1>Material UI - Button Group </h1>
      <ButtonGroup variant="outlined" color="secondary" orientation="vertical">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </>
  );
}
