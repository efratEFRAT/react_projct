import logo from './logo.svg';
import './App.css';
import DisplayIndex from './lesson1/lesson1';
import FromPizza from './lesson_2/lesson2'
// import NewPrint from './componants/newPrint';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <DisplayIndex></DisplayIndex>
        <FromPizza></FromPizza>
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
