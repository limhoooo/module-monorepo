/** @jsx h */
import { h } from '../core/parse.js';
import Component from 'component-h';

export default function TodoInput(target, props, route) {
  function template() {
    return (
      <div>
        <input type="text" class="todoInput" />
        <button class="addTodo">Add</button>
      </div>
    );
  }
  new Component({
    target,
    template,
  });
}
