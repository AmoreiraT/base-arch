import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './shared/styles/themes/theme';
import GlobalStyle from './shared/styles/global';
import Login from './features/login/presentation/index';
import AppRoutes from './core/routes';
import { makeLocalStorageAdapter } from './core/infrastructure/cache/local-storage-adapter-factory';
import { GlobalStore } from './core/store';
import { Router } from 'react-router-dom';

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
