import React, { useState } from "react";

import Map from "./Map";
import styles from "./Map.module.css";

const { test1, test2 } = styles;

function MapButton() {
  const [buttons, setbuttons] = useState([
    { id: 1, label: "marker", reverted: false },
    { id: 2, label: "markerPartner", reverted: false }
  ]);

  const revertButton = id => {
    const revertedButtons = buttons.map(but => {
      if (id === but.id) {
        return {
          ...but,
          reverted: !but.reverted
        };
      } else {
        return {
          ...but,
          reverted: false
        };
      }
    });
    setbuttons(revertedButtons);
  };

  return (
    <>
      <Map buttons={buttons} />

      {buttons.map(but => {
        return (
          <button
            onClick={() => revertButton(but.id)}
            className={`${!but.reverted ? test1 : test2}`}
          >
            button
          </button>
        );
      })}
    </>
  );
}

export default MapButton;
