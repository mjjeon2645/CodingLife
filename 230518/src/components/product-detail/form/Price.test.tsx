import { container as iocContainer } from 'tsyringe';

import { render } from '../../../testHelpers';

import Price from './Price';

import ProductFormStore from '../../../stores/ProductFormStore';

import numberFormat from '../../../utils/numberFormat';

import fixtures from '../../../../fixtures';

const [product] = fixtures.products;

jest.mock('../../../hooks/useProductDetailStore', () => () => [{
  product,
}]);

describe('Price', () => {
  beforeEach(() => {
    const quantity = 2;

    const productFormStore = iocContainer.resolve(ProductFormStore);

    productFormStore.setProduct(product);
    productFormStore.changeQuantity(quantity);
  });
  it('renders price as formatted number', () => {
    const { container } = render(<Price />);

    const price = numberFormat(product.price * 2);

    expect(container).toHaveTextContent(`${price}원`);
  });
});
