import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);
  let addValue = () => {
    if (counter == 20) {
      setCounter(20);
    } else {
      setCounter(counter + 1);
    }
  };
  let remValue = () => {
    if (counter == 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>chai or React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={remValue}>Remove Value</button>
      <p>Footer : {counter}</p>
    </>
  );
}

export default App;
