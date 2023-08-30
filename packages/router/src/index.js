// 1. 라우트 입력 (하면 url 파싱해서 컴포넌트 변경(페이지이동)) O
// 2. 404 페이지 등록 O
// 3. 쿼리 파라미터 O
// 4. / 처리.
const routes = Object.freeze({
  routes: [],
  router: function (path, component) {
    console.log(this);
    this.routes.push({ path, component });
    return this;
  },
  notFound: function (component) {
    // this.render(component);
  },
  serverError: function (component) {},
  initialize: function (id) {
    window.addEventListener("hashchange", () => {
      const hash = window.location.hash.slice(1);
      const match = this.routes.find((route) => route.path === hash);
      if (match) {
        this.render(match.component, id);
      } else {
        // error page
        this.notFound();
      }
    });
  },
  render: function (component, id) {
    document.getElementById(id).innerHTML = component;
  },
});

const Home = "<h1>Welcome to the Home Page</h1>";
const Mypage = "<h1>Welcome to the mypage Page</h1>";
const Content = "<h1>Welcome to the Content Page</h1>";
const Main = "<h1>Welcome to the Main Page</h1>";

// 1 - 직관적이다.
// routes.router("/main?age=11", "Main");
// routes.router("/mypage/:age", "Profile");
// routes.router("/content", "Content");
// routes.notFound("NotFount");
// routes.serverError("ServerError");
// routes.initialize();

// 3 - 체이닝 된 코드가 길어져 보기 불편. 유지보수를 고려한다면 3번
routes
  .router("/", Home)
  .router("/main", Main)
  .router("/mypage", Mypage)
  .router("/content", Content)
  .initialize("routes");

// 3 - 체이닝 된 코드가 길어져 보기 불편. 유지보수를 고려한다면 3번
// routes.router("/main").router("/mypage").router("/content").error("/404");
