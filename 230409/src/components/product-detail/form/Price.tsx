import styled from 'styled-components';

import useProductFormStore from '../../../hooks/useProductFormStore';

import numberFormat from '../../../utils/numberFormat';

const Container = styled.div`
    //
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
