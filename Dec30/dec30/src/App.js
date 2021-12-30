import logo from './logo.svg';
import './App.css';
import { CustomHooks } from './components/CustomHooks';
import { Context } from './components/Context';
import { Refs } from './components/Refs';
import { Login } from './components/Login';
import { VideoPlayer } from './components/VideoPlayer';

function App() {
  return (
    <CustomHooks/>,
    <Context/>,
    <Refs/>,
    <Login/>,
    <VideoPlayer/>
  );
}

export default App;
