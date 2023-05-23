import { screen, fireEvent, waitFor } from '@testing-library/react';

import { container as iocContainer } from 'tsyringe';

import { render } from '../../../test-helpers';

import AddToCartForm from './AddToCartForm';

import ProductDetailStore from '../../../stores/ProductDetailStore';

import fixtures from '../../../../fixtures';

let accessToken = '';

jest.mock('../../../hooks/useAccessToken', () => () => ({
  get accessToken() {
    return accessToken;
  },
}));

const context = describe;

describe('AddToCartForm', () => {
  const [product] = fixtures.products;

  beforeEach(async () => {
    iocContainer.clearInstances();

    const productDetailStore = iocContainer.resolve(ProductDetailStore);
    await productDetailStore.fetchProduct({ productId: product.id });
  });

  context('로그인하지 않았을 경우', () => {
    beforeEach(() => {
      accessToken = '';
    });

    it('로그인 하라는 메시지를 출력한다', () => {
      const { container } = render(<AddToCartForm />);

      expect(container).toHaveTextContent('주문하려면 로그인하세요');
    });
  });

  context('로그인 했을 경우', () => {
    beforeEach(() => {
      accessToken = 'accessToken';
    });

    it('장바구니에 담기 버튼을 누를 수 있다', async () => {
      render(<AddToCartForm />);

      fireEvent.click(screen.getByText('장바구니에 담기'));

      await waitFor(() => {
        screen.getByText(/장바구니에 담았습니다/);
      });
    });
  });
});
