// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

const BASE_URL = 'http://localhost:3000';

const handlers = [
  rest.get(`${BASE_URL}/sample`, (req, res, ctx) => {
    const data = [
      {
        key: 'value',
      },
    ];

    return res(
      ctx.status(200),
      ctx.json({ data }),
    );
  }),
];

export default handlers;
