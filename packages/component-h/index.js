// 자식 컴포넌트에서 만든 HTML 랜더링기능
// state 변경시 재랜더링
// 컴포넌트 생성시 초기데이터 생성

export default class Component {
  #target = null;
  constructor(target) {
    this.#target = target;
    this.state = null;
    this.setup();
  }
  template() {}
  setEvent() {}
  setup() {}
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
  // 랜더기능 (하위에 상속되서 하위 템플릿 랜더링)
  render() {
    const mainNode = document.createElement('main');
    mainNode.innerHTML = this.template();
    if (this.#target.firstChild) {
      this.#target.replaceChild(mainNode, this.#target.firstChild);
    } else {
      this.#target.appendChild(mainNode);
    }
    this.setEvent();
  }
}
