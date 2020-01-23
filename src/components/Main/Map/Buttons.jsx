import React from "react";

import styles from "./Map.module.css";
import partner from "./partner.png";
import plant from "./plant.png";
import moncompte from "./user.png";

const { test1, test2 } = styles;

function MapButton({ buttons, handleClick }) {
  const chooseImage = e => {
    if (e === 'markers') return plant;
    if (e === "partnersMarkers") return partner;
    else if (e === 'userMarkers') return moncompte;
  };

  const chooseText = e => {
    if (e === 'markers') return 'Les plantes';
    if (e === "partnersMarkers") return 'Les partenaires';
    else if (e === 'userMarkers') return 'Mes points';
  }

  return (
    <>
      {buttons.map((but, index) => {
        return (
          <div key={index} style={{ 'display': 'inline-block' }}>
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
    </>
  );
}

export default MapButton;
