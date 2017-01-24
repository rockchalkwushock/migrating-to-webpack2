import React from 'react';
import Router from 'react-router/lib/Router';
import { history } from './redux/store';
import { AppContainer, HomePage } from './modules';

const componentRoutes = {
  component: AppContainer,
  path: '/',
  indexRoute: { component: HomePage },
  childRoutes: [
    {
      path: '/signup',
      getComponent(location, cb) {
        System.import('./modules/auth/signup/SignupContainer')
        .then(module => cb(null, module.default));
      }
    },
    {
      path: '/login',
      getComponent(location, cb) {
        System.import('./modules/auth/login/LoginContainer')
        .then(module => cb(null, module.default));
      }
    },
    {
      path: '/admin',
      getComponent(location, cb) {
        System.import('./modules/photobooth/sidebar/SidebarContainer')
        .then(module => cb(null, module.default));
      }
    },
    {
      path: '*',
      getComponent(location, cb) {
        System.import('./modules/layout/Page404')
        .then(module => cb(null, module.default));
      }
    }
  ]
};

export default () => (
  <Router history={history} routes={componentRoutes} />
);

// import React from 'react';
// import { IndexRoute, Route, Router } from 'react-router';
// import { history } from './redux/store';
//
// import {
//   AppContainer,
//   AuthViews,
//   SidebarContainer,
//   HomePage,
//   LoginContainer,
//   NonAuthViews,
//   Page404,
//   SignupContainer
// } from './modules';
//
// export default () => (
//   <Router history={history}>
//     {/* App has 2 children */}
//     <Route path='/' component={AppContainer}>
//     {/* Anyone can visit these routes. */}
//       <Route component={NonAuthViews}>
//         <IndexRoute component={HomePage} />
//         <Route path='/signup' component={SignupContainer} />
//         <Route path='/login' component={LoginContainer} />
//       </Route>
//     {/* Only Authenticated Users may visit these routes. */}
//       <Route component={AuthViews}>
//         <Route path='/admin'>
//           <IndexRoute component={SidebarContainer} />
//         </Route>
//       </Route>
//     </Route>
//     {/* Reachable by any route Auth or Non-Auth */}
//     <Route path='*' component={Page404} />
//   </Router>
// );
