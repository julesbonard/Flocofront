import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import MainLayout from "./Layouts/MainLayout";
import RegisterLayout from "./Connexion/Register/RegisterLayout";
import CardLayout from "./Flora/Progress/CardLayout";
import LoginLayout from "./Connexion/Login/LoginLayout";

import LoginPage from "./Connexion/Login/LoginPage";
import Map from "./Main/Map/Page";
import Account from "./Compte/Account";
import Form from "./Connexion/Register/Form";
import Card from "./Flora/Progress/Card";
import Homepage from "./Connexion/Home/Homepage";

function CustomRoute({
  component: Component,
  layout: Layout,
  layout: RegisterLayout,
  layout: CardLayout,
  layout: LoginLayout,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
};

function AuthRoute({
  isAuth,
  component: Component,
  layout: Layout,
  layout: RegisterLayout,
  layout: CardLayout,
  layout: LoginLayout,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props => {
        return (
          isAuth ?
            < Layout >
              <Component {...props} />
            </Layout >
            :
            <Redirect to="/" />
        )
      }}
    />
  )
};

function Router({ isAuth }) {
  return (
    <BrowserRouter>
      <Switch>
        <CustomRoute path="/Login" layout={LoginLayout} component={LoginPage} />
        <CustomRoute path="/Register" layout={RegisterLayout} component={Homepage} />
        <AuthRoute exact path="/" isAuth={isAuth} layout={MainLayout} component={Map} />
        <AuthRoute path="/Map" isAuth={isAuth} layout={MainLayout} component={Map} />
        <AuthRoute path="/Account" isAuth={isAuth} layout={MainLayout} component={Account} />
        <AuthRoute path="/Register" isAuth={isAuth} layout={RegisterLayout} component={Form} />
        <AuthRoute path="/Progress" isAuth={isAuth} layout={CardLayout} component={Card} />
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    isAuth: state.isAuth
  };
};

export default connect(mapStateToProps)(Router);