/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';

import fixtures from '../../fixtures';

const BASE_URL = process.env.API_BASE_URL || 'https://shop-demo-api-01.fly.dev';

const handlers = [
  rest.get(`${BASE_URL}/categories`, (req, res, ctx) => (
    res(
      ctx.status(200),
      ctx.json({ categories: fixtures.categories }),
    )
  )),
];

export default handlers;
