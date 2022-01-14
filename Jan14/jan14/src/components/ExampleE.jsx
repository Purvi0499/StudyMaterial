import React from "react";
import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
export default function Example() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("skyblue", "red");
  const color = useColorModeValue("black", "white");
  return (
    <header>
      <Box bg={bg} color={color}>
        <h1>This box will change color according to theme</h1>
      </Box>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </header>
  );
}
