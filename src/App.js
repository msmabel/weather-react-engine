import "./App.css";
import Weatherengine from "./Weather-engine";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Weatherengine defaultCity="paris" />
        </header>

        <footer>
          This project was coded by <a href="" target=""></a> Mabel Bapela
        </footer>
      </div>
    </div>
  );
}

export default App;
