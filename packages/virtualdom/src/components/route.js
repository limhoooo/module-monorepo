import Routes from 'router-h';
import NotFound from './notfound.js';
import App from '../app.js';

export default class Route {
  constructor(target, props) {
    this.target = target;
    this.props = props;
    this.initRouter();
  }
  initRouter() {
    const routes = new Routes();
    routes
      .addRoute('/', route => App(this.target, this.props, route))
      .addRoute('/checked', route => App(this.target, this.props, route))
      .addRoute('/unchecked', route => App(this.target, this.props, route))
      .setNotFound(() => NotFound('#app'))
      .init();
  }
}
