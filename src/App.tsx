import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './shared/styles/themes/theme';
import GlobalStyle from './shared/styles/global';
import AppRoutes from './core/routes';
import { GlobalStore } from './core/store';

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStore>
        <AppRoutes />
      </GlobalStore>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
