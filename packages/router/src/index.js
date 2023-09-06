// 1. 라우트 입력 (하면 url 파싱해서 컴포넌트 변경(페이지이동)) O
// 2. 404 페이지 등록 O
// 3. 쿼리 파라미터 O

export class Routes {
  #routes = [];
  #notFoundComponent = null;
  #nodeId = null;
  constructor(id) {
    this.matchRoute = {};
    this.#nodeId = id;
    window.addEventListener("load", () => this.#checkRoute());
    window.addEventListener("hashchange", () => this.#checkRoute());
  }

  addRoute(url, component) {
    const urlParse = url.split("/:");
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
    const hashUrl = window.location.hash.slice(1);
    this.matchRoute = this.#routes.find((route) => {
      //([^\\/]+) : / 로 시작하는 모든 문자
      ///:\w+/g /: 로 시작하는 문자가 있을시 ([^\\/]+) 로 치환
      const paramRepaceRegexp = route.url.replace(/:\w+/g, "([^\\/]+)");
      const regexpUrl = new RegExp(`^${paramRepaceRegexp}\\/?$`);
      return regexpUrl.test(hashUrl);
    });
    if (this.matchRoute) {
      if (this.matchRoute.paramsKey) this.#checkParam(hashUrl);
      this.#render(this.matchRoute.component);
    } else {
      this.#render(this.#notFoundComponent);
    }
  }
  #checkParam(hashUrl) {
    const params = hashUrl
      .replace(this.matchRoute.path, "")
      .slice(1)
      .split("/");
    const paramsObj = params.map((value, index) => ({
      [this.matchRoute.paramsKey[index]]: value,
    }));

    this.matchRoute.params = Object.assign({}, ...paramsObj);
  }
  #render(component) {
    document.getElementById(this.#nodeId).innerHTML = component(
      this.matchRoute
    );
    console.log(this);
  }
}

// ex
const Home = () => "<h1>Welcome to the Home Page</h1>";
const Mypage = (matchRoute) =>
  `<h1>Welcome to the mypage Page</h1><br>name : ${matchRoute.params.name}<br>age : ${matchRoute.params.age}`;
const Content = () => "<h1>Welcome to the Content Page</h1>";
const Main = () => "<h1>Welcome to the Main Page</h1>";
const NotFound = () => "<h1>404</h1>";

const routes = new Routes("app");

routes
  .addRoute("/", Home)
  .addRoute("/main", Main)
  .addRoute("/mypage/login/:name/:age", Mypage)
  .addRoute("/content/:key/:value", Content)
  .setNotFound(NotFound);
