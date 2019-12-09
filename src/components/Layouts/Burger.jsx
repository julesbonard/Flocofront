import React, { useState } from 'react'
import { Icon, Button, Menu, Segment, Sidebar } from 'semantic-ui-react'

export default function Burger() {
  const [visible, setVisible] = useState('visible' )

  return (
    <>
      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width='thin'
      >
        <Menu.Item as='a'>
          Home
        </Menu.Item>
        <Menu.Item as='a'>
          Games
        </Menu.Item>
        <Menu.Item as='a'>
          Channels
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher>
        <Segment basic>
          <Button onClick={()=>setVisible(!visible)} >
            <Icon className='bars'></Icon>
          </Button>
        </Segment>
      </Sidebar.Pusher>
    </>
  )
}