import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contratos from '../../features/Contratos/presentation';
import Login from '../../features/login/presentation';
import MeuUniverso from '../../features/MeuUniverso/presentation';
import Publicacoes from '../../features/Publicacoes/presentation';
import VisualLawDesign from '../../features/VisualLaw/presentation';
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
        <PrivateRoute path="/visuallawdesign">
          <VisualLawDesign />
        </PrivateRoute>
        <PrivateRoute path="/contratos">
          <Contratos />
        </PrivateRoute>
        <PrivateRoute path="/publicacoes">
          <Publicacoes />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
