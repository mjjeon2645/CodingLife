import { singleton } from 'tsyringe';

import { Store, Action } from 'usestore-ts';

import { Cart } from '../types';

@singleton()
@Store()
export default class CartStore {
  cart: Cart | null = null;

  loading = false;

  error = false;

  @Action()
  setCart(cart: Cart) {
    this.cart = cart;
  }
}
