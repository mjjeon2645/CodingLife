import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL || 'https://shop-demo-api-04.fly.dev';

export default class ApiService {
  private instance = axios.create({
    baseURL: API_BASE_URL,
  });

  private accessToken = '';

  setAccessToken(accessToken: string) {
    if (accessToken === this.accessToken) {
      return;
    }

    const authorization = accessToken ? `Bearer ${accessToken}` : undefined;

    this.instance = axios.create({
      baseURL: API_BASE_URL,
      headers: { Authorization: authorization },
    });

    this.accessToken = accessToken;
  }

  fetcher() {
    return async (url: string) => {
      const { data } = await this.instance.get(url);

      return data;
    };
  }

  async fetchCurrentUser(): Promise<{
    id: string;
    name: string;
  }> {
    const { data } = await this.instance.get('/users/me');
    const { id, name } = data;
    return { id, name };
  }

  async login({ email, password }: {
    email: string;
    password: string;
  }): Promise<string> {
    const { data } = await this.instance.post('/session', { email, password });
    const { accessToken } = data;
    return accessToken;
  }

  async logout() {
    await this.instance.delete('/session');
  }

  async createCategory({ name }: {
    name: string;
  }): Promise<string> {
    const { data } = await this.instance.post('/categories', { name });
    return data.name;
  }

  async updateCategory({ categoryId, name, hidden }: {
    categoryId: string;
    name: string;
    hidden: boolean;
  }): Promise<{
    name: string;
    hidden: boolean;
  }> {
    const { data } = await this.instance.patch(
      `/categories/${categoryId}`
      , { name, hidden },
    );

    return data;
  }
}

export const apiService = new ApiService();
