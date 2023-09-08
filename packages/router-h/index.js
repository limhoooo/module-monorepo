export default class Routes {
  #routes = [];
  #notFoundComponent = null;
  constructor() {
    this.matchRoute = {};
  }

  addRoute(url, component) {
    const urlParse = url.split('/:');
    const path = urlParse[0];
    const paramsKey = urlParse.slice(1);
    this.#routes = [
      ...this.#routes,
      { url, path, component, paramsKey, params: null },
    ];
    return this;
  }
  setNotFound(component) {
    this.#notFoundComponent = component;
    return this;
  }
  serverError(component) {}
  #checkRoute() {
    const pathName = location.pathname;
    this.matchRoute = this.#routes.find(route => {
      //([^\\/]+) : / 로 시작하는 모든 문자
      ///:\w+/g /: 로 시작하는 문자가 있을시 ([^\\/]+) 로 치환
      const paramRepaceRegexp = route.url.replace(/:\w+/g, '([^\\/]+)');
      const regexpUrl = new RegExp(`^${paramRepaceRegexp}\\/?$`);
      return regexpUrl.test(pathName);
    });
    if (this.matchRoute) {
      if (this.matchRoute.paramsKey) this.#checkParam(pathName);
      this.#render(this.matchRoute.component);
    } else {
      this.#render(this.#notFoundComponent);
    }
  }
  #checkParam(hashUrl) {
    const params = hashUrl
      .replace(this.matchRoute.path, '')
      .slice(1)
      .split('/');
    const paramsObj = params.map((value, index) => ({
      [this.matchRoute.paramsKey[index]]: value,
    }));

    this.matchRoute.params = Object.assign({}, ...paramsObj);
  }
  #render(component) {
    component(this.matchRoute);
  }
  #setNavigate(e) {
    const navigate = e.target.getAttribute('data-navigate');
    if (!navigate) return;
    e.preventDefault();
    history.pushState({}, '', navigate);
    this.#checkRoute();
  }
  init() {
    this.#checkRoute();
    window.addEventListener('click', e => this.#setNavigate(e));
    window.addEventListener('popstate', () => this.#checkRoute());
  }
}

// ex
// const Home = () => '<h1>Welcome to the Home Page</h1>';
// const Mypage = matchRoute =>
//   `<h1>Welcome to the mypage Page</h1><br>name : ${matchRoute.params.name}<br>age : ${matchRoute.params.age}`;
// const Content = () => '<h1>Welcome to the Content Page</h1>';
// const Main = () => '<h1>Welcome to the Main Page</h1>';
// const NotFound = () => '<h1>404</h1>';

// const routes = new Routes('app');

// routes
//   .addRoute('/', Home)
//   .addRoute('/main', Main)
//   .addRoute('/mypage/login/:name/:age', Mypage)
//   .addRoute('/content/:key/:value', Content)
//   .setNotFound(NotFound)
//   .init();
