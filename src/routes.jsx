import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import ListsPage from './pages/ListsPage';
import HomePage from './pages/HomePage';

const routes = () => (
  <BrowserRouter>
    <Switch>
      <MainLayout>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/lists" component={ListsPage} />
      </MainLayout>
    </Switch>
  </BrowserRouter>
);

export default routes;
