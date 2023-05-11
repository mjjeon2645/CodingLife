import Layout from './components/Layout';

import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductListPage /> },
    ],
  },
];

export default routes;
