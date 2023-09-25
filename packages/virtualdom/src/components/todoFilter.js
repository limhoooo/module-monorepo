/** @jsx h */
import { h, createElement } from '../core/parse.js';
import Component from 'component-h';

export default class TodoFilter extends Component {
  template() {
    return (
      <div>
        <button class="all" data-navigate="/">
          All
        </button>
        <button data-navigate="/checked">Checked</button>
        <button data-navigate="/unchecked">UnChecked</button>
      </div>
    );
  }
}
