import React, { useState, useEffect } from "react";
import Leaflet from "leaflet";
import { Map } from "react-leaflet";
import axios from "axios";
import Mark from "./Mark";
import Tile from "./Tile";
import "leaflet/dist/leaflet.css";

import styles from "./Map.module.css";

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

const { map } = styles;

export default function MapDisplay() {
  const [latitude] = useState(48.5833);
  const [longitude] = useState(7.75);
  const [zoom] = useState(7);

  const position = [latitude, longitude];

  //Exemple tableau pour Api

  const points = [
    ["48.5833", "7.75"],
    ["48", "8.5"],
    ["47", "7.3"]
  ];

  //Exemple requête pour Api

  // useEffect(() => {
  //   const testpopup = async () => {
  //     const res = await axios.get("testpopup.json");
  //     console.log(res);
  //   };
  //   testpopup();
  // });

  return (
    <Map center={position} zoom={zoom} className={map}>
      <Tile />
      <Mark points={points} />
    </Map>
  );
}
