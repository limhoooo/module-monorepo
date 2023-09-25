/** @jsx h */
import { h, createElement } from '../core/parse.js';
import Component from 'component-h';

export default class TodoInput extends Component {
  onMounted() {
    const addTodoBtn = document.querySelector('.addTodo');
    addTodoBtn.onclick = () => {
      let inputValue = document.querySelector('.todoInput').value;
      if (!inputValue) return;
      this.props.store.dispatch({ type: 'ADD_TODO', payload: inputValue });
      document.querySelector('.todoInput').value = '';
    };
  }
  template() {
    return (
      <div>
        <input type="text" class="todoInput" />
        <button class="addTodo">Add</button>
      </div>
    );
  }
}
