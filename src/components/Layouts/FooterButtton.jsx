import React, { useState } from "react";

import Logo from "../../assets/mon_compte_vert.png";
import styles from "./FooterButton.module.scss";

const { imagebutton, red, yellow } = styles;

export default function FooterButton() {
  const [buttons, setButtons] = useState([
    { id: 1, reverted: false },
    { id: 2, reverted: false },
    { id: 3, reverted: false }
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
    setButtons(revertedButtons);
  };

  return (
    <>
      {buttons.map(but => {
        return (
          <img
            src={Logo}
            alt="Logo flore footer"
            onClick={() => revertButton(but.id)}
            className={`${imagebutton} ${!but.reverted ? red : yellow}`}
          />
        );
      })}
    </>
  );
}
