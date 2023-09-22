import Routes from 'router-h';
import NotFound from './notfound.js';
import TodoList from './todoList.js';
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
      .addRoute('/', route => new App(this.target, this.props, route))
      .addRoute('/checked', route => new App(this.target, this.props, route))
      .addRoute('/unchecked', route => new App(this.target, this.props, route))
      .setNotFound(() => new NotFound('#app'))
      .init();
  }
}
