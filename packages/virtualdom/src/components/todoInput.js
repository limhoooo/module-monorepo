/** @jsx h */
import { h, createElement } from '../core/parse.js';
import Component from 'component-h';

export default class TodoInput extends Component {
  onMounted() {
    this.props.todoInputEvent(this.target);
  }
  template() {
    return createElement(
      <div>
        <input type="text" class="todoInput" />
        <button class="addTodo">Add</button>
      </div>,
    );
  }
}
