import { useEffect } from 'react';

import styled from 'styled-components';

import useProductDetailStore from '../../../hooks/useProductDetailStore';
import useProductFormStore from '../../../hooks/useProductFormStore';

import numberFormat from '../../../utils/numberFormat';

const Container = styled.div`
  margin-block: calc().2rem;
`;

export default function Price() {
  const [{ product }] = useProductDetailStore();
  const [{ price }, productFormStore] = useProductFormStore();

  useEffect(() => {
    productFormStore.setProduct(product);
  }, [productFormStore, product]);

  return (
    <Container>
      {numberFormat(price)}
      원
    </Container>
  );
}
