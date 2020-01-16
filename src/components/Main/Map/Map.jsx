import React, { useState, useEffect } from "react";
import Leaflet from "leaflet";
import { Map } from "react-leaflet";
import axios from "axios";
import Tile from "./Tile";
import "leaflet/dist/leaflet.css";
import { Marker, Popup } from "react-leaflet";
import { connect } from "react-redux";

import styles from "./Map.module.css";

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

const { map } = styles;

function MapDisplay({ token }) {
  const [initialMapPosition] = useState([48.5833, 7.75]);
  const [zoom] = useState(7);
  const [markers, setMarkers] = useState([]);

  const addMarker = e => {
    const { lat, lng } = e.latlng;
    axios
      .post(
        "https://floco-app.herokuapp.com/locations",
        {
          latitude: lat,
          longitude: lng,
          PlantUuid: "1" //TODO: change to a real plant
          // backend branch test
        },
        {
          headers: {
            "access-token": token
          }
        }
      )
      .then(res => {
        const { uuid, latitude, longitude, PlantUuid } = res.data;
        setMarkers([
          ...markers,
          {
            uuid,
            lat: latitude,
            lng: longitude,
            PlantUuid
          }
        ]);
      })
      .catch(err => {
        console.log(err);
        alert(err.messagge);
      });
  };

  const deleteMarker = e => {
    axios
      .delete(`https://floco-app.herokuapp.com/locations/${e}`, {
        headers: {
          "access-token": token
        }
      })
      .then(res => {
        const filteredMarkers = markers.filter(marker => e !== marker.uuid);
        setMarkers(filteredMarkers);
      })
      .catch(err => {
        console.log(err);
        alert(err.messagge);
      });
  };

  useEffect(() => {
    const getMarkers = async () => {
      let res = await axios.get("https://floco-app.herokuapp.com/locations");
      const markers = res.data.map(marker => {
        return {
          uuid: marker.uuid,
          lat: marker.latitude,
          lng: marker.longitude,
          PlantUuid: marker.PlantUuid
        };
      });
      setMarkers(markers);
    };
    getMarkers();
  }, []);

  return (
    <Map
      center={initialMapPosition}
      zoom={zoom}
      className={map}
      onClick={addMarker}
    >
      <Tile />
      {markers.map(marker => (
        <Marker key={marker.uuid} position={marker}>
          <Popup>
            <button
              onClick={() => deleteMarker(marker.uuid)}
              className="ui button"
            >
              Delete Marker
            </button>
          </Popup>
        </Marker>
      ))}
    </Map>
  );
}

const mapStateToProps = state => {
  return {
    token: state.authReducer.token
  };
};

export default connect(mapStateToProps)(MapDisplay);
