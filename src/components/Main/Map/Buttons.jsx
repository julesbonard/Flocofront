import React from "react";

import styles from "./Map.module.css";

const { test1, test2, width, border } = styles;


function MapButton({ buttons, handleClick, toggleCurrentUser }) {
  return (
    <div className={`${border} ui four column grid`}>
      <div className="row">
        {buttons.map((but, index) => {
          return (
            <div key={index} className={`${width} column`}>
              <img
                src={but.image}
                alt=" button floco plante"
                onClick={() => {
                  return handleClick(but.id);
                }}
                className={`${!but.display ? test1 : test2}`}
              />
              <p>{but.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MapButton;
