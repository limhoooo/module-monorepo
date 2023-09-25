/** @jsx h */
import { h, createElement } from './core/parse.js';
import Component from 'component-h';
import TodoInput from './components/todoInput.js';
import TodoFilter from './components/todoFilter.js';
import TodoList from './components/todoList.js';
import Route from './components/route.js';

export default class App extends Component {
  setup() {
    this.state = { items: [] };
    this.props.store.dispatch({ type: 'next' });
  }
  onMounted() {
    const store = this.props.store;

    const todoInput = () =>
      new TodoInput('#todoInputNode', {
        store,
      });
    const todoFilter = () =>
      new TodoFilter('#todoFilterNode', {
        store,
      });

    const todoList = () =>
      new TodoList(
        '#todoListNode',
        {
          store,
        },
        this.route,
      );

    todoInput();
    todoFilter();
    todoList();

    store.initSubscribe();
    store.subscribe(() => todoInput());
    store.subscribe(() => todoFilter());
    store.subscribe(() => todoList());
  }
  template() {
    return (
      <div style="display:flex; justify-content: center;" class="test">
        <div>
          {/* <h1>TodoList</h1> */}
          <div id="todoFilterNode"></div>
          <div id="todoInputNode"></div>
          <div id="todoListNode"></div>
        </div>
      </div>
    );
  }
}
