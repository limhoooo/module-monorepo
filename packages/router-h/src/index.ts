type RouteType = {
  url: string;
  path: string;
  component: Function;
  paramsKey: string[];
  params: string[] | null;
};

export default class Routes {
  private routes: RouteType[];
  private notFoundComponent: Function | null;
  matchRoute: RouteType | undefined;
  constructor() {
    this.routes = [];
    this.notFoundComponent = null;
    this.matchRoute;
  }

  addRoute(url: string, component: Function): Routes {
    const urlParse = url.split('/:');
    const path = urlParse[0];
    const paramsKey = urlParse.slice(1);
    this.routes = [
      ...this.routes,
      { url, path, component, paramsKey, params: null },
    ];
    return this;
  }
  setNotFound(component: Function): Routes {
    this.notFoundComponent = component;
    return this;
  }
  private checkRoute() {
    const pathName = location.pathname;
    this.matchRoute = this.routes.find(route => {
      //([^\\/]+) : / 로 시작하는 모든 문자
      ///:\w+/g /: 로 시작하는 문자가 있을시 ([^\\/]+) 로 치환
      const paramRepaceRegexp = route.url.replace(/:\w+/g, '([^\\/]+)');
      const regexpUrl = new RegExp(`^${paramRepaceRegexp}\\/?$`);
      return regexpUrl.test(pathName);
    });
    if (this.matchRoute) {
      if (this.matchRoute.paramsKey) this.checkParam(pathName);
      this.render(this.matchRoute.component);
    } else {
      this.render(this.notFoundComponent);
    }
  }
  private checkParam(pathName: string) {
    if (!this.matchRoute) return;

    const params = pathName
      .replace(this.matchRoute.path, '')
      .slice(1)
      .split('/');
    const paramsObj = params.map((value, index) => ({
      [`${this.matchRoute?.paramsKey[index]}`]: value,
    }));

    this.matchRoute.params = Object.assign({}, ...paramsObj);
  }
  private render(component: Function | null) {
    component?.(this.matchRoute);
  }
  private setNavigate(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const navigate = target.getAttribute('data-navigate');
    if (!navigate) return;
    e.preventDefault();
    history.pushState({}, '', navigate);
    this.checkRoute();
  }
  init() {
    this.checkRoute();
    window.addEventListener('click', e => this.setNavigate(e));
    window.addEventListener('popstate', () => this.checkRoute());
  }
}
