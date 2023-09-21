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
  }
  todoInputEvent(node) {
    node.querySelector('.addTodo').addEventListener('click', () => {
      const inputValue = document.querySelector('.todoInput').value;
      if (!inputValue) return;
      const item = { id: new Date().getTime(), check: false, todo: inputValue };
      this.setState({ items: [...this.state.items, { ...item }] });
    });
  }

  todoListclickEvent = ({ target }) => {
    if (target.classList.contains('todoDeleteBtn')) {
      const todoId = Number(target.getAttribute('data-todoId'));
      const items = this.state.items.filter(item => item.id !== todoId);
      this.setState({ items: [...items] });
    }
    if (target.classList.contains('todoCheckInput')) {
      const todoId = Number(target.getAttribute('id'));
      const todoList = this.state.items.map(item => {
        if (item.id === todoId) return { ...item, check: !item.check };
        return item;
      });
      this.setState({
        items: todoList,
      });
    }
  };

  todoListEvent(node) {
    // 이벤트 델리게이션으로 인해 remove 처리
    node.removeEventListener('click', this.todoListclickEvent);
    node.addEventListener('click', this.todoListclickEvent);
  }
  onMounted() {
    const { items } = this.state;
    new TodoFilter('#todoFilterNode', { items });
    new TodoInput('#todoInputNode', {
      todoInputEvent: this.todoInputEvent.bind(this),
    });
    new Route('#todoListNode', {
      items,
      todoListEvent: this.todoListEvent.bind(this),
    });
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
