import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import {Link} from 'react-router-dom';
import flower from "../../../Images/logo-floco.png";
import styles from "./LoginPage.module.css";

function LoginPage() {
  return (
    <Grid textAlign="center" style={{ height: "65vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="green" textAlign="center">
          <Image className={styles.logotop} src={flower} size="tall" />
        </Header>
        <Form size="medium">
          <Segment className={styles.no_border}>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Identifiant, email ou numéro de portable"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Mot de passe"
              type="password"
            />

            <Link to="/Map"
              className={`${styles.rounded} ${styles.teal}`}
              color="teal"
              fluid
              size="large"
            >
              Se connecter
            </Link>
          </Segment>
        </Form>
        <Message className={`${styles.no_border} ${styles.no_background}`}>
          <a className={styles.bruh} href="#">
            Mot de passe oublié ?
          </a>
        </Message>
        <Message className={`${styles.no_border} ${styles.no_background}`}>
          <h1 className={styles.hr}>Ou</h1>
        </Message>
        <Grid.Row>
          <Grid.Column>
            <Segment className={styles.no_border}>
              <Button color="facebook" className={styles.rounded}>
                <i className="facebook icon"></i>
                CONTINUER AVEC FACEBOOK
              </Button>
            </Segment>
            <Segment className={styles.no_border}>
              <Button color="google plus" className={styles.rounded}>
                <i className="google plus icon"></i>
                CONTINUER AVEC GOOGLE
              </Button>
            </Segment>
            <Segment className={styles.no_border}>
              <Button color="twitter" className={styles.rounded}>
                <i className="twitter icon"></i>
                CONTINUER AVEC TWITTER
              </Button>
            </Segment>
            <Message className={`${styles.no_border} ${styles.no_background}`}>
              Pas de compte ?{" "}
              <a className={styles.coucou} href="#">
                Créer un tout de suite
              </a>
            </Message>
          </Grid.Column>
        </Grid.Row>
      </Grid.Column>
    </Grid>
  );
}

export default LoginPage;
