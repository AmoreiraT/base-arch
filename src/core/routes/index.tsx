import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../../features/login/presentation';
import MeuUniverso from '../../features/MeuUniverso/presentation';
import PrivateRoute from './private-route';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <PrivateRoute exact path="/">
          <MeuUniverso />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
