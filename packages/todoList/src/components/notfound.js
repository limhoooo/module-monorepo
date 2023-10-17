/** @jsx h */
import { h } from '../core/parse.js';
import Component from 'component-h';

export default function NotFound(target, props, route) {
  new Component({
    target,
    props,
    route,
    template,
  });
  function template() {
    return <div>NotFound</div>;
  }
}
