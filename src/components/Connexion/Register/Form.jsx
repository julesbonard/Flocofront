import React, { useState } from "react";
import axios from "axios";

import { Form, Image, Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import styles from "./Form.module.css";
import Logo from "../../../assets/logo-floco.png";
import PasswordShowHide from "../Register/password"





const { inscription, barre, area, space, logo, submit, textalign } = styles;

function FormRegister() {
  const [state, setState] = useState({
    firstname: null,
    lastname: null,
    mail: null,
    username: null,
    password: null
  });
  const history = useHistory();

  const change = e => {
    setState({
      ...state,
      [e.target.id]: e.target.value
    });
  };

  const submit = e => {
    e.preventDefault();
    console.log(state);
  };

  function validateAuthentication() {
    axios
      .post("https://floco-app.herokuapp.com/users", {
        firstName: state.firstname,
        lastName: state.lastname,
        email: state.mail,
        pseudo: state.username,
        password: state.password
        //age: 6
      })
      .then(response => {
        localStorage.setItem("uuid", `${response.data.uuid}`);
        setTimeout(() => {
          history.push("/Account");
        }, 200);
      })
      .catch(err => {
        console.log(err);
        setState({ isError: true, error: err });
      });
  }
 
  return (
    <div className={textalign}>
      <Image
        className={logo}
        src={Logo}
        size="tiny"
        centered
        alt="Logo Floco"
      />
      <div className={inscription}>
        <Form className={barre} onSubmit={submit}>
          <Form.Field>
            <label htmlFor="firstname" className={area} fluid size="large">
              Nom:
            </label>
            <input
              type="text"
              id="firstname"
              onChange={change}
              className={space}
              placeholder="Nom"
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="lastname" className={area}>
              Prénom:
            </label>
            <input
              type="text"
              id="lastname"
              onChange={change}
              className={space}
              placeholder="Prénom"
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="mail" className={area}>
              email:
            </label>
            <input
              type="text"
              id="mail"
              onChange={change}
              className={space}
              placeholder="Mail"
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="username">Pseudo:</label>
            <input
              type="text"
              id="username"
              onChange={change}
              className={space}
              placeholder="Username"
            />
          </Form.Field>
          <Form.Field>
           <label htmlFor="password">Mot de passe:</label>
            <PasswordShowHide/>
          </Form.Field>
          <Button onClick={validateAuthentication}>Create</Button>
        </Form>
      </div>
    </div>
  );
}

export default FormRegister;
