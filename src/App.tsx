import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';

import Routes from './Routes';
import store from './store/store';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { lightTheme } from './themes/light.theme';

const GlobalStyle = createGlobalStyle`
  * {
    transition: 0.2s;
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) => theme.background.color.primary};
    color: ${({ theme }) => theme.font.color.primary};
    font-family:${({ theme }) => theme.font.family};
  }
`;

const App: FC = () => (
  <ThemeProvider theme={lightTheme}>
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  </ThemeProvider>
);

export default hot(module)(App);
