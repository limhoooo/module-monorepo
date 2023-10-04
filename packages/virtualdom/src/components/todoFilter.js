/** @jsx h */
import { h } from '../core/parse.js';
import Component from 'component-h';

export default function TodoFilter(target, props, route) {
  function template() {
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
  new Component({
    target,
    template,
  });
}
