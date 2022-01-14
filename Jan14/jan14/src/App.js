import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Example from "./components/ExampleE";
import Forms from "./components/Form";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Example />
        <Forms />
      </ChakraProvider>
    </div>
  );
}

export default App;
