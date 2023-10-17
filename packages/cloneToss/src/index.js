import App from './app.js';
import './assets/styles/app.css';
import { worker } from './mock/worker.js';
import CreateStore from './redux/index.js';
import reducer from './redux/reducer.js';
if (process.env.NODE_ENV === 'development') {
  worker.start();
}
const store = new CreateStore(reducer);

new App({ target: '#app', props: { store } });
