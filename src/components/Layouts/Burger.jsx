import React, { useState } from 'react';
import { Icon, Button, Menu, Segment, Sidebar, Image} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo-floco.png';
import styles from './Burger.module.scss';


const {iconbackground, widthlink, backgroundimage, closetagburger} = styles;


export default function Burger() {
  const [visible, setVisible] = useState(!'visible' )

  return (
    <header>
      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        style={{width: "160px"}}
      >

        <Menu.Item as='a' className={widthlink}>
          <Link to="/Map" className={backgroundimage}>
              Page D'acceuil
          </Link>
        </Menu.Item>

        <Menu.Item as='a' className={widthlink}>
          <Link to="../Account" className={backgroundimage}>
                Mon compte
          </Link>
        </Menu.Item>

        <Menu.Item as='a' className={widthlink}>
          <Link to="/Map" className={backgroundimage}>
              Agenda
          </Link>
        </Menu.Item>

        <Menu.Item as='a' className={widthlink}>
          <Link to="/Map" className={backgroundimage}>
              Communauté
          </Link>
        </Menu.Item>

        <Menu.Item as='a' className={widthlink}>
          <Link to="/Map" className={backgroundimage}>
              Bibliothèque
          </Link>
        </Menu.Item>
          <Icon link size="large" name='close' className={closetagburger} onClick={()=>setVisible(!visible)} />
      </Sidebar>

      <Sidebar.Pusher>
        <Segment basic>
          <Button className={iconbackground} onClick={()=>setVisible(!visible)} >
            <Icon className='bars' size='large' style={{margin: "0"}}></Icon>
          </Button>
        </Segment>
      </Sidebar.Pusher>

      <Image src={Logo} size="tiny" alt="Floco logo"/>
    </header>
  )
}
