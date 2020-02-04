import React, { useState } from "react";
import axios from "axios";

import { Form, Image, Button } from "semantic-ui-react";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import { LOGIN, USER_LOGIN } from "../../../reducers/action";
import styles from "./Form.module.css";
import Logo from "../../../assets/logo-floco.png";

const { inscription, barre, area, space, logo, button, textalign } = styles;

function FormRegister({ logIn, userLogIn }) {
  const [state, setState] = useState({
    firstname: null,
    lastname: null,
    mail: null,
    username: null
  });
  const [hidden, setHidden] = useState(true);
  const [password, setPassword] = useState("");

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

  const validateAuthentication = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/users`, {
        firstName: state.firstname,
        lastName: state.lastname,
        email: state.mail,
        pseudo: state.username,
        password: password,
        isOAuth: false
      })
      .then(res => {
        console.log(res);

        logIn(res.data.token, res.data.id);
        userLogIn(res.data.user);
        setTimeout(() => {
          history.push("/map");
        }, 200);
      })
      .catch(err => {
        console.log(err);
        setState({ isError: true, error: err });
      });
  };

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
            <label htmlFor="firstname" className={area} size="large">
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
            <div>
              <input
                type={hidden ? "password" : "text"}
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <button onClick={() => setHidden(!hidden)}>
                <i className={hidden ? "eye slash icon" : "eye icon"}></i>
              </button>
            </div>
          </Form.Field>
          <Button onClick={validateAuthentication} className={button}>
            Creer Le Compte{" "}
          </Button>
        </Form>
        <div style={{ marginTop: "20px" }}>
          <p>
            Déjà un compte?{" "}
            <Link to="/login">
              Se connecter
          </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    logIn: (token, id) => dispatch({ type: LOGIN, payload: { token, id } }),
    userLogIn: user => dispatch({ type: USER_LOGIN, payload: { user } })
  };
};

export default connect(null, mapDispatchToProps)(FormRegister);
