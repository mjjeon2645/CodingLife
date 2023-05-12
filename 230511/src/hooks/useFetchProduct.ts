import { useEffect } from 'react';

import { container } from 'tsyringe';

import { useStore } from 'usestore-ts';

import ProductStore from '../stores/ProductStore';

export default function useFetchProduct({ productId }: {
  productId: string;
}) {
  const store = container.resolve(ProductStore);

  const [{ loading, error }] = useStore(store);

  useEffect(() => {
    store.fetchProduct({ productId });
  }, [store, productId]);

  return {
    loading, error,
  };
}
