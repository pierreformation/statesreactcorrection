import "./App.css";
import { useState } from "react";

function App() {
  const [myClass, setMyClass] = useState("orangeSq");
  const [selector, setSelector] = useState(null);

  console.log("selector est", selector);

  return (
    <div className="App">
      <div className="selectorContainer">
        EXERCICE 0 UN SELECTEUR SIMPLE
        <div
          className={myClass}
          onClick={() => {
            if (myClass === "greenSq") {
              setMyClass("orangeSq");
            } else {
              setMyClass("greenSq");
            }
          }}
        ></div>
        <div className="separator">EXERCICE 1 : 3 SELECTEURS</div>
        <div className="sel3Container">
          <div
            onClick={() => {
              setSelector(0);
            }}
            className={selector === 0 ? "greenSq" : "orangeSq"}
          ></div>
          <div
            onClick={() => {
              setSelector(1);
            }}
            className={selector === 1 ? "greenSq" : "orangeSq"}
          ></div>
          <div
            onClick={() => {
              setSelector(2);
            }}
            className={selector === 2 ? "greenSq" : "orangeSq"}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;