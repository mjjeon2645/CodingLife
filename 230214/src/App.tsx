import FilterableProductTable from './components/FilterableProductTable';

import Product from './types/Product';

export default function App({ products }: {
  products: Product[];
}) {
  return (
    <div>
      <h1>상품</h1>
      <FilterableProductTable products={products} />
    </div>
  );
}
