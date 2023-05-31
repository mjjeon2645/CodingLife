/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';

import fixtures from '../../fixtures';

const BASE_URL = process.env.API_BASE_URL;

const handlers = [
  rest.get(`${BASE_URL}/`, (req, res, ctx) => (
    res(ctx.json({ categories: fixtures.categories }))
  )),
];

export default handlers;
