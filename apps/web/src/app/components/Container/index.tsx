import React, { lazy } from 'react';
import { store } from '@web/store';
import { LOGIN_PAGE, UPLOAD_PAGE, USER_PAGE } from '@web/config/routes';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const LoginPage = lazy(() => import('@web/modules/login/pages/LoginPage').then(({LoginPage}) => ({default: LoginPage})));
const UserPage = lazy(() => import('@web/modules/users/pages/UserPage').then(({UserPage}) => ({default: UserPage})));
const UploadPage = lazy(() => import('@web/modules/upload/pages/UploadPage').then(({UploadPage}) => ({default: UploadPage})));
const Header = lazy(() => import('@web/components/Header').then(({Header}) => ({default: Header})));
const PrivateRoute = lazy(() => import('@web/components/PrivateRoute').then(({PrivateRoute}) => ({default: PrivateRoute})));

export const Container = () => {
  return (
    <Router>
      <Provider store={store}>
        <Header/>
        <Switch>
          <PrivateRoute path={UPLOAD_PAGE} exact>
            <UploadPage/>
          </PrivateRoute>
          <PrivateRoute path={USER_PAGE}>
            <UserPage/>
          </PrivateRoute>
          <Route path={LOGIN_PAGE}>
            <LoginPage/>
          </Route>
        </Switch>
      </Provider>
    </Router>
  )
}
