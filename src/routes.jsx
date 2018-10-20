import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import ListsPage from './pages/ListsPage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';

const routes = () => (
  <BrowserRouter>
    <Switch>
      <MainLayout>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/lists" component={ListsPage} />
        <Route path="/about" component={AboutPage} />
      </MainLayout>
    </Switch>
  </BrowserRouter>
);

export default routes;
