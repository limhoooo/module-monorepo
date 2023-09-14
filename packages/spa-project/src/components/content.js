import Component from 'component-h';

export default class Content extends Component {
  constructor(target, route) {
    super(target);
    this.route = route;
  }
  template() {
    return `
            <h1>Welcome to the Content Page</h1>
            `;
  }
}
