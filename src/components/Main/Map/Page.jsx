import React, { useState } from "react";

import Map from "./Map";
import Buttons from "./Buttons";

const LoginPage = () => {
  const [buttons, setButtons] = useState([
    { id: 1, label: "markers", display: true },
    { id: 2, label: "partnersMarkers", display: false }
  ]);
  const displayMarkers = buttons.find(el => el.label === "markers").display;
  const displayPartners = buttons.find(el => el.label === "partnersMarkers")
    .display;

  const revertButton = id => {
    const displayButtons = buttons.map(but => {
      if (id === but.id) {
        return {
          ...but,
          display: !but.display
        };
      } else {
        return {
          ...but,
          display: false
        };
      }
    });
    setButtons(displayButtons);
  };
  return (
    <>
      <Map displayMarkers={displayMarkers} displayPartners={displayPartners} />
      <Buttons buttons={buttons} handleClick={revertButton} />
    </>
  );
};
export default LoginPage;
