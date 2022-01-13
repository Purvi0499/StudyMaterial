import React from "react";
import { Box, Button } from "@mui/material";
export default function Boxes() {
  return (
    <>
      <h1>Box|MaterialUI</h1>
      <Box component="span" style={{ color: "red" }} clone m={20} p={10}>
        <Button style={{ color: "red" }}>Hello</Button>
      </Box>
    </>
  );
}
