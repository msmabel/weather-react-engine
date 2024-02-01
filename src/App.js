import "./App.css";
import Weatherengine from "./Weather-engine";

function App() {
  return (
    <div>
      <header className="App-header">
        <Weatherengine defaultCity="paris" />
      </header>
    </div>
  );
}

export default App;
