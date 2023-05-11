import Products from '../components/product-list/Products';

import useFetchProducts from '../hooks/useFetchProducts';

export default function ProductListPage() {
  // 1. 상품 목록 얻기
  const { products } = useFetchProducts();

  // 2. 상품 목록 보여주기

  return (
    <div>
      <h2>Products List Page</h2>
      <Products products={products} />
    </div>
  );
}
