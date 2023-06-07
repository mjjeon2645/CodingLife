import { waitFor } from '@testing-library/react';

import ProductsStore from './ProductsStore';

const fetchProducts = jest.fn();

jest.mock('../services/ApiService', () => ({
  get apiService() {
    return {
      fetchProducts,
    };
  },
}));

const context = describe;

describe('ProductsStore', () => {
  let store: ProductsStore;

  beforeEach(() => {
    jest.clearAllMocks();

    store = new ProductsStore();
  });

  context('모든 상품 목록을 요청하면', () => {
    it('상품목록이 불려와진다', async () => {
      expect(store.products).toHaveLength(0);

      await store.fetchProducts({ categoryId: undefined });

      await waitFor(() => {
        expect(fetchProducts).toBeCalled();
      });
    });
  });
});
