import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainLayout from './Layouts/MainLayout';
import Firstpage from './Connexion/Home/FirstPage';
import LoginPage from './Connexion/Login/LoginPage';
import Map from './Main/Map/Page'
import RegisterLayout from './Connexion/Register/RegisterLayout';
import Form from './Connexion/Register/Form';

const CustomRoute = ({ component: Component, layout: Layout, layout: RegisterLayout, ...rest }) => (
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
            <CustomRoute path="/Register" layout={RegisterLayout} component={Form} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;