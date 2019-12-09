import React from "react";
import { TileLayer } from 'react-leaflet'

export default function Tile() {
    return (
        <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    )
}