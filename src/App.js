import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar /> 
      </header>
      <Outlet/>
    </div>
  );
}

export default App;
