import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import NotFound from "./Pages/NotFound";
import Post from "./Pages/Post";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <div className="App">
      <Router>
        <Header />
        <button onClick={() => setLogin(!login)}>
          {login ? "logout" : "login"}
        </button>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/profile"
            element={login ? <Profile /> : <Navigate to="/" />}
          />

          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
