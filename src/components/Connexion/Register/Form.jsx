import React from 'react'
import { Button, Checkbox, Form, Image } from 'semantic-ui-react'
import styles from './Form.module.css'

import Logo from '../../../assets/logo-floco.png'

const {inscription, area} = styles;

function FormRegister () {
  return(
  <div>
      <Image src={Logo} size='tiny' centered alt='Logo Floco' />
    <div className={inscription}>
      <Form>
        <Form.Field>
          <label className={area} fluid size="large">First Name</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label className={area}>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
          <label className={area}>Mail</label>
          <input placeholder='Mail' />
        </Form.Field>
        <Form.Field>
          <label className={area}>Username</label>
          <input placeholder='Username' />
        </Form.Field>
        <Form.Field>
          <label className={area}>Password</label>
          <input placeholder='Password' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  </div>
)}

export default FormRegister;