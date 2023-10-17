/** @jsx h */
import { h } from '../core/parse.js';
import Component from 'component-h';

export default function TodoList(target, props, route) {
  function onCreated() {
    this.url = route.path;
  }

  function template() {
    const { items } = props.store.getState();
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
  new Component({
    target,
    onCreated,
    template,
  });
}
