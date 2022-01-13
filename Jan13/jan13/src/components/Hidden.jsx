import React from "react";
import { Hidden, Grid } from "@mui/material";
export default function HiddenMUI() {
  return (
    <>
      <h1>Hidden</h1>
      <Grid container spacing={2} xs={12} item>
        <Grid lg={3} item sm={6} xs={12}>
          <h1 style={{ backgroundColor: "green" }}>Block1</h1>
        </Grid>
        <Grid lg={3} item sm={6} xs={12}>
          <h1 style={{ backgroundColor: "green" }}>Block2</h1>
        </Grid>
        <Hidden only={["sm", "md"]}>
          <h1 style={{ backgroundColor: "green", flex: 1 }}>Block3</h1>
        </Hidden>
        <Grid lg={3} item sm={6} xs={12}>
          <h1 style={{ backgroundColor: "green" }}>Block4</h1>
        </Grid>
      </Grid>
    </>
  );
}
