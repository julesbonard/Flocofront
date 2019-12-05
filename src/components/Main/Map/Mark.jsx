import React, { useState } from 'react';
import { Marker, Popup } from 'react-leaflet'

export default function Mark() {
    const [latitude, setLatitude] = useState(48.5833);
    const [longitude, setlongitude] = useState(7.75);

    const position = [latitude, longitude]
    return (
        <div>
            <Marker position={position}>
                <Popup>
                    LEAFLETTTTTTTTTTTTTTT
                </Popup>
            </Marker>
        </div>
    )
}