import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import MainLayout from "./Layouts/MainLayout";
import NoLayout from "./Layouts/NoLayout";
import UserLayout from "./Layouts/UserLayout";
import BurgerLayout from "./Layouts/BurgerLayout";

import LoginPage from "./Connexion/Login/LoginPage";
import Map from "./Main/Map/Page";
import Account from "./Account/Account";
import Form from "./Connexion/Register/Form";
import Card from "./Flora/Progress/Card";
import Homepage from "./Connexion/Home/Homepage";
import Accesspage from "./Partner/Access/Accesspage";
import FlowerPot from "./Flora/Pot/FlowerPot";
import PartnerPage from "./Partner/Offer/PartnerPage";

function CustomRoute({
  component: Component,
  layout: Layout,
  layout: UserLayout,
  layout: NoLayout,
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
  );
}

function AuthRoute({
  isAuth,
  component: Component,
  layout: Layout,
  layout: UserLayout,
  layout: NoLayout,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props => {
        return isAuth ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
            <Redirect to="/" />
          );
      }}
    />
  );
}

function Router({ isAuth }) {
  return (
    <BrowserRouter>
      <Switch>
        <CustomRoute
          exact
          path="/"
          layout={NoLayout}
          component={Homepage}
        />
        <CustomRoute
          path="/Login"
          layout={NoLayout}
          component={LoginPage}
        />
        <CustomRoute
          path="/Register"
          layout={NoLayout}
          component={Form}
        />
        <AuthRoute
          path="/Map"
          isAuth={isAuth}
          layout={MainLayout}
          component={Map}
        />
        <AuthRoute
          path="/Account"
          isAuth={isAuth}
          layout={UserLayout}
          component={Account}
        />
        <AuthRoute
          path="/Progress"
          isAuth={isAuth}
          layout={UserLayout}
          component={Card}
        />
        <AuthRoute
          path="/access"
          isAuth={isAuth}
          layout={NoLayout}
          component={Accesspage}
        />
        <AuthRoute
          path="/Pot"
          isAuth={isAuth}
          layout={UserLayout}
          component={FlowerPot}
        />
        <AuthRoute
          path="/Partner"
          isAuth={isAuth}
          layout={BurgerLayout}
          component={PartnerPage}
        />
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    isAuth: state.authReducer.isAuth
  };
};

export default connect(mapStateToProps)(Router);
