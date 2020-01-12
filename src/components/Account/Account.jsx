import './UserHeader.scss'
import React, { useState } from 'react';
import { Image, Grid, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styles from './Account.module.css'
import { connect } from "react-redux";

const { miniflore } = styles

function Account({ pseudo, avatar }) {
  const [activeItem, setActiveItem] = useState('home')
  const handleItemClick = (e, { name }) => setActiveItem(name);

  const niveau = 1 //USE AXIOS TO GET LEVLEL

  if (avatar === "null") {
    avatar = false
  }

  return (
    <>
      <Grid>
        <Grid.Column textAlign='center'>
          <Image className='userimage' src={avatar ? avatar : 'https://elysator.com/wp-content/uploads/blank-profile-picture-973460_1280-e1523978675847.png'} centered />
          <h1 className='username'>{pseudo}</h1>
          <p className='userlevel'>Niveau {niveau}</p>
        </Grid.Column>
      </Grid>

      <Menu fluid widths={3}>
        <Menu.Item
          name='Activités'
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='Messages'
          active={activeItem === 'messages'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='Amis'
          active={activeItem === 'friends'}
          onClick={handleItemClick}
        />
      </Menu>
      <Link to="/Progress" className={miniflore}>Mini-Flore</Link>
    </>
  )
}
const mapStateToProps = state => {
  return {
    pseudo: state.userReducer.user.pseudo,
    avatar: state.userReducer.user.avatar
  };
};

export default connect(mapStateToProps)(Account);