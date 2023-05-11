// 예시

// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

const BASE_URL = 'https://shop-demo-api-01.fly.dev';

const handlers = [
  rest.get(`${BASE_URL}/categories`, (req, res, ctx) => (
    res(ctx.json('example'))
  )),

];

export default handlers;
