import { updateElement, changeJsx } from './core/parserElement.js';
export default class Component {
  constructor({ target, template, onCreated, onMounted }) {
    this.target = document.querySelector(target);
    this.state = null;
    this.arrState = [];
    this.template = template;
    this.onMounted = onMounted;
    this.onCreated = onCreated;
    this.onCreated?.();
    this.render();
  }

  // state 변경
  // batch update
  setState(newState) {
    this.arrState = [...this.arrState, { ...newState }];
    requestAnimationFrame(() => {
      this.executeArrState();
    });
  }
  executeArrState() {
    if (this.arrState.length === 0) return;
    this.arrState.forEach(state => (this.state = { ...this.state, ...state }));
    this.arrState = [];
    this.render();
  }
  // 랜더링
  render() {
    updateElement(
      this.target,
      this.template(),
      changeJsx(this.target).children[0],
    );
    this.onMounted?.();
  }
}
