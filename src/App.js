import Navbar from './components/Navigation/Navbar';
import Header from './components/Header/Header';
import HomeCollection from './components/Sections/HomeCollection';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <HomeCollection></HomeCollection>
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
