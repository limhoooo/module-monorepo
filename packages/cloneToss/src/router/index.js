import Routes from 'router-h';
import techArticle from '../pages/techArticle.js';
import techArticleDetail from '../pages/techArticleDetail.js';
import DesignArticle from '../pages/desingArticle.js';
import DesignArticleDetail from '../pages/desingArticleDetail.js';
import NotFound from './notfound';

export default class Route {
  constructor({ target, props }) {
    this.target = target;
    this.props = props;
    this.initRouter();
  }
  initRouter() {
    const routes = new Routes({ scrollTo: { x: 0, y: 0 } });
    routes
      .addRoute('/', route =>
        techArticle({ target: this.target, props: this.props, route }),
      )
      .addRoute('/tech/:id', route =>
        techArticleDetail({ target: this.target, props: this.props, route }),
      )
      .addRoute('/design', route =>
        DesignArticle({ target: this.target, props: this.props, route }),
      )
      .addRoute('/design/:id', route =>
        DesignArticleDetail({ target: this.target, props: this.props, route }),
      )
      .setNotFound(() => NotFound('#app'))
      .init();
  }
}
