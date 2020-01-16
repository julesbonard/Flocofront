import React from 'react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import styles from './ProgressPage.module.scss';

import iconeplus from '../../../assets/croix.png'

const { levelLock, levelUnlock, cercleIcon } = styles;
function ProgressPage({ level }) {
  let one = false
  let two = false
  let three = false

  if (level >= 1) {
    one = true
  }
  if (level >= 2) {
    two = true
  }
  if (level >= 3) {
    three = true
  }
  return (
    <>
      <Link to="/library" className={three ? null : levelLock}>
        <p className={three ? levelUnlock : null}>Quelle maison habiterait ta plante?</p>
      </Link>
      <Link to="/compass" className={two ? null : levelLock}>
        <p className={two ? levelUnlock : null}>Quelle maison habiterait ta plante?</p>
      </Link>
      <Image className={cercleIcon} src={iconeplus} />
      <Link to="/access" className={one ? null : levelLock}>
        <p className={one ? levelUnlock : null}>La restauration de la Flore locale compte sur toi...</p>
      </Link>

    </>
  )
};

const mapStateToProps = state => {
  return {
    level: state.levelReducer.level.level,
  };
};

export default connect(mapStateToProps)(ProgressPage);