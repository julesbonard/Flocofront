import React, { useState } from "react";
import {
    Button,
    Form,
    Segment
} from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { LOGIN } from "../../../reducers/authAction";
import styles from "./LoginPage.module.css";
import axios from "axios";

function LoginForm({ logIn }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const onSubmit = e => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/login", {
                email,
                password
            })
            .then(res => {
                logIn(res.data.token, res.data.id);
                history.push("/");
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <Form size="medium" onSubmit={onSubmit}>
            <Segment className={styles.no_border}>
                <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Mot de passe"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button
                    className={`${styles.rounded} ${styles.teal}`}
                    color="teal"
                    fluid
                    size="large"
                    type="submit"
                >
                    Se connecter
            </Button>
            </Segment>
        </Form>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        logIn: (token, id) => dispatch({ type: LOGIN, payload: { token, id } }),
    };
};

export default connect(null, mapDispatchToProps)(LoginForm);