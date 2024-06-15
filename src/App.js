import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar /> 
      </header>
      <Skills></Skills>
    </div>
  );
}

export default App;
