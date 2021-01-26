import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { HOME_PAGE, LOGIN_PAGE, USER_PAGE } from './config/routes';
import { HomePage } from '@web/modules/home/pages/HomePage';
import { UserPage } from '@web/modules/users/pages/UserPage';
import { store } from '@web/store';
import { LoginPage } from '@web/modules/login/pages/LoginPage';

export default function App() {
  return (
    <Router>
      <Provider store={store}>
        <div>
          <ul>
            <li>
              <Link to={HOME_PAGE}>Home</Link>
            </li>
            <li>
              <Link to={HOME_PAGE}>Home</Link>
            </li>
            <li>
              <Link to={LOGIN_PAGE}>Login</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path={HOME_PAGE} exact>
            <HomePage />
          </Route>
          <Route path={USER_PAGE}>
            <UserPage />
          </Route>
          <Route path={LOGIN_PAGE}>
            <LoginPage />
          </Route>
        </Switch>
      </Provider>
    </Router>
  );
}
