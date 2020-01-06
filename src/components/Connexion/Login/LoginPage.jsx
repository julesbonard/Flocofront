import React from "react";
import {
  Grid,
  Header,
  Image,
  Message,
} from "semantic-ui-react";
import flower from "../../../Images/logo-floco.png";
import styles from "./LoginPage.module.css";

import FormComponent from "./From";
import Passport from "./Passport";

function LoginPage() {
  return (
    <Grid textAlign="center" style={{ height: "65vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="green" textAlign="center">
          <Image className={styles.logotop} src={flower} size="tall" />
        </Header>
        <FormComponent />
        <Message className={`${styles.no_border} ${styles.no_background}`}>
          <a className={styles.bruh} href="#">
            Mot de passe oublié ?
          </a>
        </Message>
        <Message className={`${styles.no_border} ${styles.no_background}`}>
          <h1 className={styles.hr}>Ou</h1>
        </Message>
        <Passport />
      </Grid.Column>
    </Grid>
  );
}

export default LoginPage;
