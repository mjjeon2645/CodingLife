import Product from '../types/Product';

export default function selectProducts(
  items: Product[],
  category: string,
): Product[] {
  return items.filter((item) => item.category === category);
}
