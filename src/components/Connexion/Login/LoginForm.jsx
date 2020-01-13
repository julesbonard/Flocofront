import React, { useState } from "react";
import {
    Button,
    Form,
    Segment
} from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { LOGIN, USER_LOGIN } from "../../../reducers/action";
import styles from "./LoginPage.module.css";
import axios from "axios";

function LoginForm({ logIn, userLogIn }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const onSubmit = e => {
        e.preventDefault();
        axios
            .post("https://floco-app.herokuapp.com/login", {
                email,
                password
            })
            .then(res => {
                logIn(res.data.token, res.data.id);
                axios.get(`https://floco-app.herokuapp.com/users/${res.data.id}`)
                    .then(res => { userLogIn(res.data) })
                history.push("/map");
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
        userLogIn: (user) => dispatch({ type: USER_LOGIN, payload: { user } })
    };
};

export default connect(null, mapDispatchToProps)(LoginForm);