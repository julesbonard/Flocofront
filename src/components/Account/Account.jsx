import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react'
import NavAccount from "./Nav";

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
      <NavAccount />
    </>
  )
}

export default Account;