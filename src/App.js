import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Body from "./Components/Body"

function App() {
  return (
    <div className='WORK'>
            <Navbar />
      <Body />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload ghgjgjhg
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
