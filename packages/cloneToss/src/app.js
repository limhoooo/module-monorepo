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
