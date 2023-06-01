import { container } from 'tsyringe';

import { useStore } from 'usestore-ts';

import { useEffect } from 'react';

import CategoriesStore from '../stores/CategoriesStore';

export default function useFetchCategories() {
  const store = container.resolve(CategoriesStore);

  useEffect(() => {
    store.fetchCategories();
  }, [store]);

  const [{ categories }] = useStore(store);

  return { categories };
}
