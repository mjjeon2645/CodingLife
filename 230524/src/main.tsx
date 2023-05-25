import 'reflect-metadata';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';

import defaultTheme from './styles/defaultTheme';
import GlobalStyle from './styles/GlobalStyle';

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
        <div>
          Hello, world!
        </div>
      </ThemeProvider>
    </React.StrictMode>
  ));
}

main();
