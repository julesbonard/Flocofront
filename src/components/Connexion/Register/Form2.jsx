import react, {Component} from 'react';

import { Checkbox, Form, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import styles from './Form.module.css'

import Logo from '../../../assets/logo-floco.png'

const {inscription, barre, area, space, logo, submit, textalign} = styles;

class App extends Component {
    state = {
        firstname: null,
        lastname: null,
        mail: null,
        username: null,
        password: null,
    }

    change = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    submit = e => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
        <div className={textalign}>
            <Image className={logo} src={Logo} size='tiny' centered alt='Logo Floco' />
          <div className={inscription}>
          <Form className={barre} onSubmit={this.submit}>
        <Form.Field>
          <label htmlFor="firstname"
           className={area} fluid size="large">Nom:</label>
          <input type="text" id="firstname" onChange={this.change}
           className={space} placeholder='Nom' />
        </Form.Field>
        <Form.Field>
          <label htmlFor="lastname"
          className={area}>Prénom:</label>
          <input type="text" id="lastname" onChange={this.change}
          className={space} placeholder='Prénom' />
        </Form.Field>
        <Form.Field>
          <label htmlFor="mail"
          className={area}>email:</label>
          <input type="text" id="mail" onChange={this.change}
          className={space} placeholder='Mail' />
        </Form.Field>
        <Form.Field>
          <label htmlFor="username">Pseudo:</label>
          <input type="text" id="username" onChange={this.change}
          className={space} placeholder='username' />
        </Form.Field>
        <Form.Field>
          <label htmlFor="password">Mot de passe:</label>
          <input type="text" id="password" onChange={this.change} />
        </Form.Field>
          </Form>
          </div>
        </div>
        );
    }
}