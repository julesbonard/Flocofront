import React, { Component } from 'react'
import Leaflet from 'leaflet';
import { Map, TileLayer } from 'react-leaflet'
import Mark from './Mark'
import 'leaflet/dist/leaflet.css';

Leaflet.Icon.Default.imagePath =
'../node_modules/leaflet'

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default class MapDisplay extends Component {
state = {
    lat: 48.5833,
    lng: 7.75,
    zoom: 8,
}

render() {
    const position = [this.state.lat, this.state.lng]
    return (
    <Map center={position} zoom={this.state.zoom} style={{height : '600px'}}>
        <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Mark/>
    </Map>
    )
}
}