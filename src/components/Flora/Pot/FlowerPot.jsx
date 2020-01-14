import React from 'react';
import { Image } from 'semantic-ui-react';
import styles from './FlowerPot.module.css';

import illustration from '../../../assets/bas_de_page_gche.png'
import illustration2 from '../../../assets/bas_de_page_drt.png'

const { longueur, largeur, profondeur, endpage, flore, flore2 } = styles;

function FlowerPot() {
  return (
    <>
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