// 자식 컴포넌트에서 만든 HTML 랜더링기능
// state 변경시 재랜더링
// 컴포넌트 생성시 초기데이터 생성

export default class Component {
  constructor(target, props, route) {
    this.target = document.getElementById(target);
    this.state = null;
    this.props = props;
    this.route = route;
    this.setup();
    this.render();
  }
  template() {} // 랜더링할 마크업
  setup() {} // 랜더링 전 data setup
  setEvent() {} // 이벤트 추가
  onMounted() {} // 랜더링 이후 동작
  // state 변경
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
  // 랜더링
  render() {
    this.target.innerHTML = this.template();
    this.setEvent();
    this.onMounted();
  }
}
