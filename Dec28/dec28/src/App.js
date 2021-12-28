import logo from './logo.svg';
import './App.css';
import { LearnList, numberItems } from './components/Lists';
import {Flowers, flowerItems} from './components/List1';
import { ThingsList, thingItems, thingItems2 } from './components/Keys';
import { List } from './components/Keys2';

function App() {
  return (
  <div>
    {/* <ul> <LearnList numberitems = {numberItems}/></ul>
    <ul> <Flowers floweritems = {flowerItems}/></ul>
    <ul><ThingsList thingitems = {thingItems}/></ul> */}
    <List/>
  </div>
  );
  
}

export default App;
