import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import MainLayout from "./Layouts/MainLayout";
import NoLayout from "./Layouts/NoLayout";
import UserLayout from "./Layouts/UserLayout";
import BurgerLayout from "./Layouts/BurgerLayout";

import LoginPage from "./Connexion/Login/LoginPage";
import MapPage from "./Main/Map/MapPage";
import Account from "./Account/AccountPage";
import Form from "./Connexion/Register/Form";
import ProgressPage from "./MiniFlora/Progress/ProgressPage";
import Homepage from "./Connexion/Home/Homepage";
import Accesspage from "./MiniFlora/Access/Accesspage";
import PotPage from "./MiniFlora/Pot/PotPage";
import PartnerPage from "./MiniFlora/Partner/PartnerPage";
import Library from './Bibliotheque/LibraryPage';
import Plants from "./Bibliotheque/Plants/lysPage";

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
          component={MapPage}
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
          component={ProgressPage}
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
          component={PotPage}
        />
        <AuthRoute
          path="/Bibliotheque"
          isAuth={isAuth}
          layout={UserLayout}
          component={Library}
        />
        <AuthRoute
          path="/Partner"
          isAuth={isAuth}
          layout={BurgerLayout}
          component={PartnerPage}
        />
        <AuthRoute
          path="/Plants"
          isAuth={isAuth}
          layout={UserLayout}
          component={Plants}
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
