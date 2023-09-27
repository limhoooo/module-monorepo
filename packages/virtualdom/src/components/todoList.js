/** @jsx h */
import { h, createElement } from '../core/parse.js';
import Component from 'component-h';

export default class TodoList extends Component {
  setup() {
    this.url = this.route.path;
  }
  onMounted() {
    const { items } = this.props.store.getState();
    const deleteTodoBtn = document.querySelectorAll('.todoDeleteBtn');
    const changeTodoInput = document.querySelectorAll('.todoCheckInput');
    deleteTodoBtn.forEach(btn => {
      btn.onclick = ({ target }) => {
        const todoId = Number(target.getAttribute('data-todoId'));
        const todoList = items.filter(item => item.id !== todoId);
        this.props.store.dispatch({ type: 'DELETE_TODO', payload: todoList });
      };
    });
    changeTodoInput.forEach(input => {
      input.onclick = ({ target }) => {
        const todoId = Number(target.getAttribute('id'));
        const todoList = items.map(item => {
          if (item.id === todoId) return { ...item, check: !item.check };
          return item;
        });
        this.props.store.dispatch({ type: 'CHANGE_TODO', payload: todoList });
      };
    });
  }
  template() {
    const { items } = this.props.store.getState();
    const itemList = items.filter(item => {
      if (this.url === '/checked') return item.check;
      if (this.url === '/unchecked') return !item.check;
      return item;
    });
    return (
      <div>
        <div>Total Count : {String(itemList.length)}</div>
        {itemList.map(item => (
          <div key={item.id}>
            <input
              type="checkbox"
              class="todoCheckInput"
              id={item.id}
              {...(item.check ? { checked: true } : {})}
            />
            <label for={item.id}> {item.todo} </label>
            <button class="todoDeleteBtn" data-todoId={item.id}>
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  }
}
