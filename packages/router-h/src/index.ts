type RouteType = {
  url: string;
  path: string;
  component: Function;
  paramsKey: string[];
  params: string[] | null;
};
type RoutesType = {
  scrollTo: scrollToType;
};
type scrollToType = { x: number; y: number } | undefined;
export default class Routes {
  private routes: RouteType[];
  private notFoundComponent: Function | null;
  private scrollTo: scrollToType;
  matchRoute: RouteType | undefined;
  constructor({ scrollTo }: RoutesType) {
    this.routes = [];
    this.notFoundComponent = null;
    this.matchRoute;
    this.scrollTo = scrollTo;
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
    this.scrollTo && window.scrollTo(this.scrollTo.x, this.scrollTo.y);
  }
  private setNavigate(e: MouseEvent) {
    const target = e.target as HTMLElement;
    let currentElement = target as any;
    // 클릭한 엘리먼트의 상위엘리먼트 검색
    while (currentElement) {
      const navigate = currentElement.getAttribute('data-navigate');
      if (navigate) {
        e.preventDefault();
        history.pushState({}, '', navigate);
        this.checkRoute();
        return;
      }
      currentElement = currentElement.parentElement;
    }
  }
  init() {
    this.checkRoute();
    window.addEventListener('click', e => this.setNavigate(e));
    window.addEventListener('popstate', () => this.checkRoute());
  }
}
