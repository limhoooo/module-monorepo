import { rest } from 'msw';

const techList = [
  {
    id: 1,
    title: 'tech',
    content: 'techContent',
  },
  {
    id: 2,
    title: 'tech',
    content: 'techContent',
  },
  {
    id: 3,
    title: 'tech',
    content: 'techContent',
  },
];
const design = [
  {
    id: 1,
    title: 'design',
    content: 'techContent',
  },
  {
    id: 2,
    title: 'design',
    content: 'techContent',
  },
  {
    id: 3,
    title: 'design',
    content: 'techContent',
  },
];

export const handlers = [
  rest.get('/api/tech', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(techList));
  }),

  rest.get('/api/design', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(design));
  }),

  rest.get('/api/tech/:id', (req, res, ctx) => {
    const id = Number(req.params.id);
    const tech = techList.find(article => article.id === id);
    if (tech) {
      return res(ctx.status(200), ctx.json(tech));
    }
  }),

  rest.get('/api/design/:id', (req, res, ctx) => {
    const { id } = Number(req.params);
    const design = techList.find(article => article.id === id);
    if (design) {
      return res(ctx.status(200), ctx.json(design));
    }
  }),
];
