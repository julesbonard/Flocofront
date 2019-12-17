import React from 'react';
import {Image, Grid} from 'semantic-ui-react';
import '../../Compte/UserHeader.scss';
import styles from './Card.module.css';

import illustration from '../../../assets/bas_de_page_gche.png'
import illustration2 from '../../../assets/bas_de_page_drt.png'
import ninja from '../../../assets/ninja.jpg'
import iconeplus from '../../../assets/croix.png'

const {card, title, levelthree, leveltwo, more, levelone, endpage, flore, flore2} = styles;

function UserCard () {
        return (
          <>
            <div className={card}>
              <Grid>
                  <Grid.Column textAlign='center'>
                      <p className={title}>Mini-Flore</p>
                      <Image className='userimage' src={ninja} centered/>
                      <h1 className='username'>Superdref</h1>
                      <p className='userlevel'>Nouvel Espoir</p>
                  </Grid.Column>
              </Grid>
            </div>
              <p className={levelthree}>Quelle maison habiterait ta plante?</p>
              <p className={leveltwo}>Quelle maison habiterait ta plante?</p>
              <Image className={more} src={iconeplus} />
              <p className={levelone}>La restauration de la Flore locale compte sur toi...</p>
              <div className={endpage}>
                <Image size="small" className={flore} src={illustration} />
                <Image size="small" className={flore2} src={illustration2} />
              </div>
          </>
        )};

export default UserCard;