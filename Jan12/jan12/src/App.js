import "./App.css";
import ButtonGroups from "./components/ButtonGroup";
import Buttons from "./components/Button";
import Checkboxes from "./components/Checkbox";
import RadioButtons from "./components/RadioButton";
import Sliders from "./components/Slider";
import Rangeslider from "./components/RangeSlider";

function App() {
  return (
    <div className="App">
      <Buttons />
      <ButtonGroups />
      <Checkboxes />
      <RadioButtons />
      <Sliders />
      <Rangeslider />
    </div>
  );
}

export default App;
