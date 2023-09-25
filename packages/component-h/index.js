import { updateElement } from './core/updateElement.js';
export default class Component {
  constructor(target, props, route) {
    this.target = document.querySelector(target);
    this.state = null;
    this.props = props;
    this.route = route;
    this.setup();
    this.render();
  }
  template() {} // 랜더링할 마크업
  setup() {} // 랜더링 전 data setup
  onMounted() {} // 랜더링 이후 동작
  // state 변경
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
  // 랜더링
  render() {
    requestAnimationFrame(() => {
      const newNode = this.target.cloneNode(true);
      newNode.innerHTML = this.template().outerHTML;
      // DIFF알고리즘 적용
      const oldChildNodes = [...this.target.childNodes];
      const newChildNodes = [...newNode.childNodes];
      const max = Math.max(oldChildNodes.length, newChildNodes.length);
      for (let i = 0; i < max; i++) {
        updateElement(this.target, newChildNodes[i], oldChildNodes[i]);
      }

      // this.target.innerHTML = this.template().outerHTML;
      this.onMounted();
    });
  }
}
