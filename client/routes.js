import React from 'react';
import { IndexRoute, Route, Router } from 'react-router';
import { history } from './redux/store';

import {
  AppContainer,
  AuthViews,
  SidebarContainer,
  HomePage,
  LoginContainer,
  NonAuthViews,
  Page404,
  SignupContainer
} from './modules';

export default () => (
  <Router history={history}>
    <Route path='/' component={AppContainer}>
      <Route component={NonAuthViews}>
        <IndexRoute component={HomePage} />
        <Route path='/signup' component={SignupContainer} />
        <Route path='/login' component={LoginContainer} />
      </Route>
      <Route component={AuthViews}>
        <Route path='/admin'>
          <IndexRoute component={SidebarContainer} />
        </Route>
      </Route>
    </Route>
    <Route path='*' component={Page404} />
  </Router>
);
