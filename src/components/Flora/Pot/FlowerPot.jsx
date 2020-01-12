import React from 'react';
import { Image, Grid } from 'semantic-ui-react';
import '../../Account/UserHeader.scss';
import styles from './FlowerPot.module.css';

import illustration from '../../../assets/bas_de_page_gche.png'
import illustration2 from '../../../assets/bas_de_page_drt.png'
import ninja from '../../../assets/ninja.jpg'

const { card, title, longueur, largeur, profondeur, endpage, flore, flore2 } = styles;

function FlowerPot() {
  return (
    <>
      <div className={card}>
        <Grid>
          <Grid.Column textAlign='center'>
            <p className={title}>Mini-Flore</p>
            <Image className='userimage' src={ninja} centered />
            <h1 className='username'>Superdref</h1>
            <p className='userlevel'>Nouvel Espoir</p>
          </Grid.Column>
        </Grid>
      </div>
      <p className={longueur}>LONGUEUR</p>
      <p className={largeur}>LARGEUR</p>
      <p className={profondeur}>PROFONDEUR</p>
      <div className={endpage}>
        <Image size="small" className={flore} src={illustration} />
        <Image size="small" className={flore2} src={illustration2} />
      </div>
    </>
  )
};

export default FlowerPot;