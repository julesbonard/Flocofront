import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainLayout from './Layouts/MainLayout';
import Firstpage from './Connexion/Home/FirstPage';
import LoginPage from './Connexion/Login/LoginPage';
import Map from './Main/Map/Page'
import Account from './Compte/Account';

const CustomRoute = ({ component: Component, layout: Layout, ...rest }) => (
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
            <CustomRoute exact path="/" layout={MainLayout} component={Firstpage} />
            <CustomRoute path="/Login/LoginPage" layout={MainLayout} component={LoginPage} />
            <CustomRoute path="/Map" layout={MainLayout} component={Map} />
            <CustomRoute path="/Account" layout={MainLayout} component={Account} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;