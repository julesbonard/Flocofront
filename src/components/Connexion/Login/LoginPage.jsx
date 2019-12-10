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
import flower from "../../../Images/logo-floco.png";
import "../Login/LoginPage.css";

function LoginForm() {
  return (
    <Grid textAlign="center" style={{ height: "65vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="green" textAlign="center">
          <Image src={flower} size="tall" />
        </Header>
        <Form size="medium">
          <Segment stacked className="no-border">
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

            <Button color="teal" fluid size="large">
              Se connecter
            </Button>
          </Segment>
        </Form>
        <Message className="mess">
          <h1 className="hr">Ou</h1>
        </Message>
        <Grid.Row>
          <Grid.Column>
            <Segment className="no-border">
              <button class="ui facebook button ">
                <i class="facebook icon"></i>
                CONTINUER AVEC FACEBOOK
              </button>
            </Segment>
            <Segment className="no-border">
              <button class="ui google plus button">
                <i class="google plus icon"></i>
                CONTINUER AVEC GOOGLE
              </button>
            </Segment>
            <Segment className="no-border">
              <button class="ui twitter button">
                <i class="twitter icon"></i>
                CONTINUER AVEC TWITTER
              </button>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid.Column>
    </Grid>
  );
}

export default LoginForm;
