// import { screen } from '@testing-library/react';

import { container as iocContainer } from 'tsyringe';

import fixtures from '../../../../fixtures';

import Price from './Price';

import { render } from '../../../testHelpers';

import ProductFormStore from '../../../stores/ProductFormStore';

import numberFormat from '../../../utils/numberFormat';

const [product] = fixtures.products;
// const { options } = product;

jest.mock('../../../hooks/useProductDetailStore', () => () => [{
  product,
}]);

// jest.mock('../../../hooks/useProductFormStore', () => () => [{
//   options,
//   selectedOprionItems: options.map((i) => i.items[0]),
//   quantity: 2,
// }]);

describe('Price', () => {
  beforeEach(() => {
    const quantity = 2;

    const productFormStore = iocContainer.resolve(ProductFormStore);

    productFormStore.changeQuantity(quantity);
  });
  it('renders price as formatted number', () => {
    const { container } = render(<Price />);

    const price = numberFormat(product.price * 2);

    expect(container).toHaveTextContent(`${price}원`);
  });
});
