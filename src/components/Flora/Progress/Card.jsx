import React from 'react';
import { Image } from 'semantic-ui-react';
import styles from './Card.module.css';

import illustration from '../../../assets/bas_de_page_gche.png'
import illustration2 from '../../../assets/bas_de_page_drt.png'
import iconeplus from '../../../assets/croix.png'

const { levelthree, leveltwo, more, levelone, endpage, flore, flore2 } = styles;

function UserCard() {
  return (
    <>
      <p className={levelthree}>Quelle maison habiterait ta plante?</p>
      <p className={leveltwo}>Quelle maison habiterait ta plante?</p>
      <Image className={more} src={iconeplus} />
      <p className={levelone}>La restauration de la Flore locale compte sur toi...</p>
      <div className={endpage}>
        <Image size="small" className={flore} src={illustration} />
        <Image size="small" className={flore2} src={illustration2} />
      </div>
    </>
  )
};

export default UserCard;