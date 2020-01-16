import React from 'react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import styles from './ProgressPage.module.scss';

import iconeplus from '../../../assets/croix.png'

const { levelLock, levelUnlock, cercleIcon } = styles;

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

    </>
  )
};

export default ProgressPage;