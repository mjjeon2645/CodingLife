/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';

const BASE_URL = 'https://shop-demo-api-01.fly.dev';

// todo. 수정 필요
const categories: string[] = [];

const handlers = [
  rest.get(`${BASE_URL}/categories`, (req, res, ctx) => (
    res(ctx.json({ categories }))
  )),
];

export default handlers;
