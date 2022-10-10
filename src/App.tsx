import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './shared/styles/themes/theme';
import GlobalStyle from './shared/styles/global';
import { AppRoutes } from './core/routes';
import Login from './features/login/presentation/index';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <AppRoutes /> */}
      <Login></Login>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
