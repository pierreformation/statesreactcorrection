import { useState } from "react";
import "./converters.css";

const Converters = () => {
  //   const [inputWord, setInputWord] = useState("");
  const [inputEur, setInputEur] = useState("");
  const [inputDoll, setInputDoll] = useState("");

  console.log("inputEur", inputEur, inputDoll);

  const convRate = 1.2;

  return (
    <div>
      {/* <div>EXERCICE 1</div>
      <div>Hello Enter Your Sum</div>

      <input
        value={inputWord}
        onChange={(event) => {
          console.log(event);
          setInputWord(event.target.value);
        }}
      />
      <div className="result"> {(inputWord * convRate).toFixed(2)} </div> */}

      <div>EXERCICE 2</div>

      <input
        value={inputEur}
        onChange={(event) => {
          //   console.log("Je suis dans onchange du premier input");
          setInputEur(event.target.value);

          setInputDoll((event.target.value * convRate).toFixed(2));
        }}
      />

      <input
        value={inputDoll}
        onChange={(event) => {
          //   console.log("Je suis dans onchange du deuxieme input");
          setInputDoll(event.target.value);
          setInputEur((event.target.value / convRate).toFixed(2));
        }}
      />
    </div>
  );
};

export default Converters;
