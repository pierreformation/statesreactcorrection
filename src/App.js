import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
 
  const [number,setNumber]=useState(0)

  return (
    <div className="App">
      <div>{number}</div>
      <button
      onClick={()=>{
        setNumber(number + 1)
      }}
      >+</button>

<button
      onClick={()=>{
        setNumber(number - 1)
      }}
      >-</button>
    </div>
  );
}

export default App;
