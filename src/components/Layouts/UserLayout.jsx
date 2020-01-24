import React from 'react';
import { Image, Grid } from 'semantic-ui-react'
import { connect } from "react-redux";
import './UserLayout.scss'
import Burger from './Burger.jsx';


function UserLayout({ children, pseudo, avatar, badge, level }) {

  if (avatar === "null") {
    avatar = false
  }
  return (
    <>
      <Burger />
      <Grid className="grid">
        <Grid.Column textAlign='center' >
          <Image className='userimage' src={avatar ? avatar : 'https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_960_720.png'} centered />
          <h1 className='username'>{pseudo}</h1>
          <h3 className='level'>{badge}</h3>
          <h3 className='level'> Niveau: {level}</h3>
        </Grid.Column>
      </Grid>
      <div>{children}</div>
    </>
  );
}
const mapStateToProps = state => {
  return {
    pseudo: state.userReducer.user.pseudo,
    avatar: state.userReducer.user.avatar,
    badge: state.levelReducer.level.badge,
    level: state.levelReducer.level.level,
  };
};

export default connect(mapStateToProps)(UserLayout);
