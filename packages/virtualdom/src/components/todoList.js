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
    // console.log('template');
    const items = props.items.filter(item => {
      if (this.url === '/checked') return item.check;
      if (this.url === '/unchecked') return !item.check;
      return item;
    });
    return (
      <div>
        <div>Total Count : {String(items.length)}</div>
        {items.map(item => (
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
