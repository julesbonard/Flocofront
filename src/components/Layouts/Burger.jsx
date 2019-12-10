import React, { useState } from 'react';
import { Icon, Button, Menu, Segment, Sidebar, Image} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo-floco.png';
import styles from './Burger.module.css';


const {iconbackground} = styles;

export default function Burger() {
  const [visible, setVisible] = useState(!'visible' )

  return (
    <>
      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width='thin'
      >

        <Menu.Item as='a'>
          <Link to="/Map">
            Page D'acceuil
          </Link>
        </Menu.Item>

        <Menu.Item as='a'>
          <Link to="../Account">
            Mon Compte
          </Link>
        </Menu.Item>

        <Menu.Item as='a'>
          Agenda
        </Menu.Item>

        <Menu.Item as='a'>
          Communauté
        </Menu.Item>

        <Menu.Item as='a'>
          Bibliothèque
        </Menu.Item>

        <Icon link name='close' onClick={()=>setVisible(!visible)} />
      </Sidebar>

      <Sidebar.Pusher>
        <Segment basic>
          <Button className={iconbackground} onClick={()=>setVisible(!visible)} >
            <Icon className='bars' size='large' style={{margin: "0"}}></Icon>
          </Button>
        </Segment>
      </Sidebar.Pusher>

      <Image src={Logo} size="tiny" alt="Floco logo"/>
    </>
  )
}
