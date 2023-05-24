import { screen } from '@testing-library/react';

import { render } from '../test-helpers';

import Header from './Header';
import { Category } from '../types';

const context = describe;

let accessToken: string;
const setAccessToken = jest.fn();

jest.mock('../hooks/useAccessToken', () => () => ({
  accessToken,
  setAccessToken,
}));

let categories: Category[];

jest.mock('../hooks/useFetchCategories', () => () => ({
  categories,
}));

describe('Header', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('로그인하지 않은 사용자가 페이지에 진입할 때', () => {
    beforeEach(() => {
      categories = [];
      accessToken = '';
    });

    it('로그인 메뉴가 있는 header 컴포넌트가 렌더링된다', () => {
      const { container } = render(<Header />);

      screen.getByText('Shop');
      screen.getByText('Home');
      screen.getByText('Products');
      screen.getByText('로그인');
      expect(container).not.toHaveTextContent('Cart');
      expect(container).not.toHaveTextContent('로그아웃');
    });
  });

  context('로그인한 사용자가 페이지에 진입할 때', () => {
    beforeEach(() => {
      categories = [];
      accessToken = 'accessToken';
    });

    it('로그아웃, cart 메뉴가 있는 header 컴포넌트가 렌더링된다', () => {
      const { container } = render(<Header />);

      screen.getByText('로그아웃');
      screen.getByText('Cart');
      expect(container).not.toHaveTextContent('로그인');
    });
  });

  context('카테고리가 없을 때', () => {
    it('상위 메뉴인 Products는 보이되 하위 카테고리인 outer 카테고리가 보이지 않는다', () => {
      categories = [];
      const { container } = render(<Header />);

      expect(container).toHaveTextContent('Products');
      expect(container).not.toHaveTextContent('outer');
    });
  });

  context('outer 카테고리만 있을 때', () => {
    it('outer 카테고리가 보이고 top 카테고리는 보이지 않는다.', () => {
      categories = [{ id: '1', name: 'outer' }];
      const { container } = render(<Header />);

      expect(container).toHaveTextContent('outer');
    });
  });
});
