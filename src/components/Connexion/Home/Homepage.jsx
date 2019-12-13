import React from 'react';
import {Image, Button} from 'semantic-ui-react';
import Logo from '../../../assets/logo_floco_rond.png';
import styles from './Homepage.module.css';

const {homepage, logorounded,login, register} = styles;

function Homepage () {
    return(
        <div className={homepage}>
        <Image className={logorounded} src={Logo} size="tiny" alt="Logo Floco"/>
        
        <Button className={login}>Se connecter</Button>
        <Button className={register}>Creer un compte</Button>
        </div>
    )
}

export default Homepage;