import logo from "./logo.svg";
import "./App.css";
import { UseState } from "./UseState";
import { UseReducer } from "./useReducer";

function App() {
  return (
    <div className="App">
      <UseState />
      <UseReducer name="UseReducer" />
    </div>
  );
}

export default App;
