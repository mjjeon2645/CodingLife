import { useState } from 'react';

import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

import Product from '../types/Product';

import filterProducts from '../utils/filterProducts';

type FilterableProductTableProps = {
    products: Product[];
}

export default function FilterableProductTable({
  products,
} : FilterableProductTableProps) {
  // inStockOnly가 있어야 하는 곳(둘이 만나는 지점)
  // filterText가 있어야 하는 곳

  const [filterText, setFilterText] = useState<string>('');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  const filteredProducts = filterProducts(products, {
    filterText, inStockOnly,
  });

  return (
    <div>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        inStockOnly={inStockOnly}
        setInStockOnly={setInStockOnly}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}
