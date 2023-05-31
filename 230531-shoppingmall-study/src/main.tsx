import React from 'react';
import ReactDOM from 'react-dom/client';

import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import routes from './routes';

import defaultTheme from './styles/defaultTheme';
import GlobalStyle from './styles/GlobalStyle';

const router = createBrowserRouter(routes);

export default function main() {
  const element = document.getElementById('root');

  if (!element) {
    return;
  }

  const root = ReactDOM.createRoot(element);

  root.render((
    <React.StrictMode>
      <ThemeProvider theme={defaultTheme}>
        <Reset />
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  ));
}

main();
