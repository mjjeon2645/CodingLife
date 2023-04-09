import React from 'react';

import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { Reset } from 'styled-reset';

import 'reflect-metadata';

import App from './App';
import routes from './routes';
import defaultTheme from './styles/defaultTheme';
import GlobalStyle from './styles/GlobalStyle';

const router = createBrowserRouter(routes);

function main() {
  const container = document.getElementById('root');
  if (!container) {
    return;
  }

  const root = ReactDOM.createRoot(container);
  root.render((
    <React.StrictMode>
      <ThemeProvider theme={defaultTheme}>
        <Reset />
        <GlobalStyle />
        <RouterProvider router={router} />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  ));
}

main();
