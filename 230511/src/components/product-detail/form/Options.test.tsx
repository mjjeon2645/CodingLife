import { fireEvent, screen } from '@testing-library/react';
import fixtures from '../../../../fixtures';
import { render } from '../../../testHelpers';
import Options from './Options';

const [product] = fixtures.products;

const store = {
  product,
  selectedOptionItems: product.options.map((i) => i.items[0]),
  quantity: 1,
  changeOptionItem: jest.fn(),
};

jest.mock('../../../hooks/useProductFormStore', () => () => [store, store]);

const context = describe;

describe('Options', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders comboboxes', () => {
    render(<Options />);

    expect(screen.getAllByRole('combobox')).toHaveLength(product.options.length);
  });

  context('when selection is changed', () => {
    it('calls "changeOptionItem" action', () => {
      render(<Options />);

      const [option] = product.options;
      const [, item] = option.items;

      const [combobox] = screen.getAllByRole('combobox');

      fireEvent.change(combobox, {
        target: { value: item.id },
      });

      expect(store.changeOptionItem).toBeCalledWith({
        optionId: option.id,
        optionItemId: item.id,
      });
    });
  });
});
