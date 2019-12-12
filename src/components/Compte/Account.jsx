import React, {useState, useEffect} from 'react';
import { Image, Grid, Container, Menu} from 'semantic-ui-react'
import  './UserHeader.scss'


function Account () {
    const [activeItem, setActiveItem] = useState('home')
    
    const handleItemClick = (e, { name }) => setActiveItem(name);


        return (
            <Container>
              <Grid>
                  <Grid.Column textAlign='center'>
                      <Image className='userimage' src='https://monamiejournaliste.com/wp-content/uploads/2016/01/Un-ours-fait-coucou-1024x600.jpg' centered/>
                      <h1 className='username'>Profile Name</h1>
                      <p className='userlevel'>Niveau Profile</p>
                  </Grid.Column>
              </Grid>

              <Menu fluid widths={3}>
                <Menu.Item
                  name='Activiés'
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
            </Container>
        )
    }

export default Account;