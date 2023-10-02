import { worker } from './mock/worker.js';
import Fetch from 'fetch-h';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}
const instance = new Fetch();
const techList = () => instance.get('/api/tech');
const techListOne = data => instance.get('/api/tech', data);

async function app() {
  console.log(await techList());
  console.log(await techListOne(2));
}
app();
