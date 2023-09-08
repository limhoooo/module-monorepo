import Route from './components/route.js';
import Header from './components/header.js';

const app = document.querySelector('#app');
const header = document.createElement('header');
const main = document.createElement('main');

app.appendChild(header);
app.appendChild(main);
new Header(header).render();
new Route(main);
