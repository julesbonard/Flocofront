import React, { useState, useEffect } from "react";
import Leaflet from "leaflet";
import { Map } from "react-leaflet";
import axios from "axios";
import Tile from "./Tile";
import "leaflet/dist/leaflet.css";
import { Marker, Popup } from "react-leaflet";
import { connect } from "react-redux";

import styles from "./Map.module.css";
import ModalMarker from "./Modal";

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

const { map } = styles;

function MapDisplay({
  token,
  displayMarkers,
  displayPartners,
  displayUser,
  id
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [markers, setMarkers] = useState([]);
  const [latLng, setLatLng] = useState({});
  const [plantUuid, setPlantUuid] = useState("");
  const [initialMapPosition] = useState([48.5833, 7.75]);
  const [zoom] = useState(7);
  const [partnersMarkers] = useState([
    { lat: 50, lng: 6, PlantUuid: 1 },
    { lat: 52, lng: 6, PlantUuid: 1 },
    { lat: 51, lng: 5, PlantUuid: 1 }
  ]);
  const config = {
    headers: {
      "access-token": token
    }
  };

  const openModal = e => {
    const { lat, lng } = e.latlng;

    setIsModalOpen(true);
    setLatLng({
      latitude: lat,
      longitude: lng
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addMarker = id => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/locations`,
        {
          ...latLng,
          PlantUuid: id
        },
        {
          headers: {
            "access-token": token
          }
        }
      )

      .then(res => {
        console.log(res);

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

  const deleteMarker = async plant => {
    console.log(plant.PlantUuid);
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/plants/${plant.PlantUuid}`,
        config
      );
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/plants`,
        config
      );

      const refactoredPlants = res.data.map(({ uuid, Location, Pot }) => {
        return {
          PlantUuid: uuid,
          locationUuid: Location.uuid,
          PotUuid: Pot.uuid,
          lat: Location.latitude,
          lng: Location.longitude,
          userUuid: Pot.UserUuid
        };
      });
      setMarkers(refactoredPlants);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getMarkers = async () => {
      const plants = await axios.get(`${process.env.REACT_APP_API_URL}/plants`);

      const refactoredPlants = plants.data.map(({ uuid, Location, Pot }) => {
        return {
          PlantUuid: uuid,
          locationUuid: Location.uuid,
          PotUuid: Pot.uuid,
          lat: Location.latitude,
          lng: Location.longitude,
          userUuid: Pot.UserUuid
        };
      });
      setMarkers(refactoredPlants);
    };
    getMarkers();
  }, []);

  return (
    <>
      <Map
        center={initialMapPosition}
        zoom={zoom}
        className={map}
        onClick={openModal}
      >
        <Tile />

        {displayPartners &&
          partnersMarkers.map(marker => (
            <Marker key={marker.uuid} position={marker}>
              <Popup>
                <ModalMarker />
                <button
                  onClick={() => deleteMarker(marker)}
                  className="ui button"
                >
                  Delete Marker
                </button>
              </Popup>
            </Marker>
          ))}

        {displayMarkers &&
          markers.map(marker => (
            <Marker key={marker.uuid} position={marker}>
              <Popup>
                <button
                  onClick={() => deleteMarker(marker)}
                  className="ui button"
                >
                  Delete Marker
                </button>
              </Popup>
            </Marker>
          ))}

        {displayMarkers &&
          markers.map(marker => (
            <Marker key={marker.uuid} position={marker}>
              <Popup>
                <button
                  onClick={() => deleteMarker(marker)}
                  className="ui button"
                >
                  Delete Marker
                </button>
              </Popup>
            </Marker>
          ))}
      </Map>
      <ModalMarker
        open={isModalOpen}
        setPlantUuid={setPlantUuid}
        plantUuid={plantUuid}
        addMarker={addMarker}
        closeModal={closeModal}
      />
    </>
  );
}

const mapStateToProps = state => {
  return {
    token: state.authReducer.token,
    id: state.authReducer.id
  };
};

export default connect(mapStateToProps)(MapDisplay);
