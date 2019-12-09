import React, { useState } from 'react';
import { Marker, Popup } from 'react-leaflet'

export default function Mark( {lat, lon}) {
    const [latitude, setLatitude] = useState(lat);
    const [longitude, setlongitude] = useState(lon);
    const position = [latitude, longitude]
    return (
        <Marker position={position}>
            <Popup>
                LEAFLETTTTTTTTTTTTTTT
            </Popup>
        </Marker>
    )
}