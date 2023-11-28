import "./selecters.css";
import { useState } from "react";

//
//
//

function Selecters() {
  const [selector, setSelector] = useState(null);
  const [arrPosition, setArrayPosition] = useState(0);

  const urlarray = [
    "https://www.static.inrae.fr/cdn/ff/XAvXuiIeWT7sqhd1j2-q9ftO5SYFra2MAqHW9QXUOPk/1642174834/public/styles/actu/public/jpg/DSC_1633_ECE.jpg?itok=W6KBbk0Z",
    "https://previews.123rf.com/images/julialine/julialine1608/julialine160800136/62085734-photo-de-grande-quantit%C3%A9-de-petits-poissons-jaunes-et-gris.jpg",
    "https://iees-paris.fr/wp-content/uploads/2021/03/Foljuif_femelle_medaka-scaled.jpg",
  ];

  console.log("arrPosition", arrPosition);

  return (
    <div className="App">
      <div className="selectorContainer">
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
        <div className="separator">EXERCICE 2 : GALLERIE</div>
        <img className="imgselecteurs" src={urlarray[arrPosition]} />
        <button
          onClick={() => {
            if (arrPosition === 2) {
              setArrayPosition(0);
            } else {
              setArrayPosition(arrPosition + 1);
            }
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

export default Selecters;
