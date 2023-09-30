/** @jsx h */
import { h } from './core/parse.js';
import Component from 'component-h';
import TodoInput from './components/todoInput.js';
import TodoFilter from './components/todoFilter.js';
import TodoList from './components/todoList.js';
import { addTodoEvent, todoListEvent } from './event/event.js';

export default function App(target, props, route) {
  const setComponent = store => {
    const todoInput = () => TodoInput('#todoInputNode', { store });
    const todoFilter = () => TodoFilter('#todoFilterNode', { store });
    const todoList = () => TodoList('#todoListNode', { store }, route);

    todoInput();
    todoFilter();
    todoList();
    store.initSubscribe();
    store.subscribe(() => todoInput());
    store.subscribe(() => todoFilter());
    store.subscribe(() => todoList());
  };
  const onMounted = () => {
    const { store } = props;
    setComponent(store);
    addTodoEvent(store);
    todoListEvent(store);
  };
  const template = () => {
    return (
      <div style="display:flex; justify-content: center;" class="test">
        <div>
          <h1>TodoList</h1>
          <div id="todoFilterNode"></div>
          <div id="todoInputNode"></div>
          <div id="todoListNode"></div>
        </div>
      </div>
    );
  };
  new Component({
    target,
    onMounted,
    template,
  });
}
