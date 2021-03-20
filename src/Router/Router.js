import React, { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import routes from './routes';
import Preloader from '../components/UI/Loader/Preloader';

const HomeView = lazy(() =>
  import('../views/HomeView.js' /* webpackChunkName: "home-page" */),
);
const RegisterView = lazy(() =>
  import('../views/RegisterView.js' /* webpackChunkName: "register-page" */),
);
const LoginView = lazy(() =>
  import('../views/LoginView.js' /* webpackChunkName: "login-page" */),
);

const ContactsView = lazy(() =>
  import('../views/ContactsView.js' /* webpackChunkName: "contacts-page" */)
);

const Router = () => {
  return (
    <Suspense fallback={<Preloader />}>
        <Switch>
            <PublicRoute path={routes.home} exact component={HomeView} />
            <PublicRoute 
              path={routes.register}
              restricted
              redirectTo={routes.contacts} 
              component={RegisterView} 
            />
            <PublicRoute
              path={routes.login} 
              restricted 
              redirectTo={routes.contacts} 
              component={LoginView} 
            />
            <PrivateRoute 
              path={routes.contacts} 
              component={ContactsView} 
              redirectTo={routes.login} 
            />
      </Switch>
    </Suspense>
  );
};

export default Router;