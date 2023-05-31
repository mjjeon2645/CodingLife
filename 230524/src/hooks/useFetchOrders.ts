import useFetch from './useFetch';

import { OrderSummary } from '../types';

export default function useFetchOrders() {
  const { data, loading, error } = useFetch<{
    orders: OrderSummary[];
  }>('/orders');

  return {
    orders: data?.orders ?? [],
    error,
    loading,
  };
}
