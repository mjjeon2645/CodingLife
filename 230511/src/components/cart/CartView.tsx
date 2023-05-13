import { Cart } from '../../types';

type CartViewProps = {
  cart: Cart | null;
}

export default function CartView({ cart }: CartViewProps) {
  if (!cart) {
    return null;
  }

  return null;
}
