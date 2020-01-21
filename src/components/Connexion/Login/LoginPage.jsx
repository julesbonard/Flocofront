import React, { useEffect, useRef } from "react";
import { Grid, Header, Image, Message, Form } from "semantic-ui-react";
import flower from "../../../Images/logo-floco.png";
import styles from "./LoginPage.module.css";
import LoginForm from "./LoginForm";
import Passport from "./Passport";
import queryString from "query-string";
import { connect } from "react-redux";
import { LOGIN, USER_LOGIN } from "../../../reducers/action";
import { useHistory } from "react-router-dom";
import axios from "axios";

function LoginPage({ logIn, location, userLogIn }) {
  const history = useHistory();
  const firstRender = useRef(true);

  useEffect(() => {
    const { id, token } = queryString.parse(location.search);
    if (token) {
      logIn(token, id);
      axios.get(`${process.env.REACT_APP_API_URL}/users/${id}`).then(res => {
        userLogIn(res.data);
      });
      history.push("/map");
    }
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
  });
  return (
    <Form>
      <Grid
        textAlign="center"
        style={{ height: "65vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="green" textAlign="center">
            <Image className={styles.logotop} src={flower} size="tall" />
          </Header>
          <LoginForm />
          {/* <Message className={`${styles.no_border} ${styles.no_background}`}>
            <a className={styles.bruh} href="#">
              Mot de passe oublié ?
          </a>
          </Message> */}
          <Message className={`${styles.no_border} ${styles.no_background}`}>
            <h1 className={styles.hr}>Ou</h1>
          </Message>
          <Passport />
          <Message className={`${styles.no_border} ${styles.no_background}`}>
            Pas de compte ?{" "}
            <a className={styles.coucou} href="http://localhost:3000/register">
              Créer un tout de suite
            </a>
          </Message>
        </Grid.Column>
      </Grid>
    </Form>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    logIn: (token, id) => dispatch({ type: LOGIN, payload: { token, id } }),
    userLogIn: user => dispatch({ type: USER_LOGIN, payload: { user } })
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);
