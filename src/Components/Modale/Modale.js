import "./modale.css";
import { useState } from "react";

const Modale = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      hello
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        Click Me
      </button>
      {open === true && (
        <div
          className="modalContainer"
          onClick={() => {
            setOpen(false);
          }}
        >
          <div className="modalmessage">BIENVENUE</div>
        </div>
      )}
    </div>
  );
};

export default Modale;
