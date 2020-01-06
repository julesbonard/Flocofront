import React from "react";
import {
    Button,
    Grid,
    Message,
    Segment
} from "semantic-ui-react";
import styles from "./LoginPage.module.css";

export default function Passport() {
    return (
        <Grid.Row>
            <Grid.Column>
                <Segment className={styles.no_border}>
                    <Button color="facebook" className={styles.rounded} href="http://localhost:8000/login/auth/facebook/callback">
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
                <Message className={`${styles.no_border} ${styles.no_background}`}>
                    Pas de compte ?{" "}
                    <a className={styles.coucou} href="#">
                        Créer un tout de suite
              </a>
                </Message>
            </Grid.Column>
        </Grid.Row>
    )
}