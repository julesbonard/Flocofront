import React, { useState } from "react";

import styles from "./Map.module.css";
import partner from "./partner.png";
import plant from "./plant.png";

const { test1, test2 } = styles;

function MapButton({ buttons, handleClick }) {
  return (
    <>
      {buttons.map(but => {
        return (
          <div style={{'display': 'inline-block'}}>
            <img
              src={but.label === "markers" ? partner : plant}
              alt="image button floco plante"
              onClick={() => handleClick(but.id)}
              className={`${!but.display ? test1 : test2}`}
            />
            <p>{but.label === "markers" ? 'Les plantes' : 'les partenaires'}</p>
          </div>
        );
      })}
    </>
  );
}

export default MapButton;
