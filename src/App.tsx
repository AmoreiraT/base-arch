import { ThemeProvider } from "styled-components";
import theme from "./shared/styles/themes/theme";
import GlobalStyle from "./shared/styles/global";
import { AppRoutes } from "./core/routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;