/** @jsx h */
import { h, createElement } from '../core/parse.js';
import Component from 'component-h';

export default class todoFilter extends Component {
  template() {
    const items = this.props.items.filter(item => {
      if (this.url === '/checked') return item.check;
      if (this.url === '/unchecked') return !item.check;
      return item;
    });
    return createElement(
      <div>
        <button data-navigate="/">All</button>
        <button data-navigate="/checked">Checked</button>
        <button data-navigate="/unchecked">UnChecked</button>
      </div>,
    );
  }
}
