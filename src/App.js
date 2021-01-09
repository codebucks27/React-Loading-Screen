import logo from "./logo.svg";
import "./App.css";
import PreLoader1 from "./components/PreLoader1";
import PreLoader2 from "./components/PreLoader2";
import PreLoader3 from "./components/PreLoader3";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <PreLoader1 /> */}
        {/* <PreLoader2 /> */}
        <PreLoader3 />
      </header>
    </div>
  );
}

export default App;
