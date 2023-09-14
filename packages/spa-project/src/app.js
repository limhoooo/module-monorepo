import Component from 'component-h';
import TodoList from './components/todoList.js';
import TodoInput from './components/todoInput.js';
import todoFilter from './components/todoFilter.js';
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
  todoListEvent(node) {
    // 추상화 예정
    node.addEventListener('click', ({ target }) => {
      if (target.classList.contains('todoDeleteBtn')) {
        const todoId = target.getAttribute('data-todoId');
        const items = this.state.items.filter(
          item => item.id !== Number(todoId),
        );
        this.setState({ items: [...items] });
      }
      if (target.classList.contains('todoCheckInput')) {
        const todoId = target.getAttribute('id');
        const todoList = this.state.items.map(item => {
          if (item.id === Number(todoId))
            return { ...item, check: !item.check };
          return item;
        });
        this.setState({
          items: todoList,
        });
      }
    });
  }
  onMounted() {
    const { items } = this.state;
    new todoFilter('todoFilterNode', { items });
    new TodoInput('todoInputNode', {
      todoInputEvent: this.todoInputEvent.bind(this),
    });
    new Route('todoListNode', {
      items,
      todoListEvent: this.todoListEvent.bind(this),
    });
  }
  template() {
    return `
        <div style='display:flex; justify-content: center;'>
            <div>
                <h1>TodoList</h1>
                <div id='todoFilterNode'></div>
                <div id='todoInputNode'></div>
                <div id='todoListNode'></div>
            </div>
        </div>
        `;
  }
}