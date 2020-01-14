import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styles from './Account.module.css'
import { connect } from "react-redux";

const { miniflore } = styles

function Account() {
  const [activeItem, setActiveItem] = useState('home')
  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <>
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