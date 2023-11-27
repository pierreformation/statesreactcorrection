import "./App.css";
import { useState } from "react";

function App() {
  //   console.log("selector est", selector);
  const [state1, setState1] = useState("HELLO");
  const [state2, setState2] = useState(true);
  const [state3, setState3] = useState(true);

  return (
    <div className="App">
      {/* TECHNIQUE 1 - affichage du state */}
      <div className="orangeSq">{state1}</div>
      {/* TECHNIQUE 2 - Manipulation de classe */}
      <div className={state2 ? "greenSq" : "orangeSq"}></div>
      {/* TECHNIQUE 3 - Manipulation de JSX */}
      {state3 ? <div className="greenSq">3eme</div> : <p>4eme</p>}

      <button
        onClick={() => {
          setState1("JOHN");
          setState2(false);
          setState3(false);
        }}
      >
        CLICK ME
      </button>
    </div>
  );
}

export default App;
