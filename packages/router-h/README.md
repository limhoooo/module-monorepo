## router-h

React 의 라우터를 Vanilla JS 로 구현

### NPM

```
npm i router-h
```

### 지원 기능

- 라우터이동시 컴포넌트 랜더링
- url 쿼리스트링 파싱
- a 태그 href 속성으로 url 지정가능
- html data-navigate 속성으로 url 지정가능
- 라우터 이동시 scrollTop 기능
- 404페이지

### 사용예제

```
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

```
