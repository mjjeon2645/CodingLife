import ProductFormStore from './ProductFormStore';

const context = describe;

describe('ProductFormStore', () => {
  let store: ProductFormStore;

  beforeEach(() => {
    store = new ProductFormStore();
  });

  describe('changeQuantity', () => {
    context('with correct value', () => {
      it('changes quantity', () => {
        store.changeQuantity(3);

        expect(store.quantity).toBe(3);
      });
    });

    context('with incorrect value', () => {
      it("doesn't changes quantity", () => {
        store.changeQuantity(-1);
        store.changeQuantity(11);

        expect(store.quantity).toBe(1);
      });
    });
  });
});
