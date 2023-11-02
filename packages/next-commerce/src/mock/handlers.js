import { rest } from 'msw';

const user = [{ id: 'test', password: '123123' }];

export const handlers = [
  rest.post('/api/login', (req, res, ctx) => {
    const { id, password } = req.body;
    const idCheck = user.some(
      item => id === item.id && password === item.password,
    );
    if (idCheck) {
      return res(
        ctx.status(200),
        ctx.json({ message: 'ok', status: 200, name: id }),
        ctx.cookie(`a_name=${id};Max-Age=360;`),
      );
    } else {
      return res(ctx.status(200), ctx.json({ message: 'fali', status: 401 }));
    }
  }),
  rest.post('/api/logout', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ message: 'ok', status: 200 }),
      ctx.cookie(`a_name='';Max-Age=0;`),
    );
  }),
  rest.post('/api/isLogin', (req, res, ctx) => {}),
];
