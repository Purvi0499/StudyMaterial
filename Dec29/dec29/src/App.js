import logo from './logo.svg';
import './App.css';
import { Welcome } from './components/Welcome';
import { Composition } from './components/Composition';
import { Message } from './components/ConditionalRendering';
import { Hooks } from './components/Hooks';
import { UseEffectHook } from './components/UseEffectHook';

function App() {
 return(
 <div>
 {/* <Welcome/> */}
 <Composition/> 
 <Message/>
 <Hooks/>
 <UseEffectHook/>
 </div>
 );
}

export default App;
