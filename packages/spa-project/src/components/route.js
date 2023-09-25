import Routes from 'router-h';
import Home from './home.js';
import Mypage from './mypage.js';
import Content from './content.js';
import NotFound from './notfound.js';

export default class Route {
  constructor(renderNode) {
    this.renderNode = renderNode;
    this.initRouter();
  }
  initRouter() {
    const routes = new Routes();
    routes
      .addRoute('/', route => new Home(this.renderNode, route).render())
      .addRoute('/mypage/login/:name/:age', route =>
        new Mypage(this.renderNode, route).render(),
      )
      .addRoute('/content/:key/:value', route =>
        new Content(this.renderNode, route).render(),
      )
      .setNotFound(() => new NotFound(this.renderNode).render())
      .init();
  }
}
