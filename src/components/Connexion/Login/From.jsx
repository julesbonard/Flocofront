import React from "react";
import {
    Button,
    Form,
    Segment
} from "semantic-ui-react";
import styles from "./LoginPage.module.css";

export default function FormComponent() {
    return (
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
                <Button
                    className={`${styles.rounded} ${styles.teal}`}
                    color="teal"
                    fluid
                    size="large"
                >
                    Se connecter
            </Button>
            </Segment>
        </Form>
    )
}