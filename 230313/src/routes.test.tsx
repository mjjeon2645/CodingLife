import { render, screen } from '@testing-library/react';

import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import routes from './routes';

const context = describe;

describe('App', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(<RouterProvider router={router} />);
  }
  context('when the current path is "/"', () => {
    it('renders the homepage', () => {
      renderRouter('/');
      screen.getByText('Hello, world!');
    });
  });

  context('when the current path is "/about"', () => {
    it('renders the aboutpage', () => {
      renderRouter('/about');
      screen.getByText('This is test.');
    });
  });

  context('when the current path is "/logout"', () => {
    it('redirects to the homepage', () => {
      renderRouter('/logout');
      screen.getByText('Hello, world!');
    });
  });
});
