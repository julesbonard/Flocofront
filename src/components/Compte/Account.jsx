import  './UserHeader.scss'
import React, {useState} from 'react';
import {Image, Grid, Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import styles from './Account.module.css'

const {miniflore} = styles


function Account () {
    const [activeItem, setActiveItem] = useState('home')
    
    const handleItemClick = (e, { name }) => setActiveItem(name);


        return (
            <>
              <Grid>
                  <Grid.Column textAlign='center'>
                      <Image className='userimage' src='https://monamiejournaliste.com/wp-content/uploads/2016/01/Un-ours-fait-coucou-1024x600.jpg' centered/>
                      <h1 className='username'>Profile Name</h1>
                      <p className='userlevel'>Niveau Profile</p>
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

export default Account;