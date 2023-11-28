import { useState } from "react";

const Converters = () => {
  const [inputWord, setInputWord] = useState("");

  return (
    <div>
      Hello Enter Your Name
      <input
        value={inputWord}
        onChange={(event) => {
          console.log(event.target.value);
          setInputWord(event.target.value);
        }}
      />
      <div> {inputWord * 3} </div>
    </div>
  );
};

export default Converters;
