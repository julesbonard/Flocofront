import React from 'react';
import {Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Logo from '../../../assets/logo-floco-rond.png'
import styles from './Homepage.module.css';

const {body, logorounded, login, register} = styles;

function Homepage () {
    return(
        <div className={body}>
          <Image src={Logo} className={logorounded} size="tiny" alt="Logo Floco"/>
        
          <Link to="/Login" className={login}>Se connecter</Link>
          <Link to="/Register" className={register}>Creer un compte</Link>
        </div>
    )
}

export default Homepage;