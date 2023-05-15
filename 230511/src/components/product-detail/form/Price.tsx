import styled from 'styled-components';

import useProductFormStore from '../../../hooks/useProductFormStore';

import numberFormat from '../../../utils/numberFormat';

const Container = styled.div`
  margin-block: calc().2rem;
`;

export default function Price() {
  const [, productFormStore] = useProductFormStore();

  return (
    <Container>
      {numberFormat(productFormStore.price)}
      원
    </Container>
  );
}
