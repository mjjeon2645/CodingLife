import { Link } from 'react-router-dom';

import Options from './Options';

import { LineItem } from '../../types';

import numberFormat from '../../utils/numberFormat';

type LineItemProps = {
  lineItem: LineItem;
}

export default function LineItemView({ lineItem }: LineItemProps) {
  return (
    <tr>
      <td>
        <Link to={`/products/${lineItem.product.id}`}>
          {lineItem.product.name}
        </Link>
        <Options options={lineItem.options} />
      </td>
      <td>
        {numberFormat(lineItem.unitPrice)}
        원
      </td>
      <td>{lineItem.quantity}</td>
      <td>
        {numberFormat(lineItem.totalPrice)}
        원
      </td>
    </tr>
  );
}
