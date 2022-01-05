import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/hoc/Counter";
import Hocred, { Hocblue, Hocgreen } from "./components/hoc/Hoc";
import Register from "./components/HookForm/Register";
import UserForm from "./components/HookForm/UserForm";

function App() {
  return (
    <div className="App">
      {/* <Register /> */}
      <UserForm />
      <Counter />
      <Hocred cmp={Counter} />
      <Hocgreen cmp={Counter} />
      <Hocblue cmp={Counter} />
    </div>
  );
}

export default App;
