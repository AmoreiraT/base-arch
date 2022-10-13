import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import DashBoard from '../../features/dashboard/presentation';
import Login from '../../features/login/presentation';
import PrivateRoute from './private-route';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <PrivateRoute exact path="/">
          <DashBoard />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
