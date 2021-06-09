import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Browse, Home, Signin, Signup } from './pages';
import * as ROUTES from './constants/routes';

export default function App() {
  console.log(22);
  console.log(process.env.REACT_APP_FF);
  console.log(process.env.FIREBASE_API_KEY);
  console.log(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN);
  return (
    <Router>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>
      <Route exact path={ROUTES.SIGN_UP}>
        <Signup />
      </Route>
      <Route exact path={ROUTES.SIGN_IN}>
        <Signin />
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
}
