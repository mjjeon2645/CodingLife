import { styled } from 'styled-components';

import { ProductSummary } from '../../types';

const Thumbnail = styled.img.attrs({
  alt: 'Thumbnail',
})`
  display: block;
  width: 100%;
  aspect-ratio: 1/1;
`;

type ProductProps = {
  product: ProductSummary;
}

export default function Product({ product }: ProductProps) {
  return (
    <div>
      <Thumbnail src={product.thumbnail.url} />
      <div>{product.name}</div>
      <div>
        {product.price}
        원
      </div>
    </div>
  );
}
