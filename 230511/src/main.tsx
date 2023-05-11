/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom/client';

import 'reflect-metadata';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import defaultTheme from './styles/defaultTheme';
import GlobalStyle from './styles/GloablStyle';

import routes from './routes';

const router = createBrowserRouter(routes);

export default function main() {
  const element = document.getElementById('root');

  if (!element) {
    return;
  }

  const root = ReactDOM.createRoot(element);

  root.render(
    <React.StrictMode>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>,
  );
}

main();
