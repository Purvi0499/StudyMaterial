import logo from './logo.svg';
import './App.css';
import {Welcome} from './components/Props'
import {Humans} from './components/ClassCompo'
import { H1Welcome, Navbar, SideBar } from './components/FunctComp';
import { Form } from './components/FormComp';

function App() {
  return (
    <div>
      <div>
        <Welcome name="Sara" />
      </div>
      <div>
         <Humans/>
         <SideBar/>
         <Navbar/>
         <H1Welcome/>
         
      </div>
      <div><Form/></div>
    </div>
   
  );
}

export default App;
