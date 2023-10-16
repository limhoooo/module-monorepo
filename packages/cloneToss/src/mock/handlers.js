import { rest, setupWorker } from 'msw';
import { techArticles, designArticles } from './db/articles';

export const handlers = [
  rest.get('/api/articles/tech', (req, res, ctx) => {
    const id = req.url.searchParams.get('id');
    if (id) {
      const tech = techArticles.find(article => article.id === id);
      return res(ctx.status(200), ctx.json(tech));
    } else {
      return res(ctx.status(200), ctx.json(techArticles));
    }
  }),
  rest.get('/api/articles/design', (req, res, ctx) => {
    const id = req.url.searchParams.get('id');
    if (id) {
      const design = designArticles.find(article => article.id === id);
      return res(ctx.status(200), ctx.json(design));
    } else {
      return res(ctx.status(200), ctx.json(designArticles));
    }
  }),
];
