import styled from 'styled-components';

import Table from '../line-item/Table';

import { Cart } from '../../types';
import ShippingForm from './ShippingForm';

const Container = styled.div`
  h2 {
    font-size: 4rem;
  }
`;

type OrderFormProps = {
  cart: Cart;
}

export default function OrderForm({ cart }: OrderFormProps) {
  return (
    <Container>
      <h2>주문</h2>
      <Table
        lineItems={cart.lineItems}
        totalPrice={cart.totalPrice}
      />
      <ShippingForm />
      {/* 결제 */}
    </Container>
  );
}
