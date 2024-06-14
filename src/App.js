import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar /> 
      </header>
      <div className="Main">
        <h2>Hello World!</h2>
      </div>
    </div>
  );
}

export default App;
