import axios from 'axios';

import { Category, ProductSummary } from '../types';

const BASE_URL = process.env.API_BASE_URL || '';

export default class ApiService {
  private instance = axios.create({
    baseURL: BASE_URL,
  });

  async fetchProducts({ categoryId }: {
    categoryId?: string;
  }): Promise<ProductSummary[]> {
    const { data } = await this.instance.get('/products', {
      params: { categoryId },
    });
    console.log(data);
    return data.products;
  }

  async fetchCategories(): Promise<Category[]> {
    const { data } = await this.instance.get('/categories');
    return data.categories;
  }
}

export const apiService = new ApiService();
