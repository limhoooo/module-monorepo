import Component from 'component-h';

export default class Mypage extends Component {
  constructor(target, route) {
    super(target);
    this.route = route;
  }
  template() {
    return `
            <h1>Welcome to the mypage Page</h1><br>name : ${this.route.params.name}<br>age : ${this.route.params.age}
            `;
  }
}
