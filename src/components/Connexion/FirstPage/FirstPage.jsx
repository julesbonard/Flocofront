import React from "react";
import { Link } from "react-router-dom";
import LoginPage from "../Login/LoginPage";

const Firstpage = () => {
  return (
    <>
      <div>
        <Link to="../Login/LoginPage">Floco</Link>
      </div>
      <div>
        <Link to="../Map">Map</Link>
      </div>
    </>
  );
};

export default Firstpage;
