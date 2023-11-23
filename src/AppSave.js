import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Component1 from "./Component1";

function App() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  console.log("hello", number);

  return (
    <div>
      <div className="App">
        <div>
          <h1>COMPTEUR 1</h1>
          <div className="cptbox">{number}</div>
          <button
            onClick={() => {
              if (number < 11 && number + number2 < 15) {
                setNumber(number + 1);
              }
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              if (number > 0) {
                setNumber(number - 1);
              }
            }}
          >
            -
          </button>
        </div>
        <div>
          <h1>COMPTEUR 2</h1>
          <div className="cptbox">{number2}</div>
          <button
            onClick={() => {
              if (number2 < 11 && number + number2 < 15) {
                setNumber2(number2 + 1);
              }
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              if (number2 > 0) {
                setNumber2(number2 - 1);
              }
            }}
          >
            -
          </button>
        </div>
      </div>
      {number + number2 > 10 ? <div className="squareOrange"></div> : null}

      <div>LA SOMME DES DEUX COMPTEURS {number + number2}</div>
    </div>
  );
}

export default App;
