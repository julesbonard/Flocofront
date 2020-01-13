import React from "react";
import {
    Button,
    Grid,
    Segment
} from "semantic-ui-react";
import styles from "./LoginPage.module.css";

function Passport() {
    return (
        <Grid.Row>
            <Grid.Column>
                <Segment className={styles.no_border}>
                    <Button color="facebook" className={styles.rounded} href="https://floco-app.herokuapp.com/login/auth/facebook">
                        <i className="facebook icon"></i>
                        CONTINUER AVEC FACEBOOK
              </Button>
                </Segment>
                <Segment className={styles.no_border}>
                    <Button color="google plus" className={styles.rounded} href="https://floco-app.herokuapp.com/login/auth/google">
                        <i className="google plus icon"></i>
                        CONTINUER AVEC GOOGLE
              </Button>
                </Segment>
            </Grid.Column>
        </Grid.Row>
    )
}


export default Passport;