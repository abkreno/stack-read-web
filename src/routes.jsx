import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

const routes = () => (
  <BrowserRouter>
    <Switch>
      <MainLayout>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </MainLayout>
    </Switch>
  </BrowserRouter>
);

export default routes;
