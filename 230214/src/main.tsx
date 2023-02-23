import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

export default async function main() {
  const element = document.getElementById('root');

  const url = 'http://localhost:3000/products';
  const response = await fetch(url);
  const data = await response.json();
  const { products } = data;

  if (!element) {
    return;
  }

  const root = ReactDOM.createRoot(element);

  root.render((
    <React.StrictMode>
      <App products={products} />
    </React.StrictMode>
  ));
}

main();
