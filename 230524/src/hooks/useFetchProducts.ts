import useFetch from './useFetch';

import { ProductSummary } from '../types';

export default function useFetchProducts() {
  const {
    data, loading, error, mutate,
  } = useFetch<{
    products: ProductSummary[];
  }>('/products');

  return {
    products: data?.products ?? [],
    loading,
    error,
    async refresh() {
      mutate();
    },
  };
}
