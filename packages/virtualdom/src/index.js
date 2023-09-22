import Route from './components/route.js';
import CreateStore from './redux/index.js';
import reducer from './redux/reducer.js';

const store = new CreateStore(reducer);
new Route('#app', { store });
