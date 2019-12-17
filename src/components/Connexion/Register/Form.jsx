import React from 'react'
import { Button, Checkbox, Form, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import styles from './Form.module.css'

import Logo from '../../../assets/logo-floco.png'

const {inscription, barre, area, space, logo, submit, textalign} = styles;

function FormRegister () {
  return(
  <div className={textalign}>
      <Image className={logo} src={Logo} size='tiny' centered alt='Logo Floco' />
    <div className={inscription}>
      <Form className={barre}>
        <Form.Field>
          <label className={area} fluid size="large">First Name</label>
          <input className={space} placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label className={area}>Last Name</label>
          <input className={space} placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
          <label className={area}>Mail</label>
          <input className={space} placeholder='Mail' />
        </Form.Field>
        <Form.Field>
          <label className={area}>Username</label>
          <input className={space} placeholder='Username' />
        </Form.Field>
        <Form.Field>
          <label className={area}>Password</label>
          <input className={space} placeholder='Password' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Link to="/Map" className={submit}>Submit</Link>
      </Form>
    </div>
  </div>
)}

export default FormRegister;