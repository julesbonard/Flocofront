import React, { useState } from 'react'
import Leaflet from 'leaflet';
import { Map } from 'react-leaflet'
import Mark from './Mark'
import Tile from "./Tile";
import 'leaflet/dist/leaflet.css';

Leaflet.Icon.Default.imagePath =
'../node_modules/leaflet'

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default function MapDisplay() {
    const [latitude, setLatitude] = useState(48.5833);
    const [longitude, setlongitude] = useState(7.75);
    const [zoom, setZoom] = useState(7);
    
    const position = [latitude, longitude]

    return (
    <Map center={position} zoom={zoom} style={{height : '400px'}}>
        <Tile/>
        <Mark lat="48.5833" lon="7.75"/>
    </Map>
    )
}