import "./App.css";
import { ChakraProvider, Box, Image } from "@chakra-ui/react";
import Example from "./components/ExampleE";
import Forms from "./components/Form";
import logoimage from "./components/Persistent_Systems_Logo.jpg";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Box
          bg="purple"
          w="350px"
          p={3}
          boxShadow="sm"
          rounded="lg"
          margin={"auto"}
        >
          <Image alt="image" src={logoimage} w="330px" h="150px" mx="auto" />
          <Example />
          <Forms />
        </Box>
      </ChakraProvider>
    </div>
  );
}

export default App;
