import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainLayout from "./Layouts/MainLayout";
import LoginPage from "./Connexion/Login/LoginPage";
import Map from "./Main/Map/Page";
import Account from "./Compte/Account";
import RegisterLayout from "./Connexion/Register/RegisterLayout";
import Form from "./Connexion/Register/Form";
import CardLayout from "./Flora/Progress/CardLayout";
import Card from "./Flora/Progress/Card";
import Homepage from "./Connexion/Home/Homepage";
import HomepageLayout from "./Connexion/Home/HomepageLayout";
import LoginLayout from "./Connexion/Login/LoginLayout";
import Accesspage from "./Partner/Access/Accesspage";
import FlowerPot from "./Flora/Pot/FlowerPot";
import PartnerPage from "./Partner/Offer/PartnerPage";

const CustomRoute = ({
  component: Component,
  layout: Layout,
  layout: RegisterLayout,
  layout: CardLayout,
  layout: HomepageLayout,
  layout: LoginLayout,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <CustomRoute exact path="/" layout={MainLayout} component={Map} />
        <CustomRoute path="/Login" layout={LoginLayout} component={LoginPage} />
        <CustomRoute path="/Map" layout={MainLayout} component={Map} />
        <CustomRoute path="/Account" layout={MainLayout} component={Account} />
        <CustomRoute
          path="/Register"
          layout={RegisterLayout}
          component={Form}
        />
        <CustomRoute path="/Progress" layout={CardLayout} component={Card} />
        <CustomRoute
          path="/Home"
          layout={HomepageLayout}
          component={Homepage}
        />
        <CustomRoute
          path="/Partner"
          layout={RegisterLayout}
          component={Accesspage}
        />
        <CustomRoute path="/Pot" layout={MainLayout} component={FlowerPot} />
        <CustomRoute
          path="/Partner"
          layout={MainLayout}
          component={PartnerPage}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
