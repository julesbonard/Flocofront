import React from "react";
import { Marker, Popup } from "react-leaflet";

export default function Mark({ points }) {
  return (
    <>
      {points.map(p => {
        return (
          <>
          <Marker position={p}>
          <Popup>LEAFLETTTTTTTTTTTTTTT</Popup>
          </Marker>
          </>
      )
      })}

    </>
  );
}
