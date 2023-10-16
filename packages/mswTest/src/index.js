import { worker } from './mock/worker.js';
import Fetch from 'fetch-h';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}
class InitTodoFetch extends Fetch {
  constructor() {
    super();
    this.setBaseUrl('https://jsonplaceholder.typicode.com');
    this.setTimeout(5000);
    this.setHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    this.setHeadersConfig([
      {
        name: 'Authorization',
        data: 'Bearer a444sdvsadvklasdvjlaksdvjlkasdvjlk',
      },
      {
        name: 'Cookie',
        data: 'sessionid=YOUR_SESSION_ID; user_id=12345',
      },
      {
        name: 'Accept',
        data: 'application/json',
      },
    ]);
  }

  todo = {
    getTodos: () => this.get({ url: '/todos' }),
    getTodosParam: (data, obj) =>
      instance.get({
        url: '/todos',
        param: data,
      }),
    postTodo: data =>
      instance.post({
        url: '/todos',
        payload: data,
      }),
  };
}

const instance = new InitTodoFetch();

async function app() {
  const obj = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  };
  const queryParamsArray = ['param1=value1', 'param2=value2', 'param3=value3'];

  console.log(await instance.todo.getTodos());
  console.log(await instance.todo.getTodosParam(queryParamsArray, obj));
  console.log(await instance.todo.postTodo(obj));
}
app();
