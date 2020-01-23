import React from "react";

import styles from "./Map.module.css";
import partner from "./partner.png";
import plant from "./plant.png";
import moncompte from "./user.png";

const { test1, test2, width, border } = styles;

function MapButton({ buttons, handleClick }) {
  const chooseImage = e => {
    if (e === "markers") return plant;
    if (e === "partnersMarkers") return partner;
    else if (e === "userMarkers") return moncompte;
  };

  const chooseText = e => {
    if (e === "markers") return "plantes";
    if (e === "partnersMarkers") return "partenaires";
    else if (e === "userMarkers") return "points";
  };

  return (
    <div className={`${border} ui four column grid`}>
      <div className="row">
        {buttons.map((but, index) => {
          return (
            <div className={`${width} column`}>
              <img
                src={chooseImage(but.label)}
                alt="button floco plante"
                onClick={() => handleClick(but.id)}
                className={`${!but.display ? test1 : test2}`}
              />
              <p>{chooseText(but.label)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MapButton;
