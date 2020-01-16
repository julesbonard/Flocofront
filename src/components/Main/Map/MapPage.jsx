import React from 'react';
import Map from './Map'
import Axios from "axios"
import { connect } from "react-redux";
import { LEVEL_LOGIN } from "../../../reducers/action";

const MapPage = ({ token, id, levelLogIn }) => {
  const tresaury = async () => {
    const res = await Axios.get(`https://floco-app.herokuapp.com/users/${id}/tresaury`, {
      headers: {
        "access-token": token
      }
    })
    if (res.data.length === 0) {
      const newTresaury = {
        level: 1,
        badge: "nouvel espoir",
        points: 0,
        UserUuid: id
      };
      const newRes = await Axios.post("https://floco-app.herokuapp.com/tresaury", newTresaury,
        {
          headers: {
            "access-token": token
          }
        })
      console.log(newRes.data);
      const level = newRes.data
      levelLogIn(level)
    } else {
      console.log(res.data);
      const level = res.data
      levelLogIn(level)
    }
  }
  tresaury()

  return (
    <>
      <Map />
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
    levelLogIn: (level) => dispatch({ type: LEVEL_LOGIN, payload: { level } })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);