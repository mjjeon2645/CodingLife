import Layout from './components/Layout';

import HomePage from './pages/HomePage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
    ],
  },
];

export default routes;
