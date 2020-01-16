import React from 'react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import styles from './ProgressPage.module.scss';

import illustration from '../../../assets/bas_de_page_gche.png'
import illustration2 from '../../../assets/bas_de_page_drt.png'
import iconeplus from '../../../assets/croix.png'

const { levelLock, levelUnlock, cercleIcon, endpage } = styles;

function ProgressPage() {
  return (
    <>
      <Link to="/library">
        <p className={levelLock}>Quelle maison habiterait ta plante?</p>
      </Link>
      <Link to="/compass">
        <p className={levelUnlock}>Quelle maison habiterait ta plante?</p>
      </Link>
      <Image className={cercleIcon} src={iconeplus} />
      <Link to="/access">
        <p className={levelUnlock}>La restauration de la Flore locale compte sur toi...</p>
      </Link>
      <footer className={endpage}>
        <Image size="small" src={illustration} />
        <Image size="small" src={illustration2} />
      </footer>
    </>
  )
};

export default ProgressPage;