/** @jsx h */
import { h, createElement } from '../core/parse.js';
import Component from 'component-h';

export default class NotFound extends Component {
  constructor(target) {
    super(target);
    this.render();
  }
  template() {
    return createElement(<div>NotFound</div>);
  }
}
