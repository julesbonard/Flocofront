import React from 'react';
import { Image, Grid } from 'semantic-ui-react'
import { connect } from "react-redux";
import './UserLayout.scss'
import Burger from './Burger.jsx'

function UserLayout({ children, pseudo, avatar, }) {
  const niveau = 1 //USE AXIOS TO GET LEVLEL
  if (avatar === "null") {
    avatar = false
  }
  return (
    <>
      <Burger />
      <Grid className="grid">
        <Grid.Column textAlign='center' >
          <Image className='userimage' src={avatar ? avatar : 'https://elysator.com/wp-content/uploads/blank-User-picture-973460_1280-e1523978675847.png'} centered />
          <h1 className='username'>{pseudo}</h1>
          <p className='userlevel'>Niveau {niveau}</p>
        </Grid.Column>
      </Grid>
      <div>{children}</div>
    </>
  );
}
const mapStateToProps = state => {
  return {
    pseudo: state.userReducer.user.pseudo,
    avatar: state.userReducer.user.avatar
  };
};

export default connect(mapStateToProps)(UserLayout);