import React from 'react';

import ReactDOM from 'react-dom/client';

export default function main() {
  const element = document.getElementById('root');

  if (!element) {
    return;
  }

  const root = ReactDOM.createRoot(element);

  root.render((
    <React.StrictMode>
      <p>Hello, world!</p>
    </React.StrictMode>
  ));
}

main();
