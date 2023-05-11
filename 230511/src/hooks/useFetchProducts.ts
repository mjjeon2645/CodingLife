import { container } from 'tsyringe';

import { useEffectOnce } from 'usehooks-ts';

import { useStore } from 'usestore-ts';

import ProductsStore from '../stores/ProductsStore';

export default function useFetchProducts() {
  const store = container.resolve(ProductsStore);

  const [{ products }] = useStore(store);

  useEffectOnce(() => {
    store.fetchProducts();
  });

  return {
    products,
  };
}
