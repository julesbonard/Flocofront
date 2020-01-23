import React, { useState } from "react";

import styles from "./Map.module.css";

const { test1, test2 } = styles;

function MapButton({ buttons, handleClick, toggleCurrentUser }) {
  return (
    <>
      {buttons.map(but => {
        return (
          <div style={{ display: "inline-block" }}>
            <img
              src={but.image}
              alt="image button floco plante"
              onClick={() => {
                return handleClick(but.id);
              }}
              className={`${!but.display ? test1 : test2}`}
            />
            <p>{but.text}</p>
          </div>
        );
      })}
    </>
  );
}

export default MapButton;
