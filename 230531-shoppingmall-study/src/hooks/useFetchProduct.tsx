import { useEffect } from 'react';

import useProductDetailStore from './useProductDetailStore';

export default function useFetchProduct({ productId }: {
  productId: string;
}): {
  loading: boolean;
  error: boolean;
} {
  const [{ loading, error }, productDetailStore] = useProductDetailStore();

  useEffect(() => {
    productDetailStore.fetchProduct({ productId });
  }, [productDetailStore, productId]);

  return { loading, error };
}
