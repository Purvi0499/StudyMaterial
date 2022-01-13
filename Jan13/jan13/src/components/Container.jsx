import React from "react";
import { Container } from "@mui/material";
export default function Containers() {
  return (
    <div>
      <Container maxWidth="xs" style={{ backgroundColor: "skyblue" }}>
        <h1>Container|MaterialUI</h1>
      </Container>
      <Container maxWidth="sm" style={{ backgroundColor: "skyblue" }}>
        <h1>Container|MaterialUI</h1>
      </Container>
      <Container maxWidth="md" style={{ backgroundColor: "skyblue" }}>
        <h1>Container|MaterialUI</h1>
      </Container>
      <Container maxWidth="lg" style={{ backgroundColor: "skyblue" }}>
        <h1>Container|MaterialUI</h1>
      </Container>
      <Container fixed style={{ backgroundColor: "skyblue" }}>
        <h1>Container|MaterialUI</h1>
      </Container>
    </div>
  );
}
