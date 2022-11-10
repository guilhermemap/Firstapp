import './App.css';
import Firstapp from './components/Firstapp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <Firstapp name="teste" />
        {/*
        */}
      </header>
    </div>
  );
}

export default App;
