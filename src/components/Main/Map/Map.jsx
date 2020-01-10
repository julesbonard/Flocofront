import React, { useState, useEffect } from "react";
import Leaflet from "leaflet";
import { Map } from "react-leaflet";
import axios from "axios";
import Tile from "./Tile";
import "leaflet/dist/leaflet.css";
import { Marker, Popup } from "react-leaflet";
import { connect } from "react-redux";
import Axios from 'axios';

import styles from "./Map.module.css";

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

const { map } = styles;

function MapDisplay({ token, id }) {
  const [initialMapPosition] = useState([48.5833, 7.75]);
  const [zoom] = useState(7);
  const [markers, setMarkers] = useState([]);

  const addMarker = e => {
    const { lat, lng } = e.latlng;
    axios
      .post("https://floco-app.herokuapp.com/locations", {
        latitude: lat,
        longitude: lng,
        PlantUuid: "1" //TODO: change to a real plant 
        // backend branch test
      })
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
      .delete(`https://floco-app.herokuapp.com/locations/${e}`).then(res => {
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
      console.log(res);
    };
    getMarkers();
  }, []);

  const getUser = async () => {
    let res = await Axios.get(`https://floco-app.herokuapp.com/users/${id}`, { headers: { Authorization: `Bearer ${token}` } })
    const firstName = res.data.firstName
    const lastName = res.data.lastName
    const email = res.data.email
    const pseudo = res.data.pseudo
    const password = res.data.password
    const avatar = res.data.avatar
    sessionStorage.setItem('userFirstName', firstName)
    sessionStorage.setItem('userLastName', lastName)
    sessionStorage.setItem('userEmail', email)
    sessionStorage.setItem('userPseudo', pseudo)
    sessionStorage.setItem('userPassword', password)
    sessionStorage.setItem('userAvatar', avatar)
    console.log(res);
  }
  getUser()

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
            <button onClick={() => deleteMarker(marker.uuid)} className="ui button">Delete Marker</button>
          </Popup>
        </Marker>
      ))}
    </Map>
  );
}

const mapStateToProps = state => {
  return {
    token: state.token,
    id: state.id
  };
};

export default connect(mapStateToProps)(MapDisplay)