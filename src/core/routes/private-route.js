import { FC, ReactElement, useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Home from '../../features/home/presentation';
import Login from '../../features/login/presentation';
import { globalContext } from '../store';

const PrivateRoute = ({ children, ...rest }) => {
  const { globalState } = useContext(globalContext);
  const rotaOk = true;
  return (
    <Route {...rest}>
      {globalState.isUserAuthenticated ? (
        rotaOk ? (
          <Home>{children}</Home>
        ) : (
          <Login />
        )
      ) : (
        <Redirect to={{ pathname: '/login' }} />
      )}
    </Route>
  );
};

export default PrivateRoute;
