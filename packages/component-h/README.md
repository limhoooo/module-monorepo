## component-h

React 의 컴포넌트를 Vanilla JS 로 구현
(프로젝트에서 babel 을 이용한 jsx 문법 컴포넌트를 이용해야 사용가능)

### NPM

```
npm i component-h
```

### 지원 기능

- state 변경시 re-rendering
- React Batch Update
- Virtual DOM
- Reconciliation

### 사용예제

```
/** @jsx h */
import Header from './components/header.js';
import Footer from './components/footer.js';
import { h } from './core/parse.js';
import Route from './router';
import Component from 'component-h';
import Incruit from './components/incruit.js';

export default function App({ target, props }) {
  const onMounted = () => {
    Header({ target: 'header' });
    Footer({ target: 'footer' });
    Incruit({ target: '#incruit' });
    new Route({ target: '#content', props });
  };
  const template = () => {
    return (
      <main>
        <header></header>
        <section id="content" class="container"></section>
        <section id="incruit"></section>
        <footer></footer>
      </main>
    );
  };
  new Component({
    target,
    onMounted,
    template,
  });
}

```
