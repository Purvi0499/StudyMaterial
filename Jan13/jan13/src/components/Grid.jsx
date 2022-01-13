import React from "react";
import { Grid } from "@mui/material";
export default function GridSYstem() {
  return (
    <>
      <Grid item xs={12} container spacing={2}>
        <Grid item lg={3} xs={12} sm={6}>
          <h1 style={{ backgroundColor: "green" }}>Block 1</h1>
        </Grid>
        <Grid item lg={3} xs={12} sm={6}>
          <h1 style={{ backgroundColor: "green" }}>Block 2</h1>
        </Grid>
        <Grid item lg={3} xs={12} sm={6}>
          <h1 style={{ backgroundColor: "green" }}>Block 3</h1>
        </Grid>
        <Grid item lg={3} xs={12} sm={6}>
          <h1 style={{ backgroundColor: "green" }}>Block 4</h1>
        </Grid>
      </Grid>
    </>
  );
}
