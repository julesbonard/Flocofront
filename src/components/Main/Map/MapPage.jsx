import React, { useState } from "react";
import Map from "./Map";
import Axios from "axios";
import { connect } from "react-redux";
import Buttons from "./Buttons";
import { LEVEL_LOGIN } from "../../../reducers/action";

const MapPage = ({ token, id, levelLogIn }) => {
  const tresaury = async () => {
    const res = await Axios.get(
      `${process.env.REACT_APP_API_URL}/users/${id}/tresaury`,
      {
        headers: {
          "access-token": token
        }
      }
    );
    if (res.data === null) {
      const newTresaury = {
        level: 1,
        badge: "nouvel espoir",
        points: 0,
        UserUuid: id
      };
      const newRes = await Axios.post(
        `${process.env.REACT_APP_API_URL}/tresaury`,
        newTresaury,
        {
          headers: {
            "access-token": token
          }
        }
      );
      const level = newRes.data;
      levelLogIn(level);
    } else {
      const level = res.data;
      levelLogIn(level);
    }
  };
  tresaury();

  const [buttons, setButtons] = useState([
    { id: 1, label: "markers", display: true },
    { id: 2, label: "partnersMarkers", display: false },
    { id: 3, label: "userMarkers", display: false }
  ]);
  const displayMarkers = buttons.find(el => el.label === "markers").display;
  const displayPartners = buttons.find(el => el.label === "partnersMarkers")
    .display;
  const displayUser = buttons.find(el => el.label === "userMarkers").display;

  const revertButton = id => {
    const displayButtons = buttons.map(but => {
      if (id === but.id) {
        return {
          ...but,
          display: !but.display
        };
      } else {
        return {
          ...but,
          display: false
        };
      }
    });
    setButtons(displayButtons);
  };

  return (
    <>
      <Map
        displayMarkers={displayMarkers}
        displayPartners={displayPartners}
        displayUser={displayUser}
      />
      <Buttons buttons={buttons} handleClick={revertButton} />
    </>
  );
};

const mapStateToProps = state => {
  return {
    token: state.authReducer.token,
    id: state.authReducer.id
  };
};
const mapDispatchToProps = dispatch => {
  return {
    levelLogIn: level => dispatch({ type: LEVEL_LOGIN, payload: { level } })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);
