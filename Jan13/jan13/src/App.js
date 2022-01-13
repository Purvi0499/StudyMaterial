import logo from "./logo.svg";
import "./App.css";
import SelectBox from "./components/SelectBox";
import TextFields from "./components/TextField";
import SwitchMaterialUi from "./components/Switch";
import Boxes from "./components/Box";
import Containers from "./components/Container";
import GridSYstem from "./components/Grid";
import HiddenMUI from "./components/Hidden";
import TabsMUI from "./components/Tabs";
import Menus from "./components/Menus";

function App() {
  return (
    <div className="App">
      <SelectBox />
      <TextFields />
      <SwitchMaterialUi />
      <Boxes />
      <Containers />
      <GridSYstem />
      <HiddenMUI />
      <TabsMUI />
      <Menus />
    </div>
  );
}

export default App;
