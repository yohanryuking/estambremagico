import React from "react";
import "./buttons.css";

const Buttons = ({ fes }) => {
  const mostrarCtag = () => {
    fes[1].current.style.display = "none";
    fes[2].current.style.display = "flex";
  };

  return (
    <div>
      <button className="buttons arial" onClick={mostrarCtag}>
        {fes[0]}
      </button>
    </div>
  );
};

export default Buttons;
