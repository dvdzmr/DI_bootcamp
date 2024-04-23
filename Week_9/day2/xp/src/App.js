import logo from './logo.svg';
import './App.css';
import Car from './components/Car';
import Garage from './components/Garage';
import Events from './components/Events';
import Phone from './components/Phone';
import Color from './components/Color'

function App() {
  const carinfo = {
    name: 'Ford', 
    model: 'Mustang'
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Car carname={carinfo}/>
        <Garage size="small" />
        <Events/>
        <Phone/>
        <Color/>
      </header>
    </div>
  );
}

export default App;
