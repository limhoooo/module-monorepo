import Routes from 'router-h';
import NotFound from './notfound.js';
import TodoList from './todoList.js';

export default class Route {
  constructor(target, props) {
    this.target = target;
    this.props = props;
    this.initRouter();
  }
  initRouter() {
    const routes = new Routes();
    routes
      .addRoute('/', route => new TodoList(this.target, this.props, route))
      .addRoute(
        '/checked',
        route => new TodoList(this.target, this.props, route),
      )
      .addRoute(
        '/unchecked',
        route => new TodoList(this.target, this.props, route),
      )
      .setNotFound(() => new NotFound('app'))
      .init();
  }
}
