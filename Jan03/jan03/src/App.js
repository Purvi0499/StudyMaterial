import logo from "./logo.svg";
import "./App.css";
import { Toggle } from "./components/HandlingEvents";
import { HiBye } from "./components/HiBye";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Error } from "./components/Error";

function App() {
  return (
    <Router>
      <Navbar> </Navbar>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        {/* <Route path="*" element={<Error />}></Route> */}
      </Routes>
    </Router>
  );
  // (<Home />), (<Navbar />);
  // (<Toggle />),

  //(<HiBye/>);
}

export default App;
