import React from 'react';
//import {Image} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
//import {Logo} from '../../../assets/logo-floco-rond.png';
import styles from './Accesspage.module.css';

const { partners, flowerbox } = styles;

function Accesspage() {
  return (
    <>
      {/*<Image className={border} src={Logo} size="tiny" alt="Logo Floco"/>*/}

      <Link to="/Partner" className={partners}>Découvrir les propositions de nos partenaires locaux</Link>
      <Link to="/pot" className={flowerbox}>Mesurer la maison de votre mini-flore</Link>
    </>
  )
}

export default Accesspage;