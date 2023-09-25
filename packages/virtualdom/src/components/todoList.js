/** @jsx h */
import { h, createElement } from '../core/parse.js';
import Component from 'component-h';

export default class TodoList extends Component {
  setup() {
    this.url = this.route.path;
  }
  onMounted() {
    this.props?.todoListEvent(this.target);
  }
  template() {
    const { props } = this;
    const items = props.items.filter(item => {
      if (this.url === '/checked') return item.check;
      if (this.url === '/unchecked') return !item.check;
      return item;
    });
    return createElement(
      <div>
        <div>Total Count : {String(items.length)}</div>
        {items.map(item => (
          <div>
            <input
              type="checkbox"
              class="todoCheckInput"
              id={item.id}
              checked={item.check}
            />
            <label for={item.id}> {item.todo} </label>
            <button class="todoDeleteBtn" data-todoId={item.id}>
              Delete
            </button>
          </div>
        ))}
      </div>,
    );
  }
}
