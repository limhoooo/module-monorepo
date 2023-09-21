import { updateElement, changeJsx } from './core/parserElement.js';
export default class Component {
  constructor(target, props, route) {
    this.target = document.querySelector(target);
    this.state = null;
    this.arrState = [];
    this.props = props;
    this.route = route;
    this.setup();
    this.render();
  }
  template() {} // 랜더링할 마크업
  setup() {} // 랜더링 전 data setup
  onMounted() {} // 랜더링 이후 동작

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
    // console.log('render');
    updateElement(
      this.target,
      this.template(),
      changeJsx(this.target).children[0],
    );
    this.onMounted();
  }
}
